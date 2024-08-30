import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <>
      <div style={{ transform: "rotate(+35deg)" }}>
        <VelocityScroll
          text=" we create"
          default_velocity={2}
          className="font-display text-center text-9xl font-bold tracking-[-0.02em]  drop-shadow-sm dark:text-white md:text-[350px] md:leading-[16rem] text-white"
        />
      </div>
    </>
  );
}
