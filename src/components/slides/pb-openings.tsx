import Heading from "@/components/others/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PbOpenings() {
  return (
    <div className="flex flex-row items-center justify-center w-full px-4 space-x-6">
      <Card className="w-[600px] h-[350px] border-neutral-200">
        <CardHeader>
          <CardTitle>
            <Heading
              content="Challenges"
              className="text-4xl font-semibold text-center"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3 text-lg font-semibold">
            <span>⚖️ Licensing issues</span>
            <span>📖 Limited documentation</span>
            <span>🚧 Lack of maturity</span>
            <span>⏳ Missing development time</span>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[600px] h-[350px]  border-neutral-200">
        <CardHeader>
          <CardTitle>
            <Heading
              content="Improvements"
              className="text-4xl font-semibold text-center"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3 text-lg font-semibold">
            <span>
              🪨 Consider using more Cloud Native Computing Foundation projects
            </span>
            <span>
              ⏲️ Test of RTO from data corruption to on-premises cluster
              disaster
            </span>
            <span>🖌️ Improve OS UI/UX </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PbOpenings;
