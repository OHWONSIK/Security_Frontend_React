import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Cardissuance from '../components/cardissuance';

function Cardissuancepage() {
  return (
    <div className="Cardissuancepage">
      <TopContent />
      <Cardissuance />
      <BottomContent />
    </div>
  );
}

export default Cardissuancepage;
