import Casestudy from "@/screens/CaseStudyComp";
import CLoudShiftHero from "@/screens/CaseStudy/cloudShift/hero"

const data = [
  {
    hero: {
      title: "Cloudshift",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "Cloudshift is a platform designed to provide businesses with seamless cloud migration services. The website aims to offer comprehensive information about Cloudshift's services, highlight their expertise, and attract potential clients looking to transition to cloud-based infrastructure.",
      Client: "Cloudshift",
      Industry: "Cloud Computing",
      Platform: "Web Application",
      Objective:
        "To create a visually appealing, user-friendly website that effectively communicates Cloudshift’s services and capabilities.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781428/cr1_hdrpsq.png",
          heading: "Website Design & Development",
          subheading:
            "Create a visually appealing, user-friendly website that effectively communicates Cloudshift’s services and capabilities.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781429/cr2_qutjss.png",
          heading: "Service Showcase",
          subheading:
            "Highlight the range of cloud migration services offered by Cloudshift, including strategy development, implementation, and ongoing support.",
        },
      ],
      Outcomes:
        "A professionally designed website that successfully showcases Cloudshift’s cloud migration services, resulting in increased client inquiries and improved client trust.",
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
          image: "url",
          list: [
            {
              item: "Complexity and risks associated with cloud migration.",
            },
            {
              item: "Lack of clear information on cloud migration services.",
            },
            {
              item: "Difficulty in finding reliable and experienced cloud migration partners.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "Cloudshift provides detailed, transparent information about their cloud migration process and services.",
            },
            {
              item: "The platform offers a user-friendly interface to help clients understand the benefits of cloud migration.",
            },
            {
              item: "Cloudshift’s expertise and experience ensure a smooth and secure transition to the cloud.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781441/ug1_j4wlbq.jpg",
        list: [{ listItem: "IT Managers" }],
        description:
          "“I want detailed information about the cloud migration process and services to ensure a seamless transition for my company.“",
      },
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781442/ug2_ymymfr.jpg",
        list: [{ listItem: "Business Owners" }],
        description:
          "“I want to understand the benefits of cloud migration and find a reliable partner to help scale my business operations.“",
      },
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781443/ug3_wteqgu.jpg",
        list: [{ listItem: "Technical Consultants" }],
        description:
          "“I want to evaluate Cloudshift's services to recommend them confidently to my clients.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "John",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781431/up1_bpmjot.png",
        smallDescription: "45, IT Manager",
        type: "Corporate",
        Gender: "Male",
        Industry: "IT",
        bio: "John oversees the IT infrastructure at his company, ensuring everything runs smoothly and securely. With a looming cloud migration project, he is focused on minimizing downtime and ensuring data security during the transition.",
        goals: [
          {
            item: "Ensure a smooth transition to cloud infrastructure.",
          },
          {
            item: "Minimize downtime during migration.",
          },
          {
            item: "Maintain data security and compliance.",
          },
        ],
        painPoints: [
          {
            item: "Complexity of cloud migration.",
          },
          {
            item: "Concerns about data security.",
          },
          {
            item: "Limited internal resources for managing migration.",
          },
        ],
      },
      {
        name: "Emma",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781468/up2_sozugq.png",
        smallDescription: "43, Business Owner",
        type: "Individual",
        Gender: "Female",
        Industry: "E-commerce",
        bio: "Emma leads a rapidly expanding e-commerce business. She is keen on leveraging cloud technology to scale operations efficiently and improve performance but lacks the technical knowledge to handle the migration independently.",
        goals: [
          {
            item: "Scale operations efficiently.",
          },
          {
            item: "Leverage cloud technology for better performance.",
          },
          {
            item: "Ensure reliable support during migration.",
          },
        ],
        painPoints: [
          {
            item: "Lack of technical knowledge.",
          },
          {
            item: "Need for reliable support during migration.",
          },
          {
            item: "Concerns about potential downtime affecting business.",
          },
        ],
      },
      {
        name: "David",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781435/up3_r7alvf.png",
        smallDescription: "50, Technical Consultant",
        type: "Individual",
        Gender: "Male",
        Industry: "IT",
        bio: "David provides IT consultancy services to various businesses. He is constantly seeking trustworthy cloud migration partners to recommend to his clients, ensuring they get the best solutions for their needs.",
        goals: [
          {
            item: "Recommend the best cloud solutions to clients.",
          },
          {
            item: "Ensure successful implementation of cloud services.",
          },
          {
            item: "Stay updated on the latest cloud technologies.",
          },
        ],
        painPoints: [
          {
            item: "Finding trustworthy partners for cloud migration.",
          },
          {
            item: "Managing client expectations.",
          },
          {
            item: "Keeping up with rapidly evolving cloud technologies.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Comprehensive Service Offering",
        subHeading:
          "Strategy development, implementation, and ongoing support for cloud migration.",
      },
      {
        media: "url",
        heading: "Security and Compliance",
        subHeading:
          "Assurance of data security and compliance with industry standards.",
      },
      {
        media: "url",
        heading: "Expertise and Experience",
        subHeading:
          "Highlighting successful case studies and client testimonials.",
      },
      {
        media: "url",
        heading: "Real-Time Support",
        subHeading:
          "24/7 support to assist clients during and after the migration process.",
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
      uiElementId: "UICloudShift", //don't edit this id
    },
  },
  {
    uxAnalysis: [],
  },
];
const CloudShift = () => {
  return (
    <>
      <CLoudShiftHero />
      <Casestudy data={data} />
    </>
  );
};

export default CloudShift;
