import Casestudy from "@/screens/CaseStudyComp";

const data = [
  {
    hero: {
      title: "Staype",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "Staype is an innovative app designed to simplify the process of finding and managing rental properties. With a focus on tenant needs, Staype streamlines the rental experience from initial search to moving in and managing household services.",
      Client: "Staype",
      Industry: "Real Estate",
      Platform: "Mobile App",
      Objective:
        "Design and develop a versatile app for tenants that adapts to different stages of the rental process, from searching for properties to managing post-move-in services.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "Comprehensive App Levels",
          subheading:
            "Design three app levels: browsing, booking, and home management.",
        },
        {
          img: "url",
          heading: "User-Friendly Interface",
          subheading:
            "Create an intuitive design for seamless navigation and interaction.",
        },
        {
          img: "url",
          heading: "Service Integration",
          subheading:
            "Provide features for managing bookings, property visits, and services.",
        },
      ],
      Outcomes:
        "Successfully created a user-friendly app that supports tenants at various stages, offering features like property search, booking management, and household services, enhancing the overall rental experience.",
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
    ],
  },
  {
    coreProblem: {
      problems: [
        {
          image: "url",
          list: [
            {
              item: "Difficulty in finding and comparing rental options.",
            },
            {
              item: "Unclear pricing and hidden fees.",
            },
            {
              item: "Difficulty in managing post-move-in services and household needs.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "Comprehensive property listings and user-friendly booking process.",
            },
            {
              item: "Clear information on rental costs and fees.",
            },
            {
              item: "Access to cleaning, maintenance, and other household management tools.",
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
            list: [{ listItem: "Explorers" }],
            description:
              "“I want to search for available flats so that I can find options that fit my budget and preferences.“",
          },
        ],
      },
      {
        card: [
          {
            image: "url",
            list: [{ listItem: "Bookers" }],
            description:
              "“I want to receive confirmation of my booking and payment so that I know my reservation is secured.“",
          },
        ],
      },
      {
        card: [
          {
            image: "url",
            list: [{ listItem: "Residents" }],
            description:
              "“I want to access and manage household services like cleaning & maintenance so that I can keep my new home in good condition.“",
          },
        ],
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "John",
        smallDescription: "29, Explorer",
        type: "Individual",
        Gender: "Male",
        occupation: "Software Developer",
        bio: "John is a software developer who is currently looking for an affordable apartment. He is focused on finding properties close to his workplace and relies on detailed property information to make informed decisions.",
        goals: [
          {
            item: "Find an affordable apartment.",
          },
          {
            item: "Locate properties near his workplace.",
          },
          {
            item: "View detailed property information.",
          },
        ],
        painPoints: [
          {
            item: "Limited property listings.",
          },
          {
            item: "Incomplete property details.",
          },
          {
            item: "Difficulty in arranging visits.",
          },
        ],
      },
      {
        name: "Sarah",
        smallDescription: "32, Booker",
        type: "Individual",
        Gender: "Female",
        occupation: "Marketing Manager",
        bio: "Sarah is a marketing manager who has just completed the booking process for her new apartment. She is now focused on confirming her booking and payment, planning her move-in logistics, and ensuring that the lease terms are clear and straightforward.",
        goals: [
          {
            item: "Confirm booking and payment.",
          },
          {
            item: "Plan move-in logistics.",
          },
          {
            item: "Ensure lease terms are clear.",
          },
        ],
        painPoints: [
          {
            item: "Difficulty in finding available rental properties that meet her criteria.",
          },
          {
            item: "Lack of reliable and detailed information about properties.",
          },
          {
            item: "Uncertainty about the trustworthiness of landlords and brokers.",
          },
        ],
      },
      {
        name: "Michael",
        smallDescription: "31, Resident",
        type: "Individual",
        Gender: "Male",
        occupation: "Finance Analyst",
        bio: "Michael is a finance analyst who has recently moved into his new home. He is now focused on managing his household efficiently, utilizing various services provided by the app, and keeping track of his maintenance requests and bills.",
        goals: [
          {
            item: "Efficiently manage household tasks.",
          },
          {
            item: "Utilize services like cleaning and maintenance.",
          },
          {
            item: "Track and manage bills and receipts.",
          },
        ],
        painPoints: [
          {
            item: "Difficulty in coordinating household services.",
          },
          {
            item: "Managing multiple bills and receipts.",
          },
          {
            item: "Ensuring timely maintenance and repairs.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Find Flats for Rent",
        subHeading:
          "Browse and search for rental properties based on location, price, and amenities.",
      },
      {
        media: "url",
        heading: "Detailed Property Information",
        subHeading:
          "Access comprehensive details about properties, including photos and descriptions.",
      },
      {
        media: "url",
        heading: "Booking and Visits",
        subHeading:
          "Manage property viewings, and handle bookings and payments.",
      },
      {
        media: "url",
        heading: "Services",
        subHeading:
          "Request additional services such as cleaning and maintenance.",
      },
      {
        media: "url",
        heading: "Household Management",
        subHeading: "Tools for managing household tasks and utilities.",
      },
    ],
  },
  {
    uxAnalysis: [
      {
        media: "url",
        type: "Typography",
        description:
          "Satoshi is a modern font known for its clean lines and geometric design. Its balanced proportions and clarity make it ideal for both digital and print projects.",
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
const Staype = () => {
  return (
    <>
      <Casestudy data={data} />
    </>
  );
};

export default Staype;
