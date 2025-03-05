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
            Alternative open source à l'OS et à la suite Office pour PME en
            respectant Zero Trust
          </div>
          <div className="">
            Justifier le sujet : privé (cout, sécu), public, utilisateur.
          </div>
          <div className="">Liste services remplacés.</div>
          <div className="">Licenses ?</div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
