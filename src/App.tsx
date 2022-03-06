import "./App.css";
import { Feed } from "./Components/Feed/Feed";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Sidebar/SideBar";
import { Widgets } from "./Components/Widgets/Widgets";

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
        <Widgets  />
      </div>
    </div>
  );
}

export default App;
