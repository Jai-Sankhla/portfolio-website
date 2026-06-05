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
    coverImage: "/images/project-2.jpeg",
    client: "Nirva Health",
    role: "Product Designer",
    industry: "Health & Wellness",
    platform: "Web",
    timeline: "6 weeks",
    tags: ["UX Redesign", "Web"],
    metric: { value: "40%", label: "First task completion increase" },
    sections: [
      {
        heading: "Overview",
        items: [
          {
            type: "text",
            content:
              "Nirva Health is a digital wellness platform offering personalised health plans, expert consultations, and community support. The existing homepage had high bounce rates and users struggled to find key features — only 32% could complete their primary task within the first 30 seconds.",
          },
          {
            type: "text",
            content:
              "I led a complete homepage redesign focused on clarity, hierarchy, and guiding users toward meaningful actions within seconds of landing.",
          },
        ],
      },
      {
        heading: "The Problem",
        items: [
          {
            type: "text",
            content:
              "The original homepage tried to showcase everything at once — 7 different CTAs above the fold, carousel sliders that hid critical information, and inconsistent visual hierarchy. Analytics showed 58% of users never scrolled past the first screen.",
          },
          {
            type: "quote",
            quote:
              "I landed on the page and didn't know where to click. There were buttons everywhere but I couldn't tell which one would actually help me start a plan.",
            author: "User testing participant",
          },
          {
            type: "metrics",
            metrics: [
              { value: "58%", label: "Users never scrolled past fold" },
              { value: "32%", label: "First-task completion rate" },
              { value: "68%", label: "Bounce rate on homepage" },
            ],
          },
        ],
      },
      {
        heading: "Research & Analysis",
        items: [
          {
            type: "text",
            content:
              "I conducted a comprehensive audit including heatmap analysis, session recordings, and 15 user interviews. The heatmaps revealed users consistently clicked on non-interactive elements, indicating a mismatch between visual affordances and actual functionality.",
          },
          {
            type: "text",
            content:
              "A competitive analysis of 8 health & wellness platforms identified patterns in information hierarchy and content density that leading sites used to drive engagement.",
          },
        ],
      },
      {
        heading: "Design Approach",
        items: [
          {
            type: "text",
            content:
              "I simplified the above-the-fold area to a single primary CTA with one supporting secondary action. The value proposition was rewritten to be actionable and user-centric: 'Start Your Wellness Journey' replaced 'Learn More About Our Platform'.",
          },
          {
            type: "text",
            content:
              "I introduced a clear visual narrative — guiding users from awareness (testimonials/social proof) to consideration (feature highlights) to conversion (plan selection). Each section had one clear purpose, with consistent card-based layouts throughout.",
          },
        ],
      },
      {
        heading: "Visual Design",
        items: [
          {
            type: "text",
            content:
              "I established a calm, trustworthy visual system using warm neutrals and accent greens. Photography was used intentionally to evoke emotional connection rather than as decorative filler. Typography was refined to a clear 3-level hierarchy.",
          },
        ],
      },
      {
        heading: "Results",
        items: [
          {
            type: "text",
            content:
              "The redesigned homepage launched with A/B testing against the original. The new design won in every metric, with first-task completion improving by 40% and bounce rate dropping by 25 percentage points.",
          },
          {
            type: "metrics",
            metrics: [
              { value: "40%", label: "First-task completion increase" },
              { value: "-25pp", label: "Bounce rate reduction" },
              { value: "2.3x", label: "CTA click-through rate" },
            ],
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
    coverImage: "/images/project-3.jpeg",
    client: "Nirva Health",
    role: "Product Designer",
    industry: "Health & Wellness",
    platform: "iOS & Android",
    timeline: "10 weeks",
    tags: ["Gamification", "Health"],
    metric: { value: "2x", label: "Daily engagement" },
    sections: [
      {
        heading: "Overview",
        items: [
          {
            type: "text",
            content:
              "Nirva Health's mobile app faced a classic retention challenge: users would sign up, complete their initial health assessment, and then drop off within the first week. The core wellness activities (logging meals, tracking workouts, completing plans) felt like chores rather than rewarding habits.",
          },
          {
            type: "text",
            content:
              "I designed a comprehensive gamification system that transformed the user experience from obligation-based to motivation-based, resulting in a 2x increase in daily active engagement.",
          },
        ],
      },
      {
        heading: "The Problem",
        items: [
          {
            type: "text",
            content:
              "Retention data showed a sharp drop-off after day 3. Users completed the initial onboarding but didn't return because there was no immediate reward or sense of progress. The app provided long-term health benefits but lacked short-term motivation loops.",
          },
          {
            type: "quote",
            quote:
              "I did the assessment and planned my meals for the week, but by day 4 I just forgot about it. There was nothing pulling me back in.",
            author: "Churned user, interview",
          },
          {
            type: "metrics",
            metrics: [
              { value: "73%", label: "Drop-off by day 7" },
              { value: "4.2", label: "Avg sessions in week 1" },
              { value: "1.1", label: "Avg sessions in week 2" },
            ],
          },
        ],
      },
      {
        heading: "Research & Behavioral Design",
        items: [
          {
            type: "text",
            content:
              "I studied behavioral psychology frameworks including BJ Fogg's Behavior Model (Motivation + Ability + Trigger) and Octalysis gamification framework. I identified that users had the ability (the app was easy to use) but lacked both motivation and triggers.",
          },
          {
            type: "text",
            content:
              "I mapped user journeys to identify 'moment of truth' points where gamification elements could have the highest impact — morning (planning), post-workout (achievement), and evening (reflection).",
          },
        ],
      },
      {
        heading: "Gamification System Design",
        items: [
          {
            type: "text",
            content:
              "The system had four interconnected mechanics: Streaks (consecutive day tracking with visual flame icons), Coins (earned for every logged activity), Levels (unlocking new features and badges), and Challenges (weekly goals with social competition).",
          },
          {
            type: "text",
            content:
              "Each mechanic fed into the next — completing daily streaks earned bonus coins, reaching coin milestones unlocked new levels, and levels gave access to exclusive challenges. This created a compounding motivation loop.",
          },
        ],
      },
      {
        heading: "Visual & Interaction Design",
        items: [
          {
            type: "text",
            content:
              "I designed celebratory micro-interactions for every achievement — animations, haptic feedback, and confetti effects. The streak counter was placed prominently on the dashboard as a persistent visual anchor. Progress bars and milestone markers provided clear visibility into future rewards.",
          },
        ],
      },
      {
        heading: "Results",
        items: [
          {
            type: "text",
            content:
              "Within 4 weeks of launch, daily active users doubled. The streak mechanic proved most effective — users who maintained a 7+ day streak had a 94% retention rate at 30 days. Average session duration increased by 40% as users engaged with gamification features.",
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
