export const project2 = {
  id: 2,
  slug: "fintech-mobile-banking",
  title: "FinEd",
  category: "Product Design",
  shortDescription: "From Concept to Code: How We Built FinEd, the Future of Financial Literacy",
  publishDate: "2025-01-20",
  readTime: "6 min read",
  heroImage: "/projects/fined_portfolio_hero.jpg",
  
  // Different sections for this project
  sections: [
    {
      title: "Description",
      content: `
     They say money makes the world go round, but for most people, the mechanics of that rotation are a complete mystery. When I stepped into the role of Product Manager at FinEd, the mission was clear but daunting: take the intimidation out of finance and build a platform that felt less like a textbook and more like a mentor.

     This wasn't just about building an app; it was about architecting an ecosystem. Here is how we took FinEd from a blank Figma canvas to a fully realized product.
      `,
      image: {
        url: "/projects/fintech-before.jpg",
        caption: "The old interface: cluttered and confusing"
      }
    },
    {
      title: "The Foundation: Market Research and Strategy",
      content: `
        Before a single line of code was written, I spent weeks immersed in the competitive landscape. My goal was to identify the "White Space"—the gaps where existing giants like Mint, Bloom, and Zogo were falling short.

        The Competitive Deep Dive: I analyzed the "Unique Value Propositions" of our peers. While Bloom focused heavily on custodial investing for teens and Zogo excelled at gamification, they both lacked a comprehensive, AI-driven educational path.

        SWOT Analysis: I drafted a detailed SWOT matrix to anchor our strategy.

        --> Strengths to build on: Integrated AI chatbots for 24/7 assistance and a comprehensive learning path.

        --> Threats to mitigate: High market competition and the critical need for data security/compliance.
      
        This research formed the backbone of my Product Requirements Document (PRD). I didn't just list features; I told the story of our user, "Sophia," a beginner overwhelmed by financial jargon who needed a structured, gamified way to gain confidence.
      `
    },
    {
      title: "Charting the Course: Roadmapping and Prioritization",
      content: `
        As the PM, I was the keeper of the "Big Picture." I developed a high-level roadmap that balanced long-term vision with immediate technical feasibility.

        To keep the engine running, I managed the Product Backlog with a "value-vs-effort" mindset. This wasn't a solo act; it involved:

        --> Weekly Sprint Planning: I led sessions to break down high-level epics into manageable stories.

        --> Backlog Refinement: We didn't just add tasks; we groomed them. If a feature didn't directly contribute to the "Learning Vibe" or user retention, it was deprioritized.

        --> Prioritization Frameworks: Using RICE (Reach, Impact, Confidence, Effort), I ensured the engineering team was always working on the highest-leverage tasks.
      `,
      image: {
        url: "/src/data/projects/project-2-images/project-2.png",
        caption: "The new interface: clean, fast, focused"
      }
    },
    {
      title: "User Flow and Wireframing",
      content: `
        I worked hand-in-hand with our UI/UX designers in Figma to translate the PRD into a living experience. We didn't just want a pretty interface; we wanted an intuitive journey.

        --> Workflow Mapping: I mapped out the entire user logic—from the initial "Discover Your Learning Vibe" quiz to the intricate "Resume Learning" logic for returning users. We designed a system where "Lives" are lost for wrong answers, and "XP" is gained for success, mirroring the dopamine loops of successful gaming apps.

        --> Iterative Prototyping: We went through several versions of the "Financial News" and "Home" screens. We debated everything from the placement of the "FinNews" icon to the "See All" functionality, ensuring that even complex stock analysis articles felt digestible.
      `
    },
    {
      title: "Engineering and AI Integration",
      content: `
        This is where the magic (and the heavy lifting) happened. I bridged the gap between design and the technical stack, working closely with our backend and frontend engineers.

        --> AWS Bedrock & AI: To truly disrupt the space, we integrated AWS Bedrock services. We used generative AI to summarize dense financial news into "Top Highlights" tailored to the user’s level (Beginner vs. Expert).

        --> Feedback Loops: We built a dedicated "Feedback" section within the news detail pages. If an AI-generated summary wasn't quite right, users could flag it, allowing us to continuously fine-tune our models via the backend.

        --> Technical Syncs: My role involved daily stand-ups to unblock engineers, whether it was clarifying a database field for Notion integration or discussing the API latency of our news streams.
      `
    },
    {
      title: "Launching the Learning Vibe",
      content: `
        The result of this cross-functional symphony was a product that feels personal. When a user opens FinEd today, they don't see a wall of numbers. They see:

        --> A personalized dashboard showing their progress.

        --> Interactive Modules that teach budgeting through hands-on activities.

        --> A Customer Forum (The "Hub") where the community discusses everything from the benefits of monthly budgeting to market moves.
      `
    },
    {
      title: "Reflections: What I Learned",
      content: `
        Building FinEd was a masterclass in balance. As a PM, you are the diplomat between the "Ideal World" of design and the "Real World" of engineering constraints. You have to be empathetic enough to understand the user's fear of debt, yet analytical enough to manage a sprint velocity chart.

        We didn't just launch an app; we launched a way for people to take control of their futures. And seeing "Sophia" go from 0% to 100% on her "Introduction to Financial Literacy" course? That's the real win.

      `
    }
  ],
  
  technologies: ["React Native", "TypeScript", "Redux", "Figma", "Firebase"],
  
  myRole: `
    Led product strategy and UX redesign for a team of 20. Conducted user research, created wireframes, 
    worked closely with engineers on implementation, and analyzed post-launch metrics.
  `,
};