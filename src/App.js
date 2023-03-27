import { useState } from "react";
import "./App.css"

function App() {
  const [points, setPoints] = useState([]);
  const [poppedPoints, setPoppedPoints] = useState([]);

  const handleClick = (event) => {
    setPoints([...points, {
      x: event.clientX,
      y: event.clientY
    }])
  }

  const handleUndo = () => {
    const newPoints = [...points];
    const nowPoppedPoints = newPoints.pop();
    if(!nowPoppedPoints) return;
    setPoints(newPoints);
    setPoppedPoints([...poppedPoints, nowPoppedPoints]);
  }

  const handleRedo = () => {
    const Popped = [...poppedPoints];
    const nowPopped = Popped.pop();
    if(!nowPopped) return;
    setPoints([...points, nowPopped]);
    setPoppedPoints(Popped);
    
  }
  


  return (
<>
    <button disabled={points.length === 0} onClick={handleUndo}>Click to Undo</button>
    <button disabled={poppedPoints.length === 0} onClick={handleRedo}>Redo Click</button>
    <div className="App" onClick={handleClick}>
      {points.map((point, key) => {
        return (
          <div className="points" key={key} style={{
            left: point.x - 5 + "px",
            top: point.y - 5 + "px"
          }}></div>
        )
      })}
    </div>
    </>

  )
}

export default App;