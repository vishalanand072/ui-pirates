import Casestudy from "@/screens/CaseStudyComp";
import SimpleOHero from "./hero";
const data = [
  {
    hero: {
      title: "SimpleO",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "SimpleO.ai is a legaltech platform designed to help individuals and businesses manage contracts and compliances efficiently. By offering tools for recording obligations, tracking compliance, and organizing legal documents, SimpleO.ai aims to streamline legal processes and ensure adherence to regulations.",
      Client: "SimpleO.ai",
      Industry: "Legal Technology",
      Platform: "Web Application",
      Objective:
        "Design a user-friendly website for SimpleO.ai to showcase their contract and compliance management solutions.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "Website Design",
          subheading:
            "Create a user-friendly and visually appealing website to present SimpleO.ai's offerings and features.",
        },
        {
          img: "url",
          heading: "Clear Communication",
          subheading:
            "Ensure that the website effectively communicates the benefits and functionalities of the platform.",
        },
        {
          img: "url",
          heading: "User Engagement",
          subheading:
            "Design the website so that it encourages user engagement and conversion.",
        },
      ],
      Outcomes:
        "The website effectively highlighted SimpleO.ai’s services with a clear, engaging design, enhancing user engagement and brand perception.",
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
      {
        heading: "UI Development",
        icon: "Code",
        list: [
          "Front End Development",
          "Responsive Design",
          "Angular Integration",
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
              item: "Complex and fragmented contract management processes.",
            },
            {
              item: "Difficulty in tracking and ensuring compliance.",
            },
            {
              item: "Lack of a centralized system for organizing legal documents and obligations.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "SimpleO.ai provides a centralized platform for managing contracts and compliance, simplifying legal workflows.",
            },
            {
              item: "The platform offers tools to track obligations and ensure timely compliance.",
            },
            {
              item: "SimpleO.ai organizes legal documents in one place, making it easy to access and manage them.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        image: "url",
        list: [{ listItem: "Legal Professionals" }],
        description:
          "“I want to manage & track all contracts and compliances in one place to ensure my company meets all legal requirements.”",
      },
      {
        image: "url",
        list: [{ listItem: "Business Owners" }],
        description:
          "“I want an easy-to-use platform to help me track and fulfill my contractual obligations to avoid legal issues.”",
      },
      {
        image: "url",
        list: [{ listItem: "Individuals" }],
        description:
          "“I want to organize my contracts and compliance documents efficiently to ensure I meet all my obligations and deadlines.”",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "Michael",
        smallDescription: "35, Corporate Lawyer",
        type: "Corporate",
        Gender: "Male",
        Industry: "Legal",
        bio: "Michael is a seasoned Legal Compliance Officer at a large corporation, responsible for ensuring that the company adheres to all regulatory requirements and internal policies.",
        goals: [
          {
            item: "Streamline compliance tracking.",
          },
          {
            item: "Improve reporting accuracy.",
          },
          {
            item: "Ensure timely updates.",
          },
        ],
        painPoints: [
          {
            item: "Managing numerous contracts manually.",
          },
          {
            item: "Ensuring team awareness of obligations.",
          },
          {
            item: "Lack of centralized tracking.",
          },
        ],
      },
      {
        name: "David",
        smallDescription: "48, Small Business Owner",
        type: "Individual",
        Gender: "Male",
        Industry: "Retail",
        bio: "David is the owner of a small business, juggling multiple roles including managing contracts and ensuring compliance with industry regulations.",
        goals: [
          {
            item: "Find an affordable management solution.",
          },
          {
            item: "Stay compliant easily.",
          },
          {
            item: "Automate reminders and notifications.",
          },
        ],
        painPoints: [
          {
            item: "Limited resources for contract management.",
          },
          {
            item: "Staying updated with regulations.",
          },
          {
            item: "Meeting obligations without dedicated staff.",
          },
        ],
      },
      {
        name: "Alex",
        smallDescription: "29, Freelance Consultant",
        type: "Individual",
        Gender: "Male",
        Industry: "Consulting",
        bio: "Alex is an independent business consultant with over a decade of experience, providing strategic advice to various clients. He manages his own contracts and ensures all legal documents are in order without dedicated legal assistance.",
        goals: [
          {
            item: "Manage client contracts efficiently.",
          },
          {
            item: "Ensure timely compliance.",
          },
          {
            item: "Organize legal documents effectively.",
          },
        ],
        painPoints: [
          {
            item: "Managing contracts without legal assistance.",
          },
          {
            item: "Ensuring timely compliance.",
          },
          {
            item: "Keeping track of obligations.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Contract Management",
        subHeading:
          "Centralized tools to manage all aspects of contracts efficiently, from creation to renewal.",
      },
      {
        media: "url",
        heading: "Compliance Tracking",
        subHeading:
          "Comprehensive tracking to ensure compliance with legal standards and regulations, reducing risk.",
      },
      {
        media: "url",
        heading: "Obligation Recording",
        subHeading:
          "Simple and effective ways to record and manage all contractual obligations in one place.",
      },
      {
        media: "url",
        heading: "Document Organization",
        subHeading:
          "A single platform to organize & access all legal documents, improving workflow & accessibility.",
      },
    ],
  },
  {
    uxAnalysis: [
      {
        media: "url",
        type: "Typography",
        description:
          "Lato font for a contemporary and approachable design, enhancing clarity and user engagement across digital interfaces.",
      },
      {
        media: "url",
        type: "Color Palette",
        description:
          "Primary: #FF6868, Secondary: #009D9C, #17c964, #F5A524, #F31260",
      },
      {
        media: "url",
        type: "Icons",
        description: "Phosphor Icons for a modern and versatile aesthetic.",
      },
    ],
  },
];
const SimpleO = () => {
  return (
    <>
      <SimpleOHero />
      <Casestudy data={data} />
    </>
  );
};

export default SimpleO;
