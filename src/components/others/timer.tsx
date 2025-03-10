import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TimerProps = {
  slideIndex: number; // Slide index received as a prop
};

function Timer({ slideIndex }: TimerProps) {
  const [timer, setTimer] = useState(0);
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const DurationPerSlides = [180, 180, 240, 360, 600, 780, 840, 1080, 1200];
  const currentThreshold = DurationPerSlides[slideIndex] || 60; // Default to 60s if out of range

  // Track if timer has exceeded threshold
  const isTimerPassed = timer >= currentThreshold;

  // Start the timer
  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  // Stop the timer
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Keydown events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "x") {
        setIsTimerVisible((prev) => !prev);
      }
      if (event.key.toLowerCase() === "c") {
        stopTimer();
        setTimer(0);
        startTimer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      stopTimer();
    };
  }, []);

  return (
    <>
      {isTimerVisible && (
        <Badge
          variant="default"
          className={cn(
            "z-20 absolute top-0 right-0 m-4 text-white",
            isTimerPassed ? "text-red-500" : "text-green-500",
          )}
        >
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </Badge>
      )}
    </>
  );
}

export default Timer;
