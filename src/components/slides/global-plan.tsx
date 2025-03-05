import Heading from "@/components/others/heading";

function GlobalPlan() {
  const imgUrl = new URL("../../assets/big-plan.png", import.meta.url).href;
  return (
    <div>
      <div className="font-bold tracking-tight">
        <Heading content="Architecture Plan" className="py-2" />
      </div>
      <div className="flex flex-row justify-center space-x-10">
        <img src={imgUrl} alt="Infrastructure Plan" />
      </div>
    </div>
  );
}

export default GlobalPlan;
