import Casestudy from "@/screens/CaseStudyComp";
import FrytxHero from "./hero";

const data = [
  {
    hero: {
      title: "Frytx",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "FrytX is a versatile application designed to empower businesses and consumers by offering robust solutions for business management, complaint handling, business verification, and financial organization.",
      Client: "Frytx",
      Industry: "Technology, Business Management",
      Platform: "Mobile Application",
      Objective:
        "To create a mobile application for FrytX that empowers businesses and consumers by offering robust solutions for business management, complaint handling, business verification, and financial organization.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "Unified Platform",
          subheading:
            "Develop a platform integrating business management, complaint handling, ratings, reviews, and verification.",
        },
        {
          img: "url",
          heading: "Complaint Management",
          subheading:
            "Enable the efficient tracking and swift resolution of customer complaints.",
        },
        {
          img: "url",
          heading: "Business Verification",
          subheading:
            "Implement a system for verifying business credentials to enhance trust and transparency.",
        },
      ],
      Outcomes:
        "A comprehensive and user-friendly platform that streamlines business management, ensures effective complaint handling, verifies businesses for trustworthiness, and organizes financial operations, thereby enhancing overall efficiency and customer satisfaction.",
    },
  },
  {
    ourRole: [
      {
        heading: "User Research",
        icon: "UserFocus",
        list: [
          "Interviews and Surveys",
          "User Personas",
          "Journey Mapping",
          "Usability Testing",
        ],
      },
      {
        heading: "Asset Creation",
        icon: "Cube",
        list: [
          "Design System",
          "Fonts",
          "Illustrations & Icons",
          "Motion Graphics",
        ],
      },
      {
        heading: "UI/UX Design",
        icon: "PenNib",
        list: [
          "Wireframing",
          "Prototyping",
          "Visual Design",
          "Interaction Design",
        ],
      },
      {
        heading: "Development & Integration",
        icon: "Code",
        list: ["Front End Development", "Integration", "Back End Development"],
      },
    ],
  },
  {
    coreProblem: {
      problems: [
        {
          image: "url",
          list: [
            {
              item: "Fragmented tools and processes for business management.",
            },
            {
              item: "Inefficient complaint handling and customer dispute resolution.",
            },
            {
              item: "Lack of transparent business verification processes.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "FrytX integrates multiple business management tools into a unified platform, streamlining operations.",
            },
            {
              item: "Efficient complaint management system ensures timely resolution of customer issues.",
            },
            {
              item: "Robust business verification process enhances transparency and builds trust with consumers.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        heading: "Business Owners",
        image: "url",
        list: [
          { listItem: "Local shop owners, etc." },
          { listItem: "Small Businesses" },
        ],
        description:
          "“I want to manage all aspects of my business in one place so that I can save time & improve efficiency.“",
      },
      {
        heading: "Consumers",
        image: "url",
        list: [{ listItem: "Individuals looking to verify businesses" }],
        description:
          "“I want to easily search & verify businesses so that I can make informed decisions about where to spend my money.“",
      },
      {
        heading: "Freelancers",
        image: "url",
        list: [{ listItem: "Freelancers using the app for payment" }],
        description:
          "“I want to manage my finances and verify clients to ensure secure transactions and protect my earnings.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "Sarah",
        smallDiscription: "32,  Business Owner",
        type: "Individual",
        Gender: "Female",
        Occupation: "Cafe Owner",
        bio: "Sarah, a local cafe owner, needs a comprehensive tool to manage all aspects of her business. This will allow her to streamline operations and save valuable time. With everything in one place, she can improve efficiency and focus on growing her cafe.",
        goals: [
          {
            item: "Efficiently manage time and tasks.",
          },
          {
            item: "Promptly address customer feedback.",
          },
          {
            item: "Uphold and enhance cafe reputation.",
          },
        ],
        painPoints: [
          {
            item: "Struggling to manage time and tasks.",
          },
          {
            item: "Difficulty in organizing finances effectively.",
          },
          {
            item: "Delays in responding to customer reviews.",
          },
        ],
      },
      {
        name: "Emma",
        smallDiscription: "29,  Consumer",
        type: "Corporate",
        Gender: "Female",
        Occupation: "HR Manager",
        bio: "Emma, an HR manager, needs a tool to easily search for and verify businesses. This will help her make informed decisions about where to allocate company resources. Ensuring reliability and credibility in her choices is crucial for supporting company operations.",
        goals: [
          {
            item: "Find reliable businesses easily.",
          },
          {
            item: "Make informed decisions based on reviews.",
          },
        ],
        painPoints: [
          {
            item: "Difficulty trusting online reviews fully.",
          },
          {
            item: "Challenge in verifying business credentials.",
          },
        ],
      },
      {
        name: "Arjun",
        smallDiscription: "27, Freelancer",
        type: "Individual",
        Gender: "Male",
        Occupation: "Graphic Designer",
        bio: "Arjun is a freelance graphic designer who needs an app that ensures secure transactions, manages client communications efficiently, and verifies client credibility to build trust and strong business relationships.",
        goals: [
          {
            item: "Ensure secure transactions.",
          },
          {
            item: "Manage client communications.",
          },
          {
            item: "Verify client credibility.",
          },
        ],
        painPoints: [
          {
            item: "Delayed payments.",
          },
          {
            item: "Managing multiple clients.",
          },
          {
            item: "Verifying the legitimacy of new clients.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Business Management",
        subHeading:
          "Centralized tools for managing various aspects of business operations.",
      },
      {
        media: "url",
        heading: "Complaint Management",
        subHeading: "Track and resolve customer complaints efficiently.",
      },
      {
        media: "url",
        heading: "Business Verification",
        subHeading: "Verify business credentials to build trust",
      },
      {
        media: "url",
        heading: "Financial Organization",
        subHeading: "Manage payments and financial transactions securely.",
      },
    ],
  },
  {
    uxAnalysis: [{ media: "url" }, { media: "url" }, { media: "url" }],
  },
];
const Frytx = () => {
  return (
    <>
      <FrytxHero />
      <Casestudy data={data} />
    </>
  );
};

export default Frytx;
