import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import SelectAccount2 from '../components/selectAccount2';

function SelectAccountpage2() {
    return (
        <div className="SelectAccountpage2">
            {/* <TopContent /> */}
            <SelectAccount2 />
            <BottomContent />
        </div>
    );
}

export default SelectAccountpage2;
