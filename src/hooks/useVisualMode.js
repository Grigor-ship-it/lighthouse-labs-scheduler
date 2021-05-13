import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

  
  
  function transition(newMode, replace) {
    let newHistory = [...history]
    if (replace) {
      newHistory.pop()
      }
    
    newHistory.push(newMode)
    setMode(newMode)
    setHistory(newHistory)
   
    
  }

  function back() { 
    
    let newHistory = [...history]
    console.log(newHistory)
    console.log(history)
    if (newHistory.length > 1) {
     newHistory.pop()
    
     setMode(newHistory[newHistory.length - 1])
    
     setHistory(newHistory)
    }
  }
  
 
  return { mode, transition, back };
};