import Heading from "@/components/others/heading";
import GhStats from "@/components/others/gh-stats";
import { Separator } from "@/components/ui/separator";

function Cloud() {
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="font-bold tracking-tight">
          <Heading content="Architecture Choices" className="py-2" />
        </div>
        <div className="flex flex-col">
          <span className="w-full text-center font-semibold text-xl">
            Micro Services Oriented
          </span>
          <div className="flex flex-row justify-between space-x-10">
            <div
              id="k8s"
              className="flex flex-row space-x-3 justify-center items-center"
            >
              <div className="flex flex-col space-y-3">
                <GhStats username="kubernetes" repo="kubernetes" />
                <ul className="text-xl text-center">
                  <li>Container Orchestration</li>
                  <li>Declarative Configuration</li>
                  <li>High Availability</li>
                  <li>Scalability</li>
                  <li>Portability</li>
                </ul>
              </div>
              <img
                src="https://i.redd.it/2gzc189byt921.png"
                className="w-1/2"
              />
            </div>

            <Separator
              orientation="vertical"
              className="mx-4 h-[400px] bg-neutral-400 my-auto"
            />
            <div
              id="talos-omni"
              className="flex flex-col space-y-3 justify-center"
            >
              <GhStats username="siderolabs" repo="talos" />
              <GhStats username="siderolabs" repo="omni" />
            </div>
          </div>
        </div>
        <div className="text-left px-4"></div>
      </div>
    </div>
  );
}

export default Cloud;
