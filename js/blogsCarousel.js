// /js/blogsCarousel.js
// Renders a 3-up carousel from /data/blogs.js,
// with arrows and an overlay iframe viewer.

import { blogs } from "../data/blogs.js";

export function initblogsCarousel({ mountId = "blogs-carousel" } = {}) {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  mount.classList.add("blogs-carousel");

  // --- Template: arrows + viewport + track ---
  mount.innerHTML = `
    <button class="pc-arrow pc-arrow--left" aria-label="Previous blogs" type="button">‹</button>
    <div class="pc-viewport" aria-live="polite">
      <ul class="pc-track" role="list"></ul>
    </div>
    <button class="pc-arrow pc-arrow--right" aria-label="Next blogs" type="button">›</button>

    <div class="pc-overlay" data-overlay hidden>
      <div class="pc-overlay__backdrop" data-overlay-backdrop></div>
      <div class="pc-overlay__content" role="dialog" aria-modal="true" aria-label="Project preview">
        <button class="pc-overlay__close" type="button" aria-label="Close">✕</button>
        <iframe class="pc-overlay__iframe" title="Project" loading="lazy"></iframe>
      </div>
    </div>
  `;

  const track = mount.querySelector(".pc-track");
  const btnPrev = mount.querySelector(".pc-arrow--left");
  const btnNext = mount.querySelector(".pc-arrow--right");

  // --- Build slides from data ---
  blogs.forEach((p) => {
    const li = document.createElement("li");
    li.className = "pc-card";
    li.innerHTML = `
      <article class="box" data-id="${p.id}">
        <img draggable="false" src="${p.image}" alt="${p.title}" class="pc-card__img" />
        <div class="content">
          <div class="tag"><h3>${p.title}</h3></div>
          <div class="desc">
            <p>${p.description}</p>
          </div>
        </div>
      </article>
    `;
    track.appendChild(li);
  });

  // --- Carousel state ---
  let index = 0;
  const total = blogs.length;

  // Get number of visible cards based on viewport
  function getPerView() {
    const width = window.innerWidth;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    return 4;
  }

  function update() {
    const perView = getPerView();
    const cards = mount.querySelectorAll(".pc-card");

    if (cards.length === 0) return;

    // Dynamically set card width based on perView
    const gap = parseFloat(getComputedStyle(track).gap || 0);
    const containerWidth = track.parentElement.getBoundingClientRect().width;
    const cardWidth = (containerWidth - gap * (perView - 1)) / perView;

    // Apply the calculated width to each card
    cards.forEach((card) => {
      card.style.flex = `0 0 ${cardWidth}px`;
    });

    // Calculate offset for sliding
    const offset = index * (cardWidth + gap);
    track.style.transform = `translateX(${-offset}px)`;

    // disable/enable arrows at edges
    btnPrev.disabled = index <= 0;
    btnNext.disabled = index >= Math.max(0, total - perView);
  }

  btnPrev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  btnNext.addEventListener("click", () => {
    const perView = getPerView();
    if (index < total - perView) {
      index++;
      update();
    }
  });

  // Keyboard support
  mount.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      btnNext.click();
    } else if (e.key === "ArrowLeft") {
      btnPrev.click();
    }
  });

  // Resize recalculation
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Reset to first slide on resize to avoid positioning issues
      index = 0;
      update();
    }, 150);
  });

  // --- Overlay logic ---
  const overlay = mount.querySelector("[data-overlay]");
  const overlayBackdrop = mount.querySelector("[data-overlay-backdrop]");
  const overlayClose = mount.querySelector(".pc-overlay__close");
  const overlayIframe = mount.querySelector(".pc-overlay__iframe");

  function openOverlay(url) {
    if (!url || url === "#") return;
    overlayIframe.src = url;
    overlay.hidden = false;
    document.documentElement.classList.add("pc-no-scroll");
  }

  function closeOverlay() {
    overlay.hidden = true;
    overlayIframe.src = "about:blank";
    document.documentElement.classList.remove("pc-no-scroll");
  }

  overlayBackdrop.addEventListener("click", closeOverlay);
  overlayClose.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeOverlay();
  });

  // Click anywhere on the card opens the overlay (uses 'view' link)
  track.addEventListener("click", (e) => {
    const card = e.target.closest(".box");
    if (!card) return;

    const viewLink = card
      .querySelector(".btns a[href]:first-child")
      ?.getAttribute("href");
    if (viewLink) {
      openOverlay(viewLink);
    }
  });

  // Initial paint - wait a bit for images/layout
  setTimeout(update, 100);
}
