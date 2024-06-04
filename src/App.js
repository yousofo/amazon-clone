import HomeSlider from "./components/homeSlider";
import HomeFooter from "./components/homeFooter";
import Nav from "./components/nav";
import Login from "./components/loginPage.js";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import Shoppping from "./components/shopping";
export const userData = createContext(null);
function App() {
  const [data, setData] = useState(null);
  function Main() {
    return (
      <>
        <Nav />
        <Outlet />
        <HomeFooter />
      </>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <userData.Provider value={{ data, setData }}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<HomeSlider />} />
              <Route path="/home" element={<HomeSlider />} />
              <Route path="/shopping" element={<Shoppping />} />
            </Route>
            <Route path="/signin" element={<Login />} />
          </Routes>
        </userData.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
