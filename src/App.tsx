import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
//import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

import Timer from "@/components/others/timer";

import Intro from "@/components/slides/intro";
import Os from "@/components/slides/os";
import OnPremises from "@/components/slides/on-premises";
import GlobalPlan from "@/components/slides/global-plan";
import Subject from "@/components/slides/subject";
import ZeroTrust from "@/components/slides/zero-trust";
import Cloud from "@/components/slides/cloud";
import PbOpenings from "@/components/slides/pb-openings";
import Public from "@/components/slides/public";
import Services from "@/components/slides/services";

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;
    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      width: "100%",
      height: "100%",
      plugins: [RevealHighlight],
    });
    deckRef.current.initialize().then(() => {});
  }, []);

  return (
    <div className="flex flex-col size-full min-h-screen max-h-screen">
      <Timer />
      <div
        className="reveal flex-1 flex items-center justify-center"
        ref={deckDivRef}
      >
        <div className="slides">
          <section>
            <Intro />
          </section>
          <section>
            <Subject />
          </section>
          <section>
            <ZeroTrust />
          </section>
          <section>
            <Os />
          </section>
          <section>
            <GlobalPlan />
          </section>
          <section>
            <Cloud />
          </section>
          <section>
            <OnPremises />
          </section>
          <section>
            <Public />
          </section>
          <section>
            <PbOpenings />
          </section>
          <section>
            <Services />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
