import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  // 自分用
  const onClickUp = () => setCount(count + 1);
  const temp = useMemo(() => count + 3, [count]);
  console.log(temp);
  console.log(count);

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
