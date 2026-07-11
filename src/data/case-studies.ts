export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudySection {
  type: "text" | "image" | "image-grid" | "quote" | "metrics" | "embed" | "before-after" | "gif";
  content?: string;
  image?: CaseStudyImage;
  images?: CaseStudyImage[];
  quote?: string;
  author?: string;
  metrics?: { value: string; label: string }[];
  embed?: { url: string; title: string; width?: number; height?: number };
  gif?: CaseStudyImage;
  before?: CaseStudyImage;
  after?: CaseStudyImage;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  client: string;
  role: string;
  industry: string;
  platform: string;
  timeline: string;
  tags: string[];
  metric: { value: string; label: string };
  badges: string[];
  accentColor?: string;
  sections: { heading: string; items: CaseStudySection[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "budgify",
    title: "Designing Budgify: An Intuitive App for Tracking and Conquering Expenses",
    description:
      "This case study details my end-to-end design process for an app that simplifies expense tracking and helps users achieve their financial goals with clarity.",
    coverImage: "/images/case-studies/budgify/cover.jpg",
    client: "Budgify / 10kdesigners",
    role: "Product Designer",
    industry: "Fintech",
    platform: "Android / iOS App",
    timeline: "8 weeks",
    tags: ["Fintech", "Mobile App"],
    metric: { value: "End-to-end", label: "Product Design" },
    badges: ["End-to-end product design", "8-week sprint"],
    accentColor: "#059669",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "**For millions,** managing money is overwhelming. While countless budgeting apps exist, they often create more friction than clarity, bombarding users with complex features and making the simple act of tracking expenses a chore. This leads to abandoned budgets and continued financial uncertainty.",
          },
          {
            type: "text",
            content:
              "==The challenge?== To design a user-centric budgeting app from the ground up that simplifies onboarding to get users tracking in minutes, makes expense logging fast and effortless, visualizes financial health with clarity to inform better decisions, and motivates users by celebrating their progress and achievements.",
          },
          {
            type: "text",
            content:
              "This case study details my end-to-end design process for **Budgify**, an app created to answer those questions. My focus was on four key principles: **simplifying setup, streamlining expense entry, providing actionable insights, and building user motivation.**",
          },
          {
            type: "text",
            content:
              "This project was completed during my time at the [10kdesigners](https://www.10kdesigners.com/u/jai-sankhla) cohort, with invaluable guidance from my mentors, [Abhinav Chhikara](https://www.linkedin.com/in/abnux/) and [Jayneil Dalal](https://www.linkedin.com/in/jayneil/).",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/intro-design-process.jpeg",
              alt: "I was responsible for the entire end-to-end design process, from initial research to a final, polished user interface",
              caption: "I was responsible for the entire end-to-end design process, from initial research to a final, polished user interface",
            },
          },
        ],
      },
      {
        heading: "Design Process",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/design-process.jpeg",
              alt: "Design process overview showing the stages from research to final design",
            },
          },
        ],
      },
      {
        heading: "User Interview & Survey Analysis",
        items: [
          {
            type: "text",
            content:
              "To understand the needs and pain points of potential users, I employed a mixed-method research approach:",
          },
          {
            type: "text",
            content:
              "**Quantitative Surveys:** I designed and distributed a survey using Google Forms to gather statistical data on budgeting habits and challenges.",
          },
          {
            type: "text",
            content:
              "**Qualitative Interviews:** I conducted several one-on-one interviews, both in-person and over the phone, to gain deep, contextual insights into their financial behaviors.",
          },
        ],
      },
      {
        heading: "User Interview Analysis",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/user-interview-analysis.jpeg",
              alt: "User interview analysis showing key findings from qualitative research",
            },
          },
        ],
      },
      {
        heading: "User Survey Analysis",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/user-survey-analysis.jpeg",
              alt: "User survey analysis showing quantitative data on budgeting habits",
            },
          },
        ],
      },
      {
        heading: "User Persona",
        items: [
          {
            type: "text",
            content:
              "My research revealed two distinct types of potential users, each with unique financial habits and frustrations. To bring these user groups to life and ensure I was designing for them, I crafted two detailed personas.",
          },
          {
            type: "text",
            content:
              "**Allow me to introduce you to Pradhuman and Shivangi!**",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/user-persona.jpeg",
              alt: "User personas showing Pradhuman and Shivangi with their goals and frustrations",
            },
          },
        ],
      },
      {
        heading: "Empathy Map",
        items: [
          {
            type: "text",
            content:
              "**Visualizing** Shivangi's perspective to understand her needs and pain points.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/empathy-map.jpeg",
              alt: "Empathy map for Shivangi showing her thoughts, feelings, and pain points",
            },
          },
        ],
      },
      {
        heading: "User Scenario",
        items: [
          {
            type: "text",
            content:
              "A user scenario illustrating '**A Day in Shivangi's Life**' to visualize her real-world budgeting challenges.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/user-scenario.jpeg",
              alt: "User scenario showing a day in Shivangi's life",
            },
          },
        ],
      },
      {
        heading: "User Journey",
        items: [
          {
            type: "text",
            content:
              "To pinpoint opportunities for improvement, I visualized **Shivangi's** frustrating process of trying to stick to a budget.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/user-journey.jpeg",
              alt: "User journey map showing Shivangi's experience with budgeting",
            },
          },
        ],
      },
      {
        heading: "Task Flow & I.A",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/task-flow.jpeg",
              alt: "Task flow diagram showing key user flows in Budgify",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/information-architecture.jpeg",
              alt: "Information architecture showing the app structure",
            },
          },
        ],
      },
      {
        heading: "Moodboard and Branding",
        items: [
          {
            type: "text",
            content:
              "Conceptualisation — exploring visual direction and brand identity for Budgify.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/moodboard-1.jpeg",
              alt: "Moodboard exploring visual direction for Budgify",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/moodboard-2.jpeg",
              alt: "Brand identity exploration for Budgify",
            },
          },
        ],
      },
      {
        heading: "Ideation Process",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/ideation.jpeg",
              alt: "Ideation process showing sketches and concepts",
            },
          },
        ],
      },
      {
        heading: "Mid Fidelity Wireframe",
        items: [
          {
            type: "text",
            content:
              "Mid-fidelity wireframes exploring layout, navigation, and content structure.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/mid-fi-1.jpeg",
              alt: "Mid-fidelity wireframe screens",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/mid-fi-2.jpeg",
              alt: "Mid-fidelity wireframe showing user flows",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/mid-fi-3.jpeg",
              alt: "Mid-fidelity wireframe interaction flow",
            },
          },
        ],
      },
      {
        heading: "High-Fidelity Designs",
        items: [
          {
            type: "text",
            content:
              "**The culmination of the design process:** high-fidelity mockups, key UI screens, and an intro video demonstrating the core user flow and interactions of the app.",
          },
          {
            type: "embed",
            embed: {
              url: "https://player.vimeo.com/video/1116556334?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
              title: "Budgify App Walkthrough",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/hi-fi-1.jpeg",
              alt: "High-fidelity design screen 1",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/hi-fi-2.jpeg",
              alt: "High-fidelity design screen 2",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/hi-fi-3.jpeg",
              alt: "High-fidelity design screen 3",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/hi-fi-4.jpeg",
              alt: "High-fidelity design screen 4",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/hi-fi-5.jpeg",
              alt: "High-fidelity design screen 5",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/hi-fi-6.jpeg",
              alt: "High-fidelity design screen 6",
            },
          },
        ],
      },
      {
        heading: "Prototype",
        items: [
          {
            type: "text",
            content:
              "An interactive prototype showcasing the complete user flow and interaction design of Budgify.",
          },
          {
            type: "embed",
            embed: {
              url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUoP1crrd4PsZE1JstBNjEe%2FBudget-Tracking-and-Daily-Expense-App---Jai%3Fpage-id%3D476%253A1338%26type%3Ddesign%26node-id%3D867-4307%26viewport%3D-331%252C364%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D867%253A4472%26hide-share-ui%3D1",
              title: "Budgify Figma Prototype",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/budgify/prototype.jpeg",
              alt: "Prototype showcase",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "nirva-homepage",
    title: "Homepage Redesign That Increased First Task Completion by 40%",
    description:
      "Created a structured homepage with clear hierarchy, reducing confusion and driving higher engagement for Nirva Health.",
    coverImage: "/images/case-studies/nirva-homepage/cover.png",
    client: "Nirva Health",
    role: "Product Designer",
    industry: "Hospitals & Health Care",
    platform: "Mobile App",
    timeline: "6 weeks",
    tags: ["UX Redesign", "Health", "Mobile"],
    metric: { value: "40%", label: "First task completion increase" },
    badges: ["+40% first task completion", "UX research-led redesign"],
    accentColor: "#0d9488",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "Gamification gave users motivation, but the homepage still failed to guide them. Many described it as \"==a maze with no clear starting point.==\" Without a sense of direction, users lost momentum, even if they were excited after onboarding.",
          },
          {
            type: "text",
            content:
              "My task was to transform confusion into clarity \u2014 redesigning the homepage as **a daily wellness dashboard** that simplified choices, highlighted progress, and encouraged consistent action.",
          },
        ],
      },
      {
        heading: "Problem?",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-homepage/problem-1.png",
              alt: "Problem screenshot showing cluttered homepage",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-homepage/problem-2.png",
              alt: "Problem screenshot showing confusing navigation",
            },
          },
        ],
      },
      {
        heading: "Research",
        items: [
          {
            type: "text",
            content:
              "To uncover why users were disengaging after onboarding, we conducted **25+ user interviews** and usability reviews focused on Nirva\u2019s homepage experience. Here\u2019s what we learned:",
          },
          {
            type: "text",
            content:
              "\u2022 \"**I don\u2019t know where to start**\" when I open the app \u2014 the screen feels cluttered and overwhelming.\n\n\u2022 Important tasks like yoga or diet logs are buried. \"**I just scroll and give up sometimes.**\"\n\n\u2022 The homepage doesn\u2019t guide me. \"**It feels random,**\" like a feed, not a plan for my day.\n\n\u2022 I want to see my upcoming sessions or progress, but \"**I can\u2019t find it easily.**\"\n\n\u2022 Without a clear order, I \"**end up skipping things**\" and closing the app.",
          },
          {
            type: "text",
            content:
              "**These insights revealed the core issue:** the homepage failed to provide clarity, prioritization, and direction \u2014 leaving users lost, unmotivated, and more likely to drop off.",
          },
        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "**Improve User Retention** \u2014 Redesign the homepage to guide users clearly, reducing **drop-offs** and increasing daily engagement.",
          },
          {
            type: "text",
            content:
              "**Boost Task Completion** \u2014 Surface the most important actions upfront to ensure **higher completion of diet logs, yoga, and wellness tasks.**",
          },
          {
            type: "text",
            content:
              "**Strengthen Product Value** \u2014 Position Nirva as a **daily companion for wellness** by making the homepage a central, engaging hub.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "**Clarity & Direction** \u2014 Help users know exactly where to start by providing a structured, **prioritized daily plan.**",
          },
          {
            type: "text",
            content:
              "**Easy Access to Key Tasks** \u2014 **Simplify navigation** so that core actions like yoga practice and diet logging are always within reach.",
          },
          {
            type: "text",
            content:
              "**Confidence in Progress** \u2014 Show **clear progress and upcoming sessions,** empowering users to track their journey and stay motivated.",
          },
        ],
      },
      {
        heading: "Solution: An Action-Oriented Dashboard",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-homepage/solution-1.png",
              alt: "I was responsible for the entire end-to-end design process, from initial research to a final, polished user interface",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-homepage/solution-2.png",
              alt: "Design solution screenshot 2",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-homepage/solution-3.png",
              alt: "Design solution screenshot 3",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-homepage/solution-4.png",
              alt: "Design solution screenshot 4",
            },
          },
        ],
      },
      {
        heading: "Final Outcome",
        items: [
          {
            type: "text",
            content:
              "Revamping Nirva Health\u2019s homepage brought clarity to the user journey and created a stronger sense of direction. First task completion rose by **40%**, while user confusion dropped by **65%**. By surfacing key actions and progress at the start, the homepage **transformed** from a cluttered screen into **a daily wellness dashboard** \u2014 guiding users with confidence and improving overall retention.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "40%", label: "First task completion increase" },
              { value: "65%", label: "User confusion reduction" },
              { value: "+", label: "Overall retention improved" },
            ],
          },
        ],
      },
      {
        heading: "What I Would Have Done Next",
        items: [
          {
            type: "text",
            content:
              "**Refining the Information Hierarchy** \u2014 Continue testing different layouts and priorities to ensure that the most critical tasks always remain visible without overwhelming users.",
          },
          {
            type: "text",
            content:
              "**Personalization at Scale** \u2014 Introduce dynamic homepage cards that adapt to each user\u2019s goals \u2014 whether focused on yoga, diet, or workshops \u2014 to make the experience feel more personal.",
          },
          {
            type: "text",
            content:
              "**Deeper Data Tracking** \u2014 Work with analytics teams to measure how each homepage element influences engagement and retention, then fine-tune based on user behavior.",
          },
          {
            type: "text",
            content:
              "**Iterative Improvements** \u2014 Treat the homepage as a living system \u2014 continuously learning from user feedback, A/B testing components, and evolving it into a central hub for growth.",
          },
        ],
      },
      {
        heading: "Peace",
        items: [
          {
            type: "text",
            content:
              "This project taught me the **importance of clarity** as a design principle. By redefining the homepage, I was able to turn **~confusion into confidence~** and give users a reason to return daily. I\u2019m thankful to my mentor [Archi Kashmiriya](https://www.linkedin.com/in/archik-ux/), and stakeholders for trusting me with this responsibility, and I\u2019m proud of how the design created measurable impact.",
          },
          {
            type: "text",
            content:
              "Thank you for taking the time to read about my work \u2014 I hope this gave you insight into my process and approach to solving complex design problems.",
          },
        ],
      },
    ],
  },
  {
    slug: "nirva-gamification",
    title: "Built Gamification System That Turned Drop-offs Into 2x Daily Engagement",
    description:
      "Created gamification features at Nirva Health that boosted retention and doubled daily engagement through rewards, coins, and streak tracking.",
    coverImage: "/images/case-studies/nirva-gamification/cover.jpg",
    client: "Nirva Health",
    role: "Product Designer",
    industry: "Hospitals & Health Care",
    platform: "Mobile App",
    timeline: "10 weeks",
    tags: ["Gamification", "Health"],
    metric: { value: "2x", label: "Daily engagement" },
    badges: ["2x daily engagement", "Streaks + coins reward system"],
    accentColor: "#8b5cf6",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "**Nirva Health**, a Y Combinator-backed startup, helps people embrace [Ayurveda and Yoga](https://www.nirvahealth.com/) through personalized wellness plans. But by mid-2023, the app was struggling to keep users engaged::",
          },
          {
            type: "text",
            content:
              "• Without gamification features, **users lacked motivation** to complete daily wellness tasks.\n\n• **Engagement** with core activities like diet logging and yoga tracking was low, as the experience felt repetitive and unrewarding.\n\n• **Retention suffered**, with many users dropping off after initial onboarding.",
          },
          {
            type: "text",
            content:
              "==The challenge?== Design a gamification system that motivates users to return daily, rewards them for progress, and turns routine wellness into an engaging, habit-forming journey.",
          },
          {
            type: "quote",
            quote:
              "**I didn't just add coins and badges** \u2014 I built an experience that inspired consistency, improved retention, and made wellness feel rewarding",
          },
        ],
      },
      {
        heading: "Problem?",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-gamification/problem-1.jpg",
              alt: "User research findings showing motivation drop-off",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-gamification/problem-2.webp",
              alt: "Engagement data showing retention challenges",
            },
          },
        ],
      },
      {
        heading: "Research",
        items: [
          {
            type: "text",
            content:
              "To understand why engagement and retention were low, we conducted **25+ user interviews** with Nirva Health users who had tried daily wellness plans. Here\u2019s what they shared:",
          },
          {
            type: "text",
            content:
              "• \"**Logging my diet** every day feels repetitive. I don\u2019t feel motivated to continue after a few days.\"\n\n• \"I like yoga sessions, but without rewards or progress tracking, it\u2019s **easy to skip** them.\"\n\n• \"The app doesn\u2019t make me feel like I\u2019m achieving anything. **I can\u2019t see my progress clearly.**\"\n\n• \"After onboarding, there **isn\u2019t much excitement** to return daily\u2014it feels like the same routine.\"\n\n• \"I often **forget about the app** because nothing nudges me to come back and complete tasks.\"",
          },
        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "**Increase Engagement & Retention** \u2014 Introduce gamification features that **motivate users** to return daily, boosting overall app stickiness and reducing drop-offs.",
          },
          {
            type: "text",
            content:
              "**Encourage Healthy Habit Formation** \u2014 Support Nirva\u2019s mission by ensuring users consistently engage with **diet logging, yoga practice, and wellness tasks.**",
          },
          {
            type: "text",
            content:
              "**Drive Growth Metrics** \u2014 **Improve weekly task** completion and reactivation rates, leading to higher customer lifetime value and stronger subscription conversions.",
          },
          {
            type: "text",
            content:
              "**Build Scalable Design Components** \u2014 Design gamification elements (**coins, badges, streaks**) as reusable UI components that can integrate seamlessly with other app features.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "**Stay Motivated & Rewarded** \u2014 Provide users with coins, badges, and streak tracking that make completing daily health tasks **rewarding and enjoyable.**",
          },
          {
            type: "text",
            content:
              "**Track Progress Clearly** \u2014 Help users **visualize progress** with clear indicators and feedback loops, giving them a sense of achievement and momentum.",
          },
          {
            type: "text",
            content:
              "**Build Lasting Routines** \u2014 Encourage users to form **sustainable wellness habits** by turning routine tasks into engaging, gamified experiences.",
          },
        ],
      },
      {
        heading: "Solution: Habit-Building Through Gamification",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-gamification/solution-1.jpg",
              alt: "Gamification dashboard with streak tracking and rewards",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-gamification/solution-2.jpg",
              alt: "Coin and rewards system design",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-gamification/solution-3.jpg",
              alt: "Level progression and badge system",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/nirva-gamification/solution-4.jpg",
              alt: "Challenge and social competition features",
            },
          },
        ],
      },
      {
        heading: "Prototype",
        items: [
          {
            type: "embed",
            embed: {
              url: "https://marvelapp.com/prototype/cj960f3?emb=1&iosapp=false&frameless=false",
              title: "Nirva Gamification Prototype",
              width: 453,
              height: 864,
            },
          },
        ],
      },
      {
        heading: "Final Outcome",
        items: [
          {
            type: "text",
            content:
              "The introduction of gamification significantly **improved engagement** and **retention at Nirva Health.** Weekly task completion jumped from **31% to 55%**, showing stronger user consistency. Retention also improved, with daily return rates growing steadily and reactivation rising from **17% to 25%**. These changes highlighted that gamification wasn\u2019t just a visual add-on\u2014it became a core driver of healthy habit formation and long-term user loyalty.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "31% \u2192 55%", label: "Weekly active engagement" },
              { value: "17% \u2192 25%", label: "30-day retention improvement" },
              { value: "94%", label: "30-day retention (7+ day streak)" },
            ],
          },
        ],
      },
      {
        heading: "What I Would Have Done Next",
        items: [
          {
            type: "text",
            content:
              "Unfortunately, my time at Nirva ended before I could further develop the gamification system. If I had stayed, here\u2019s what I would have focused on:",
          },
          {
            type: "text",
            content:
              "**Expanding Reward Mechanics** \u2014 For a project of this size, even with thorough testing, some minor bugs are bound to slip through. I would have worked with the engineering team to quickly identify and resolve any issues users might encounter after launch.",
          },
          {
            type: "text",
            content:
              "**Optimizing Post-Launch** \u2014 Monitor real-world usage data and user feedback to refine coin values, badge unlocks, and task difficulty so that rewards remain balanced and meaningful.",
          },
          {
            type: "text",
            content:
              "**Listening to Users** \u2014 Conduct regular interviews and surveys to understand what motivates users most\u2014whether it\u2019s streaks, social recognition, or tangible rewards\u2014and adapt features accordingly.",
          },
          {
            type: "text",
            content:
              "**Continuous Improvements** \u2014 Explore cross-feature gamification (e.g., integrating rewards into diet logging, yoga, and subscriptions) to unify the experience and strengthen Nirva\u2019s ecosystem.",
          },
        ],
      },
      {
        heading: "Peace",
        items: [
          {
            type: "text",
            content:
              "I am proud to count this among my most significant projects at **Nirva Health.** I am also incredibly grateful for the opportunity to collaborate closely with my Senior Product Designer [Archi Kashmiriya](https://www.linkedin.com/in/archik-ux/), and key stakeholders, Co-Founder [Amit Kumar Verma](https://www.linkedin.com/in/amitkv14/), Founder & CEO [Nived Narayanan](https://www.linkedin.com/in/nivednarayanan/).",
          },
          {
            type: "text",
            content:
              "Thank you for taking the time to read about my work. I hope you enjoyed learning about my design journey and the process behind it :)",
          },
        ],
      },
    ],
  },
  {
    slug: "slc-checkout",
    title: "Redesigning Cart & Checkout, Reducing Abandonment by 26% Across 480k User Sessions",
    description:
      "Focused on optimizing checkout flows to boost conversions and decrease abandonment for Sierra Living Concepts, a brand of luxury furniture shoppers in U.S.",
    coverImage: "/images/case-studies/slc-checkout/cover.jpg",
    client: "Sierra Living Concepts (SLC)",
    role: "Lead UI/UX Designer",
    industry: "E-Commerce",
    platform: "Cross-Platform (Web + Mobile Web)",
    timeline: "8 weeks",
    tags: ["E-Commerce", "UX Strategy", "Checkout"],
    metric: { value: "26%", label: "Cart abandonment reduction" },
    badges: ["26% cart abandonment reduction", "480k+ user sessions analyzed"],
    accentColor: "#d97706",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "Sierra Living Concepts (SLC) is a U.S.-based luxury furniture retailer with a significant online presence. SLC had a requirement to increase online sales and meet customer expectations through a seamless checkout experience.",
          },
          {
            type: "text",
            content:
              "As the **Lead UI/UX Designer**, I was the sole designer on the project, collaborating closely with [Saswata S. SenGupta](https://www.linkedin.com/in/sss99/) (Sr. Product Manager) to tackle conversion challenges on the cart and checkout pages.",
          },
        ],
      },
      {
        heading: "Problem Statement",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Problem statement.webp",
              alt: "Problem statement overview",
            },
          },
        ],
      },
      {
        heading: "Problems & Insights",
        items: [
          {
            type: "text",
            content:
              "**Problem 1: Distractions and Overload on Cart Page** — SLC's Cart Page suffered from its own success. It was so feature-rich that it overwhelmed shoppers. With too many distractions like excessive product recommendations and prominent marketing banners, customers frequently lost focus and abandoned their carts.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Problem 1.jpg",
              alt: "Problem 1: Distractions and Overload on Cart Page",
            },
          },
          {
            type: "text",
            content:
              "**Problem 2: High Checkout Abandonment Rate** — The checkout process was a 5-step linear flow with no progress indicator. Users had to create an account before completing a purchase, creating an unnecessary barrier. Form fields were dense, error messages were generic, and the mobile checkout was nearly unusable with tiny tap targets and horizontal scrolling tables.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Problem 2.webp",
              alt: "Problem 2: High Checkout Abandonment Rate",
            },
          },
          {
            type: "text",
            content:
              "**Problem 3: Navigation and Form Field Issues** — The checkout flow suffered from inconsistent navigation across mobile and desktop. On mobile, the 'Continue' button was hidden below the fold, causing users to think the page wasn't loading. On desktop, the multi-column layout created confusion about the natural reading order.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Problem 3.jpg",
              alt: "Problem 3: Navigation and Form Field Issues",
            },
          },
          {
            type: "text",
            content:
              "**Problem 4: Complex Delivery Options and Confusion** — Delivery options were complex and unclear. Users couldn't see estimated delivery dates before checkout and were frustrated by unexpected shipping costs appearing late in the flow.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Problem 4.webp",
              alt: "Problem 4: Complex Delivery Options",
            },
          },
          {
            type: "quote",
            quote:
              "I was ready to buy a sofa for $2,000, but the checkout asked me to create an account first. I didn't want another account and a password to remember, so I just left.",
            author: "Abandoned user, exit survey",
          },
          {
            type: "metrics",
            metrics: [
              { value: "71%", label: "Cart abandonment rate" },
              { value: "5", label: "Checkout steps" },
              { value: "480k", label: "User sessions analyzed" },
            ],
          },
        ],
      },
      {
        heading: "Shopping Journey Of A User",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Shopping Journey Of A User.webp",
              alt: "Shopping journey of a user",
            },
          },
        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "**Increase Conversion Rates** — Streamline the checkout flow to reduce friction and drop-offs, converting more visitors into customers.",
          },
          {
            type: "text",
            content:
              "**Decrease Cart Abandonment** — Identify and eliminate pain points in the cart and checkout experience that cause users to leave before completing a purchase.",
          },
          {
            type: "text",
            content:
              "**Boost Customer Confidence** — Build trust and reassurance throughout the checkout process with clear communication about shipping, returns, and payment security.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "**Quick & Easy Checkout** — Users want to complete their purchase in as few steps as possible, without unnecessary obstacles or information requests.",
          },
          {
            type: "text",
            content:
              "**Clear Pricing & Delivery Info** — Users need transparency about total costs, taxes, shipping fees, and delivery timelines before committing to purchase.",
          },
          {
            type: "text",
            content:
              "**Flexible Shopping Experience** — Users want the ability to review, modify, and confirm their cart contents easily without losing progress.",
          },
        ],
      },
      {
        heading: "New Cart Checkout User Flow",
        items: [
          {
            type: "text",
            content:
              "\uD83D\uDE80 New Proposed User Flow For Cart & Checkout Process",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/New Proposed USer Flow.webp",
              alt: "New proposed cart and checkout user flow",
            },
          },
        ],
      },
      {
        heading: "Solution 1: Distraction-Free Cart Page",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 1 Desktop.jpg",
              alt: "Distraction-free cart page after redesign",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 1 Demo.gif",
              alt: "Cart page redesign demo animation",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 1 Mobile.jpg",
              alt: "Cart page redesign mobile view",
            },
          },
          {
            type: "embed",
            embed: {
              url: "https://marvelapp.com/prototype/9576bah?emb=1&iosapp=false&frameless=false",
              title: "Distraction-Free Cart Page Prototype",
            },
          },
          {
            type: "text",
            content:
              "The new redesigned cart page strips away product recommendations and other detours, then layers a lightweight entry point for every type of shopper\u2014 quick sign-in, instant account creation, or one-step guest checkout\u2014all inside modal overlays that keep the cart visible in the background.",
          },
          {
            type: "text",
            content:
              "**Why it\u2019s better**\n\n\u2022 **Clear primary CTA** \u2014 \u201cProceed to Checkout\u201d is the only dominant button, guiding attention straight to the next step.\n\n\u2022 **Users stay in \u201ccheckout mode\u201d** \u2014 With recommendations and promotional widgets gone, there\u2019s nothing tempting shoppers to wander off the page.\n\n\u2022 **Stay in context** \u2014 Sign-in, create-account, forgot-password, and guest-checkout panels open as modals; users never leave the cart or lose their place.\n\n\u2022 **Mobile-friendly** \u2014 Spacing and larger touch targets keep quantity edits or removals effortless, cutting friction for on-the-go shoppers.\n\n\u2022 **A single, Sticky Order Summary** surfaces all costs (subtotal, discounts, total) in a glance, eliminating fee-shock surprises later.",
          },
        ],
      },
      {
        heading: "Solution 2: Streamlined Address Entry & Inline Validation",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 2- Streamlined Address Entry & Inline Validation.webp",
              alt: "Streamlined address entry solution design",
            },
          },
          {
            type: "text",
            content:
              "The legacy five-step funnel was collapsed into a lightning-fast, three-page flow\u2014Cart \u2192 Address \u2192 Delivery & Payment\u2014with live totals, inline error handling, and a sticky order summary that travels down the screen on both desktop and mobile.",
          },
          {
            type: "text",
            content:
              "**Why it\u2019s better**",
          },
          {
            type: "text",
            content:
              "\u2022 **-26 % abandonment proven:** GA4 shows checkout abandonment dropping from 73.10 % to 53.97 % within ten days of launch, far exceeding the \u20137.66 % lift seen in 2024\u2019s same-period sale.\n\n\u2022 **Live cost transparency:** Shipping, tax, and discount calculations update instantly, eliminating the late-stage fee shock that previously drove 32% of exits.\n\n\u2022 **Progress breadcrumb:** Clearing the \u201cCart \u203a Address \u203a Delivery \u203a Payment\u201d header reassures users how close they are to completing the process, reducing abandonment due to uncertainty.",
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 3 Desktop.jpg",
              alt: "Address entry solution desktop view",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 2 Desktop.gif",
              alt: "Address entry solution demo animation",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 3 Mobile.jpg",
              alt: "Address entry solution mobile view",
            },
          },
          {
            type: "embed",
            embed: {
              url: "https://marvelapp.com/prototype/11ca8f04?emb=1&iosapp=false&frameless=false",
              title: "Streamlined Address Entry Prototype",
            },
          },
          {
            type: "text",
            content:
              "The new Shipping Address page consolidates all contact and address fields into one clean screen, adds real-time error feedback, and keeps a collapsible order summary visible, eliminating pinch-zoom, page reloads, and confusion between billing and shipping details.",
          },
        ],
      },
      {
        heading: "Solution 3: Simplified Delivery Method Selector",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 4 Desktop.jpg",
              alt: "Simplified delivery selector redesign",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 3 Desktop.gif",
              alt: "Delivery method selector demo animation",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-checkout/Solution 4 Mobile.jpg",
              alt: "Delivery selector mobile view",
            },
          },
          {
            type: "embed",
            embed: {
              url: "https://marvelapp.com/prototype/1c8fdaj4?emb=1&iosapp=false&frameless=false",
              title: "Delivery Method Selector Prototype",
            },
          },
          {
            type: "text",
            content:
              "The new checkout step shows only two clearly-labeled delivery cards\u2014Curb-Side (free) and White-Glove (paid)\u2014with concise bullet summaries and an upfront price, while the sticky order summary stays visible on mobile for instant cost confirmation.",
          },
          {
            type: "text",
            content:
              "**Why it\u2019s better**",
          },
          {
            type: "text",
            content:
              "\u2022 **Each card uses plain-language bullet points** \u2014 \u201cRoom Placement,\u201d \u201cFull Assembly\u201d and a single, bold price, ending uncertainty about what\u2019s included.\n\n\u2022 **One-tap radio selection** \u2014 and an anchored \u201cContinue\u201d button streamline progress, cutting hesitation time.\n\n\u2022 **Mobile layout stacks the same cards with thumb-friendly radio buttons and keeps the help-contact block handy, reducing abandonment** \u2014 on phones where choice overload was greatest.\n\n\u2022 **Inline edit link for the Shipping Address allows quick corrections** \u2014 without back-tracking, preserving momentum.",
          },
        ],
      },
      {
        heading: "Challenges & Solutions",
        items: [
          {
            type: "text",
            content:
              "**Multi-page complexity** across devices was the biggest challenge. The solution required **careful information architecture** \u2014 deciding what to show on each page, how to handle form state, and how to provide clear feedback without overwhelming users.",
          },
          {
            type: "text",
            content:
              "**Balancing business needs** (account creation for marketing) **with user needs** (guest checkout) led to a compromise: **guest checkout with optional post-purchase account creation.** This removed the biggest purchase barrier while still allowing SLC to capture user data.",
          },
          {
            type: "text",
            content:
              "**Responsive design consistency** meant designing **mobile-first** and progressively enhancing for desktop. Every component was tested at multiple breakpoints to guarantee a **consistent cross-device experience.**",
          },
        ],
      },
      {
        heading: "What I Would Have Done Next",
        items: [
          {
            type: "text",
            content:
              "Saved Payment Methods — Implement stored payment methods for returning customers, reducing checkout friction even further with one-tap purchases.",
          },
          {
            type: "text",
            content:
              "One-Click Checkout — Integrate digital wallet options like Apple Pay, Google Pay, and Shop Pay to enable express checkout for returning and new users alike.",
          },
          {
            type: "text",
            content:
              "Abandonment Recovery — Introduce cart abandonment email sequences with saved carts, limited-time offers, and direct links to resume checkout where they left off.",
          },
        ],
      },
      {
        heading: "Results",
        items: [
          {
            type: "text",
            content:
              "The redesigned checkout launched with a phased A/B test. Cart abandonment dropped from 71% to 45%, a 26 percentage point reduction. Guest checkout was used by 68% of first-time purchasers. Mobile conversion rate increased by 34%.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "-26pp", label: "Cart abandonment reduction" },
              { value: "68%", label: "Guest checkout adoption" },
              { value: "+34%", label: "Mobile conversion increase" },
            ],
          },
        ],
      },
      {
        heading: "Signing Off",
        items: [
          {
            type: "text",
            content:
              "This project taught me **the power of removing friction.** Every field removed, every step collapsed, every error message rewritten \u2014 **each small change compounded into a dramatically better experience.** I\u2019m grateful to Saswata and the SLC team for trusting me to redesign such a critical part of their business.",
          },
          {
            type: "text",
            content:
              "Thank you for reading about my journey in redesigning the cart and checkout experience for Sierra Living Concepts. If you\u2019d like to discuss **e-commerce UX or checkout optimization, I\u2019d love to connect.**",
          },
        ],
      },
    ],
  },
  {
    slug: "slc-category",
    title: "Creating a Unified Category & Paid-Landing Experience for Furniture Buyers",
    description:
      "Cohesive redesign delivering higher engagement, trust, and sales from ad click to category page for premium shoppers.",
    coverImage: "/images/case-studies/slc-category/Cover.jpg",
    client: "Sierra Living Concepts (SLC)",
    role: "Lead UI/UX Designer",
    industry: "E-Commerce",
    platform: "Cross-Platform (Web + Mobile Web)",
    timeline: "6 weeks",
    tags: ["E-Commerce", "UX Strategy", "Category Design"],
    metric: { value: "+120%", label: "Ad-to-purchase conversion" },
    badges: ["+120% ad-to-purchase conversion", "Unified category + landing pages"],
    accentColor: "#6366f1",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "Sierra Living Concepts (SLC) is a U.S.-based luxury furniture retailer with a significant online presence. SLC ran extensive paid advertising campaigns across Google, Facebook, and Instagram, driving users to dedicated landing pages and category pages. However, the experience from ad click to browse-to-purchase was fragmented \u2014 landing pages had different visual styles, inconsistent information architecture, and no clear path to related categories.",
          },
          {
            type: "text",
            content:
              "As the **Lead UI/UX Designer**, I was the sole designer on this project, collaborating closely with [Saswata S. SenGupta](https://www.linkedin.com/in/sss99/) (Sr. Product Manager) to redesign the category and paid-landing page experience for SLC\u2019s premium furniture shoppers.",
          },
        ],
      },
      {
        heading: "Problems & Insights",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Problem.webp",
              alt: "Problem statement overview",
            },
          },
        ],
      },
      {
        heading: "Problem 1: Lack of Storytelling and Brand Differentiation",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Problem 1 Lack of Storytelling and Brand Differentiation.jpg",
              alt: "Problem 1: Lack of Storytelling and Brand Differentiation",
            },
          },
          {
            type: "text",
            content:
              "**7 out of 10 users** could not describe the brand\u2019s unique qualities after browsing the old category pages \u2014 static, desktop-centric grids without narratives or value props. This weak brand connection led to **shorter dwell times** compared to competitors, resulting in **lower engagement and conversion potential.**",
          },
        ],
      },
      {
        heading: "Problem 2: Weak Initial Engagement on Paid-Landing Pages",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Problem 2 Weak Initial Engagement on Paid-Landing Pages.jpg",
              alt: "Problem 2: Weak Initial Engagement on Paid-Landing Pages",
            },
          },
          {
            type: "text",
            content:
              "**The old ad-landing templates were static grids** without persuasive copy or trust elements in the first viewport, causing users from paid campaigns to leave before exploring further. This **low first-impression impact** meant fewer scrolls and weaker add-to-cart rates, **reducing ROI on ad spend.**",
          },
        ],
      },
      {
        heading: "Problem 3: Desktop-Centric Layout Despite Mobile-Heavy Traffic",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Problem 3 Desktop-Centric Layout Despite Mobile-Heavy Traffic.jpg",
              alt: "Problem 3: Desktop-Centric Layout Despite Mobile-Heavy Traffic",
            },
          },
          {
            type: "text",
            content:
              "**Category & FID grids were designed for desktop spacing and scaling**, forcing mobile users to pinch, zoom, and scroll excessively to view products. **Mobile visitors \u2014 78% of total traffic** \u2014 experienced slower navigation and higher drop-off, **weakening the largest conversion channel.**",
          },

        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "**Increase Category Page Engagement** — Deepen user engagement by improving content relevance and visual appeal, increasing time on page and product discovery.",
          },
          {
            type: "text",
            content:
              "**Boost Paid Ad Conversion Rates** — Improve conversion rates by creating a cohesive and compelling experience from ad click to purchase, reducing friction and drop-offs.",
          },
          {
            type: "text",
            content:
              "**Strengthen Brand Positioning** — Elevate the premium look and feel of all category and landing pages to differentiate SLC in the competitive luxury furniture market.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "**Find the Perfect Piece Quickly** — Browse and filter products efficiently to find furniture that matches their style, size, and budget requirements.",
          },
          {
            type: "text",
            content:
              "**Make Confident Purchase Decisions** — Access detailed product information, lifestyle imagery, and customer reviews to make informed decisions on high-value purchases.",
          },
          {
            type: "text",
            content:
              "**Enjoy a Premium Browsing Experience** — Experience a visually rich, emotionally engaging journey that feels worthy of a luxury furniture brand.",
          },
        ],
      },
      {
        heading: "Solution 1: Story-Driven Hero + USP Trust Bar",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Solution 1 Story-Driven Hero + USP Trust Bar.jpg",
              alt: "Solution 1: Story-Driven Hero + USP Trust Bar",
            },
          },
          {
            type: "gif",
            gif: {
              src: "/images/case-studies/slc-category/Solution 1 - GIF CS5.gif",
              alt: "Solution 1 demo",
            },
          },
          {
            type: "text",
            content:
              "The new redesigned category pages now open with a bold, story-driven hero section and a prominent USP trust bar, replacing the static, text-light grids.",
          },
          {
            type: "text",
            content:
              "**Why it\u2019s better**",
          },
          {
            type: "text",
            content:
              "\u2022 **Lifestyle Hero** \u2014 The hero section was redesigned with full-bleed lifestyle imagery that tells a story about the SLC lifestyle \u2014 sophisticated, warm, and inviting. Headlines focus on the transformative power of great furniture rather than just product features.\n\n\u2022 **USP Trust Bar** \u2014 A persistent trust bar below the hero highlights SLC\u2019s key differentiators: Free White Glove Delivery, 100% Price Match, Easy 30-Day Returns, and Expert Design Consultation. This addresses purchase anxiety early in the browsing journey.",
          },
        ],
      },
      {
        heading: "Solution 2: First-View Optimized Paid-Landing Templates",
        items: [
          {
            type: "text",
            content:
              "\uD83D\uDE80 New Proposed User Task Flow Of Feature ID Page",
          },
          {
            type: "image-grid",
            images: [
              {
                src: "/images/case-studies/slc-category/Solution 2 User Flow.webp",
                alt: "Optimized paid-landing user flow",
                caption: "User Flow: The ad-to-category journey redesigned for clarity",
              },
              {
                src: "/images/case-studies/slc-category/Solution 2 Desktop.jpg",
                alt: "Solution 2 Desktop view",
                caption: "Desktop: First-view optimized landing template",
              },
            ],
          },
          {
            type: "gif",
            gif: {
              src: "/images/case-studies/slc-category/Solution 2 - GIF CS5.gif",
              alt: "Solution 2 demo",
            },
          },
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Solution 2 Mobile.jpg",
              alt: "Solution 2 Mobile view",
              caption: "Mobile: Touch-friendly landing template",
            },
          },
          {
            type: "embed",
            embed: {
              url: "https://marvelapp.com/prototype/cja4hj7?emb=1&iosapp=false&frameless=false",
              title: "Marvel prototype",
              width: 453,
              height: 864,
            },
          },
          {
            type: "text",
            content:
              "Paid landing pages now feature persuasive copy, trust elements, and a **Lead-Card module** within the first viewport, replacing static grids that offered no incentive to explore. The Lead-Card **auto-prefills SKU info** and connects users directly to an expert chat.",
          },
          {
            type: "text",
            content:
              "**Why it\u2019s better**",
          },
          {
            type: "text",
            content:
              "\u2022 **Immediate trust cues** and a strong first impression keep paid-ad visitors from bouncing before scrolling.\n\n\u2022 **Lead-Card drove 204 new leads in 90 days** \u2014 34% of total qualified leads post-launch.\n\n\u2022 **Add-to-Cart rate on ad-landing pages rose by 27%**, increasing ROI from paid campaigns.",
          },
        ],
      },
      {
        heading: "Solution 3: Touch-Friendly Category Design",
        items: [
          {
            type: "image",
            image: {
              src: "/images/case-studies/slc-category/Solution 3.jpg",
              alt: "Solution 3: Touch-Friendly Category Design",
            },
          },
          {
            type: "embed",
            embed: {
              url: "https://marvelapp.com/prototype/7438h8f?emb=1&iosapp=false&frameless=false",
              title: "Marvel prototype",
              width: 453,
              height: 864,
            },
          },
          {
            type: "text",
            content:
              "We replaced the old desktop-centric layout with a **mobile-first, filter-aware grid**. Product cards now auto-fit to screen size, with larger tap zones and optimized spacing for thumbs. Swatch previews and progressive disclosure make browsing smoother without pinch-to-zoom frustration.",
          },
          {
            type: "text",
            content:
              "**Why it\u2019s better**",
          },
          {
            type: "text",
            content:
              "\u2022 **Mobile users (78% of traffic) now navigate naturally without zooming**, ending 32% of rage clicks caused by small product cards.\n\n\u2022 **The adaptive design increased mobile category page dwell time by 21%** and cut bounce rates by 10% for this segment.\n\n\u2022 **Faster, thumb-friendly navigation** keeps the largest audience engaged, turning mobile into a stronger conversion channel.",
          },
        ],
      },
      {
        heading: "Challenges & Solutions",
        items: [
          {
            type: "text",
            content:
              "**Creating a flexible design system** for diverse ad campaigns while maintaining visual consistency. The solution was a **modular component library** that let marketing teams mix and match sections without breaking the brand experience.",
          },
          {
            type: "text",
            content:
              "**Balancing rich storytelling with fast load times** required optimized image sizes and lazy loading. Hero images were optimized for above-the-fold rendering while lifestyle galleries loaded progressively.",
          },
          {
            type: "text",
            content:
              "**Getting stakeholder buy-in** across marketing, product, and engineering. A cross-functional workshop and user testing videos of pain points helped align everyone around the need for change.",
          },
        ],
      },
      {
        heading: "Final Outcome",
        items: [
          {
            type: "text",
            content:
              "The redesigned category and paid landing pages resulted in significant improvements across all target metrics. We achieved a **34% increase in qualified leads**, a **9.6% decrease in bounce rate** (from 60.8% to 51.2%), a **24% increase in average session duration**, and a **27% increase in the Add-to-Cart rate** from ad-landing pages. All improvements were statistically significant (p &lt; 0.05).",
          },
        ],
      },
      {
        heading: "What I Would Have Done Next",
        items: [
          {
            type: "text",
            content:
              "**Personalized Category Experiences** — Implement AI-driven personalization to show different category content based on user behavior, past purchases, and browsing history.",
          },
          {
            type: "text",
            content:
              "**A/B Testing Framework** — Build a robust A/B testing framework to continuously optimize landing page variations and category page layouts for maximum conversion.",
          },
          {
            type: "text",
            content:
              "**Cross-Sell Recommendations** — Integrate smart cross-sell and upsell recommendations within the category browsing experience to increase average order value.",
          },
        ],
      },
      {
        heading: "Signing Off",
        items: [
          {
            type: "text",
            content:
              "This project reinforced my belief in **the power of cohesive design.** Every touchpoint from ad to purchase is an opportunity to build trust and delight users. I\u2019m grateful to Saswata and the SLC team for trusting me to transform their category and landing page experience.",
          },
          {
            type: "text",
            content:
              "Thank you for reading about my journey in redesigning the category and paid-landing experience for Sierra Living Concepts. If you\u2019d like to discuss **e-commerce UX or design systems, I\u2019d love to connect.**",
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
