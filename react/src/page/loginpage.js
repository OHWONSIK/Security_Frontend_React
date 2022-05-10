import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Login from '../components/login';

function Loginpage() {
  return (
    <div className="Loginpage">
      <TopContent />
      <Login />
      <BottomContent />
    </div>
  );
}

export default Loginpage;
