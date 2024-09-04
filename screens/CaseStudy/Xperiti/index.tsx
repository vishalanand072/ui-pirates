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
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724653471/AppWindow2_v7tj9k.svg",
          heading: "Unified Platform",
          subheading:
            "Develop a single platform to manage both interviews and surveys research studies.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724653472/AppWindow_kc0q6i.svg",
          heading: "User Experience",
          subheading:
            "Ensure an intuitive and seamless user interface for both researchers and participants.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724653472/AppWindow1_vyx2pc.svg",
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
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724654462/image_18_kva9ki.svg",
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
          image:
            "https://res.cloudinary.com/damm9iwho/image/upload/v1724654460/image_19_ovkaxp.svg",
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
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724738042/download_hvl7ry.png",
        list: [{ listItem: "Researchers" }, { listItem: "Study Coordinators" }],
        description:
          "“I want to create and manage studies efficiently so that I can focus on analyzing results.”",
      },
      {
        heading: "Participants",
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724738677/participants_hbxyax.jpg",
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
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724738268/rachel_urhvgh.jpg",
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
        image:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724738270/andrew_ircjre.jpg",
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
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1725440424/Frame_10000060642_btpokl.svg",
        heading: "Study Creation & Management",
        subHeading:
          "Utilize simplified tools that enable easy creation and management of research studies, streamlining the entire process for researchers.",
      },
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1725440425/Frame_1000006064_vnzgmn.svg",
        heading: "Survey & Interview Integration",
        subHeading:
          "Effortlessly handle both qualitative and quantitative research methods, allowing seamless integration of surveys and interviews.",
      },
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1725440424/Frame_1000006064e_zfyftc.svg",
        heading: "Participant Management",
        subHeading:
          "Track and manage participant information and activities efficiently, ensuring smooth coordination and data collection.",
      },
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1725440425/Frame_10000060643_ktbjim.svg",
        heading: "Incentive Distribution",
        subHeading:
          "Automate the management and distribution of participant incentives, making it easy to reward contributions promptly and fairly.",
      },
    ],
  },
  {
    visualUIElements: {
      font: "Inter",
      fontDescription:
        "The Nunito font blends rounded forms with balanced proportions for a friendly and modern look, enhancing readability and perfect for digital interfaces.",
      primaryColor: "#009D9C",
      colorPilatr: ["#009D9C", "#009D9C", "#C4E456", "#F5A524", "#F31260"],
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
