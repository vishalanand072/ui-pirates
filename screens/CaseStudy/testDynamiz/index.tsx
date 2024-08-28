import Casestudy from "@/screens/CaseStudyComp";
import TestDynamizHero from "./hero";
const data = [
  {
    hero: {
      title: "TestDynamiz",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "TestDynamiz is a cutting-edge software testing SaaS platform designed to provide automated testing solutions for development teams. The platform aims to streamline the testing process, improve efficiency, and ensure high-quality software releases by integrating advanced testing tools and automation features.",
      Client: "TestDynamiz",
      Industry: "Software Testing",
      Platform: "SaaS App",
      Objective:
        "Design an intuitive and efficient SaaS MVP for TestDynamiz to streamline the software testing process for development teams.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781589/cr1_tptgqb.png",
          heading: "SaaS MVP Design",
          subheading:
            "Design a user-friendly and visually appealing interface for the MVP of the software testing platform, incorporating essential testing tools and automation features.",
        },
        {
          img: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781590/cr2_o9luka.png",
          heading: "User Experience Optimization",
          subheading:
            "Ensure that the platform offers an intuitive and efficient user experience for development teams, from developers to QA engineers and project managers.",
        },
      ],
      Outcomes:
        "The TestDynamiz SaaS MVP featured a user-friendly interface that improved the efficiency of software testing processes, enhanced collaboration among team members, and received positive feedback for its design and usability.",
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
              item: "Time-consuming manual testing processes.",
            },
            {
              item: "Difficulty in maintaining and managing test cases.",
            },
            {
              item: "Limited access to efficient automation tools.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "TestDynamiz provides automated testing solutions that integrate seamlessly into development workflows.",
            },
            {
              item: "The platform offers tools to manage and maintain test cases efficiently.",
            },
            {
              item: "TestDynamiz simplifies the testing process with user-friendly automation features.",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781591/ug1_acxozg.png",
        list: [{ listItem: "Development Teams" }],
        description:
          "“I want to integrate automated tests easily into my development workflow to ensure code quality and save time.“",
      },
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781599/ug2_kt5edq.jpg",
        list: [{ listItem: "Project Managers" }],
        description:
          "“I want to automate repetitive testing tasks & manage test cases efficiently to identify bugs early and improve testing efficiency.“",
      },
      {
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781599/ug2_kt5edq.jpg",
        list: [{ listItem: "Startup Teams" }],
        description:
          "“I want to ensure thorough test coverage and coordinate testing efforts to maintain high-quality software releases.“",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "Emma",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781593/up1_i3obmh.png",
        smallDescription: "28, Software Developer",
        type: "Corporate",
        Gender: "Female",
        Industry: "Software Development",
        bio: "Emma is a front-end developer specializing in creating responsive and dynamic user interfaces. She aims to integrate automated testing into her workflow to enhance code quality and streamline the development process.",
        goals: [
          {
            item: "Integrate automated testing into the development workflow.",
          },
          {
            item: "Ensure code quality.",
          },
          {
            item: "Reduce manual testing efforts.",
          },
        ],
        painPoints: [
          {
            item: "Manual testing is time-consuming.",
          },
          {
            item: "Difficulty in maintaining test cases.",
          },
          {
            item: "Frequent changes in codebase requiring updates to test scripts.",
          },
        ],
      },
      {
        name: "James",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781593/up2_uebv1o.png",
        smallDescription: "35, QA Engineer",
        type: "Corporate",
        Gender: "Male",
        Industry: "Software Development",
        bio: "James is an experienced Quality Assurance Engineer focused on ensuring that software products meet high standards of quality and reliability. He strives to automate repetitive testing tasks and catch bugs early in the development cycle.",
        goals: [
          {
            item: "Automate repetitive testing tasks.",
          },
          {
            item: "Identify bugs early in the development cycle.",
          },
          {
            item: "Improve testing efficiency.",
          },
        ],
        painPoints: [
          {
            item: "Limited automation tools.",
          },
          {
            item: "Difficulty in managing large test suites.",
          },
          {
            item: "Ensuring test coverage across various scenarios.",
          },
        ],
      },
      {
        name: "Sarah",
        smallDescription: "47, Project Manager",
        image: "https://res.cloudinary.com/damm9iwho/image/upload/v1724781599/up3_p7tvtz.jpg",
        type: "Corporate",
        Gender: "Female",
        Industry: "IT",
        bio: "Sarah is a seasoned Project Manager overseeing software development projects. She ensures that projects are delivered on time and meet quality standards, coordinating efforts between development and QA teams.",
        goals: [
          {
            item: "Ensure timely software releases.",
          },
          {
            item: "Maintain high-quality standards.",
          },
          {
            item: "Facilitate effective communication between teams.",
          },
        ],
        painPoints: [
          {
            item: "Coordinating testing efforts.",
          },
          {
            item: "Ensuring thorough test coverage.",
          },
          {
            item: "Balancing deadlines with quality requirements.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Automated Testing",
        subHeading: "Tools for automating repetitive testing tasks.",
      },
      {
        media: "url",
        heading: "Test Case Management",
        subHeading: "Efficient management and maintenance of test cases.",
      },
      {
        media: "url",
        heading: "Bug Tracking and Reporting",
        subHeading: "Tools for identifying, tracking, and reporting bugs.",
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
      uiElementId: "UITestDynamiz", //don't edit this id
    },
  },
  {
    uxAnalysis: [
      {
        media:
          "https://res.cloudinary.com/damm9iwho/image/upload/v1724391981/image_42_gy97jz.svg",
      },
    ],
  },
];
const TestDynamiz = () => {
  return (
    <>
      <TestDynamizHero />
      <Casestudy data={data} />
    </>
  );
};

export default TestDynamiz;
