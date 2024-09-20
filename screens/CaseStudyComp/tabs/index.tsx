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
            // console.log("Section in view:", newActiveTab); // Debugging line
            setActiveTab(newActiveTab);
          }
        });
      },
      { threshold: 0.6 } // Adjusted threshold value
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
  }, []);

  const handleTabClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(
        id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
      );
    }
  };

  return (
    <div className="flex flex-wrap gap-4 h-[60px] pt-3 container mx-auto px-20 max-lg:px-10 max-md:px-4">
      <Tabs
        variant="underlined"
        aria-label="Tabs variants"
        color="primary"
        selectedKey={activeTab}
        onSelectionChange={(key) => {
          const formattedKey = key as string;
          handleTabClick(formattedKey.toLowerCase().replace(/ /g, "-"));
        }}
      >
        {tabData.map((item) => {
          const formattedItem = item
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
          return (
            <Tab
              key={formattedItem}
              style={{
                cursor: "pointer",
              }}
              title={formattedItem}
            >
              {/* <p className="font-semibold">{formattedItem}</p> */}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}
