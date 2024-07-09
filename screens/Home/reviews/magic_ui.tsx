import { useTheme } from "next-themes";
import TweetCard from "@/components/magicui/tweet_card";
import ReviewCard from "./card";
export function MagicCardDemo() {
  const { theme } = useTheme();
  const gradientColor = theme === "dark" ? "#262626" : "#D9D9D955";
  const data= [1,2,3,4,5,6]

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {
        data.map((item,index)=>{
          return (
            <ReviewCard></ReviewCard>
          )
        })
      }
    </div>
  );
}
