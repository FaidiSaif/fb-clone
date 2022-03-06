import "./App.css";
import { Feed } from "./Components/Feed/Feed";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Sidebar/SideBar";
import { useStateValue } from "./StateProvider";
import { Widgets } from "./Components/Widgets/Widgets";
import { Login } from "./Components/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log("after app  rerender ====>", user)
  return (
    <div className="app">
      {!user ?  (<Login />): ( 
      <>
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}

    </div>
  );
}

export default App;
