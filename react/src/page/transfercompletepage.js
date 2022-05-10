import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Transfercomplete from '../components/transfercomplete';

function Transfercompletepage() {
  return (
    <div className="Transfercompletepage">
      <TopContent />
      <Transfercomplete />
      <BottomContent />
    </div>
  );
}

export default Transfercompletepage;
