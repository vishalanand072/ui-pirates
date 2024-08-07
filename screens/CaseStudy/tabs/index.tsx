// import React from "react";
// import { Tabs, Tab } from "@nextui-org/react";

// export default function StickyTabs() {
//   const variants = ["solid", "underlined", "bordered", "light"];
//   const tabData = [
//     "Client Requirements",
//     "Our Role",
//     "Core Problem",
//     "User Groups & Stories",
//     "User Persona",
//     "Features & Product",
//     "Visual & UI Elements",
//     "UX Analysis",
//     "Learning & Improvements",
//   ];

//   return (
//     <div className="flex flex-wrap gap-4 bg-white z-999999 h-[60px] pt-3">
//       <Tabs variant="underlined" aria-label="Tabs variants">
//         {tabData.map((item, index) => {
//           return <Tab key={item} title={item} />;
//         })}
//         {/* <Tab key="photos" title="Photos" />
//         <Tab key="music" title="Music" />
//         <Tab key="videos" title="Videos" /> */}
//       </Tabs>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function StickyTabs() {
  const [activeTab, setActiveTab] = useState("Client Requirements");
  const tabData = [
    "client-requirements",
    "our-role",
    "core-problem",
    "user-groups-stories",
    "user-persona",
    "features-product",
    "visual-ui-elements",
    "ux-analysis",
    "learning-improvements",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveTab = entry.target.id
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());
            console.log(`Updating active tab: ${newActiveTab}`); // Debugging line
            setActiveTab(newActiveTab);
          }
        });
      },
      { threshold: 0.6 }
    );

    tabData.forEach((item) => {
      const id = item.toLowerCase().replace(/ /g, "-");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      tabData.forEach((item) => {
        const id = item.toLowerCase().replace(/ /g, "-");
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [tabData]);

  const handleTabClick = (id: string) => {
    console.log(`Scrolling to section with ID: ${id}`); // Debugging line
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log(`ID: ${id}`);
    } else {
      console.log(`No element found with ID: ${id}`); // Debugging line
    }
  };

  return (
    <div className="flex flex-wrap gap-4 bg-white h-[60px] pt-3">
      <Tabs variant="underlined" aria-label="Tabs variants">
        {tabData.map((item) => {
          const id = item.toLowerCase().replace(/ /g, "-");

          return (
            <Tab
              key={item}
              // title={item}
              style={{
                color: activeTab === item ? "blue" : "red",
                cursor: "pointer",
              }}
              onClick={() => handleTabClick(item)}
            >
              <p onClick={() => handleTabClick(item)}>{item}</p>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}
