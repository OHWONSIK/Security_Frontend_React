import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from "../components/TopContent";
import BottomContent from "../components/BottomContent";
import Mypage from "../components/Mypage";

const Mypagepage = () => {
  return (
    <div>
      <Mypage />
      <BottomContent />
    </div>
  );
};

export default Mypagepage;
