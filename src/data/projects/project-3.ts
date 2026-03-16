import meletDashboard from "./project-3-images/MeletAI_Dashboard.png";
import meletPersona from "./project-3-images/MeletAI_persona.png";
import meletDoornote from "./project-3-images/MeletAI_doornote.png";
import meletConvo from "./project-3-images/MeletAI_convotranscript.png";
import meletDiagnosis from "./project-3-images/MeletAI_studentdiagnosis.png";
import meletMic from "./project-3-images/MeteAI_micaccess.png";

export const project3 = {
  id: 3,
  slug: "meletai-medical-education",
  title: "MeletAI: Transforming Clinical Education with AI",
  category: "Product Management",
  shortDescription: "Behind the Scenes: How I helped build MeletAI — a clinical simulation platform that gives medical students a safe space to practice real patient interactions before they ever enter an exam room.",
  publishDate: "2024-06-01",
  readTime: "9 min read",
  heroImage: meletDashboard,
  type: "internal" as const,

  sections: [
    {
      title: "The Gap in Medical Education",
      content: `
        Medical education has long faced a critical challenge: while students receive extensive theoretical knowledge, they often lack sufficient opportunities to practice real-world clinical interactions before facing actual patients. Traditional standardized patient encounters are expensive, logistically complex, and limited in availability.

        As Dr. Lev Gonick noted in his article on "The Rise of Agentic Pedagogy," medical education needed to evolve beyond passive learning to more interactive, experiential approaches. MeletAI emerged as a direct response to this need — creating a safe space for students to practice, make mistakes, and learn without risking patient care.

        As an associate product manager at AI Acceleration, I had the unique opportunity to contribute to MeletAI (formerly PraxisAI). While I wasn't the project lead — that honor belonged to my manager Roger — I played a significant role in bringing this groundbreaking educational tool from concept to reality.
      `,
      image: {
        url: meletDashboard,
        caption: "The MeletAI platform dashboard — where students begin their virtual clinical encounters."
      }
    },
    {
      title: "Starting Small: The 'Mr. Miller' Prototype",
      content: `
        Our journey began with a single persona — a character initially named Mr. Miller (later renamed Robert Martinez) — a 58-year-old male presenting with shortness of breath. This first prototype was designed to test a fundamental question: could an AI-powered virtual patient provide a realistic and educationally valuable clinical encounter?

        Working closely with medical faculty at Arizona State University, our small but dedicated team focused on creating an experience that felt authentic. We weren't trying to replace real patient interactions but rather supplement them with additional practice opportunities.

        "The initial challenge was making the AI persona feel like a real patient. We didn't want Robert to simply list his symptoms like a medical textbook. He needed to respond naturally, sometimes be vague, occasionally misunderstand questions — just like real patients do."
      `,
      image: {
        url: meletPersona,
        caption: "Robert Martinez — our first virtual patient persona, presenting with shortness of breath."
      }
    },
    {
      title: "The Development Process: A Collaborative Effort",
      content: `
        Our lean team consisted of just two developers led by Alex, two UX designers, and several medical faculty advisors who provided essential clinical expertise. As an associate product manager, I served as a bridge between the technical and medical sides of the project.

        My responsibilities included:

        --> Facilitating communication between medical faculty and our technical team.

        --> Documenting clinical scenarios that would be educationally valuable.

        --> Testing conversations with the AI personas to ensure they felt realistic.

        --> Gathering feedback from initial faculty demonstrations.

        --> Helping prioritize features based on educational impact and technical feasibility.

        "One of the most challenging aspects was teaching the AI to not give away the diagnosis. In early versions, Robert would too quickly mention symptoms that would immediately reveal his condition. We had to train the system to gradually reveal information based on the quality and specificity of the student's questions — just like a real diagnostic conversation."
      `,
      image: {
        url: meletDoornote,
        caption: "The 'Door Note' — students review basic patient info before entering the virtual exam room, mirroring real clinical workflow."
      }
    },
    {
      title: "Solving Key Technical and Educational Challenges",
      content: `
        Several critical challenges emerged as we developed the platform:

        1. The Professor's Perspective
        Faculty members needed ways to evaluate student performance, which led us to develop real-time conversation transcripts that instructors could review, AI-powered scoring that evaluated the completeness of student questioning, and SOAP note evaluation to assess students' clinical documentation skills.

        2. Storage and Technical Infrastructure
        With potentially thousands of students conducting virtual patient interviews, data management became a significant concern. We implemented secure, HIPAA-compliant storage systems, created efficient ways to store and retrieve conversation transcripts, and developed a scalable architecture that could handle multiple simultaneous sessions.

        3. Creating Realistic Personas
        Perhaps the most challenging aspect was developing AI personas that behaved like real patients:

        --> We worked with clinical faculty to create detailed patient histories.

        --> Developed conversational patterns that included hesitations, clarification requests, and emotional responses.

        --> Trained the AI to recognize various phrasings of the same medical question.

        --> Ensured the virtual patients didn't immediately reveal their diagnosis but instead presented with realistic symptoms.
      `,
      image: {
        url: meletConvo,
        caption: "Live conversation transcript view — instructors can review student-patient exchanges in real time."
      }
    },
    {
      title: "Expanding to Multiple Personas",
      content: `
        After the success of our initial Robert Martinez persona, we expanded to include Melissa Carter, a 42-year-old female presenting with diplopia (double vision). This allowed us to demonstrate the platform's versatility across different conditions, age groups, and presenting symptoms.

        "Adding Melissa was a significant milestone. It proved that our approach could work across different clinical scenarios and wasn't just a one-off success with Robert."

        The platform now includes a growing library of diverse patient personas, each with unique medical conditions, backgrounds, and interaction styles.
      `,
      image: {
        url: meletMic,
        caption: "Voice input access — students interact with virtual patients naturally through speech, not just text."
      }
    },
    {
      title: "The Beta Launch at ASU",
      content: `
        After months of development and refinement, we launched MeletAI as a beta test across Arizona State University's medical programs. The response exceeded our expectations:

        --> Students eagerly engaged with the platform, often practicing beyond required assignments.

        --> Faculty reported that students who used MeletAI showed improved clinical reasoning in subsequent real patient encounters.

        --> The natural conversation flow received particular praise, with many users commenting on how realistic the interactions felt.

        "What really validated our work was seeing students voluntarily return to the platform to practice additional cases. When educational technology becomes something students choose to use rather than have to use, you know you've created something valuable."
      `,
      image: {
        url: meletDiagnosis,
        caption: "Student diagnosis view — after the interview, students document their findings and receive AI-powered feedback."
      }
    },
    {
      title: "Key Features That Made the Difference",
      content: `
        --> The 'Door Note' Experience: Students begin by reviewing basic patient information, just as they would before entering an exam room, setting the stage for a realistic clinical workflow.

        --> Natural Language Processing: The AI understands various ways students might phrase the same question, allowing for natural conversation rather than scripted interactions.

        --> Clinical Documentation: After the patient interview, students document their findings using the standard SOAP format, practicing essential documentation skills.

        --> Realistic Patient Responses: Virtual patients don't immediately reveal their diagnosis but instead present with symptoms that students must investigate through thoughtful questioning.

        --> Comprehensive Feedback: The system provides detailed feedback on the student's performance, highlighting missed questions and suggesting improvements.
      `
    },
    {
      title: "Lessons Learned as an Associate PM",
      content: `
        Working on MeletAI taught me several valuable lessons that have profoundly shaped my approach to product development:

        1. The Power of Starting Small
        Our initial focus on a single patient persona proved invaluable. Rather than building a comprehensive platform from the outset, we concentrated on making one experience exceptional — thoroughly testing our core assumptions, solving fundamental technical challenges before scaling, and gathering focused feedback that wasn't diluted across multiple use cases.

        2. The Critical Importance of Domain Expert Collaboration
        The partnership between our technical team and medical faculty wasn't just helpful — it was essential. Working closely with experienced clinicians taught me that subject matter experts need to be involved throughout the entire development process, not just at requirements gathering. Regular review sessions with domain experts catch subtle issues that would otherwise undermine the product's credibility.

        3. The Balance Between Realism and Educational Value
        One of our most significant challenges was finding the right balance between realistic patient interactions and educational value. Through multiple iterations, we discovered that educational scaffolding needs to be invisible to maintain immersion, and that different learner levels require different balances — beginners benefit from more structured interactions, while advanced students need more complexity and ambiguity.

        4. The Unexpected Value of Technical Constraints
        Speech recognition challenges led us to develop a hybrid voice-and-text input approach, which unexpectedly improved accessibility. Storage limitations forced us to be selective about which interaction data we preserved, leading to more focused analytics. I learned that embracing constraints rather than fighting them often leads to more creative solutions.

        5. The Value of Authentic User Testing
        We shifted from structured feedback sessions to observing students use the platform without instruction and analyzing conversation transcripts to identify patterns. This revealed that students often approached virtual patients differently than real ones — being more direct or less empathetic — which helped us adjust AI responses to encourage more authentic communication styles.
      `
    },
    {
      title: "Looking Forward: The Future of MeletAI",
      content: `
        As MeletAI continues to evolve, we're working on several exciting enhancements:

        --> Expanding the case library to cover more medical specialties and conditions.

        --> Developing more sophisticated feedback mechanisms.

        --> Creating team-based scenarios where multiple students can collaborate.

        --> Integrating with existing learning management systems.

        "What started as a single virtual patient has grown into a platform with the potential to transform how clinical skills are taught and practiced. It's been incredibly rewarding to contribute to something that will help train better healthcare providers."

        While I wasn't the project lead, contributing to MeletAI has been one of the most rewarding experiences of my career. Seeing medical students engage with our virtual patients, practice their clinical skills, and grow more confident in their abilities reinforces the value of what we've built together.
      `
    }
  ],

  impact: [
    "Launched beta across Arizona State University's medical programs",
    "Students voluntarily returned to practice beyond required assignments",
    "Faculty reported improved clinical reasoning in real patient encounters",
    "Expanded from 1 to multiple diverse patient personas",
    "HIPAA-compliant architecture supporting thousands of concurrent sessions"
  ],

  technologies: ["AI/ML", "Natural Language Processing", "React", "WebSocket", "HIPAA-Compliant Storage", "SOAP Documentation", "ASU Partnership"],

  myRole: `
    As Associate Product Manager at AI Acceleration, I served as the bridge between medical faculty and the technical team. I facilitated cross-functional communication, documented clinical scenarios, tested AI persona conversations for realism, gathered faculty feedback, and helped prioritize features based on educational impact and technical feasibility — all under the leadership of project lead Roger.
  `,

  testimonial: {
    quote: "When educational technology becomes something students choose to use rather than have to use, you know you've created something valuable.",
    author: "MeletAI Team",
    role: "AI Acceleration",
  },
};