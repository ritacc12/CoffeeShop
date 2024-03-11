import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./page/Layout.jsx";
import Header from "./component/Header.jsx";
import ShopInfo from "./page/ShopInfo.jsx";
import News from "./page/News.jsx";
import About from "./page/About.jsx";
import Footer from "./component/Footer.jsx";
import Menu from "./page/Menu.jsx";
import Error from "./page/Error.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />} errorElement={<Error />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/shop" element={<ShopInfo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
