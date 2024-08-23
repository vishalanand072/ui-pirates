import Casestudy from "@/screens/CaseStudyComp";
import BrahmastraHero from "./hero";

const data = [
  {
    hero: {
      title: "Brahmastra",
      subtitle: "",
      bgimage: "",
    },
  },
  {
    overview: {
      overview:
        "Brahmastra is a comprehensive trading platform designed to provide traders with advanced tools and analytics for efficient trading. The platform aims to enhance the trading experience by offering features such as real-time market data, advanced charting, and customizable trading strategies.",
      Client: "Brahmastra",
      Industry: "FinTech",
      Platform: "SaaS App",
      Objective:
        "Design a user-friendly website and SaaS product for Brahmastra to streamline and enhance the trading experience for users.",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "SaaS Product Design",
          subheading:
            "Design a user-friendly and visually appealing interface for the trading platform, incorporating advanced trading tools and analytics.",
        },
        {
          img: "url",
          heading: "Website Design",
          subheading:
            "Create a website that effectively communicates the features and benefits of Brahmastra, attracting traders and investors.",
        },
      ],
      Outcomes:
        "The Brahmastra website and SaaS product featured an intuitive interface that improved user engagement, streamlined trading processes, and received positive feedback for its design and usability.",
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
              item: "Lack of access to real-time market data and advanced trading tools.",
            },
            {
              item: "Complex and unintuitive interfaces on existing trading platforms.",
            },
            {
              item: "Limited resources for learning and strategy development for new traders.",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "Brahmastra provides real-time market data and advanced charting tools, enhancing trading efficiency.",
            },
            {
              item: "The platform offers a user-friendly interface that caters to both professional and retail traders.",
            },
            {
              item: "Educational resources and strategy development tools help traders improve their skills and strategies.",
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
        list: [{ listItem: "Professional Traders" }],
        description:
          "“I want to access advanced tools and real-time market data to make informed trading decisions.”",
      },
      {
        image: "url",
        list: [{ listItem: "Retail Traders" }],
        description:
          "“I want a user-friendly platform that helps me manage my trades and learn more about trading.”",
      },
      {
        image: "url",
        list: [{ listItem: "Investors" }],
        description:
          "“I want to monitor my investment portfolios and analyze market trends efficiently.”",
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "David",
        smallDescription: "34, Professional Trader",
        type: "Corporate",
        Gender: "Male",
        Industry: "FinTech",
        bio: "David is a seasoned full-time trader with 20 years of experience in the financial markets, specializing in stocks and forex. He relies heavily on real-time data and advanced tools to execute his strategies.",
        goals: [
          {
            item: "Access real-time market data.",
          },
          {
            item: "Utilize advanced charting tools.",
          },
          {
            item: "Develop and test trading strategies.",
          },
        ],
        painPoints: [
          {
            item: "Limited access to real-time data.",
          },
          {
            item: "Lack of advanced analytical tools.",
          },
          {
            item: "Slow platform performance during peak trading times.",
          },
        ],
      },
      {
        name: "Lisa",
        smallDescription: "30, Part-time trader",
        type: "Individual",
        Gender: "Female",
        Industry: "FinTech",
        bio: "Lisa is a part-time trader who balances her trading activities with a full-time job. She seeks a straightforward, user-friendly platform to manage her trades and access educational resources to improve her skills.",
        goals: [
          {
            item: "Use a user-friendly platform to manage trades.",
          },
          {
            item: "Access educational resources.",
          },
          {
            item: "Improve trading skills through learning.",
          },
        ],
        painPoints: [
          {
            item: "Complex interfaces.",
          },
          {
            item: "Limited educational resources.",
          },
          {
            item: "Difficulty in understanding market data.",
          },
        ],
      },
      {
        name: "Mark",
        smallDescription: "60, Investor",
        type: "Individual",
        Gender: "Male",
        Industry: "FinTech",
        bio: "Mark is a financial advisor with a focus on managing investment portfolios for his clients. He requires efficient tools to monitor and analyze market trends and portfolio performance.",
        goals: [
          {
            item: "Manage and monitor investment portfolios.",
          },
          {
            item: "Analyze market trends.",
          },
          {
            item: "Provide comprehensive advice to clients.",
          },
        ],
        painPoints: [
          {
            item: "Inefficient portfolio management tools.",
          },
          {
            item: "Lack of comprehensive market analysis.",
          },
          {
            item: "Difficulty in consolidating client portfolio data.",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "Real-Time Market Data",
        subHeading:
          "Access to live market data for informed trading decisions.",
      },
      {
        media: "url",
        heading: "Advanced Charting Tools",
        subHeading: "Comprehensive charting tools for technical analysis.",
      },
      {
        media: "url",
        heading: "Customizable Strategies",
        subHeading:
          "Tools for developing, testing, and implementing trading strategies.",
      },
      {
        media: "url",
        heading: "Backtesting",
        subHeading:
          "Features for testing trading strategies against historical data.",
      },
    ],
  },
  {
    uxAnalysis: [
      {
        media: "url",
        type: "Typography",
        description:
          "Inter font for a modern and clean aesthetic, enhancing readability and user experience across digital platforms.",
      },
      {
        media: "url",
        type: "Color Palette",
        description:
          "Primary: #006FEE, Secondary: #FF6B00, #17c964, #F5A524, #F31260",
      },
      {
        media: "url",
        type: "Icons",
        description: "Phosphor Icons for a modern and versatile aesthetic.",
      },
    ],
  },
];
const Brahmastra = () => {
  return (
    <>
      <BrahmastraHero />
      <Casestudy data={data} />
    </>
  );
};

export default Brahmastra;
