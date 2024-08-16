import Casestudy from "@/screens/CaseStudyComp";

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
          img: "url",
          heading: "Product Showcase",
          subheading:
            "Create detailed presentations of water treatment products and solutions.",
        },
        {
          img: "url",
          heading: "Informative Content",
          subheading:
            "Provide clear and concise information about the company's services and expertise.",
        },
        {
          img: "url",
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
          image: "url",
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
          image: "url",
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
    uxAnalysis: [
      {
        media: "url",
        type: "Typography",
        description:
          "Work Sans is a modern font that emphasizes clarity and readability. Its clean lines make it ideal for both body text and headings. Optimized for web use, it is a popular choice for digital interfaces.",
      },
      {
        media: "url",
        type: "Color Palette",
        description: "Primary: #2947A8, Secondary: #17c964, #F5A524, #F31260",
      },
      {
        media: "url",
        type: "Icons",
        description: "Phosphor Icons for a modern and versatile aesthetic.",
      },
    ],
  },
];
const InfinityAquaSol = () => {
  return (
    <>
      <Casestudy data={data} />
    </>
  );
};

export default InfinityAquaSol;
