"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import CardWhatYouGet from "./card";

export function DotPatternBackground() {
  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-lg bg-background mt-20 pb-12">
      <CardWhatYouGet />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
