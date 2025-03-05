import Heading from "@/components/others/heading";
import ZeroTrustNumber from "@/components/others/zero-trust-number";

type ItemProps = {
  id: string;
  content: string;
};

const Item: React.FC<ItemProps> = ({ id, content }) => {
  return (
    <div className="flex flex-row items-center space-x-6">
      <ZeroTrustNumber id={id} />
      <div className="text-2xl text-neutral-700 font-semibold">{content}</div>
    </div>
  );
};

function ZeroTrust() {
  const points = [
    {
      id: "EIG",
      content: "Enhanced Identity Governance",
    },
    {
      id: "GDRS",
      content: "Granular & Dynamic Resource Segmentation",
    },
    {
      id: "SAA",
      content: "State-of-the-Art Authentication",
    },
    {
      id: "ATD",
      content: "Advanced Threat Detection",
    },
    {
      id: "SRUA",
      content: "Strong Encryption & User Awareness",
    },
  ];

  return (
    <div>
      <div className="font-bold tracking-tight">
        <Heading content="Zero Trust" className="py-2" />
      </div>
      <div className="flex flex-col items-center justify-center space-x-10">
        <div className="italic">
          Built by the
          <a href="https://cyber.gouv.fr/"> ANSSI</a>
        </div>
        <div className="flex flex-col space-y-2 py-20">
          {points.map((point) => (
            <Item key={point.id} id={point.id} content={point.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZeroTrust;
