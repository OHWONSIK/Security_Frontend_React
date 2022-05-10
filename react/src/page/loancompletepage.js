import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Loancomplete from '../components/loancomplete';

function Loancompletepage() {
  return (
    <div className="Loancompletepage">
      <TopContent />
      <Loancomplete />
      <BottomContent />
    </div>
  );
}

export default Loancompletepage;
