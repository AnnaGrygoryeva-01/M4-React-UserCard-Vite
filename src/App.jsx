import "./App.css";
import { user } from "./data/userData";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <UserInfo user={user} />
    </>
  );
}

export default App;
