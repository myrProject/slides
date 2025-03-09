import Heading from "@/components/others/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PbOpenings() {
  return (
    <div className="flex flex-row items-center justify-center w-full px-4 space-x-6">
      <Card className="w-[600px] border-neutral-200">
        <CardHeader>
          <CardTitle>
            <Heading
              content="Challenges"
              className="text-4xl font-semibold text-center"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3 text-lg">
            <span>⚖️ Licensing issues</span>
            <span>📖 Limited documentation</span>
            <span>🚧 Lack of maturity</span>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[600px] border-neutral-200">
        <CardHeader>
          <CardTitle>
            <Heading
              content="Improvements"
              className="text-4xl font-semibold text-center"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3 text-lg">
            <span>⚖️ tee</span>
            <span>📖 tet</span>
            <span>🚧tete</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PbOpenings;
