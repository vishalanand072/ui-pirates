import Casestudy from "@/screens/CaseStudyComp";
import StayPeHero from "./hero";
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
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781253/cr1_vbg4ky.png",
          heading: "Comprehensive App Levels",
          subheading:
            "Design three app levels: browsing, booking, and home management.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781251/cr2_prrdil.png",
          heading: "User-Friendly Interface",
          subheading:
            "Create an intuitive design for seamless navigation and interaction.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781251/cr3_ydqvgr.png",
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
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724654462/image_18_kva9ki.svg",
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
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724654460/image_19_ovkaxp.svg",
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
        heading: "Business Owners",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724781255/ug1_jahgxq.png",
        list: [
          { listItem: "Local shop owners, etc." },
          { listItem: "Small Businesses" },
        ],
        description:
          "“I want to manage all aspects of my business in one place so that I can save time & improve efficiency.“",
      },
      {
        heading: "Consumers",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724781255/ug2_baeyuu.png",
        list: [{ listItem: "Individuals looking to verify businesses" }],
        discreption:
          "“I want to easily search & verify businesses so that I can make informed decisions about where to spend my money.“",
      },
      {
        heading: "Freelancers",
        image:
          "urhttps://res.cloudinary.com/damm9iwho/image/upload/v1724781256/ug3_hpyjyv.pngl",
        list: [{ listItem: "Freelancers using the app for payment" }],
        discreption:
          "“I want to manage my finances and verify clients to ensure secure transactions and protect my earnings.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "John",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724781264/up1_swmslo.png",
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
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724781256/up2_os4x5e.png",
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
        image: "url",
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
      uiElementId: "UIStayPe", //don't edit this id
    },
  },
  {
    uxAnalysis: [
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391269/image_42_uwucul.svg",
      },
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391269/image_43_k06eul.svg",
      },
    ],
  },
];
const Staype = () => {
  return (
    <>
      <StayPeHero />
      <Casestudy data={data} />
    </>
  );
};

export default Staype;
