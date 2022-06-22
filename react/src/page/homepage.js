import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Home from '../components/home';

function Homepage() {


  return (
    <div className="Homepage">
      {/* <TopContent /> */}
      <Home />
      <BottomContent />
    </div>
  );
}

export default Homepage;
