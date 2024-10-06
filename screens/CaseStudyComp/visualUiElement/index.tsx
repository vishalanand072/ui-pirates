import { Card, CardBody } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import Assets from "./assets";
import ColorPalette from "./colorPalette";
import UIElementsFrytx from "@/screens/CaseStudy/Frytx/uiElementsFrytx";
import UIElementsXperiti from "@/screens/CaseStudy/Xperiti/uiElementsXperiti";
import UIElementsRingsAndI from "@/screens/CaseStudy/Rings&i/uiElementsRings&i";
import UIElementsSimpleO from "@/screens/CaseStudy/simpleO/uiElementsSimpleO";
import UIElementsIon from "@/screens/CaseStudy/Ion/uiElementsIon";
import UIElementsOlso from "@/screens/CaseStudy/Olso/uiElementOlso";
import UIElementsBrahmastra from "@/screens/CaseStudy/Brahmastra/uiElementsBrahmastra";
import UIElementsStayPe from "@/screens/CaseStudy/StayPe/uiElementsStayPe";
import UIElementsTestDynamiz from "@/screens/CaseStudy/testDynamiz/uiElementsTestDynamiz";
import UIElementsIAS from "@/screens/CaseStudy/infinityAquaSol/uiElementsInfinityAquaSol";
import UIElementsCloudShift from "@/screens/CaseStudy/cloudShift/uiElementsCloudShift";
const ValuesUiElement = (props: any) => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4 overflow-hidden">
        <div className="flex justify-between items-center my-12 max-md:mb-6">
          <h1 className="text-black heading">Visual & UI Elements</h1>
          <span className="text-gray-300 text-6xl font-light max-lg:text-5xl max-md:text-3xl">
            07
          </span>
        </div>
        {props.visualUIElements.uiElementId != "UIION" && (
          <div>
            <div className="flex flex-row items-center justify-between max-md:flex-col max-md:justify-start max-md:items-start">
              <div>
                <p className="text-subtitle text-2xl font-semibold uppercase max-md:text-xl">
                  Typography
                </p>
                <p className="text-8xl font-extrabold max-md:text-6xl">
                  {props.visualUIElements.font}
                </p>
                <p className=" text-lg mt-2 md:w-[70%] max-md:text-base">
                  {props.visualUIElements.fontDescription}
                </p>
              </div>
              <div className="max-md:mt-4 ">
                <ol className="max-md:flex max-md:flex-row max-md:items-center gap-3">
                  <li className="text-[22px] max-md:text-[14px]">Regular</li>
                  <li className="text-[22px] max-md:text-[14px] font-medium">
                    Medium
                  </li>
                  <li className="text-[22px] max-md:text-[14px] font-semibold">
                    Semi Bold
                  </li>
                  <li className="text-[22px] max-md:text-[14px] font-bold">
                    Bold
                  </li>
                  <li className="text-[22px] max-md:text-[14px] font-extrabold">
                    Extra Bold
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 my-8">
              <Card className="border-0 shadow-none bg-black text-white">
                <CardBody className="justify-center">
                  <p className=" uppercase text-lg tracking-widest ">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="text-lg tracking-widest ">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className=" uppercase text-lg tracking-widest ">
                    0123456789
                  </p>
                </CardBody>
              </Card>

              <Card
                className="border-0 shadow-none text-white py-0"
                style={{ backgroundColor: props.visualUIElements.primaryColor }}
              >
                <CardBody style={{ padding: 0 }}>
                  <p className="text-[200px] text-center font-bold p-0 leading-none overflow-hidden pb-5 ">
                    Aa
                  </p>
                </CardBody>
              </Card>
            </div>
            <Divider className="my-8 h-[2px]" />
            <ColorPalette colorPilatr={props.visualUIElements.colorPilatr} />
            <Divider className="my-8 h-[2px]" />
            <Assets />
            <Divider className="my-8 h-[2px]" />
          </div>
        )}

        <div className="">
          {props.visualUIElements.uiElementId == "UIXperiti" && (
            <UIElementsXperiti />
          )}
          {props.visualUIElements.uiElementId == "UIFrytx" && (
            <UIElementsFrytx />
          )}
          {props.visualUIElements.uiElementId == "UIRings&I" && (
            <UIElementsRingsAndI />
          )}
          {props.visualUIElements.uiElementId == "UIION" && <UIElementsIon />}
          {props.visualUIElements.uiElementId == "UIOLSO" && <UIElementsOlso />}
          {props.visualUIElements.uiElementId == "UIStayPe" && (
            <UIElementsStayPe />
          )}

          {props.visualUIElements.uiElementId == "UISimpleO" && (
            <UIElementsSimpleO />
          )}
          {props.visualUIElements.uiElementId == "UIBrahmastra" && (
            <UIElementsBrahmastra />
          )}
          {props.visualUIElements.uiElementId == "UITestDynamiz" && (
            <UIElementsTestDynamiz />
          )}

          {props.visualUIElements.uiElementId == "UIInfinityAquaSol" && (
            <UIElementsIAS />
          )}
          {props.visualUIElements.uiElementId == "UICloudShift" && (
            <UIElementsCloudShift />
          )}
        </div>
      </div>
    </>
  );
};

export default ValuesUiElement;
