import Casestudy from "@/screens/CaseStudyComp";
import InfinityAquaSolHero from "./hero";
const data = [
  {
    hero: {
      title: "Infinity AquaSol",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "Infinity AquaSol specializes in innovative water treatment solutions and environmental services. The company required a comprehensive and engaging online presence to showcase its services, products, and expertise in the water treatment industry.",
      Client: "Infinity AquaSol",
      Industry: "Water Treatment",
      Platform: "Website",
      Objective:
        "Design and develop a modern, user-friendly website to showcase Infinity AquaSol's products and services in the water treatment industry.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781321/cr1_fpfftz.png",
          heading: "Product Showcase",
          subheading:
            "Create detailed presentations of water treatment products and solutions.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781321/cr2_adizta.png",
          heading: "Informative Content",
          subheading:
            "Provide clear and concise information about the company's services and expertise.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781323/cr3_hmxt3e.png",
          heading: "Contact and Inquiry Form",
          subheading:
            "Develop an easy-to-use form for potential customers to get in touch and make inquiries.",
        },
      ],
      Outcomes:
        "Successfully launched a visually appealing and highly functional website that effectively communicates the brand's value proposition, resulting in increased online visibility and customer engagement.",
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
      {
        heading: "UI Development",
        icon: "Code",
        list: ["Front End Development", "Responsive Design", "Next Js"],
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
              item: "Infinity AquaSol needed a professional online presence to reach a broader audience.",
            },
            {
              item: "Difficulty in providing detailed and accessible information about their services and products.",
            },
            {
              item: "Limited means for potential clients to contact the company or inquire about products.",
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
              item: "Developed a responsive website that highlights their expertise and product offerings.",
            },
            {
              item: "Created an organized layout with dedicated sections for products, services, and company information.",
            },
            {
              item: "Implemented a user-friendly contact and inquiry form to facilitate communication.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [],
  },
  {
    userPersonas: [],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Product Catalog",
        subHeading:
          "Detailed listings with descriptions and images of water treatment products.",
      },
      {
        media: "url",
        heading: "Service Information",
        subHeading:
          "Comprehensive details about the range of services offered by Infinity AquaSol.",
      },
      {
        media: "url",
        heading: "Responsive Design",
        subHeading:
          "Mobile-friendly design to ensure a seamless user experience across all devices.",
      },
    ],
  },
  {
    visualUIElements: {
      font: "Nunito",
      fontDescription:
        "The Nunito font blends rounded forms with balanced proportions for a friendly and modern look, enhancing readability and perfect for digital interfaces.",
      primaryColor: "#2947A8",
      colorPilatr: ["#2947A8", "#17C964", "#F5A524", "#F31260", "#33B0FB"],
      gradient: {
        start: "#1875C3",
        end: "#33B0FB",
      },
      uiElementId: "UIInfinityAquaSol", //don't edit this id
    },
  },
  {
    uxAnalysis: [],
  },
];
const InfinityAquaSol = () => {
  return (
    <>
      <InfinityAquaSolHero />
      <Casestudy data={data} />
    </>
  );
};

export default InfinityAquaSol;
