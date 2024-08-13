import Casestudy from "@/screens/CaseStudyComp";

const data = [
  {
    hero: {
      title: "hii",
      subtitle: "Hiii",
      bgimage: "",
    },
  },
  {
    overview: {
      overview: "lorem10",
      Client: "data",
      Industry: "data",
      Platform: "data",
      Objective: "data",
    },
  },
  {
    clientRequirements: {
      card: [
        {
          img: "url",
          heading: "heading",
          subheading: "subheading",
        },
        {
          img: "url",
          heading: "heading",
          subheading: "subheading",
        },
        {
          img: "url",
          heading: "heading",
          subheading: "subheading",
        },
      ],
      Outcomes: "dis",
    },
  },
  {
    ourrole: [
      {
        heading: "User Research",
        icon: "Icon Name",
        list: ["item1", "itme2", "item3"],
      },
      {
        heading: "User Research",
        icon: "Icon Name",
        list: ["item1", "itme2", "item3"],
      },
      {
        heading: "User Research",
        icon: "Icon Name",
        list: ["item1", "itme2", "item3"],
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
              item: "item1",
            },
            {
              item: "item1",
            },
          ],
        },
      ],
      solutions: [
        {
          image: "url",
          list: [
            {
              item: "item1",
            },
            {
              item: "item1",
            },
          ],
        },
      ],
    },
  },
  {
    userGroup: [
      {
        card: [
          {
            image: "url",
            list: [{ listItem: "item" }],
            discreption: "disc",
          },
        ],
      },
      {
        card: [
          {
            image: "url",
            list: [{ listItem: "item" }],
            discreption: "disc",
          },
        ],
      },
    ],
  },
  {
    userPersonas: [
      {
        name: "name",
        smallDiscription: "24 clients",
        type: "",
        Gender: "",
        Occupation: "",
        bio: "bio",
        goals: [
          {
            item: "item",
          },
          {
            item: "item",
          },
        ],
        painPoints: [
          {
            item: "item",
          },
          {
            item: "item",
          },
        ],
      },
    ],
  },
  {
    featureAndProduct: [
      {
        media: "url",
        heading: "",
        subHeading: "",
      },
      {
        media: "url",
        heading: "",
        subHeading: "",
      },
      {
        media: "url",
        heading: "",
        subHeading: "",
      },
    ],
  },
  {
    uxAnalysis: [{ media: "url" }, { media: "url" }, { media: "url" }],
  },
];
const Xperiti = () => {
  return (
    <>
      <Casestudy data={data} />
    </>
  );
};

export default Xperiti;
