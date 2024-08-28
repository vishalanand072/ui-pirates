import Casestudy from "@/screens/CaseStudyComp";
import RingsAndIHero from "./hero";

const data = [
  {
    hero: {
      title: "Rings & I",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "Rings & I is an e-commerce platform specializing in high-quality, customizable rings and jewelry. The website aims to offer a seamless shopping experience, allowing customers to explore, customize, and purchase unique pieces. Integrated with Shopify, the site ensures efficient inventory management, secure transactions, and smooth order processing.",
      Client: "Rings & I",
      Industry: "E-commerce, Jewelry",
      Platform: "E-commerce Website",
      Objective:
        "Design and develop a visually appealing and user-friendly e-commerce website for Rings & I, integrated with Shopify, to enhance online shopping experience and drive sales.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739923/webdev_h3x5ga.png",
          heading: "Website Design and Development",
          subheading:
            "Create a visually appealing, user-friendly website that effectively showcases the jewelry collection.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739925/customizationoption_q6qexl.png",
          heading: "Customization Options",
          subheading:
            "Implement features that allow customers to customize rings according to their preferences.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739925/shopifyintegration_xhcrk1.png",
          heading: "Shopify Integration",
          subheading:
            "Ensure seamless Shopify integration for inventory management, payment processing, and order fulfillment.",
        },
      ],
      Outcomes:
        "The Rings & I website featured an elegant and intuitive design, seamlessly integrated with Shopify, which improved user engagement and boosted online sales, receiving positive feedback for its aesthetics and usability.",
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
        heading: "UI Development",
        icon: "Code",
        list: [
          "Front End Development",
          "Responsive Design",
          "Shopify Integration",
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
          image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739981/problem_t1mjly.svg",
          list: [
            {
              item: "Limited customization options on existing jewelry websites.",
            },
            {
              item: "Complicated and inefficient shopping processes.",
            },
            {
              item: "Difficulty in managing inventory and orders without a robust e-commerce platform.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739983/solution_cdh2oz.svg",
          list: [
            {
              item: "Rings & I offers extensive customization options, allowing customers to personalize their rings.",
            },
            {
              item: "The website provides a seamless and user-friendly shopping experience.",
            },
            {
              item: "Integration with Shopify ensures efficient inventory management, secure transactions, and smooth order processing.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739932/usergroups1_zhio1e.jpg",
        list: [{ listItem: "Jewelry Enthusiasts" }],
        description:
          "“I want a website with unique and customizable rings to expand my exclusive collection.“",
      },
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739928/usergroups2_kqb60y.jpg",
        list: [{ listItem: "Gift Shoppers" }],
        description:
          "“I want a seamless shopping experience to easily find and purchase the perfect ring for my partner.“",
      },
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739935/usergroups3_cwsug6.jpg",
        list: [{ listItem: "Fashion Aficionados" }],
        description:
          "“I want to explore trendy and stylish rings that match my fashion sense and can be delivered quickly.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "Jessica",
        smallDescription: "29, Jewelry Collector",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739929/userpersonas1_miujyx.png",
        type: "Individual",
        Gender: "Female",
        Occupation: "Marketing Manager",
        bio: "Jessica is a 29-year-old Marketing Manager with a passion for collecting unique and customizable rings. She enjoys discovering exclusive pieces to enhance her jewelry collection.",
        goals: [
          {
            item: "Discover unique and customizable rings.",
          },
          {
            item: "Enhance her jewelry collection with exclusive pieces.",
          },
          {
            item: "Find high-quality, standout designs.",
          },
        ],
        painPoints: [
          {
            item: "Limited customization options.",
          },
          {
            item: "Difficulty finding unique designs.",
          },
          {
            item: "High prices for truly unique pieces.",
          },
        ],
      },
      {
        name: "Michael",
        smallDescription: "35, Gift Shopper",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739931/userpersonas2_n4pb9a.jpg",
        type: "Individual",
        Gender: "Male",
        Occupation: "Software Engineer",
        bio: "Michael is a 35-year-old Software Engineer looking to find the perfect ring for his partner. He values a seamless and stress-free shopping experience.",
        goals: [
          {
            item: "Find the perfect ring for his partner.",
          },
          {
            item: "Ensure a seamless shopping experience.",
          },
          {
            item: "Get a high-quality product.",
          },
        ],
        painPoints: [
          {
            item: "Uncertainty about ring quality.",
          },
          {
            item: "Complicated purchasing process.",
          },
          {
            item: "Concerns about fitting and return policies.",
          },
        ],
      },
      {
        name: "Sophia",
        smallDescription: "24, Fashion Enthusiast",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724739934/userpersonas3_q831ki.jpg",
        type: "Individual",
        Gender: "Female",
        Occupation: "Fashion Blogger",
        bio: "Sophia is a 24-year-old Fashion Blogger who loves to stay updated with the latest jewelry trends. She looks for fashionable rings that complement her style without breaking the bank.",
        goals: [
          {
            item: "Stay updated with the latest jewelry trends.",
          },
          {
            item: "Find fashionable rings that complement her style.",
          },
          {
            item: "Access affordable, stylish pieces.",
          },
        ],
        painPoints: [
          {
            item: "Finding trendy yet affordable rings.",
          },
          {
            item: "Ensuring quick delivery.",
          },
          {
            item: "Balancing quality with price.",
          },
        ],
      },
    ],
  },

  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Customizable Rings",
        subHeading:
          "Tools for customers to personalize rings with various designs, materials, and engravings.",
      },
      {
        media: "url",
        heading: "AI Style Mapping",
        subHeading:
          "Advanced AI technology to recommend rings based on customer preferences and style.",
      },
      {
        media: "url",
        heading: "Studio Appointment Booking",
        subHeading:
          "Option to book in-store appointments for personalized consultations and ring viewings.",
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
      uiElementId: "UIRings&I", //don't edit this id
    },
  },
  {
    uxAnalysis: [],
  },
];
const RingsAndI = () => {
  return (
    <>
      <RingsAndIHero />
      <Casestudy data={data} />
    </>
  );
};

export default RingsAndI;
