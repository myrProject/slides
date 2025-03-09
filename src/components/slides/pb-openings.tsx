import Heading from "@/components/others/heading";

function PbOpenings() {
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="font-bold tracking-tight">
          <Heading content="Improvements" className="text-5xl" />
        </div>
        <div className="flex flex-row justify-between space-x-10">
          <Heading content="Problems faced" className="text-5xl" />

          <span className="">Licenses ?</span>
          <span className="">Lack of documentation</span>
          <span className="">Lack of maturity</span>
        </div>
        <div className="text-left px-4"></div>
      </div>
    </div>
  );
}

export default PbOpenings;
