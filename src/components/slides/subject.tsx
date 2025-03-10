import Heading from "@/components/others/heading";

function Subject() {
  return (
    <div>
      <div className="font-bold tracking-tight">
        <span className="text-xl mb-8">
          An open-source alternative to proprietary operating systems and office
          suites for SMEs, designed with Zero Trust principles.
        </span>
        <Heading content="Why ?" className="py-2" /> 🎯 Our Goals
      </div>
      <div className="flex flex-row justify-center space-x-10 text-lg">
        <div className="flex flex-col space-y-2">
          <div className="font-bold py-2"></div>
          <div className="flex flex-col space-y-2" id="goals">
            <span>Build a comprehensive system of Open Source projects</span>
            <span>Seamless transition from mainstream OS</span>
            <span>High availability with data redundancy</span>
            <span>Cost-efficient solutions</span>
            <span>Enhanced security</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
