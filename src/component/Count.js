import { useRecoilState } from "recoil";
import { counting, countSelector } from "../store/store";

export function Count() {
  const [count, setCount] = useRecoilState(counting);
  const [countSel, setCountSel] = useRecoilState(countSelector);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleSelector = () => {
    setCountSel(count);
  };

  return (
    <div>
      <span>count : {count}</span>
      <span>countSel : {countSel}</span>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleSelector}>selector</button>
    </div>
  );
}
