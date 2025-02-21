import Heading from "@/components/others/heading";

function Infra() {
  const imgUrl = new URL("../../assets/plan.png", import.meta.url).href;
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="font-bold tracking-tight">
          <Heading content="Architecture Plan" className="py-2" />
        </div>
        <div className="flex flex-row justify-between space-x-10">
          <img src={imgUrl} alt="Infrastructure Plan" />
        </div>
      </div>
    </div>
  );
}

export default Infra;
