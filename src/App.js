import "./App.css";
import { MyNav, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import EditListContainer from "./redux/EditListContainer";
import HomeContainer from "./redux/HomeContainer";


function App() {
  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<HomeContainer />} />
          <Route path="/lists" element={<EditListContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
