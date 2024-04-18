"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Button } from "./button";
import { TextGenerateEffect } from "./text-generated-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Vadim.",
      className: "text-pink-500 dark:text-pink-500",
    },
  ];

  const words2 = `Vadim is a talented software developer from Kazakhstan with a passion for coding and problem-solving. Known for his attention to detail and commitment to delivering high-quality work, Vadim excels at creating efficient and innovative software solutions. He stays up-to-date with the latest advancements in technology and actively contributes to the local tech community by sharing his knowledge and experiences. Vadim enjoys collaborating with others, and his friendly and approachable demeanor makes him a valued team member. In his free time, he enjoys exploring the natural beauty of Kazakhstan and finding inspiration for his work in its stunning landscapes. 
`;

  return (
    <>
      <div className="flex flex-col items-center justify-center h-fit py-20">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from herep
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Button type="submit" className="w-full">
            Join now
          </Button>
          <Button variant="outline" className="w-full">
            Signup
          </Button>
        </div>
        <div className="w-[700px] h-fit mt-20">
          <TextGenerateEffect words={words2} />
        </div>
      </div>
    </>
  );
}
