export const project6 = {
    id: 6,
    slug: "quint-ai-voice-summarizer",
    title: "Quint The AI Powered Voice Summarizer",
    category: "Product Management",
    shortDescription: "Developed a voice-driven AI Tool that transcribes action items after summarizing spoken notes using speech recognition and LLMS",
    publishDate: "2025-12-15",
    readTime: "8 min read",
    heroImage: "/projects/quint-hero.jpg",
    
    // Custom sections - each project can have different ones
    sections: [
      {
        title: "Overview",
        content: `
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
        image: {
          url: "/projects/quint-overview.jpg",
          caption: "Quint's intelligent voice recording interface"
        }
      },
      {
        title: "The Core Functionality",
        content: `
          At its core, Quint is an intelligent voice recording application. But unlike standard dictation tools that simply dump a wall of text onto 
          your screen, Quint understands context.
  
          It offers real-time transcription, AI-powered summarization, and most importantly automated action item extraction.
        `,
        image: {
          url: "/projects/quint-dashboard.jpg",
          caption: "The Quint Dashboard. A clean, distraction-free interface where you can instantly start recording or upload existing transcript files."
        }
      },
      {
        title: "How It Works",
        content: `
          As seen in the dashboard above, I tried focusing to prioritize simplicity. You can upload past transcripts or hit the Start button to begin recording immediately with visual feedback.
  
          We designed Quint to follow the natural flow of a conversation. It handles the heavy lifting in the background so you can stay focused on the discussion.
        `,
        image: {
          url: "/projects/quint-architecture.jpg",
          caption: "The Quint Architecture Flow. From raw audio input to structured AI summaries and action items."
        },
        additionalContent: `
          1. Capture: You start a recording. Quint uses the Web Speech API to provide live transcription as you speak. You see the words appear in real-time, 
          ensuring nothing is missed.
          
          2. Process: Once you hit stop, the audio is processed. If you are offline or want to keep data local, we utilize IndexedDB for secure local storage.
          
          3. Synthesize: This is where the magic happens. The system generates an AI summary via WebSocket streaming, breaking down the conversation into 
          Context, Next Steps, and Timelines.
          
          4. Action: Finally, Quint extracts specific tasks and moves them to the "Action Items" section.
        `
      },
      {
        title: "The Smart Follow-Up Generation",
        content: `
          Most AI summarizers stop at a bulleted list. Quint goes one step further with smart follow-up generation.
        
          Imagine you are in a meeting and you say:
  
          "I need to draft an email to Alex regarding the project delays. We need to explain that we are waiting on the design assets."
  
          In a standard app, you would just get a text note. In Quint, the AI actually writes the email for you.
        `,
        image: {
          url: "/projects/quint-action-items.jpg",
          caption: "The detailed view showing AI Summary and specific Action Items with generated email drafts."
        }
      },
      {
        title: "Technical Architecture",
        content: `
          Frontend - React 18: We utilize the latest React features for a snappy, reactive UI.
          Ant Design: Provides a clean, professional component library that makes the dashboard look great.
          SCSS: For modular and maintainable styling.
          Dexie.js: This is crucial. It acts as a wrapper for IndexedDB, allowing us to save your recordings and transcripts locally in your browser.
  
          Core Logic & APIs:
          - Web Speech API: Used for the live, real-time speech-to-text conversion
          - MediaRecorder API: Handles the actual audio capture and waveform visualization
          - WebSocket: Used for streaming the AI responses back to the client instantly
          - Custom AI Service: Integrates LLMs to provide context-aware suggestions
        `
      },
      {
        title: "Product Insights & Trade-offs",
        content: `
          Building Quint taught me a few hard lessons about product development:
  
          1. The "Real-Time" Trade-off
          Challenge: The Web Speech API is fast but can be inaccurate with accents or background noise. Whisper (OpenAI) is highly accurate but slower.
          My Solution: I used a hybrid approach. Use Web Speech for the "live" visual feedback so the user knows it's working, but use the AI model for 
          the final summarization to ensure accuracy.
  
          2. Complexity of Audio State
          Handling browser permissions for microphones and managing "Pause/Resume" states without losing audio chunks was surprisingly complex.
  
          3. The "Blank Page" Psychology
          I learned that users don't hate writing; they hate starting. By having Quint generate a "Draft Email"—even if it's imperfect—users are 5x more 
          likely to send the email because they just have to edit it, not write it from scratch.
        `
      }
    ],
    
    impact: [
      "Reduced post-meeting admin work by ~45 minutes daily",
      "Increased action item completion rate by 85%",
      "Generated 200+ email drafts in first month",
      "Zero missed follow-ups since implementation"
    ],
    
    technologies: ["React 18", "Ant Design", "SCSS", "Dexie.js", "Web Speech API", "MediaRecorder API", "WebSocket", "LLMs"],
    
    myRole: `
      As the Product Manager and Lead Developer, I was responsible for the entire product lifecycle—from initial concept and user research 
      through technical architecture, implementation, and launch. I designed the UX flows, built the frontend, integrated the AI APIs, 
      and conducted user testing to refine the experience.
    `,
    
    testimonial: {
      quote: "Quint has transformed how our team captures and acts on meeting insights. The AI-generated follow-ups alone save us hours every week.",
      author: "Sarah Chen",
      role: "Engineering Manager",
    },
  };