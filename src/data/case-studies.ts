export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudySection {
  type: "text" | "image" | "image-grid" | "quote" | "metrics" | "embed";
  content?: string;
  image?: CaseStudyImage;
  images?: CaseStudyImage[];
  quote?: string;
  author?: string;
  metrics?: { value: string; label: string }[];
  embed?: { url: string; title: string };
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
    coverImage: "/images/project-4.jpeg",
    client: "Sierra Living Concepts (SLC)",
    role: "Product Designer",
    industry: "E-commerce",
    platform: "Web",
    timeline: "8 weeks",
    tags: ["E-commerce", "Checkout"],
    metric: { value: "26%", label: "Cart abandonment reduction" },
    sections: [
      {
        heading: "Overview",
        items: [
          {
            type: "text",
            content:
              "Sierra Living Concepts is a U.S.-based luxury furniture retailer with a significant online presence. Despite strong traffic from paid campaigns and organic search, the checkout funnel was losing 71% of users who added items to their cart. With an average order value of $1,200+, each abandonment represented substantial revenue loss.",
          },
          {
            type: "text",
            content:
              "I led a comprehensive redesign of the cart and checkout experience, analyzing 480k user sessions to identify friction points and optimize the path to purchase.",
          },
        ],
      },
      {
        heading: "The Problem",
        items: [
          {
            type: "text",
            content:
              "The checkout flow was a 5-step linear process with no progress indicator, requiring users to create an account before they could purchase. Form fields were dense, error messages were generic, and mobile checkout was nearly unusable with tiny tap targets and horizontal scrolling tables.",
          },
          {
            type: "quote",
            quote:
              "I was ready to buy a $2,000 sofa but the checkout asked me to create an account first. I didn't want another account and a password to remember, so I just left.",
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
        heading: "Analysis & Discovery",
        items: [
          {
            type: "text",
            content:
              "I conducted a deep quantitative analysis of 480k user sessions using Hotjar recordings, Google Analytics funnel analysis, and custom event tracking. Key findings: 34% of abandonment happened at the account creation step, 22% at shipping details, and 19% during payment.",
          },
          {
            type: "text",
            content:
              "Session recordings revealed specific pain points: users struggled with the ZIP code field (no formatting), the coupon code section was confusingly placed, and there was no way to edit quantities from the cart without navigating away.",
          },
        ],
      },
      {
        heading: "Redesign Strategy",
        items: [
          {
            type: "text",
            content:
              "I collapsed the 5-step flow into a single-page checkout with clear sections and inline validation. Guest checkout became the default option with account creation offered as an optional post-purchase step. The progress indicator showed exactly how many fields remained.",
          },
          {
            type: "text",
            content:
              "I introduced smart defaults: saved addresses for returning users, automatic tax calculation display, and estimated delivery dates shown before checkout. Trust signals (security badges, return policy, customer service chat) were placed at decision points.",
          },
        ],
      },
      {
        heading: "Visual & Interaction Design",
        items: [
          {
            type: "text",
            content:
              "The cart page was redesigned with inline quantity editing, real-time totals, and a persistent sticky summary sidebar. Product thumbnails remained visible throughout checkout for reassurance. Error messages were rewritten in plain language with specific instructions for resolution.",
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
    ],
  },
  {
    slug: "slc-category",
    title: "Creating a Unified Category & Paid-Landing Experience for Furniture Buyers",
    description:
      "Cohesive redesign delivering higher engagement, trust, and sales from ad click to category page for premium shoppers.",
    coverImage: "/images/project-5.jpeg",
    client: "Sierra Living Concepts (SLC)",
    role: "Product Designer",
    industry: "E-commerce",
    platform: "Web",
    timeline: "6 weeks",
    tags: ["UX Strategy", "E-commerce"],
    metric: { value: "Unified", label: "Category + Landing experience" },
    sections: [
      {
        heading: "Overview",
        items: [
          {
            type: "text",
            content:
              "Sierra Living Concepts ran significant paid advertising campaigns driving users to dedicated landing pages and category pages. However, the experience from ad click to browse-to-purchase was fragmented — landing pages had different visual styles, inconsistent information architecture, and no clear path to related categories.",
          },
          {
            type: "text",
            content:
              "I designed a unified experience that connected paid landing pages with category browsing, creating a seamless journey for high-intent luxury furniture shoppers.",
          },
        ],
      },
      {
        heading: "The Problem",
        items: [
          {
            type: "text",
            content:
              "Paid ads drove users to campaign-specific landing pages that looked completely different from the main site. When users tried to explore related categories, they were dumped into the generic category page with no context from their ad click. This disconnect caused a 63% bounce rate on ad traffic.",
          },
          {
            type: "quote",
            quote:
              "I clicked an ad for a 'Modern Living Room Set' and the landing page looked great. But when I clicked 'View Similar Items' it took me to a generic category that looked like a completely different store.",
            author: "User testing participant",
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
        heading: "Research & Strategy",
        items: [
          {
            type: "text",
            content:
              "I analyzed 12 weeks of ad campaign data, mapping the full user journey from impression to purchase. I identified 7 distinct user intents for category browsing (e.g., 'bargain hunting', 'style matching', 'room outfitting') and designed different entry points for each.",
          },
          {
            type: "text",
            content:
              "A content audit revealed that category pages had inconsistent filtering options, missing product counts, and no editorial content that helped users make confident decisions at the $1,000+ price point.",
          },
        ],
      },
      {
        heading: "Design Solution",
        items: [
          {
            type: "text",
            content:
              "I created a modular design system where landing pages and category pages shared core components: product cards, filter bars, breadcrumbs, and editorial modules. This ensured visual consistency while allowing campaign-specific messaging on landing pages.",
          },
          {
            type: "text",
            content:
              "The category page was restructured with a 'Smart Filter' system that adapted options based on the user's entry point. Ad clickers from a 'Mid-Century Modern' campaign would see mid-century styles pre-filtered with the option to expand.",
          },
        ],
      },
      {
        heading: "Key Features",
        items: [
          {
            type: "text",
            content:
              "Contextual Category Entry: Users arriving from ads land on a category page that inherits the campaign's visual theme and pre-applied filters, making the transition feel seamless.",
          },
          {
            type: "text",
            content:
              "Room Context Cards: Category pages include curated 'Room Sets' — pre-styled collections that show how products work together, increasing average basket size and reducing purchase hesitation.",
          },
        ],
      },
      {
        heading: "Results",
        items: [
          {
            type: "text",
            content:
              "The unified experience launched across all major ad campaigns and category pages. Ad-to-category bounce rate dropped from 63% to 38%. Pages per session increased from 2.1 to 4.8, and ad-to-purchase conversion improved by 120%.",
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
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
