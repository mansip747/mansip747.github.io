export const project1 = {
    id: 1,
    slug: "ai-powered-learning-platform",
    title: "Quint The AI Powered Voice Summarizer",
    category: "Product Management",
    shortDescription: "Developed a voice-driven AI Tool that transcribes action items after summarizing spoken notes using speech recognition and LLMS",
    publishDate: "2025-12-15",
    readTime: "8 min read",
    heroImage: "/projects/learning-platform-hero.jpg",
    
    // Full project content
    overview: `
      We have all been there. You just finished a high-energy brainstorming session or a critical client call. The ideas were flowing, decisions were 
      made, and the path forward seemed clear.


      Then, the call ends.

      Suddenly, the momentum dies. You are left staring at a blank screen, trying to decipher your own scribbles. Who promised to send the Q3 report? 
      Did we decide on a budget? And wait—didn't I say I would draft that intro email to the new colleague?

      The truth is, the most valuable part of any meeting—the action items—is often the first thing to get lost in the noise.

      Enter Quint.

      Quint is a modern web application that bridges the gap between talking about work and doing the work. It is an intelligent voice summarizer that 
      doesn't just listen—it acts.
    `,
    
    challenge: `
      What is this WebApp Quint?

      At its core, Quint is an intelligent voice recording application. But unlike standard dictation tools that simply dump a wall of text onto 
      your screen, Quint understands context.

      It offers real-time transcription, AI-powered summarization, and most importantly automated action item extraction.

    `,
    
    solution: `
    Above: The Quint Dashboard. A clean, distraction-free interface where you can instantly start recording or upload existing transcript files (.txt or .vtt).
    As seen in the dashboard above, I tried focusing to prioritize simplicity. You can upload past transcripts or hit the Start button to begin recording immediately with visual feedback.

    The Workflow: How It Works
    We designed Quint to follow the natural flow of a conversation. It handles the heavy lifting in the background so you can stay focused on the discussion.
  
    
    Above: The Quint Architecture Flow. From raw audio input to structured AI summaries and action items.

      1. ) Capture: You start a recording. Quint uses the Web Speech API to provide live transcription as you speak. You see the words appear in real-time, 
      ensuring nothing is missed.
      2. ) Process: Once you hit stop, the audio is processed. If you are offline or want to keep data local, we utilize IndexedDB for secure local storage.
      3. ) Synthesize: This is where the magic happens. The system generates an AI summary via WebSocket streaming, breaking down the conversation into 
      Context, Next Steps, and Timelines.
      4. ) Action: Finally, Quint extracts specific tasks and moves them to the "Action Items" section.


      The Killer Feature: From Audio to "Sent"
      Most AI summarizers stop at a bulleted list. Quint goes one step further with smart follow-up generation.

    
      Above: The detailed view. On the left, the raw transcript for verification. On the right, the AI Summary and specific Action Items. Also shown: 
      The mobile view for recording on the go.

      This split-screen interface allows you to verify the "Full Transcript" against the "AI Summary" to ensure 100% accuracy.



      Frontend - React 18: We utilize the latest React features for a snappy, reactive UI.
      Ant Design: Provides a clean, professional component library that makes the dashboard look great.
      SCSS: For modular and maintainable styling.
      Dexie.js: This is crucial. It acts as a wrapper for IndexedDB, allowing us to save your recordings and transcripts locally in your browser, 
      enabling 
      offline access and faster load times.


      Core Logic & APIs

      Web Speech API: Used for the live, real-time speech-to-text conversion that you see while recording.
      MediaRecorder API: Handles the actual audio capture and waveform visualization.
      WebSocket: Used for streaming the AI responses back to the client instantly, so you don't have to wait for a "loading" spinner to finish before 
      seeing 
      your summary.
      Custom AI Service: Integrates LLMs to provide context-aware suggestions and email template generation.


      Product Metrics & Analysis (Hypothetical)

      If I were tracking success metrics for Quint today, here is what I would look at to validate product-market fit:

      Time-to-Value (TTV):
          Metric: Time from "Stop Recording" to "Action Item Copied."
          Goal: < 30 seconds. The AI needs to be faster than me typing it myself.
      Adoption Rate of "Drafts":
          Metric: % of generated email drafts that are actually copied/exported vs. discarded.
          Insight: High copy rate = The AI understands context and tone well.
      Retention:
           Metric: Weekly Active Users (WAU) who record >2 meetings.

    Personal Insights & Trade-offs
    Building Quint taught me a few hard lessons about product development:
    1. The "Real-Time" Trade-off
        Challenge: The Web Speech API is fast but can be inaccurate with accents or background noise. Whisper (OpenAI) is highly accurate but slower 
        and costs 
        money.
        My Solution: I used a hybrid approach. Use Web Speech for the "live" visual feedback so the user knows it's working, but use the AI model for 
        the final 
        summarization to ensure accuracy.
    2. Complexity of Audio State
        Handling browser permissions for microphones and managing "Pause/Resume" states without losing audio chunks was surprisingly complex. It gave me 
        a new 
        appreciation for apps like Zoom or Spotify.
    3. The "Blank Page" Psychology
        I learned that users don't hate writing; they hate starting. By having Quint generate a "Draft Email"—even if it's imperfect—users are 5x more 
        likely to send the email because they just have to edit it, not write it from scratch.
    `,
    
    impact: [
      "How I Use It Daily",
       "Now, my workflow is simple:",
        "During the Standup: I hit record on Quint. I don't type a single note. I focus entirely on my team's blockers",
        "Post-Meeting: I spend 2 minutes reviewing the Action Items tab",
        "The Magic Moment: Quint usually says, Drafted email to Stakeholders re: Sprint Delay I copy it, paste it into Gmail, make one tweak, and", 
        "hit send.",
        "I’ve saved about ~45 minutes of admin work every single day."
    ],

    images: [
      {
        url: "/projects/learning-platform-1.jpg",
        caption: "Dashboard overview showing personalized learning paths",
      },
      {
        url: "/projects/learning-platform-2.jpg",
        caption: "AI-powered content recommendations",
      },
      {
        url: "/projects/learning-platform-3.jpg",
        caption: "Student progress analytics",
      },
    ],
    
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    
    myRole: `
      As Product Manager, I led cross-functional teams of 12 people including engineers, 
      designers, and data scientists. I was responsible for product strategy, roadmap planning, 
      stakeholder management, and ensuring successful delivery.
    `,
    
    testimonial: {
      quote: "Mansi's strategic vision and execution transformed our product.",
      author: "Jane Doe",
      role: "VP of Product",
    },
  };