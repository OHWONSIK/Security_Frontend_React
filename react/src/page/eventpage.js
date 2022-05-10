import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Event from '../components/event';

function Eventpage() {
  return (
    <div className="Eventpage">
      <TopContent />
      <Event />
      <BottomContent />
    </div>
  );
}

export default Eventpage;
