import { useState } from "react";

export default function UseVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //Function which handles our transitions going forward or replacing components.
  function transition(newMode, replace) {
    let newHistory = [...history];
    if (replace) {
      newHistory.pop();
    }
    console.log(newMode);
    newHistory.push(newMode);
    setMode(newMode);
    setHistory(newHistory);
  }

  //Function which handles our transitions "backward" removing mode from history array.
  function back() {
    let newHistory = [...history];
    console.log(newHistory);
    console.log(history);
    if (newHistory.length > 1) {
      newHistory.pop();

      setMode(newHistory[newHistory.length - 1]);

      setHistory(newHistory);
    }
  }

  return { mode, transition, back };
}
