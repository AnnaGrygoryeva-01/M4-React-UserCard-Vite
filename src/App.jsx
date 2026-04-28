import "./App.css";
import { user } from "./components/data/userData";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <UserInfo user={user} />
    </>
  );
}

export default App;
