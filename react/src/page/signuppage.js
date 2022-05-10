import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Signup from '../components/signup';

function Signuppage() {
    return (
    <div className="Signuppage">
    <TopContent />
    <Signup />
    <BottomContent />
    </div>
);
}

export default Signuppage;
