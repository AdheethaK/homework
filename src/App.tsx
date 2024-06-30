import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Layout from "./components/Layout/Layout";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/profile/:userId" element={<Profile/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/settings" element={<Settings/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
