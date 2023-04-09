import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
