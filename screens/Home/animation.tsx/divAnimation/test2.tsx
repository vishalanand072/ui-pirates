// // pages/index.tsx
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';

// const Home: React.FC = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<LocomotiveScroll | null>(null);
//   const scrollProxyRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (!scrollContainerRef.current) return;

//     // Initialize Locomotive Scroll
//     scrollRef.current = new LocomotiveScroll({
//       el: scrollContainerRef.current,
//       smooth: true,
//       direction: 'vertical'
//     });

//     // Create a proxy element for ScrollTrigger
//     scrollProxyRef.current = document.createElement('div');
//     scrollProxyRef.current.style.position = 'absolute';
//     scrollProxyRef.current.style.top = '0';
//     scrollProxyRef.current.style.left = '0';
//     scrollProxyRef.current.style.width = '100%';
//     scrollProxyRef.current.style.height = 'auto'; // Set initial height

//     scrollContainerRef.current.appendChild(scrollProxyRef.current);

//     // Update ScrollTrigger
//     ScrollTrigger.scrollerProxy(scrollProxyRef.current, {
//       scrollTop(value) {
//         if (arguments.length) {
//           scrollRef.current?.scrollTo(value, 0, 0);
//         }
//         return scrollRef.current?.scrollTo.length.toExponential.;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight
//         };
//       },
//       pinType: scrollContainerRef.current.style.transform ? 'transform' : 'fixed'
//     });

//     // Update proxy element height based on content height
//     const updateScrollProxyHeight = () => {
//       if (scrollProxyRef.current && scrollRef.current) {
//         const contentHeight = scrollRef.current.scroll.contentHeight;
//         scrollProxyRef.current.style.height = `${contentHeight}px`;
//       }
//     };

//     // Initial update and listen for resize
//     updateScrollProxyHeight();
//     window.addEventListener('resize', updateScrollProxyHeight);

//     // Destroy scroll instance and remove proxy element on cleanup
//     return () => {
//       if (scrollRef.current) {
//         scrollRef.current.destroy();
//       }
//       if (scrollProxyRef.current) {
//         scrollProxyRef.current.remove();
//       }
//       window.removeEventListener('resize', updateScrollProxyHeight);
//     };
//   }, []);

//   return (
//     <div id="smooth-wrapper" ref={scrollContainerRef}>
//       <div id="smooth-content">
//         {/* Your content here */}
//       </div>
//     </div>
//   );
// };

// export default Home;
