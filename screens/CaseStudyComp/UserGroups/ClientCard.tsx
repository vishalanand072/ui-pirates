import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DiamondsFour } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const ClientCard = (props: any) => {
  useEffect(() => {
    gsap.fromTo(
      ".card-item1", // Target each card
      {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".card-item1", // Trigger animation on each card
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      {props.card.map((item: any, index: any) => (
        <div key={index} className="card-item1 flex flex-col mb-8">
          <div>
            <Image
              src={item.image}
              alt="Client"
              width={300}
              height={300}
              className="w-full h-[300px] rounded-3xl object-cover"
            />
          </div>
          <div className="p-2">
            <h1 className="medium-heading mb-4 mt-8">{item.heading}</h1>
            <ul className="small-heading">
              {item.list &&
                item.list.map((listItem: any, listIndex: any) => (
                  <div
                    key={listIndex}
                    className="flex flex-row items-center gap-3"
                  >
                    <DiamondsFour
                      size={20}
                      weight="fill"
                      className="min-h-[20px] min-w-[20px]"
                    />
                    <li className="mb-2">{listItem.listItem}</li>
                  </div>
                ))}
            </ul>
          </div>
          <div className="mt-4 py-4 border-t normal font-semibold mr-16">
            {item.description}
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientCard;
