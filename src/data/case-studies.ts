export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudySection {
  type: "text" | "image" | "image-grid" | "quote" | "metrics" | "embed" | "before-after";
  content?: string;
  image?: CaseStudyImage;
  images?: CaseStudyImage[];
  quote?: string;
  author?: string;
  metrics?: { value: string; label: string }[];
  embed?: { url: string; title: string };
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
  accentColor?: string;
  sections: { heading: string; items: CaseStudySection[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "budgify",
    title: "Designing Budgify: An Intuitive App for Tracking and Conquering Expenses",
    description:
      "This case study details my end-to-end design process for an app that simplifies expense tracking and helps users achieve their financial goals with clarity.",
    coverImage: "/images/case-studies/budgify/cover.jpeg",
    client: "Budgify / 10kdesigners",
    role: "Product Designer",
    industry: "Fintech",
    platform: "Android / iOS App",
    timeline: "8 weeks",
    tags: ["Fintech", "Mobile App"],
    metric: { value: "End-to-end", label: "Product Design" },
    accentColor: "#059669",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "For millions, managing money is overwhelming. While countless budgeting apps exist, they often create more friction than clarity, bombarding users with complex features and making the simple act of tracking expenses a chore. This leads to abandoned budgets and continued financial uncertainty.",
          },
          {
            type: "text",
            content:
              "The challenge? To design a user-centric budgeting app from the ground up that simplifies onboarding to get users tracking in minutes, makes expense logging fast and effortless, visualizes financial health with clarity to inform better decisions, and motivates users by celebrating their progress and achievements.",
          },
          {
            type: "text",
            content:
              "This case study details my end-to-end design process for Budgify, an app created to answer those questions. My focus was on four key principles: simplifying setup, streamlining expense entry, providing actionable insights, and building user motivation.",
          },
          {
            type: "text",
            content:
              "This project was completed during my time at the 10kdesigners cohort, with invaluable guidance from my mentors, Abhinav Chhikara and Jayneil Dalal.",
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
              "Quantitative Surveys: I designed and distributed a survey using Google Forms to gather statistical data on budgeting habits and challenges.",
          },
          {
            type: "text",
            content:
              "Qualitative Interviews: I conducted several one-on-one interviews, both in-person and over the phone, to gain deep, contextual insights into their financial behaviors.",
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
              "Allow me to introduce you to Pradhuman and Shivangi!",
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
              "Visualizing Shivangi's perspective to understand her needs and pain points.",
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
              "A user scenario illustrating 'A Day in Shivangi's Life' to visualize her real-world budgeting challenges.",
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
              "To pinpoint opportunities for improvement, I visualized Shivangi's frustrating process of trying to stick to a budget.",
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
              "The culmination of the design process: high-fidelity mockups, key UI screens, and an intro video demonstrating the core user flow and interactions of the app.",
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
              url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUoP1crrd4PsZE1JstBNjEe%2FBudget-Tracking-and-Daily-Expense-App---Jai%3Fpage-id%3D476%253A1338%26type%3Ddesign%26node-id%3D867-4307%26viewport%3D-331%252C364%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D867%253A4472",
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
    accentColor: "#0d9488",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "Gamification gave users motivation, but the homepage still failed to guide them. Many described it as \"a maze with no clear starting point.\" Without a sense of direction, users lost momentum, even if they were excited after onboarding.",
          },
          {
            type: "text",
            content:
              "My task was to transform confusion into clarity \u2014 redesigning the homepage as a daily wellness dashboard that simplified choices, highlighted progress, and encouraged consistent action.",
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
              "To uncover why users were disengaging after onboarding, we conducted 25+ user interviews and usability reviews focused on Nirva\u2019s homepage experience. Here\u2019s what we learned:",
          },
          {
            type: "text",
            content:
              "\u2022 \"I don\u2019t know where to start\" when I open the app \u2014 the screen feels cluttered and overwhelming.\n\n\u2022 Important tasks like yoga or diet logs are buried. \"I just scroll and give up sometimes.\"\n\n\u2022 The homepage doesn\u2019t guide me. \"It feels random,\" like a feed, not a plan for my day.\n\n\u2022 I want to see my upcoming sessions or progress, but \"I can\u2019t find it easily.\"\n\n\u2022 Without a clear order, I \"end up skipping things\" and closing the app.",
          },
          {
            type: "text",
            content:
              "These insights revealed the core issue: the homepage failed to provide clarity, prioritization, and direction \u2014 leaving users lost, unmotivated, and more likely to drop off.",
          },
        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "Improve User Retention \u2014 Redesign the homepage to guide users clearly, reducing drop-offs and increasing daily engagement.",
          },
          {
            type: "text",
            content:
              "Boost Task Completion \u2014 Surface the most important actions upfront to ensure higher completion of diet logs, yoga, and wellness tasks.",
          },
          {
            type: "text",
            content:
              "Strengthen Product Value \u2014 Position Nirva as a daily companion for wellness by making the homepage a central, engaging hub.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "Clarity & Direction \u2014 Help users know exactly where to start by providing a structured, prioritized daily plan.",
          },
          {
            type: "text",
            content:
              "Easy Access to Key Tasks \u2014 Simplify navigation so that core actions like yoga practice and diet logging are always within reach.",
          },
          {
            type: "text",
            content:
              "Confidence in Progress \u2014 Show clear progress and upcoming sessions, empowering users to track their journey and stay motivated.",
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
              "Revamping Nirva Health\u2019s homepage brought clarity to the user journey and created a stronger sense of direction. First task completion rose by 40%, while user confusion dropped by 65%. By surfacing key actions and progress at the start, the homepage transformed from a cluttered screen into a daily wellness dashboard \u2014 guiding users with confidence and improving overall retention.",
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
              "Refining the Information Hierarchy \u2014 Continue testing different layouts and priorities to ensure that the most critical tasks always remain visible without overwhelming users.",
          },
          {
            type: "text",
            content:
              "Personalization at Scale \u2014 Introduce dynamic homepage cards that adapt to each user\u2019s goals \u2014 whether focused on yoga, diet, or workshops \u2014 to make the experience feel more personal.",
          },
          {
            type: "text",
            content:
              "Deeper Data Tracking \u2014 Work with analytics teams to measure how each homepage element influences engagement and retention, then fine-tune based on user behavior.",
          },
          {
            type: "text",
            content:
              "Iterative Improvements \u2014 Treat the homepage as a living system \u2014 continuously learning from user feedback, A/B testing components, and evolving it into a central hub for growth.",
          },
        ],
      },
      {
        heading: "Peace",
        items: [
          {
            type: "text",
            content:
              "This project taught me the importance of clarity as a design principle. By redefining the homepage, I was able to turn confusion into confidence and give users a reason to return daily. I\u2019m thankful to my mentor Archi Kashmiriya, and stakeholders for trusting me with this responsibility, and I\u2019m proud of how the design created measurable impact.",
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
    accentColor: "#8b5cf6",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "Nirva Health is a Y Combinator-backed startup that combines Ayurveda and Yoga to help users achieve their wellness goals. However, the app faced three critical problems:",
          },
          {
            type: "text",
            content:
              "• Users lacked motivation to complete daily health tasks\n• Engagement dropped significantly after the first week\n• Retention suffered without a sense of progress or reward",
          },
          {
            type: "text",
            content:
              "The challenge? Design a gamification system that turns everyday wellness activities into an engaging, habit-building experience — without making it feel like a game.",
          },
          {
            type: "quote",
            quote:
              "I didn't just add coins and badges to the app. I designed a behavioral model that tapped into users' intrinsic motivation — making health tracking feel rewarding, not like a chore.",
            author: "Jai Sankhla, Product Designer",
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
              "To understand what truly motivates users to build healthy habits, we conducted 25+ user interviews with active and churned users. Here's what we uncovered:",
          },
          {
            type: "text",
            content:
              "• \"I want to feel like I'm making progress, even on days when I do something small.\"\n\n• \"If I miss a day, I feel like I've lost everything — there's no incentive to come back.\"\n\n• \"I wish the app celebrated my wins the way my fitness tracker does.\"\n\n• \"I compare my progress with friends in other apps — I'd love that here too.\"\n\n• \"I need a reason to open the app every day, something that pulls me in.\"",
          },
        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "Increase Daily Active Users — Drive habitual daily app usage by creating compelling motivation loops that make wellness tracking a rewarding daily ritual.",
          },
          {
            type: "text",
            content:
              "Boost Retention Rates — Reduce early-stage churn by giving users a reason to return beyond the first week of onboarding and initial assessment.",
          },
          {
            type: "text",
            content:
              "Drive Feature Adoption — Encourage users to explore and engage with underutilized features like meal planning, yoga sessions, and community challenges.",
          },
          {
            type: "text",
            content:
              "Differentiate from Competitors — Stand out in the crowded health & wellness market by offering a uniquely engaging, game-like experience that competitors lack.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "Stay Motivated — Users want to feel a sense of accomplishment and progress, even from small daily actions, to maintain their wellness journey.",
          },
          {
            type: "text",
            content:
              "Track Progress Visibly — Users need clear, visual indicators of their streaks, achievements, and milestones to feel their efforts are recognized.",
          },
          {
            type: "text",
            content:
              "Be Rewarded Consistently — Users want tangible rewards and recognition for their consistency, making the habit of returning to the app feel valuable.",
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
        heading: "Final Outcome",
        items: [
          {
            type: "text",
            content:
              "The gamification system launched and within weeks transformed user behavior. Daily active users doubled as the streak mechanic created a powerful pulling effect — users who maintained a 7+ day streak showed 94% retention at 30 days. Average session duration increased by 40% as users engaged with coins, levels, and challenges. The app evolved from a health tracker into a daily wellness companion that users genuinely looked forward to opening.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "2x", label: "Daily active engagement" },
              { value: "94%", label: "30-day retention (7+ day streak)" },
              { value: "+40%", label: "Average session duration" },
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
              "Personalized Streak Goals — Tailor streak targets and rewards based on individual user behavior and preferences, making the system adaptable to different motivation levels.",
          },
          {
            type: "text",
            content:
              "Social Accountability Circles — Introduce friend-based challenges and team streaks where users can motivate each other and share achievements within the app.",
          },
          {
            type: "text",
            content:
              "Deeper Behavioral Analytics — Implement machine learning to predict user churn risk and trigger personalized gamification interventions before users disengage.",
          },
          {
            type: "text",
            content:
              "Iterative Feature Expansion — Continuously A/B test new reward mechanics, limited-time events, and seasonal challenges to keep the gamification system fresh and engaging.",
          },
        ],
      },
      {
        heading: "Peace",
        items: [
          {
            type: "text",
            content:
              "This project taught me that great design isn't just about usability — it's about behavior. By understanding what drives human motivation, I was able to transform a functional health app into an experience users looked forward to every day. I'm grateful to the Nirva team for trusting me with this vision and to my mentor Archi Kashmiriya for pushing me to think deeper about behavioral design.",
          },
          {
            type: "text",
            content:
              "Thank you for reading about my journey in designing this gamification system. If you'd like to discuss behavioral design or gamification strategies, I'd love to connect.",
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
              "As the Lead UI/UX Designer, I was the sole designer on the project, collaborating closely with Saswata S. SenGupta (Sr. Product Manager) to tackle conversion challenges on the cart and checkout pages.",
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
              "Problem 1: Distractions and Overload on Cart Page — SLC's Cart Page suffered from its own success. It was so feature-rich that it overwhelmed shoppers. With too many distractions like excessive product recommendations and prominent marketing banners, customers frequently lost focus and abandoned their carts.",
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
              "Problem 2: High Checkout Abandonment Rate — The checkout process was a 5-step linear flow with no progress indicator. Users had to create an account before completing a purchase, creating an unnecessary barrier. Form fields were dense, error messages were generic, and the mobile checkout was nearly unusable with tiny tap targets and horizontal scrolling tables.",
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
              "Problem 3: Navigation and Form Field Issues — The checkout flow suffered from inconsistent navigation across mobile and desktop. On mobile, the 'Continue' button was hidden below the fold, causing users to think the page wasn't loading. On desktop, the multi-column layout created confusion about the natural reading order.",
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
              "Problem 4: Complex Delivery Options and Confusion — Delivery options were complex and unclear. Users couldn't see estimated delivery dates before checkout and were frustrated by unexpected shipping costs appearing late in the flow.",
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
              "Increase Conversion Rates — Streamline the checkout flow to reduce friction and drop-offs, converting more visitors into customers.",
          },
          {
            type: "text",
            content:
              "Decrease Cart Abandonment — Identify and eliminate pain points in the cart and checkout experience that cause users to leave before completing a purchase.",
          },
          {
            type: "text",
            content:
              "Boost Customer Confidence — Build trust and reassurance throughout the checkout process with clear communication about shipping, returns, and payment security.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "Quick & Easy Checkout — Users want to complete their purchase in as few steps as possible, without unnecessary obstacles or information requests.",
          },
          {
            type: "text",
            content:
              "Clear Pricing & Delivery Info — Users need transparency about total costs, taxes, shipping fees, and delivery timelines before committing to purchase.",
          },
          {
            type: "text",
            content:
              "Flexible Shopping Experience — Users want the ability to review, modify, and confirm their cart contents easily without losing progress.",
          },
        ],
      },
      {
        heading: "New Cart Checkout User Flow",
        items: [
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
            type: "before-after",
            before: {
              src: "/images/case-studies/slc-checkout/Problem 1.jpg",
              alt: "Cluttered cart page before redesign",
            },
            after: {
              src: "/images/case-studies/slc-checkout/Solution 1 Desktop.jpg",
              alt: "Distraction-free cart page after redesign",
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
              "• Inline Cart Editing — Users can update quantities, remove items, or save for later directly in the cart without navigating away.\n\n• Persistent Order Summary — A sticky sidebar that shows real-time totals, estimated shipping, and tax calculations as users make changes.\n\n• Trust Signals — Security badges, return policy highlights, and customer service access placed at strategic decision points.\n\n• Clear CTA Hierarchy — Primary 'Proceed to Checkout' button is visually dominant, with secondary actions like 'Continue Shopping' clearly de-emphasized.",
          },
        ],
      },
      {
        heading: "Solution 2: Streamlined Address Entry & Inline Validation",
        items: [
          {
            type: "before-after",
            before: {
              src: "/images/case-studies/slc-checkout/Problem 3.jpg",
              alt: "Complex form fields before redesign",
            },
            after: {
              src: "/images/case-studies/slc-checkout/Solution 3 Desktop.jpg",
              alt: "Streamlined address entry after redesign",
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
              "• Progressive Disclosure — Information is requested in logical stages, reducing cognitive load and making the form feel less intimidating.\n\n• Guest Checkout Default — No account required to purchase. Account creation is offered as an optional post-purchase step.\n\n• Smart Defaults — Saved addresses for returning users, automatic tax calculation display, and estimated delivery dates shown before checkout.\n\n• Inline Validation — Real-time field validation with clear error messages that tell users exactly how to fix the issue.",
          },
        ],
      },
      {
        heading: "Solution 3: Simplified Delivery Method Selector",
        items: [
          {
            type: "before-after",
            before: {
              src: "/images/case-studies/slc-checkout/Problem 4.webp",
              alt: "Complex delivery options before redesign",
            },
            after: {
              src: "/images/case-studies/slc-checkout/Solution 4 Desktop.jpg",
              alt: "Simplified delivery selector after redesign",
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
              "• Simplified Selector — Delivery options are presented in a clear, visual card layout showing price, speed, and estimated delivery date at a glance.\n\n• Estimated Delivery Dates — Real-time delivery date calculations based on ZIP code and product availability, shown before the user commits to purchase.\n\n• Cost Transparency — Shipping costs, taxes, and total are displayed upfront with no surprise fees at the final step.",
          },
        ],
      },
      {
        heading: "Challenges & Solutions",
        items: [
          {
            type: "text",
            content:
              "Handling the complexity of multi-page checkout flow while maintaining a seamless experience across devices was one of the biggest challenges. The solution required careful information architecture decisions — what information to show on each page, how to handle form state across pages, and how to provide clear feedback without overwhelming the user.",
          },
          {
            type: "text",
            content:
              "Balancing business requirements (account creation for marketing) with user needs (guest checkout) led to a compromise: guest checkout with optional post-purchase account creation. This single change removed the biggest barrier to purchase while still allowing SLC to capture user data after the transaction.",
          },
          {
            type: "text",
            content:
              "Ensuring responsive design consistency across devices meant designing mobile-first and progressively enhancing for desktop. Every component was tested at multiple breakpoints to guarantee a consistent experience.",
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
              "This project taught me the power of removing friction. Every field removed, every step collapsed, every error message rewritten — each small change compounded into a dramatically better experience. I'm grateful to Saswata and the SLC team for trusting me to redesign such a critical part of their business.",
          },
          {
            type: "text",
            content:
              "Thank you for reading about my journey in redesigning the cart and checkout experience for Sierra Living Concepts. If you'd like to discuss e-commerce UX or checkout optimization, I'd love to connect.",
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
    accentColor: "#6366f1",
    sections: [
      {
        heading: "Introduction",
        items: [
          {
            type: "text",
            content:
              "Sierra Living Concepts (SLC) is a U.S.-based luxury furniture retailer with a significant online presence. SLC ran extensive paid advertising campaigns across Google, Facebook, and Instagram, driving users to dedicated landing pages and category pages. However, the experience from ad click to browse-to-purchase was fragmented — landing pages had different visual styles, inconsistent information architecture, and no clear path to related categories.",
          },
          {
            type: "text",
            content:
              "As the Lead UI/UX Designer, I was the sole designer on this project, collaborating closely with Saswata S. SenGupta (Sr. Product Manager) to redesign the category and paid-landing page experience for SLC's premium furniture shoppers.",
          },
        ],
      },
      {
        heading: "My Role",
        items: [
          {
            type: "text",
            content:
              "I led the end-to-end design process — from research and strategy through wireframing, prototyping, visual design, and usability testing. My goal was to create a cohesive experience that would make every visit feel like entering a premium furniture showroom, whether users arrived from a paid ad or navigated directly to a category page.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "6 weeks", label: "Design timeline" },
              { value: "12+", label: "Unique ad campaigns" },
              { value: "480k", label: "User sessions analyzed" },
            ],
          },
        ],
      },
      {
        heading: "Problem?",
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
              "SLC's paid landing pages and category pages used generic layouts with minimal brand storytelling. High-end furniture shoppers expect a premium experience, but the pages felt transactional and lacked the emotional connection needed to justify $1,000+ purchases. The brand's unique value proposition around craftsmanship, sustainable materials, and curated collections was not communicated effectively.",
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
              "Paid landing pages suffered from low engagement above the fold. Users would arrive from an ad expecting a curated experience but were greeted with cluttered layouts, unclear value propositions, and weak visual hierarchy. The first-viewport content failed to capture attention or guide users toward meaningful exploration.",
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
              "Despite over 60% of traffic coming from mobile devices, the category pages were designed primarily for desktop. Mobile users faced small touch targets, content-heavy layouts that required excessive scrolling, and filtering interfaces that were nearly unusable on small screens. This created a frustrating browsing experience that drove users away.",
          },
          {
            type: "quote",
            quote:
              "I tried to filter by 'Mid-Century Modern' on my phone and the dropdown covered half the screen. I couldn't see what was being filtered. I just gave up and left.",
            author: "Mobile user, usability study",
          },
          {
            type: "metrics",
            metrics: [
              { value: "63%", label: "Ad traffic bounce rate" },
              { value: "2.1", label: "Avg pages per ad session" },
              { value: "0.8%", label: "Ad-to-purchase conversion" },
            ],
          },
        ],
      },
      {
        heading: "Business Goals",
        items: [
          {
            type: "text",
            content:
              "Increase Category Page Engagement — Deepen user engagement by improving content relevance and visual appeal, increasing time on page and product discovery.",
          },
          {
            type: "text",
            content:
              "Boost Paid Ad Conversion Rates — Improve conversion rates by creating a cohesive and compelling experience from ad click to purchase, reducing friction and drop-offs.",
          },
          {
            type: "text",
            content:
              "Strengthen Brand Positioning — Elevate the premium look and feel of all category and landing pages to differentiate SLC in the competitive luxury furniture market.",
          },
        ],
      },
      {
        heading: "User Goals",
        items: [
          {
            type: "text",
            content:
              "Find the Perfect Piece Quickly — Browse and filter products efficiently to find furniture that matches their style, size, and budget requirements.",
          },
          {
            type: "text",
            content:
              "Make Confident Purchase Decisions — Access detailed product information, lifestyle imagery, and customer reviews to make informed decisions on high-value purchases.",
          },
          {
            type: "text",
            content:
              "Enjoy a Premium Browsing Experience — Experience a visually rich, emotionally engaging journey that feels worthy of a luxury furniture brand.",
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
            type: "text",
            content:
              "• Lifestyle Hero — The hero section was redesigned with full-bleed lifestyle imagery that tells a story about the SLC lifestyle — sophisticated, warm, and inviting. Headlines focus on the transformative power of great furniture rather than just product features.\n\n• USP Trust Bar — A persistent trust bar below the hero highlights SLC's key differentiators: Free White Glove Delivery, 100% Price Match, Easy 30-Day Returns, and Expert Design Consultation. This addresses purchase anxiety early in the browsing journey.",
          },
        ],
      },
      {
        heading: "Solution 2: First-View Optimized Paid-Landing Templates",
        items: [
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
              {
                src: "/images/case-studies/slc-category/Solution 2 Mobile.jpg",
                alt: "Solution 2 Mobile view",
                caption: "Mobile: Touch-friendly landing template",
              },
            ],
          },
          {
            type: "text",
            content:
              "• Above-the-Fold Optimization — Every paid landing template was redesigned to deliver maximum impact within the first 3 seconds. Clear value propositions, compelling visuals, and a single primary CTA ensure users understand the offer immediately.\n\n• Consistent Brand Language — Templates maintain visual consistency across all campaigns while allowing for campaign-specific messaging and imagery. The design system ensures landing pages feel like a natural extension of the main site.\n\n• Mobile-First Approach — Templates are designed mobile-first with touch-friendly layouts, optimized image sizes, and streamlined content hierarchy that progressively enhances for desktop.",
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
            type: "text",
            content:
              "• Mobile-First Grid — The category page was rebuilt with a mobile-first grid system featuring larger product cards, optimized image ratios, and clear typography hierarchy that scales beautifully across devices.\n\n• Streamlined Filtering — A bottom-sheet filter panel replaces the traditional sidebar, making it easy for mobile users to narrow down products without leaving the browsing context.\n\n• Enhanced Product Cards — Each product card now shows key information at a glance: price, materials, dimensions, and customer rating, with clear add-to-cart and wishlist actions.",
          },
        ],
      },
      {
        heading: "Challenges & Solutions",
        items: [
          {
            type: "text",
            content:
              "One of the biggest challenges was creating a design system flexible enough to accommodate diverse ad campaigns while maintaining visual consistency. The solution was a modular component library that allowed marketing teams to mix and match sections without breaking the overall brand experience.",
          },
          {
            type: "text",
            content:
              "Balancing the need for rich storytelling content with fast page load times required careful optimization of image sizes and lazy loading strategies. Hero images were optimized for quick above-the-fold rendering while lifestyle galleries loaded progressively.",
          },
          {
            type: "text",
            content:
              "Getting buy-in from stakeholders across marketing, product, and engineering was another challenge. Creating a cross-functional workshop and sharing user testing videos of the pain points helped align everyone around the need for change.",
          },
        ],
      },
      {
        heading: "Final Outcome",
        items: [
          {
            type: "text",
            content:
              "The unified experience launched across SLC's top ad campaigns and category pages. Ad-to-category bounce rate dropped from 63% to 38%. Pages per session increased from 2.1 to 4.8, and ad-to-purchase conversion improved by 120%. The mobile category page saw a 34% increase in user engagement, and the USP trust bar contributed to a 15% decrease in pre-purchase support inquiries.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "-25pp", label: "Bounce rate reduction" },
              { value: "4.8", label: "Avg pages per ad session" },
              { value: "+120%", label: "Ad-to-purchase conversion" },
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
              "Personalized Category Experiences — Implement AI-driven personalization to show different category content based on user behavior, past purchases, and browsing history.",
          },
          {
            type: "text",
            content:
              "A/B Testing Framework — Build a robust A/B testing framework to continuously optimize landing page variations and category page layouts for maximum conversion.",
          },
          {
            type: "text",
            content:
              "Cross-Sell Recommendations — Integrate smart cross-sell and upsell recommendations within the category browsing experience to increase average order value.",
          },
        ],
      },
      {
        heading: "Signing Off with a Smile 😊",
        items: [
          {
            type: "text",
            content:
              "This project reinforced my belief in the power of cohesive design. Every touchpoint from ad to purchase is an opportunity to build trust and delight users. I'm grateful to Saswata and the SLC team for trusting me to transform their category and landing page experience.",
          },
          {
            type: "text",
            content:
              "Thank you for reading about my journey in redesigning the category and paid-landing experience for Sierra Living Concepts. If you'd like to discuss e-commerce UX or design systems, I'd love to connect.",
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
