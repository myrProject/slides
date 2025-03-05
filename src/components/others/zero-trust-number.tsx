type ZeroTrustNumberProps = {
  id: string;
};

const ZeroTrustNumber: React.FC<ZeroTrustNumberProps> = ({ id }) => {
  return (
    <div className="flex flex-row items-center justify-center bg-red-400 w-[80px] h-[80px] rounded-full">
      <div className="text-xl font-bold text-white relative">{id}</div>
    </div>
  );
};

export default ZeroTrustNumber;
