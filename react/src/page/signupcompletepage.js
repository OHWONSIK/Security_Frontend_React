import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Signupcomplete from '../components/signupcomplete';

function Signupcompletepage() {
    return (
    <div className="Signupcompletepage">
    {/* <TopContent /> */}
    <Signupcomplete />
    <BottomContent />
    </div>
);
}

export default Signupcompletepage;
