import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Findpassword from '../components/findpassword';

function Findpasswordpage() {
  return (
    <div className="Findpasswordpage">
      {/* <TopContent /> */}
      <Findpassword />
      <BottomContent />
    </div>
  );
}

export default Findpasswordpage;
