import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Findid from '../components/findid';

function Findidpage() {
  return (
    <div className="Findidpage">
      <TopContent />
      <Findid />
      <BottomContent />
    </div>
  );
}

export default Findidpage;
