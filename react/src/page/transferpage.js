import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Transfer from '../components/transfer';

function Transferpage() {
  return (
    <div className="Transferpage">
      {/* <TopContent /> */}
      <Transfer />
      <BottomContent />
    </div>
  );
}

export default Transferpage;
