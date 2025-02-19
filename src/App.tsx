import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
//import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

import Intro from "@/components/slides/intro";
import Choices from "@/components/slides/os";

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
    <div className="flex flex-col size-full min-h-screen ">
      <div
        className="reveal flex-1 flex items-center justify-center"
        ref={deckDivRef}
      >
        <div className="slides">
          <section>
            <Intro />
          </section>
          <section>
            <Choices />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
