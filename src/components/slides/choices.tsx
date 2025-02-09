// [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats)](https://github.com/anuraghazra/github-readme-stats)

import Heading from "@/components/others/heading";

function Intro() {
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-4">
        <div className="z-20 font-bold tracking-tight">
          <Heading content="Choices" />
        </div>
        <div>
          <img
            src={
              "https://github-readme-stats.vercel.app/api/pin/?username=myrProject&repo=slides"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
