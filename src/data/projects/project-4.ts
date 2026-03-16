import quintDashboard from "./project-1-images/quint_dashboard.png";
import quintScreens from "./project-1-images/quint_screens.png";
import quintArchitecture from "./project-1-images/quint_architecture.png";
import dashboardDesign from "./project-1-images/dashboard_design.png";
import geminiImage1 from "./project-1-images/Gemini_Generated_Image_ry4x5ry4x5ry4x5r.png";
import geminiImage2 from "./project-1-images/Gemini_Generated_Image_ry4x5ry4x5ry4x5r (2).png";
import geminiImage3 from "./project-1-images/Gemini_Generated_Image_ry4x5ry4x5ry4x5r (3).png";
import geminiImage4 from "./project-1-images/Gemini_Generated_Image_ry4x5ry4x5ry4x5r (4).png";

export const project4 = {
  id: 1,
  slug: "quint-ai-voice-summarizer",
  title: "Quint The AI Powered Voice Summarizer",
  category: "Product Management",
  shortDescription: "From Personal Project to Team Productivity Tool: How I built an AI voice summarizer that turned meeting chaos into clear action items.",
  publishDate: "2025-12-15",
  readTime: "8 min read",
  heroImage: geminiImage1,
  type: "internal" as const,

  sections: [
    {
      title: "The Breaking Point: Why I Created Quint",
      content: `
        It was 7:30 PM on a Wednesday when I realized I had a problem.

        I was still at my desk, frantically scrolling through the day's meeting notes, trying to piece together what I had committed to doing. Three back-to-back client calls, a team standup, and a product review meeting had left me with pages of scattered notes and a growing sense of anxiety.

        "Didn't I promise Sarah I'd send that proposal draft by tomorrow?" "Was I supposed to follow up with the engineering team about that bug, or were they going to update me?"

        This wasn't a new problem for me. Despite trying various note-taking apps, task managers, and even hiring a virtual assistant for a brief period, I kept running into the same fundamental issue: the gap between hearing something in a meeting and turning it into completed action was where things fell apart.

        That night, I sketched out what would eventually become Quint—a personal AI assistant that would not only transcribe my meetings but actively help me follow through on every commitment made.
      `,
      image: {
        url: geminiImage2,
        caption: "The moment of frustration that sparked Quint — staring at scattered notes after a long day of meetings."
      }
    },
    {
      title: "My Personal Pain Points",
      content: `
        Before writing a single line of code, I needed to be honest about my specific challenges:

        --> The Multi-Meeting Blur: By my third meeting of the day, details from the first meeting were already fading.

        --> Action Item Anxiety: I'd often wake up in the middle of the night remembering a task I'd forgotten to add to my to-do list.

        --> The Follow-Up Fatigue: Even when I captured action items, drafting all the follow-up emails and messages was draining my energy.

        --> Notification Overload: My existing task apps would either bombard me with reminders or be so easily dismissed that tasks would linger for weeks.

        The solution needed to address all of these issues—not just the transcription part that existing tools handled reasonably well.
      `
    },
    {
      title: "Building the Solution: My Weekend Project That Grew",
      content: `
        I started building Quint over a long weekend, with a simple goal: record my meetings and automatically extract action items into my to-do list.

        The first version was embarrassingly simple — a React frontend with a big "Record" button, the Web Speech API for real-time transcription, and a basic NLP library to identify sentences with action-oriented language.

        When I tested it in my Monday morning standup, the results were promising but flawed. It captured about 60% of the action items but missed context and created duplicate tasks.
      `,
      image: {
        url: dashboardDesign,
        caption: "The initial Quint dashboard — designed around simplicity and one-click recording."
      }
    },
    {
      title: "Phase 2: Adding Intelligence",
      content: `
        I realized that for Quint to truly solve my problem, it needed to understand meeting context better. I dove into improving the AI component to handle both explicit and implicit commitments.

        The simple keyword-matching approach quickly proved insufficient. I needed something that could understand implied tasks, not just explicit statements. After experimenting with several NLP approaches, I integrated a more sophisticated language model that could:

        --> Identify both explicit ("I'll send that report") and implicit ("That would be good to include in the documentation") commitments.

        --> Recognize who was assigned the task.

        --> Extract deadlines and priorities from contextual clues.
      `,
      image: {
        url: geminiImage3,
        caption: "Visualizing how Quint maps raw spoken language into structured, assignable action items."
      }
    },
    {
      title: "Phase 3: The Game-Changer — Draft Generation",
      content: `
        The breakthrough came when I added what I now call the "Draft Generator." I noticed that many of my action items required sending some form of communication—emails, Slack messages, or documentation updates.

        What if Quint could draft these for me?

        The first time this worked correctly was genuinely emotional. I had just finished a client call where I'd promised to send a project update. Within minutes of ending the call, Quint had:

        --> Added "Send project timeline update to Client X" to my action items.

        --> Generated a draft email with all the key points we'd discussed.

        --> Set a reminder to send it by the end of day.

        I made a few edits to the draft and sent it immediately—a task that would normally have taken me 30+ minutes was completed in less than 5.
      `,
      image: {
        url: quintScreens,
        caption: "Quint's action item view — each item comes pre-loaded with a generated email draft ready to send."
      }
    },
    {
      title: "From Personal Tool to Team Solution",
      content: `
        What started as a personal project to solve my own productivity challenges quickly caught the attention of my colleagues. During a team demo day, several product managers and project owners immediately asked if they could try Quint.

        "I've been looking for exactly this solution," our senior product owner said after seeing a demo. "Can you set it up for our team?"

        Within a month, Quint had gone from my personal productivity hack to a tool used by 15 product professionals across our organization. This organic adoption taught me something crucial: I wasn't alone in my struggle with meeting follow-through.
      `
    },
    {
      title: "The Technical Architecture Behind Quint",
      content: `
        As adoption grew beyond my personal use, I needed to formalize Quint's architecture and ensure it could scale reliably. The technical stack evolved into:

        Frontend:
        --> React 18: Utilizing the latest React features for a responsive, reactive UI.
        --> Ant Design: Providing a clean, professional component library.
        --> SCSS: For modular and maintainable styling.
        --> Dexie.js: A wrapper for IndexedDB, allowing local storage of recordings and transcripts.

        Core Logic & APIs:
        --> Web Speech API: For live, real-time speech-to-text conversion.
        --> MediaRecorder API: Handling audio capture and waveform visualization.
        --> WebSocket: Streaming AI responses back to the client instantly.
        --> Custom AI Service: Integrating language models for context-aware suggestions and email template generation.
      `,
      image: {
        url: quintArchitecture,
        caption: "Quint's full architecture — from raw audio input to structured AI summaries and action items."
      }
    },
    {
      title: "Product Metrics & Analysis",
      content: `
        As Quint expanded from personal use to a team tool, I started tracking key metrics to validate its effectiveness:

        --> Time-to-Value (TTV): Average of 27 seconds from "Stop Recording" to "Action Item Copied" — beating our goal of under 30 seconds.

        --> Draft Adoption Rate: 73% of AI-generated email drafts were actually sent with minor edits, against a goal of 50%.

        --> Retention: 82% of users were still recording 2+ meetings per week after 8 weeks.

        --> Productivity Impact: Users self-reported an average of 3.5 hours saved per week.

        The most striking metric came from our team survey: 89% of users reported feeling "significantly less stressed about missing action items" after adopting Quint.
      `,
      image: {
        url: quintDashboard,
        caption: "The Quint dashboard showing live metrics — action items captured, drafts generated, and follow-ups completed."
      }
    },
    {
      title: "The Technical Challenges I Faced",
      content: `
        Building Quint wasn't without its frustrations. Three major challenges tested my resolve:

        1. Audio Processing Reliability
        The Web Speech API was convenient but inconsistent across browsers. I ended up implementing a hybrid approach — using the Web Speech API for real-time visual feedback while simultaneously recording raw audio for processing through a more reliable transcription service after the meeting.

        2. Context Preservation
        Early versions would sometimes generate follow-up drafts that missed crucial context from earlier in the meeting. The solution was implementing a "conversation memory" system that tracked topics, participants, and decisions throughout the call.

        3. The Notification Problem
        Getting the notification system right was surprisingly difficult. I implemented "progressive persistence" — reminders that increase in frequency as the deadline approaches, with different channels based on task priority and a "snooze but don't forget" option that would temporarily hide but never delete a task.
      `
    },
    {
      title: "The 'Blank Page' Psychology",
      content: `
        One of the most interesting insights from our team's use of Quint came from observing how people interacted with the draft generation feature.

        I discovered that users don't hate writing; they hate starting. By having Quint generate a "Draft Email"—even if it's imperfect—users were 5x more likely to send the email because they just had to edit it, not write it from scratch.

        This psychological insight helped me refine the draft generation to focus less on perfect accuracy and more on providing a solid starting point that reduced the activation energy required to complete a task.
      `,
      image: {
        url: geminiImage4,
        caption: "The 'blank page' problem — and how Quint's draft generation eliminates it entirely."
      }
    },
    {
      title: "The Results: A Team Productivity Revolution",
      content: `
        After six months of team use, the impact of Quint has been profound:

        --> Nothing Falls Through the Cracks: Task completion rates increased from 76% to 94%.

        --> Faster Follow-Ups: The average time between meeting end and completing follow-up tasks dropped from 26 hours to 3.5 hours.

        --> More Present in Meetings: Team members reported being able to focus more on the conversation rather than frantically taking notes.

        --> Meeting Efficiency: Our meetings became shorter by an average of 12%, as less time was spent clarifying previous action items.

        The most unexpected benefit has been emotional: the reduction in anxiety knowing that Quint has everyone's back has improved overall team well-being and reduced the friction in collaborative work.
      `
    },
    {
      title: "Lessons Learned",
      content: `
        Building Quint taught me several valuable lessons about both product development and personal productivity:

        1. The Power of Solving Your Own Problems
        By building something specifically for my own workflow rather than trying to create a "one-size-fits-all" solution, I ended up with something far more effective than any commercial product I'd tried.

        2. The "Good Enough" Principle
        Early in development, I obsessed over transcription accuracy, aiming for 98%+ precision. But user testing revealed something surprising: users cared far more about speed and the quality of the summary than perfect transcription. As one user put it: "I don't need a perfect transcript. I need to know what I'm supposed to do next."

        3. The Completion Gap
        There's a crucial difference between knowing what needs to be done and actually doing it. Most productivity tools focus on the former while ignoring the friction in the latter. By generating drafts and providing persistent reminders, Quint bridges that gap.

        4. Technical Debt vs. User Feedback
        I faced a classic dilemma: rewrite the audio processing system or implement user-requested features. I chose to prioritize user-facing improvements first — it allowed us to validate the core value proposition before investing in infrastructure.
      `
    },
    {
      title: "What's Next for Quint",
      content: `
        Based on the success within our team and continued user feedback, the roadmap for Quint includes:

        --> Team Intelligence: Recognizing recurring action patterns and suggesting process improvements.

        --> Integration Ecosystem: Connecting with task management tools like Asana, Jira, and Monday.com.

        --> Meeting Analytics: Providing insights into meeting effectiveness and follow-through rates.

        --> Voice Command Mode: Adding the ability to create and manage tasks through voice commands while driving or walking.
      `
    }
  ],

  impact: [
    "Task completion rates increased from 76% to 94%",
    "Follow-up time dropped from 26 hours to 3.5 hours",
    "73% of AI-generated email drafts were sent by users",
    "82% user retention after 8 weeks",
    "Average 3.5 hours saved per user per week"
  ],

  technologies: ["React 18", "Ant Design", "SCSS", "Dexie.js", "Web Speech API", "MediaRecorder API", "WebSocket", "LLMs"],

  myRole: `
    As the sole builder and Product Manager, I was responsible for the entire product lifecycle — from identifying my own pain points and sketching the initial concept, through technical architecture, implementation, user testing, and scaling the tool from personal use to a team of 15 product professionals.
  `,

  testimonial: {
    quote: "Quint doesn't just save me time — it saves my attention. I can be fully present in meetings knowing that the details won't slip through the cracks.",
    author: "Product Manager",
    role: "Team Member",
  },
};