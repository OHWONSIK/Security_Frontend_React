import 'bootstrap/dist/css/bootstrap.min.css';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import Certification from '../components/certification';

function Certificationpage() {
  return (
    <div className="Certificationpage">
      {/* <TopContent /> */}
      <Certification />
      <BottomContent />
    </div>
  );
}

export default Certificationpage;
