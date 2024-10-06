import Casestudy from "@/screens/CaseStudyComp";
import IonHero from "./hero";
const data = [
  {
    hero: {
      title: "ION",
      subtitle: "",
      bgimage:
        "https://res.cloudinary.com/damm9iwho/image/upload/v1724780684/hero_ooyhtx.png",
    },
  },
  {
    overview: {
      overview:
        "ION is a platform for borrowing products from nearby people, aiming to revolutionize peer-to-peer sharing commerce.",
      Client: "ION",
      Industry: "Sharing Economy, Rental",
      Platform: "Mobile App",
      Objective:
        "Create a visually appealing, user-friendly mobile app that facilitates easy borrowing and lending of products, enhancing user trust and security.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724780681/cr1_d6jcdh.png",
          heading: "Unified Platform",
          subheading:
            "Create a centralized platform for borrowing and lending various products.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724780683/cr2_ziip5o.png",
          heading: "Time and Cost Efficiency",
          subheading:
            "Enable users to save time and money through competitive pricing and easy access to products.",
        },
      ],
      Outcomes:
        "The ION platform featured an intuitive design, robust security measures, and effective integration with Shopify, leading to increased user engagement, satisfaction, and a seamless borrowing and lending experience.",
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
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724780683/cr2_ziip5o.png",
          list: [
            {
              item: "For Borrowers: Time-consuming search for rental products.",
            },
            {
              item: "For Borrowers: Trust issues with product quality and authenticity.",
            },
            {
              item: "For Borrowers: Lack of transparent pricing.",
            },
            {
              item: "For Lenders: Security concerns with verifying borrowers.",
            },
            {
              item: "For Lenders: Limited market insights and customer reach.",
            },
            {
              item: "For Lenders: High customer acquisition costs.",
            },
          ],
        },
      ],
      solutions: [
        {
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724780683/cr2_ziip5o.png",
          list: [
            {
              item: "For Consumers: Save time with centralized access to products.",
            },
            {
              item: "For Consumers: Save money with competitive pricing.",
            },
            {
              item: "For Consumers: Build trust through quality control and reviews.",
            },
            {
              item: "For Lenders: Ensure security with borrower verification.",
            },
            {
              item: "For Lenders: Gain better insights with real-time data.",
            },
            {
              item: "For Lenders: Save on marketing costs.",
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
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780683/ug1_okdign.png",
        list: [{ listItem: "Borrowers" }],
        description:
          "“I want quick access to a variety of products so that I can find what I need without hassle.“",
      },
      {
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780686/ug2_nhe2mg.png",
        list: [{ listItem: "Lenders" }],
        description:
          "“I want a secure platform to rent out my products to verified borrowers and increase my income.“",
      },
      {
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780688/ug3_h6itsw.png",
        list: [{ listItem: "Lenders" }],
        description:
          "“I want a secure platform to rent out my products to verified borrowers and increase my income.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "John",
        smallDescription: "30, Borrower",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780688/up1_j3iixb.png",
        type: "Individual",
        Gender: "Male",
        Occupation: "Marketing Manager",
        bio: "John is a 30-year-old marketing manager who often needs various tools and equipment for short-term projects. He prefers borrowing over buying to save costs.",
        goals: [
          {
            item: "Access a wide range of products quickly.",
          },
          {
            item: "Ensure fair pricing.",
          },
          {
            item: "Rent items without worrying about quality issues.",
          },
        ],
        painPoints: [
          {
            item: "Time-consuming searches.",
          },
          {
            item: "Lack of trust in product quality.",
          },
          {
            item: "Concerns about unfair pricing.",
          },
        ],
      },
      {
        name: "Jane",
        smallDescription: "40, Lender",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724780692/up2_c9iurf.png",
        type: "Individual",
        Gender: "Female",
        Occupation: "Business Owner",
        bio: "Jane is a 40-year-old small business owner who rents out electronic gadgets and home appliances to supplement her income.",
        goals: [
          {
            item: "Ensure security and verification of borrowers.",
          },
          {
            item: "Increase visibility and reach of her products.",
          },
          {
            item: "Reduce marketing costs.",
          },
        ],
        painPoints: [
          {
            item: "Security concerns about lending items.",
          },
          {
            item: "Limited knowledge about customer needs.",
          },
          {
            item: "High cost of customer acquisition.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Explore Thousands of Products",
        subHeading:
          "Search by price, location, and popularity, and explore by category or genre.",
      },
      {
        media: "url",
        heading: "Select, Book Plan & Pay",
        subHeading:
          "Choose booking dates, check product info, reviews, and terms & conditions.",
      },
      {
        media: "url",
        heading: "Start/Stop Booking",
        subHeading: "Scan lender's QR code to start or stop booking.",
      },
      {
        media: "url",
        heading: "Add Products",
        subHeading: "Lenders can add products and manage inventory.",
      },
      {
        media: "url",
        heading: "Receive Bookings",
        subHeading: "Get booking updates and view booking information.",
      },
      {
        media: "url",
        heading: "Get Product Stats",
        subHeading:
          "Check position on leaderboard and see live product search updates.",
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
      uiElementId: "UIION", //don't edit this id
    },
  },
  {
    uxAnalysis: [],
  },
];
const ION = () => {
  return (
    <>
      <IonHero />
      <Casestudy data={data} />
    </>
  );
};

export default ION;
