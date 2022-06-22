import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Passwordchange from '../components/passwordchange';

function Passwordchangepage() {
  return (
    <div className="Passwordchangepage">
      {/* <TopContent /> */}
      <Passwordchange />
      <BottomContent />
    </div>
  );
}

export default Passwordchangepage;
