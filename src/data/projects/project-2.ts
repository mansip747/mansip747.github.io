import heroImage from "./project-2-images/finedhero.png";
import mobileScreens from "./project-2-images/mobilescreens.png";
import Workflow from "./project-2-images/Workflow.png";
import marketresearch from "./project-2-images/market research.png";
import SWOT from "./project-2-images/SWOT.png";
import project2Img from "./project-2-images/project-2.png";
import newspage from "./project-2-images/newspage.png";
import wireframe from "./project-2-images/wireframe.png";

export const project2 = {
  id: 2,
  slug: "fintech-mobile-banking",
  title: "FinEd",
  category: "Product Design",
  shortDescription: "How We Transformed Financial Literacy for Gen Z — a 10-month journey from research to a gamified, AI-powered app that makes finance finally click.",
  publishDate: "2025-01-20",
  readTime: "8 min read",
  heroImage: heroImage,
  type: "internal" as const,

  sections: [
    {
      title: "The Financial Education Crisis I Couldn't Ignore",
      content: `
        When I first reviewed the statistics on financial literacy in America, one number stopped me cold: only 16% of Americans aged 18-26 feel optimistic about their financial future. As a product manager passionate about education and empowerment, this wasn't just a market opportunity — it was a societal problem that needed solving.

        The data painted a stark picture. Americans lost an estimated $388 billion in 2023 due to financial illiteracy. Gen Z and Millennials showed the lowest financial literacy rates among all generations — 38% and 45% respectively. Meanwhile, only 26 states required students to take standalone personal finance courses to graduate high school.

        The problem wasn't a lack of financial information — it was how that information was presented. Traditional resources were formal, complex, and frankly, boring. As one college student told me during our initial interviews: "I know I should learn this stuff, but every time I try, I feel like I'm reading a textbook from the 1980s."

        That's when the vision for FinEd was born: a gamified, AI-powered financial education app designed to make financial literacy engaging, personalized, and actually enjoyable.
      `,
      image: {
        url: mobileScreens,
        caption: "FinEd's mobile experience — making financial education feel like something you actually want to open."
      }
    },
    {
      title: "Month 1–2: Deep Research and Team Assembly",
      content: `
        My first challenge was building the right team. I needed diverse perspectives and specialized skills across education, finance, UI/UX design, AI/ML, and development. After careful recruitment, I assembled a core team of 7 members, with additional support from 8 contractors who would join at strategic points in our development cycle.

        With the team in place, we dove into comprehensive research:

        --> Market Analysis: We studied the $11.8 billion EdTech market (growing at 9.98% CAGR) to identify gaps in financial education products.

        --> Competitive Analysis: We dissected strengths and weaknesses of existing solutions like Bloom, Zogo, Mint, and Khan Academy.

        --> User Research: We conducted 37 interviews and surveyed 215 young adults about their financial knowledge, pain points, and learning preferences.

        One interview particularly stuck with me. Sarah, a 24-year-old graphic designer, confessed: "I have $32,000 in student loans, but I don't even understand how interest works. I'm too embarrassed to ask anyone, so I just make the minimum payments and hope for the best."

        Stories like Sarah's reinforced our mission and helped shape our core product principles.
      `,
      image: {
        url: marketresearch,
        caption: "Competitive landscape analysis — mapping the white space between Bloom, Zogo, Mint, and Khan Academy."
      }
    },
    {
      title: "Month 3: Strategy Development and SWOT Analysis",
      content: `
        I facilitated a series of workshops with stakeholders and team members to define our strategic direction.

        Strengths to build on:
        --> AI-driven personalization capabilities.
        --> Gamification expertise within our team.
        --> Research-backed learning methodologies.

        Weaknesses to address:
        --> Initial learning curve for users unfamiliar with gamified education.
        --> Challenges in maintaining sustained engagement.
        --> Limited content library at launch compared to established competitors.

        Opportunities ahead:
        --> Partnerships with financial institutions.
        --> Global market expansion potential.
        --> Growing regulatory push for financial education.

        Threats to mitigate:
        --> High competition (40–80% market saturation in certain segments).
        --> Privacy concerns with financial data.
        --> Rapidly evolving financial technologies requiring constant updates.

        Based on these insights, we crafted our unique value proposition: personalized, gamified financial education that adapts to individual learning styles and knowledge levels, with real-world application through AI-powered tools.
      `,
      image: {
        url: SWOT,
        caption: "SWOT matrix that anchored our product strategy and defined our competitive positioning."
      }
    },
    {
      title: "Month 4–5: Design and Prototyping",
      content: `
        Our design phase was guided by a simple mantra: "Make it intuitive, make it engaging, make it impactful."

        We created detailed user flows and sitemaps to ensure a logical structure. The app would feature five core sections:

        --> Personalized Dashboard
        --> Learning Pathways
        --> Challenge Center
        --> Community Forum
        --> AI Tutor

        The visual design incorporated blue and green as primary colors to evoke trust and growth. Early prototyping revealed a critical insight: users wanted bite-sized content they could consume in 5–10 minute sessions. This led to a complete restructuring of our learning modules, breaking them into micro-lessons that could be completed during a coffee break or bus ride.
      `,
      image: {
        url: wireframe,
        caption: "Early wireframes showing the five core sections and the micro-lesson structure."
      }
    },
    {
      title: "Month 6–7: Development Challenges and Solutions",
      content: `
        As development began, we hit our first major roadblock. The AI recommendation engine — designed to personalize learning paths based on user behavior — was producing inconsistent results during testing. Users with similar profiles were receiving wildly different content recommendations.

        I pulled together a task force of our ML engineer, data scientist, and UX researcher to diagnose the problem. After three intense days of analysis, we discovered the issue: our algorithm was overweighting early user interactions and not properly adjusting as users progressed.

        The solution required a complete recalibration of our weighting system and the introduction of a "confidence score" that would increase as the system gathered more user data. This delayed our timeline by two weeks but ultimately resulted in a far more accurate recommendation engine.

        Another challenge emerged when usability testing revealed that users were confused by our gamification elements. Rather than simplifying the system, we created an interactive onboarding tutorial that explained the gamification elements in context. This "learn by doing" approach increased comprehension of the gamification system by 78% in subsequent testing.
      `,
      image: {
        url: Workflow,
        caption: "The product roadmap and sprint workflow that kept a 15-person cross-functional team aligned."
      }
    },
    {
      title: "Month 8: The Financial News Feed Innovation",
      content: `
        Our research showed that users struggled to connect abstract financial concepts to real-world events. To bridge this gap, I championed the development of a personalized financial news feed — a feature not initially in our roadmap.

        This required convincing stakeholders to allocate additional resources and extend our timeline. I presented data showing that contextual learning improved knowledge retention by 40% and demonstrated how this feature would differentiate us from competitors.

        The feature was approved, and the results exceeded expectations:

        --> 2.5x more time spent in-app by users who received personalized news.
        --> 40% increase in daily logins.
        --> Users who engaged with news content were 3x more likely to complete related learning modules.
      `,
      image: {
        url: newspage,
        caption: "The personalized financial news feed — connecting abstract concepts to real-world events in real time."
      }
    },
    {
      title: "Month 9: Cross-Functional Collaboration and Beta Testing",
      content: `
        As we approached our beta launch, coordinating work across our now 15-person team (including contractors) became increasingly complex. I implemented a modified Agile framework with twice-weekly synchronization meetings and a shared project dashboard that provided real-time visibility into each component's status.

        Our beta testing phase involved 150 users across diverse demographics. Their feedback led to several critical improvements:

        --> Simplifying the AI Tutor interface after 62% of users reported confusion with how to ask effective questions.

        --> Adding "quick win" challenges that could be completed in under 2 minutes after noticing high dropout rates on longer activities.

        --> Implementing a "financial health score" that gave users a tangible measure of their progress.

        One particularly valuable insight came from our accessibility testing. A user with ADHD noted that our gamification elements could be overwhelming with too many visual stimuli on one screen. This led us to create a "focus mode" option that reduced visual clutter while maintaining core functionality.
      `
    },
    {
      title: "Month 10: Launch and Early Results",
      content: `
        After 10 months of research, design, development, testing, and refinement, FinEd launched on iOS and web platforms in April 2024.

        Early metrics exceeded our projections:

        --> 60% engagement lift via gamification features.
        --> 40% increase in daily logins.
        --> 2.5x longer time-on-app for users engaging with news content.
        --> 82% of users reported feeling "more confident" about financial decisions after just two weeks.
      `,
      image: {
        url: project2Img,
        caption: "FinEd live — the full product experience from onboarding to personalized learning pathways."
      }
    },
    {
      title: "Key Features That Made the Difference",
      content: `
        --> Adaptive Learning Paths: Our ML-driven personalization engine creates unique learning journeys based on knowledge level, learning style, and financial goals.

        --> Gamification Engine: XP points, streaks, and leaderboards transform financial education from a chore into a challenge — 73% of users cited these elements as a primary reason for returning to the app.

        --> Financial News Feed: Curated, literacy-tailored content connects abstract concepts to real-world events, significantly improving knowledge application.

        --> AI Chat Tutor: On-demand financial help that answers questions in plain language, eliminating the embarrassment factor that prevents many from seeking financial advice.

        --> Freemium Business Model: Basic financial education is free, while advanced tools and personalized coaching are available for $9.99/month — ensuring accessibility while creating a sustainable revenue stream.
      `
    },
    {
      title: "Lessons Learned: What I'd Do Differently",
      content: `
        1. Start with a smaller scope
        We initially tried to cover too many financial topics, which stretched our content team thin. A more focused approach with gradual expansion would have been more efficient.

        2. Invest more in onboarding
        Despite our efforts, we still saw a 23% drop-off during the first-time user experience. A more robust onboarding process with clearer value demonstration would have improved retention.

        3. Build the news feed earlier
        This feature became central to our value proposition, but adding it late in development caused integration challenges that could have been avoided.

        4. Implement more robust A/B testing infrastructure
        We had to make several design decisions based on limited data. A more comprehensive testing framework from the start would have provided clearer direction.

        5. Develop a stronger content refresh strategy
        Financial information changes rapidly, and we underestimated the resources needed to keep content current and relevant.
      `
    },
    {
      title: "Reflections: What I Learned as a PM",
      content: `
        Building FinEd was a masterclass in balance. As a PM, you are the diplomat between the "Ideal World" of design and the "Real World" of engineering constraints. You have to be empathetic enough to understand the user's fear of debt, yet analytical enough to manage a sprint velocity chart.

        The financial literacy crisis won't be solved by any single app or initiative. But by making financial education more engaging, accessible, and personalized, we're helping young adults build the knowledge and confidence they need to take control of their financial futures.

        We didn't just launch an app — we launched a way for people to take control of their futures. And seeing "Sophia" go from 0% to 100% on her "Introduction to Financial Literacy" course? That's the real win.
      `
    }
  ],

  impact: [
    "60% engagement lift via gamification features",
    "40% increase in daily logins post-launch",
    "2.5x longer time-on-app with personalized news",
    "82% of users felt more confident about finances after 2 weeks",
    "78% improvement in gamification comprehension after onboarding redesign"
  ],

  technologies: ["React Native", "TypeScript", "Redux", "Figma", "Firebase", "AWS Bedrock", "AI/ML"],

  myRole: `
    Led end-to-end product strategy for a cross-functional team of 15. Spearheaded market research across 215 users, facilitated SWOT workshops, owned the product roadmap, managed sprint planning using RICE prioritization, and drove the AI news feed feature from concept to launch. Bridged design, engineering, and stakeholder communication throughout the full 10-month development cycle.
  `,

  testimonial: {
    quote: "I know I should learn this stuff, but every time I try, I feel like I'm reading a textbook from the 1980s. FinEd finally changed that.",
    author: "Sarah, 24",
    role: "Beta User & Graphic Designer",
  },
};