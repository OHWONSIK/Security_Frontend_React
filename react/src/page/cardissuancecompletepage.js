import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Cardissuancecomplete from '../components/cardissuancecomplete';

function Cardissuancecompletepage() {
    return (
    <div className="Cardissuancecompletepage">
    <TopContent />
    <Cardissuancecomplete />
    <BottomContent />
    </div>
);
}

export default Cardissuancecompletepage;
