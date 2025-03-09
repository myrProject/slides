import { BackgroundLines } from "@/components/ui/background-lines";
import Logo from "@/components/others/logo";

function Intro() {
  return (
    <div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="z-20 font-bold tracking-tight">
          <Logo className="text-center text-3xl md:text-6xl lg:text-9xl font-sans py-2 md:py-10" />
        </div>
        <p className="max-w-xl mx-auto text-sm md:text-xl text-neutral-700 text-center font-semibold">
          Discover the best open source Operating System Ecosystem for your
          company
        </p>
      </BackgroundLines>
      <div className="absolute bottom-[100px] left-0 w-full z-0 text-xl text-neutral-600">
        TESTEMALE Yohan, BENZERROUK Mathieu, AUGEREAU Robin
      </div>
    </div>
  );
}

export default Intro;
