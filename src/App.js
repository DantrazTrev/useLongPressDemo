import React, { useState } from "react";
import "./styles.css";
import useLongPress from "./useLongPress";

export default function App() {
  const [longPressCount, setlongPressCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [isPressed, setPressed] = useState(false);
  const onLongPress = () => {
    console.log("longpress is triggered");
    setlongPressCount(longPressCount + 1);
    setPressed(true);
  };
  const onClear = () => {
    console.log("longpress is released");
    setPressed(false);
  };
  const onClick = () => {
    console.log("click is triggered");
    setClickCount(clickCount + 1);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500
  };
  const longPressEvent = useLongPress(
    onLongPress,
    onClick,
    onClear,
    defaultOptions
  );

  return (
    <div className="App">
      <button
        style={isPressed ? { background: "#434343" } : {}}
        {...longPressEvent}
      >
        use Loooong Press
      </button>
      <span>Long press held {isPressed ? "✅" : "❌"}</span>
      <span>Long press count: {longPressCount}</span>
      <span>Click count: {clickCount}</span>
    </div>
  );
}
