import { useRecoilState, useResetRecoilState } from "recoil";
import { user } from "../store/store";

export function User() {
  const [users, setUsers] = useRecoilState(user);
  const resetIdf = useResetRecoilState(user);

  const changeId = () => {
    setUsers({
      ...users,
      id: "abc",
    });
  };

  const resetId = () => {
    resetIdf(user);
  };

  return (
    <div>
      <span>{users.id}</span>
      <span>{users.pwd}</span>
      <button onClick={changeId}>change id to 'abc'</button>
      <button onClick={resetId}>reset</button>
    </div>
  );
}
