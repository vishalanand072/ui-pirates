import Casestudy from "@/screens/CaseStudyComp";
import StayRealorHero from "./hero";

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
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724780893/cr1_f3xzls.png",
          heading: "Centralized Management",
          subheading:
            "Develop a platform for landlords and brokers to manage multiple properties in one place.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724780893/cr2_mdyh3h.png",
          heading: "Property Listing",
          subheading:
            "Enable easy listing and updating of property details for efficient management and client updates.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724780894/cr3_kwsufj.png",
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
    ourRole: [
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
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724654462/image_18_kva9ki.svg",
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
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724654460/image_19_ovkaxp.svg",
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
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780899/ug1_jormc8.jpg",
        list: [{ listItem: "Landlords" }],
        description:
          "“I want to manage all my properties in one place so that I can save time and increase efficiency.“",
      },
      {
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780900/ug2_vbcazx.jpg",
        list: [{ listItem: "Real Estate Brokers" }],
        description:
          "“I want to list and update properties easily so that I can attract potential tenants quickly.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "John",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780898/up1_vmtcnr.jpg",
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
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780896/up2_jdxruk.png",
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
    visualUIElements: {
      font: "Nunito",
      fontDescription:
        "The Nunito font blends rounded forms with balanced proportions for a friendly and modern look, enhancing readability and perfect for digital interfaces.",
      primaryColor: "#6A4DFF",
      colorPilatr: ["#6A4DFF", "#2979FF", "#17C964", "#F5A524", "#F31260"],
      gradient: {
        start: "#6A4DFF",
        end: "#64B5F6",
      },
      uiElementId: "UIStayRealtor", //don't edit this id
    },
  },
  {
    uxAnalysis: [
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391680/image_43_hwvqzg.svg",
      },
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391680/image_42_yasr0l.svg",
      },
    ],
  },
];
const StayRealtor = () => {
  return (
    <>
      <StayRealorHero />
      <Casestudy data={data} />
    </>
  );
};

export default StayRealtor;
