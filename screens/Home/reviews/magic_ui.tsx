import { useTheme } from "next-themes";
import TweetCard from "@/components/magicui/tweet_card";
import ReviewCard from "./card";
export function MagicCardDemo() {
  const { theme } = useTheme();
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => {
        return <ReviewCard></ReviewCard>;
      })}
    </div>
  );
}
