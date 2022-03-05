import "./App.css";
import { Feed } from "./Components/Feed/Feed";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Sidebar/SideBar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app__body">
        {/* SideBar*/}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/*  Widgets */}
      </div>
    </div>
  );
}

export default App;
