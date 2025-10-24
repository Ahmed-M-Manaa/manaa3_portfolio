import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function LayOut() {


  return (
    <>
      <NavBar />
      <Outlet >
      </Outlet>
      <Footer />
    </>
  );
}
export default LayOut;
