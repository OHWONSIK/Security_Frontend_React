import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Productpage from "./page/Productpage";
import Newnewspage from "./page/Newnewspage";
import Netsecpage from "./page/Netsecpage";
import Eventfinishedpage from "./page/Eventfinishedpage";
import Winnerannouncementpage from "./page/Winnerannouncementpage";
import Bankstatementpage from "./page/Bankstatementpage";
import Quicksearchpage from "./page/Quicksearchpage";
import Customerservicepage from "./page/Customerservicepage";
import Commonpage from "./page/Commonpage";
import Incidentnotificationpage from "./page/Incidentnotificationpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./page/homepage";
import Signuppage from "./page/signuppage";
import Signupcompletepage from "./page/signupcompletepage";
import Loginpage from "./page/loginpage";
import Cardissuancepage from "./page/cardissuancepage";
import Cardissuancecompletepage from "./page/cardissuancecompletepage";
import Eventpage from "./page/eventpage";
import Certificationpage from "./page/certificationpage";
import Loanapplypage from "./page/loanapplypage";
import Loancompletepage from "./page/loancompletepage";
import Transferpage from "./page/transferpage";
import Transfercompletepage from "./page/transfercompletepage";
import OngoingEventpage from "./page/OngoingEventpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/signupcomplete" element={<Signupcompletepage />} />
        <Route path="/cardissuancepage" element={<Cardissuancepage />} />
        <Route
          path="/cardissuancecompletepage"
          element={<Cardissuancecompletepage />}
        />
        <Route path="/event1" element={<Eventpage />} />
        <Route path="/event" element={<OngoingEventpage />} />
        <Route path="/certification" element={<Certificationpage />} />
        <Route path="/loanapply" element={<Loanapplypage />} />
        <Route path="/loancomplete" element={<Loancompletepage />} />
        <Route path="/transfer" element={<Transferpage />} />
        <Route path="/transfercomplete" element={<Transfercompletepage />} />
        <Route path="/Commonpage" element={<Commonpage />} />
        <Route
          path="/Bankstatementpage"
          element={<Bankstatementpage />}
        ></Route>
        <Route
          path="/Customerservicepage"
          element={<Customerservicepage />}
        ></Route>
        <Route
          path="/Eventfinishedpage"
          element={<Eventfinishedpage />}
        ></Route>
        <Route path="/Netsecpage" element={<Netsecpage />}></Route>
        <Route path="/Newnewspage" element={<Newnewspage />}></Route>
        <Route path="/productpage" element={<Productpage />}></Route>
        <Route path="/Quicksearchpage" element={<Quicksearchpage />}></Route>
        <Route
          path="/Winnerannouncementpage"
          element={<Winnerannouncementpage />}
        ></Route>

        <Route
          path="/Incidentnotificationpage"
          element={<Incidentnotificationpage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App; // 이걸 index.js에서 import 해서 사용한다.
