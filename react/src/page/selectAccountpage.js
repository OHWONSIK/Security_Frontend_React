import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';
import SelectAccount from '../components/selectAccount';

function SelectAccountpage() {
    return (
        <div className="SelectAccountpage">
            {/* <TopContent /> */}
            <SelectAccount />
            <BottomContent />
        </div>
    );
}

export default SelectAccountpage;
