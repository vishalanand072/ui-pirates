// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "tailwindcss/tailwind.css";

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   useEffect(() => {
//     gsap.from(".draw", {
//       drawSVG: "10%",
//       ease: "expo.out",
//       scrollTrigger: {
//         trigger: ".heading",
//         start: "clamp(top top)",
//         scrub: true,
//         pin: ".pin",
//         pinSpacing: false,
//         markers: true,
//       },
//     });

//     gsap.set("svg", { opacity: 1 });
//   }, []);

//   return (
//     <div id="smooth-wrapper" className="font-unbounded">
//       <div id="smooth-content">
//         <section className="hero min-h-screen">
//           <div className="heading">
//             <div className="pin">
//               <h1 className="text-5xl md:text-7xl lg:text-9xl uppercase text-center relative">
//                 <span className="clamp relative z-[-1]">
//                   Clamp
//                   <svg
//                     data-name="Layer 1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 842.14 500"
//                     className="absolute top-1/2 transform -translate-y-1/2 rotate-2 left-[-6%] w-[112%]"
//                   >
//                     <path
//                       className="draw"
//                       d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47"
//                       fill="none"
//                       stroke="#8486aa"
//                       strokeMiterlimit="10"
//                       strokeWidth="8"
//                     />
//                   </svg>
//                 </span>
//                 <span className="yt z-[3]">your triggers</span>
//               </h1>
//             </div>
//           </div>
//           <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//             <img
//               data-speed="clamp(2.4)"
//               src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.8)"
//               src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(2.2)"
//               src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.5)"
//               src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />

//             <img
//               data-speed="clamp(2.4)"
//               src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.8)"
//               src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(2.2)"
//               src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.5)"
//               src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             {/* Repeat for other images as needed */}
//           </div>
//         </section>

//         <section className="spacer h-screen"></section>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// second part start

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "tailwindcss/tailwind.css";

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   useEffect(() => {
//     gsap.from(".draw", {
//       drawSVG: "0%",
//       ease: "expo.out",
//       scrollTrigger: {
//         trigger: ".heading",
//         start: "top top",
//         scrub: true,
//         // pin: ".pin",
//         pinSpacing: false,
//         end: "bottom top", // Add this line
//         markers: true,
//       },
//     });

//     gsap.set("svg", { opacity: 1 });

//     // Pin the .pin element until the last image's bottom
//     ScrollTrigger.create({
//       trigger: ".heading",
//       start: "top top",
//       endTrigger: ".images img:last-child",
//       end: "bottom bottom",
//       pin: ".pin",
//       pinSpacing: false,
//       markers: true,
//     });
//   }, []);

//   return (
//     <div id="smooth-wrapper" className="font-unbounded">
//       <div id="smooth-content">
//         <section className="hero">
//           <div className="heading">
//             <div className="pin">
//               <h1 className="text-5xl md:text-7xl lg:text-9xl uppercase text-center relative">
//                 <span className="clamp z-[-1] absolute top-0">
//                   Clamp
//                   <svg
//                     data-name="Layer 1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 842.14 500"
//                     className="absolute top-1/2 transform -translate-y-1/2 rotate-2 left-[-6%] w-[112%]"
//                   >
//                     <path
//                       className="draw"
//                       d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47"
//                       fill="none"
//                       stroke="#8486aa"
//                       strokeMiterlimit="10"
//                       strokeWidth="8"
//                     />
//                   </svg>
//                 </span>
//                 <span className="yt z-[3]">your triggers</span>
//                 <span className="yt z-[3]">your triggers</span>
//                 <span className="yt z-[3]">your triggers</span>
//                 <span className="yt z-[3]">your triggers</span>
//               </h1>
//             </div>
//           </div>
//           <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//             <img
//               data-speed="clamp(2.4)"
//               src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.8)"
//               src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(2.2)"
//               src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.5)"
//               src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />

//             <img
//               data-speed="clamp(2.4)"
//               src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.8)"
//               src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(2.2)"
//               src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             <img
//               data-speed="clamp(1.5)"
//               src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
//               alt=""
//               className="max-w-full h-[60vh] object-cover"
//             />
//             {/* Repeat for other images as needed */}
//           </div>
//         </section>

//         <section className="spacer h-screen"></section>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    gsap.from(".draw", {
      drawSVG: "0%",
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".heading",
        start: "top top",
        scrub: true,
        markers: true,
      },
    });

    gsap.set("svg", { opacity: 1 });

    ScrollTrigger.create({
      trigger: ".heading",
      start: "top top",
      endTrigger: ".images img:last-child",
      end: "bottom bottom",
      pin: ".pin",
      pinSpacing: false,
      markers: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="font-unbounded overflow-hidden">
      <div id="smooth-content">
        <section className="hero">
          <div className="heading relative">
            <div className="pin absolute inset-0">
              <h1 className="text-5xl md:text-7xl lg:text-9xl uppercase text-center relative">
                <span className="clamp z-[-1] absolute top-0">
                  Clamp
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 842.14 500"
                    className="absolute top-1/2 transform -translate-y-1/2 rotate-2 left-[-6%] w-[112%]"
                  >
                    <path
                      className="draw"
                      d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47"
                      fill="none"
                      stroke="#8486aa"
                      strokeMiterlimit="10"
                      strokeWidth="8"
                    />
                  </svg>
                </span>
                <span className="yt z-[3]">your triggers</span>
              </h1>
            </div>
          </div>
          <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <img
              data-speed="clamp(2.4)"
              src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.8)"
              src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(2.2)"
              src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />

            <img
              data-speed="clamp(2.4)"
              src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.8)"
              src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(2.2)"
              src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
            <img
              data-speed="clamp(1.5)"
              src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
              className="max-w-full h-[60vh] object-cover"
            />
          </div>
        </section>

        {/* <section className="spacer h-screen"></section> */}
      </div>
    </div>
  );
};

export default HeroSection;
