function OnPremises() {
  const imgUrl = new URL("../../assets/plan.png", import.meta.url).href;
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="flex flex-row justify-between space-x-10">
          <img src={imgUrl} height={"80%"} alt="Infrastructure Plan" />
        </div>
      </div>
    </div>
  );
}

export default OnPremises;
