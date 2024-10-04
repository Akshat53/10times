import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateEvent from './views/CreateEvent'
import Events from './views/Events'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<CreateEvent/>}></Route>
          <Route path="/Events" exact element={<Events/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
