import Casestudy from "@/screens/CaseStudyComp";

const data = [
  {
    hero: {
      title: "StayRealtor",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "StayRealtor is a comprehensive app designed to assist landlords and brokers in managing their properties efficiently. It streamlines property management tasks and ensures smooth interactions between property managers and tenants.",
      Client: "Staype",
      Industry: "Real Estate",
      Platform: "Mobile App",
      Objective:
        "Create a streamlined, user-friendly platform for landlords and brokers to manage properties and tenant interactions efficiently.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "Centralized Management",
          subheading:
            "Develop a platform for landlords and brokers to manage multiple properties in one place.",
        },
        {
          img: "url",
          heading: "Property Listing",
          subheading:
            "Enable easy listing and updating of property details for efficient management and client updates.",
        },
        {
          img: "url",
          heading: "Booking and Visits",
          subheading:
            "Provide a feature for scheduling property viewings and managing booking requests.",
        },
      ],
      Outcomes:
        "The StayRealtor app simplifies property management, improves communication, and provides real-time insights, leading to increased efficiency and tenant satisfaction.",
    },
  },
  {
    ourrole: [
      {
        heading: "User Research",
        icon: "UserFocus",
        list: [
          "Interviews & Surveys",
          "User Personas",
          "Journey Mapping",
          "Usability Testing",
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
        heading: "Asset Creation",
        icon: "Cube",
        list: [
          "Design System",
          "Fonts",
          "Illustrations & Icons",
          "Motion Graphics",
        ],
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
              item: "Difficulty in managing multiple properties and tasks from different platforms.",
            },
            {
              item: "Challenges in coordinating between landlords, brokers, and tenants.",
            },
            {
              item: "Insufficient data on property performance and tenant interactions.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "All property management tasks are consolidated into a single platform for easier oversight.",
            },
            {
              item: "Integrated channels for seamless interaction between landlords, brokers, and tenants.",
            },
            {
              item: "Provides up-to-date information and analytics to improve decision-making and property management.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        card: [
          {
            image: "url",
            list: [{ listItem: "Landlords" }],
            description:
              "“I want to manage all my properties in one place so that I can save time and increase efficiency.“",
          },
        ],
      },
      {
        card: [
          {
            image: "url",
            list: [{ listItem: "Real Estate Brokers" }],
            description:
              "“I want to list and update properties easily so that I can attract potential tenants quickly.“",
          },
        ],
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "John",
        smallDescription: "43, Landlord",
        type: "Individual",
        Gender: "Male",
        bio: "John owns multiple rental properties and seeks to efficiently manage them from one platform, streamline communication with brokers, and maximize rental income.",
        goals: [
          {
            item: "Efficiently manage all his properties from one platform.",
          },
          {
            item: "Quickly address tenant requests and maintenance issues.",
          },
          {
            item: "Maximize rental income through effective property management.",
          },
        ],
        painPoints: [
          {
            item: "Difficulty in managing multiple properties simultaneously.",
          },
          {
            item: "Lack of a streamlined communication channel with brokers.",
          },
          {
            item: "Inefficient handling of maintenance and repair requests.",
          },
        ],
      },
      {
        name: "Emily",
        smallDescription: "32, Broker",
        type: "Individual",
        Gender: "Female",
        bio: "Emily manages property listings for clients and aims to easily list and update properties, track tenant inquiries, and gain real-time insights into property performance.",
        goals: [
          {
            item: "Easily list and update property details.",
          },
          {
            item: "Track and manage tenant applications and inquiries.",
          },
          {
            item: "Provide clients with timely updates and property insights.",
          },
        ],
        painPoints: [
          {
            item: "Time-consuming process for listing and updating properties.",
          },
          {
            item: "Inefficient tracking of tenant inquiries and applications.",
          },
          {
            item: "Lack of real-time data and insights on property performance.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Centralized Property Management",
        subHeading: "Manage multiple properties from a single platform.",
      },
      {
        media: "url",
        heading: "Property Listing Management",
        subHeading: "Easy listing and updating of property details.",
      },
      {
        media: "url",
        heading: "Booking and Visits",
        subHeading: "Schedule property viewings and manage booking requests.",
      },
      {
        media: "url",
        heading: "AI Recommendation",
        subHeading: "Get AI-based property recommendations.",
      },
      {
        media: "url",
        heading: "Lead Management",
        subHeading: "Efficiently manage tenant leads and inquiries.",
      },
      {
        media: "url",
        heading: "Detailed Property Information",
        subHeading: "Get comprehensive property details.",
      },
      {
        media: "url",
        heading: "Bill & Agreement Generator",
        subHeading: "Generate bills, receipts, and agreements seamlessly.",
      },
    ],
  },
  {
    uxAnalysis: [
      {
        media: "url",
        type: "Typography",
        description:
          "Satoshi font for modern, clean lines and geometric design.",
      },
      {
        media: "url",
        type: "Color Palette",
        description:
          "Primary: #6A71F1, Secondary: #EBF1FF, #17c964, #F5A524, #F31260",
      },
      {
        media: "url",
        type: "Icons",
        description: "Phosphor Icons for a modern and versatile aesthetic.",
      },
    ],
  },
];
const StayRealtor = () => {
  return (
    <>
      <Casestudy data={data} />
    </>
  );
};

export default StayRealtor;
