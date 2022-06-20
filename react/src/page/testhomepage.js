import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Testhome from '../components/testhome';

function Testhomepage() {


  return (
    <div className="Testhomepage">
      {/* <TopContent /> */}
      <Testhome />
      <BottomContent />
    </div>
  );
}

export default Testhomepage;
