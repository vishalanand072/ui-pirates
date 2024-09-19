import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background p-20 ">
      <p className="z-10 whitespace-pre-wrap text-center tracking-tighter text-black dark:text-white">
        <p className="text-6xl font-semibold max-lg:text-5xl max-md:text-4xl max-md:font-medium">
          Have a great idea?
        </p>
        <p className="text-xl font-semibold max-md:text-lg max-md:font-medium mt-4">
          Lets build it together!
        </p>
      </p>
      <AnimatedGridPattern
        numSquares={1000}
        maxOpacity={0.3}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
