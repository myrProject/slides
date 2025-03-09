import Heading from "@/components/others/heading";
import GhStats from "@/components/others/gh-stats";

function Cloud() {
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="font-bold tracking-tight">
          <Heading content="Cloud Choices" className="py-2" />
        </div>
        <div className="flex flex-row justify-between space-x-10">
          <div id="k8s" className="flex flex-row space-x-3">
            <div className="flex flex-col space-y-3">
              <GhStats username="kubernetes" repo="kubernetes" />
              <ul className="text-xl text-left list-disc">
                <li>Based on Linux</li>
                <li>Reproducible package management</li>
                <li>Declarative configuration</li>
                <li>Isolated environments</li>
              </ul>
            </div>
            <img src="https://i.redd.it/2gzc189byt921.png" className="w-1/2" />
          </div>
          <div id="talos-omni" className="flex flex-col space-y-3">
            <GhStats username="siderolabs" repo="talos" />
            <GhStats username="siderolabs" repo="omni" />
          </div>
        </div>
        <div className="text-left px-4"></div>
      </div>
    </div>
  );
}

export default Cloud;
