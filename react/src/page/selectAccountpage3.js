import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import SelectAccount3 from '../components/selectAccount3';

function SelectAccountpage3() {
    return (
        <div className="SelectAccountpage3">
            {/* <TopContent /> */}
            <SelectAccount3 />
            <BottomContent />
        </div>
    );
}

export default SelectAccountpage3;
