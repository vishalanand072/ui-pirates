import Casestudy from "@/screens/CaseStudyComp";
import XperitiHero from "./hero";
const data = [
  {
    hero: {
      title: "Xperiti",
      subtitle: "in ipsos company",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "Xperiti is a comprehensive research platform designed to streamline the management and execution of both qualitative and quantitative research studies, providing an intuitive UI/UX for researchers and participants alike.",
      Client: "Xperiti",
      Industry: "Market Research",
      Platform: "SaaS application",
      Objective:
        "Redesign the Xperiti SaaS app to create an integrated, user-friendly platform for managing qualitative and quantitative research studies, improving efficiency and user satisfaction.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "Unified Platform",
          subheading:
            "Develop a single platform to manage both interviews and surveys research studies.",
        },
        {
          img: "url",
          heading: "User Experience",
          subheading:
            "Ensure an intuitive and seamless user interface for both researchers and participants.",
        },
        {
          img: "url",
          heading: "Participant Management",
          subheading:
            "Ensure efficient participant tracking and streamlined incentive distribution.",
        },
      ],
      Outcomes:
        "Our clients and their users were highly satisfied with our experience design strategy for Xperiti. By continuously improving the platform through agile development releases, we made Xperiti more robust and engaging. This approach not only enhanced user satisfaction but also helped grow the platform's brand in the market.",
    },
  },
  {
    ourRole: [
      {
        heading: "User Research",
        icon: "UserFocus",
        list: [
          "Interviews and Surveys",
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
        heading: "Development & Integration",
        icon: "Code",
        list: ["Front End Development", "Integration", "Back End Development"],
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
              item: "Inefficiencies resulted in wasted time and potential loss of participant engagement.",
            },
            {
              item: "Difficulty in managing research studies efficiently due to fragmented tools and processes.",
            },
            {
              item: "Specialized research tools lacked integration, leading to disjointed workflows.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "Xperiti's integrated platform streamlines study management, saving time and enhancing engagement.",
            },
            {
              item: "Xperiti consolidates all research activities into a single, cohesive platform.",
            },
            {
              item: "Inefficiencies resulted in wasted time and potential loss of participant engagement.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        heading: "Clients",
        image: "url",
        list: [{ listItem: "Researchers" }, { listItem: "Study Coordinators" }],
        description:
          "“I want to create and manage studies efficiently so that I can focus on analyzing results.”",
      },
      {
        heading: "Participants",
        image: "url",
        list: [
          { listItem: "Individuals participating in surveys" },
          { listItem: "Individuals participating in interviews. " },
        ],
        description:
          "“I want to easily take part in surveys and interviews so that I can earn incentives without hassle.”",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "Rachel",
        smallDiscription: "24, Client",
        type: "Corporate",
        Gender: "Female",
        Occupation: "Market Research",
        bio: "Raechel is a seasoned market researcher at a consumer goods company. She needs tools that enhance productivity and accuracy, allowing her to oversee numerous studies and gather actionable insights.",
        goals: [
          {
            item: "Efficiently manage multiple studies concurrently",
          },
          {
            item: "Obtain reliable and accurate data",
          },
          {
            item: "Streamline research processes to save time and resources",
          },
        ],
        painPoints: [
          {
            item: "Inconsistent survey response rates",
          },
          {
            item: "Difficulty in collaborating with team members",
          },
          {
            item: "Limited customization options in existing tools",
          },
        ],
      },
      {
        name: "Andrew",
        smallDiscription: "24, Participant",
        type: "Individual",
        Gender: "Male",
        Occupation: "Student",
        bio: "Andrew is a part-time worker and a student supplementing his income through online surveys. He prefers easy-to-navigate platforms that allow him to quickly complete surveys and maximize earnings.",
        goals: [
          {
            item: "Earn incentives through participation in surveys & interviews",
          },
          {
            item: "Provide feedback easily without complications",
          },
          {
            item: "Have a straightforward and seamless participation process",
          },
        ],
        painPoints: [
          {
            item: "Complex survey questions leading to frustration",
          },
          {
            item: "Unclear instructions or poorly designed questions reducing his ability to provide accurate feedback",
          },
          {
            item: "Surveys that are too long",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Study Creation & Management",
        subHeading:
          "Utilize simplified tools that enable easy creation and management of research studies, streamlining the entire process for researchers.",
      },
      {
        media: "url",
        heading: "Survey & Interview Integration",
        subHeading:
          "Effortlessly handle both qualitative and quantitative research methods, allowing seamless integration of surveys and interviews.",
      },
      {
        media: "url",
        heading: "Participant Management",
        subHeading:
          "Track and manage participant information and activities efficiently, ensuring smooth coordination and data collection.",
      },
      {
        media: "url",
        heading: "Incentive Distribution",
        subHeading:
          "Automate the management and distribution of participant incentives, making it easy to reward contributions promptly and fairly.",
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
      uiElementId: "UIXperiti", //don't edit this id
    },
  },
  {
    uxAnalysis: [
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391127/image_42_u7hdgl.svg",
      },
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391127/image_43_jvrufl.svg",
      },
    ],
  },
];
const Xperiti = () => {
  return (
    <>
      <XperitiHero />
      <Casestudy data={data} />
    </>
  );
};

export default Xperiti;
