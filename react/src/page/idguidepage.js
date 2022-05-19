import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Idguide from '../components/idguide';

function Idguidepage() {
  return (
    <div className="Idguidepage">
      <TopContent />
      <Idguide />
      <BottomContent />
    </div>
  );
}

export default Idguidepage;
