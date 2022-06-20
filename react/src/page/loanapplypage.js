import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Loanapply from '../components/loanapply';

function Loanapplypage() {
  return (
    <div className="Loanapplypage">
      {/* <TopContent /> */}
      <Loanapply />
      <BottomContent />
    </div>
  );
}

export default Loanapplypage;
