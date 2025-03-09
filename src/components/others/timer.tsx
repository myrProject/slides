import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

function Timer() {
  const [timer, setTimer] = useState(0); // state for the timer
  const [isTimerVisible, setIsTimerVisible] = useState(false); // state to control badge visibility
  const timerRef = useRef<NodeJS.Timeout | null>(null); // reference to the timer interval

  // Function to start the timer
  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000); // Increment every second
  };

  // Function to stop the timer
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Handle keydown events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "x" || event.key === "X") {
        setIsTimerVisible((prev) => !prev); // Toggle visibility
      }

      if (event.key === "c" || event.key === "C") {
        stopTimer(); // Stop the timer before resetting
        setTimer(0); // Reset timer to 0
        startTimer(); // Restart the timer if it was running
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      stopTimer(); // Cleanup timer on unmount
    };
  }, []); // Add isTimerRunning as a dependency

  return (
    <>
      {isTimerVisible && (
        <Badge variant="default" className="z-20 absolute top-0 right-0 m-4">
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </Badge>
      )}
    </>
  );
}

export default Timer;
