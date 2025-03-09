import Heading from "@/components/others/heading";

function Subject() {
  return (
    <div>
      <div className="font-bold tracking-tight">
        <Heading content="Why ?" className="py-2" />
      </div>
      <div className="flex flex-row justify-center space-x-10">
        <div className="flex flex-col space-y-2">
          <div className="">
            An open-source alternative to proprietary operating systems and
            office suites for SMEs, designed with Zero Trust principles.
          </div>
          <div className="flex flex-col" id="goals">
            Justifier le sujet : privé (cout, sécu), public, utilisateur.
            <span> Minimize costs</span>
            <span> Increase security</span>
            <span> Create a high available with data redundancy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
