import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<p>sign up page</p>}></Route>
        <Route exact path="/blog/:id" element={<p>blog by id</p>}></Route>
        <Route exact path="*" element={<p>not found</p>}></Route>
      </Routes>
    </>
  );
};

export default App;
