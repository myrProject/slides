function OnPremises() {
  const imgUrl = new URL("../../assets/plan.png", import.meta.url).href;
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="flex flex-row justify-between space-x-10">
          <img src={imgUrl} alt="OnPremises Plan" width={1400} height={900} />
        </div>
      </div>
    </div>
  );
}

export default OnPremises;
