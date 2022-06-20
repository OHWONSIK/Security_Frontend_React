import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Temporarypasswordguide from '../components/temporarypasswordguide';

function Temporarypasswordguidepage() {
  return (
    <div className="Temporarypasswordguidepage">
      {/* <TopContent /> */}
      <Temporarypasswordguide />
      <BottomContent />
    </div>
  );
}

export default Temporarypasswordguidepage;
