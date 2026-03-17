import b1Image from "./blog-1-images/b1_image.png";
import b2Image from "./blog-2-images/b2_image.png";
import b3Image from "./blog-3-images/b3_image.png";
import b4Image from "./blog-4-images/b4_image.png";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  type: "internal" | "external";
  externalUrl?: string;
  content?: string;
}

export const allBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Building My Product Management Toolkit: Essential Skills I'm Developing First",
    excerpt: "Like many new product managers, I've discovered that this role requires a diverse set of skills that no single course or bootcamp fully prepares you for.",
    category: "Product Management",
    date: "Feb 28, 2024",
    readTime: "6 min read",
    image: b1Image,
    type: "internal",
    content: `
      <p>Last week, I found myself staring at a blank Figma file, trying to map out user flows for a feature I was conceptualizing. Two hours later, my screen was filled with a tangled web of boxes and arrows that looked more like a plate of spaghetti than a coherent user journey. That's when it hit me – I was building the plane while trying to fly it.</p>

      <p>Like many new product managers, I've discovered that this role requires a diverse set of skills that no single course or bootcamp fully prepares you for. It's like being handed a toolbox with missing tools and having to decide which ones to acquire first.</p>

      <h2>The PM Skills Paradox</h2>

      <p>A recent LinkedIn poll by Gibson Biddle, former VP of Product at Netflix, caught my attention. When he asked over 2,000 product leaders which skill was most critical for junior PMs to develop first, the results were revealing:</p>

      <ul>
        <li>42% said user research and customer empathy</li>
        <li>28% voted for communication and stakeholder management</li>
        <li>18% chose data analysis and interpretation</li>
        <li>12% selected technical understanding</li>
      </ul>

      <p>What struck me wasn't just the results, but the comments section. Seasoned PMs debated passionately about which skills should come first – proof that even the experts don't agree on a single "right" path.</p>

      <p>So how do you decide where to focus when everything seems important? Here's my approach to building my PM toolkit, one essential skill at a time.</p>

      <h2>Starting with Empathy: The Foundation of Everything</h2>

      <p>I've made customer empathy my first priority, and here's why: every other PM skill builds upon understanding user needs.</p>

      <p>When I joined my current team, I inherited a feature with disappointing adoption rates. Rather than immediately brainstorming improvements, I scheduled five user interviews. The insights were eye-opening. Users weren't using the feature not because it was poorly designed, but because it solved a problem they didn't actually have.</p>

      <p><strong>How I'm developing this skill:</strong></p>
      <ul>
        <li>Conducting at least two user interviews weekly</li>
        <li>Shadowing customer support calls once a month</li>
        <li>Using products similar to ours and documenting my experience</li>
        <li>Creating empathy maps for our key user personas</li>
      </ul>

      <p><em>Small win: After implementing changes based on those initial interviews, feature adoption increased by 18% in just three weeks.</em></p>

      <h2>Communication: Translating Vision into Action</h2>

      <p>A brilliant product idea is worthless if you can't articulate it clearly to designers, engineers, and stakeholders. I learned this lesson the hard way when my vague requirements led to a feature that missed the mark entirely.</p>

      <p>I recently came across a study from the Project Management Institute showing that ineffective communication is the primary contributor to project failure one-third of the time. For product managers, who sit at the intersection of multiple teams, this statistic is particularly sobering.</p>

      <p><strong>How I'm developing this skill:</strong></p>
      <ul>
        <li>Taking a "less is more" approach to documentation</li>
        <li>Creating visual aids whenever possible</li>
        <li>Practicing explaining complex concepts to non-technical friends</li>
        <li>Recording myself in mock presentations to identify verbal tics and unclear explanations</li>
      </ul>

      <p><em>Small win: Our lead developer recently commented that my user stories have become much clearer, reducing back-and-forth questions by about 40%.</em></p>

      <h2>Prioritization: Making Peace with Saying No</h2>

      <p>"We should add this feature!" "Can we also include this?" "What about this capability?"</p>

      <p>The stream of requests never ends, and early on, I wanted to say yes to everything. I quickly learned that saying yes to everything means saying no to focus.</p>

      <p>I was particularly inspired by a story from Spotify's product team. When building their Discover Weekly feature, they ruthlessly prioritized personalization quality over additional bells and whistles. The result? A beloved feature that drove significant user engagement.</p>

      <p><strong>How I'm developing this skill:</strong></p>
      <ul>
        <li>Using a simple ICE framework (Impact, Confidence, Ease) for feature prioritization</li>
        <li>Setting clear objectives for each sprint and evaluating requests against those objectives</li>
        <li>Practicing saying "not right now" instead of "no" to keep doors open</li>
        <li>Documenting declined ideas for future consideration</li>
      </ul>

      <p><em>Small win: Our last release had fewer features than previous ones but higher usage rates and better customer feedback.</em></p>

      <h2>Data Literacy: Making Friends with Numbers</h2>

      <p>I'll admit it – I was initially intimidated by data analysis. My background isn't technical, and the thought of SQL queries and statistical significance made me break into a cold sweat.</p>

      <p>But as management guru Peter Drucker famously said, "What gets measured gets managed." I couldn't ignore this critical skill.</p>

      <p><strong>How I'm developing this skill:</strong></p>
      <ul>
        <li>Taking an online SQL course (with lots of practice exercises)</li>
        <li>Setting up simple A/B tests and analyzing the results</li>
        <li>Creating a personal dashboard of key metrics I check daily</li>
        <li>Partnering with our data analyst to understand their approach</li>
      </ul>

      <p><em>Small win: I recently identified a drop-off point in our onboarding flow using our analytics tool, leading to a simple fix that improved completion rates by 12%.</em></p>

      <h2>Technical Understanding: Speaking the Language</h2>

      <p>While I don't need to code, I do need to understand how things work under the hood. This became painfully obvious during a sprint planning meeting where I proposed a feature change that would have required rebuilding our entire authentication system.</p>

      <p><strong>How I'm developing this skill:</strong></p>
      <ul>
        <li>Taking a basic web development course to understand frontend/backend concepts</li>
        <li>Having lunch with engineers to learn about our tech stack in bite-sized pieces</li>
        <li>Reading technical documentation for APIs we integrate with</li>
        <li>Creating simple wireframes to communicate my ideas visually</li>
      </ul>

      <p><em>Small win: I can now have more meaningful conversations with our engineering team and better understand the implications of product decisions.</em></p>

      <h2>The Learning Never Stops</h2>

      <p>What I'm discovering is that building a PM toolkit isn't a linear process with a defined endpoint. It's more like tending a garden – some skills need immediate attention, others can develop more slowly, and there's always more to nurture.</p>

      <p>I keep a "skill journal" where I track situations that made me feel unprepared and note which skills would have helped. This practice helps me identify gaps and adjust my learning priorities accordingly.</p>

      <p>As Marty Cagan writes in "Inspired," product management is "hard to master because it's about finding the right product, which is a combination of art and science." The science part can be learned through courses and frameworks, but the art comes through practice, failure, and continuous improvement.</p>

      <p>I'd love to hear from fellow product managers – which skills did you prioritize early in your career? What do you wish you'd focused on sooner?</p>

      <p><em>This post is part of my journey documenting the path from new product manager to confident product leader.</em></p>
    `,
  },
  {
    id: 2,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: b2Image,
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
    `,
  },
  {
    id: 3,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: b3Image,
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
    `,
  },
  {
    id: 4,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: b4Image,
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
    `,
  },
];

export const getBlogById = (id: number) => {
  return allBlogs.find(blog => blog.id === id);
};