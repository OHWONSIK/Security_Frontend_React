import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
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
import Findidpage from "./page/findidpage";
import Findpasswordpage from "./page/findpasswordpage";
import Passwordchangepage from "./page/passwordchangepage";
import Idguidepage from "./page/idguidepage";
import Temporarypasswordguidepage from "./page/temporarypasswordguidepage";
import CreateAccountpage from "./page/CreateAccountpage";
import CreateAccount_2page from "./page/CreateAccount_2page";
import CreateAccount_3page from "./page/CreateAccount_3page";
import PasswordChangeCompletepage from "./page/PasswordChangeCompletepage";

import Testhomepage from "./page/testhomepage";
import Topcontent from "./components/TopContent"
import Testtopcontent from "./components/testtopcontent"
import SelectAccountpage from "./page/selectAccountpage";
import SelectAccountpage2 from "./page/selectAccountpage2";
import SelectAccountpage3 from "./page/selectAccountpage3";
import NoLoginpage from "./page/noLoginpage";
import InquiryWritepage from "./page/inquiryWritepage";
import Mypagepage from "./page/Mypagepage.js";
import MyInfomationpage from "./page/myInfomationpage";
import CardListpage from "./page/cardListpage";
import LoanListpage from "./page/loanListpage";




// import TesttopContent from "./components/testtopcontent";


function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [isAccount, setIsAccount] = useState(false)


  useEffect(() => {
    if (sessionStorage.getItem('loginId') === null) {
      console.log('isLogin ?? :: ', isLogin)
    } else {
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('loginId') !== null) {
      Axios.get('/users/accounts/inquiry',
        // { params: { userId: sessionStorage.getItem('loginId') } }
        { params: { userId: sessionStorage.getItem('loginId') } }

      )
        .then(res => {
          if (Object.keys(res.data.data).length === 0)
            console.log('isAccount ?? :: ', isAccount)
          else {
            console.log('isAccount ?? :: ', isAccount)
            // setAccountNum(res.data.data[0].accountNumber)
            // account = res.data.data[0].accountNumber
            // balance = res.data.data[0].balance
            setIsAccount(true)
          }
        })
        .catch()
    }
  }, [])

  // const render = () => {
  //   if (isLogin === true && isAccount === true) {
  //     <BrowserRouter>
  //       <Testtopcontent />
  //       <Routes>
  //         <Route path="/" element={<Testhomepage />} />
  //         <Route path="/login" element={<Loginpage />} />
  //         <Route path="/signup" element={<Signuppage />} />
  //         <Route path="/signupcomplete" element={<Signupcompletepage />} />
  //         <Route path="/cardissuance" element={<Cardissuancepage />} />
  //         <Route
  //           path="/cardissuancecompletepage"
  //           element={<Cardissuancecompletepage />}
  //         />
  //         <Route path="/event1" element={<Eventpage />} />
  //         <Route path="/event" element={<OngoingEventpage />} />
  //         <Route path="/certification" element={<Certificationpage />} />
  //         <Route path="/loanapply" element={<Loanapplypage />} />
  //         <Route path="/loancomplete" element={<Loancompletepage />} />
  //         <Route path="/transfer" element={<Transferpage />} />
  //         <Route path="/transfercomplete" element={<Transfercompletepage />} />
  //         <Route path="/Commonpage" element={<Commonpage />} />
  //         <Route
  //           path="/Bankstatementpage"
  //           element={<Bankstatementpage />}
  //         ></Route>
  //         <Route
  //           path="/Customerservicepage"
  //           element={<Customerservicepage />}
  //         ></Route>
  //         <Route
  //           path="/Eventfinishedpage"
  //           element={<Eventfinishedpage />}
  //         ></Route>
  //         <Route path="/Netsecpage" element={<Netsecpage />}></Route>
  //         <Route path="/Newnewspage" element={<Newnewspage />}></Route>
  //         <Route path="/productpage" element={<Productpage />}></Route>
  //         <Route path="/Quicksearchpage" element={<Quicksearchpage />}></Route>
  //         <Route
  //           path="/Winnerannouncementpage"
  //           element={<Winnerannouncementpage />}
  //         ></Route>

  //         <Route
  //           path="/Incidentnotificationpage"
  //           element={<Incidentnotificationpage />}
  //         ></Route>
  //         <Route path="/findid" element={<Findidpage />}></Route>
  //         <Route path="/findpassword" element={<Findpasswordpage />}></Route>
  //         <Route path="/passwordchange" element={<Passwordchangepage />}></Route>
  //         <Route path="/idguide" element={<Idguidepage />}></Route>
  //         <Route
  //           path="/temporarypasswordguide"
  //           element={<Temporarypasswordguidepage />}
  //         ></Route>
  //         <Route
  //           path="/CreateAccountpage"
  //           element={<CreateAccountpage />}
  //         ></Route>
  //         <Route
  //           path="/CreateAccount_2page"
  //           element={<CreateAccount_2page />}
  //         ></Route>
  //         <Route
  //           path="/CreateAccount_3page"
  //           element={<CreateAccount_3page />}
  //         ></Route>
  //         <Route
  //           path="/PasswordChangeComplete"
  //           element={<PasswordChangeCompletepage />}
  //         ></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   }

  //   else {

  //     <BrowserRouter>
  //       <Topcontent />
  //       <Routes>
  //         <Route path="/" element={<Homepage />} />
  //         <Route path="/login" element={<Loginpage />} />
  //         <Route path="/signup" element={<Signuppage />} />
  //         <Route path="/signupcomplete" element={<Signupcompletepage />} />
  //         <Route path="/cardissuance" element={<Cardissuancepage />} />
  //         <Route
  //           path="/cardissuancecompletepage"
  //           element={<Cardissuancecompletepage />}
  //         />
  //         <Route path="/Eventpage" element={<Eventpage />} />
  //         <Route path="/OngoingEventpage" element={<OngoingEventpage />} />
  //         <Route path="/certification" element={<Certificationpage />} />
  //         <Route path="/loanapply" element={<Loanapplypage />} />
  //         <Route path="/loancomplete" element={<Loancompletepage />} />
  //         <Route path="/transfer" element={<Transferpage />} />
  //         <Route path="/transfercomplete" element={<Transfercompletepage />} />
  //         <Route path="/Commonpage" element={<Commonpage />} />
  //         <Route
  //           path="/Bankstatementpage"
  //           element={<Bankstatementpage />}
  //         ></Route>
  //         <Route
  //           path="/Customerservicepage"
  //           element={<Customerservicepage />}
  //         ></Route>
  //         <Route
  //           path="/Eventfinishedpage"
  //           element={<Eventfinishedpage />}
  //         ></Route>
  //         <Route path="/Netsecpage" element={<Netsecpage />}></Route>
  //         <Route path="/Newnewspage" element={<Newnewspage />}></Route>
  //         <Route path="/productpage" element={<Productpage />}></Route>
  //         <Route path="/Quicksearchpage" element={<Quicksearchpage />}></Route>
  //         <Route
  //           path="/Winnerannouncementpage"
  //           element={<Winnerannouncementpage />}
  //         ></Route>

  //         <Route
  //           path="/Incidentnotificationpage"
  //           element={<Incidentnotificationpage />}
  //         ></Route>
  //         <Route path="/findid" element={<Findidpage />}></Route>
  //         <Route path="/findpassword" element={<Findpasswordpage />}></Route>
  //         <Route path="/passwordchange" element={<Passwordchangepage />}></Route>
  //         <Route path="/idguide" element={<Idguidepage />}></Route>
  //         <Route
  //           path="/temporarypasswordguide"
  //           element={<Temporarypasswordguidepage />}
  //         ></Route>
  //         <Route
  //           path="/CreateAccountpage"
  //           element={<CreateAccountpage />}
  //         ></Route>
  //         <Route
  //           path="/CreateAccount_2page"
  //           element={<CreateAccount_2page />}
  //         ></Route>
  //         <Route
  //           path="/CreateAccount_3page"
  //           element={<CreateAccount_3page />}
  //         ></Route>
  //         <Route
  //           path="/PasswordChangeComplete"
  //           element={<PasswordChangeCompletepage />}
  //         ></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   }

  // }

  return (
    <div className="App">
      {isAccount ? (
        <BrowserRouter>
          <Testtopcontent />
          <Routes>
            <Route path="/" element={<Testhomepage />} />
            <Route path="/cardissuance" element={<Cardissuancepage />} />
            <Route
              path="/cardissuancecompletepage"
              element={<Cardissuancecompletepage />}
            />
            <Route path="/Event" element={<Eventpage />} />
            <Route path="/OngoingEvent" element={<OngoingEventpage />} />
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

            <Route path="/passwordchange" element={<Passwordchangepage />}></Route>
            <Route
              path="/CreateAccountpage"
              element={<CreateAccountpage />}
            ></Route>
            <Route
              path="/CreateAccount_2page"
              element={<CreateAccount_2page />}
            ></Route>
            <Route
              path="/CreateAccount_3page"
              element={<CreateAccount_3page />}
            ></Route>
            <Route
              path="/PasswordChangeComplete"
              element={<PasswordChangeCompletepage />}
            ></Route>
            <Route path="/selectAccount" element={<SelectAccountpage />}></Route>
            <Route path="/selectAccount2" element={<SelectAccountpage2 />}></Route>

            <Route path="/mypage" element={<Mypagepage />}></Route>
            <Route path="/qapage" element={<InquiryWritepage />}></Route>
            <Route path="/myinfo" element={<MyInfomationpage />}></Route>
            <Route path="/cardlist" element={<CardListpage />}></Route>
            <Route path="/loanList" element={<LoanListpage />}></Route>
          </Routes>
        </BrowserRouter>

      ) : isLogin ? (
        <BrowserRouter>
          <Testtopcontent />
          <Routes>
            <Route path="/" element={<Testhomepage />} />
            <Route path="/cardissuance" element={<CreateAccountpage />} />
            <Route path="/Eventpage" element={<Eventpage />} />
            <Route path="/OngoingEventpage" element={<OngoingEventpage />} />
            <Route path="/loanapply" element={<CreateAccountpage />} />
            <Route path="/transfer" element={<CreateAccountpage />} />
            <Route path="/Commonpage" element={<Commonpage />} />
            <Route
              path="/Bankstatementpage"
              element={<CreateAccountpage />}
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
            <Route path="/Quicksearchpage" element={<CreateAccountpage />}></Route>
            <Route
              path="/Winnerannouncementpage"
              element={<Winnerannouncementpage />}
            ></Route>

            <Route
              path="/Incidentnotificationpage"
              element={<Incidentnotificationpage />}
            ></Route>
            <Route path="/passwordchange" element={<Passwordchangepage />}></Route>
            <Route
              path="/CreateAccountpage"
              element={<CreateAccountpage />}
            ></Route>
            <Route
              path="/CreateAccount_2page"
              element={<CreateAccount_2page />}
            ></Route>
            <Route
              path="/CreateAccount_3page"
              element={<CreateAccount_3page />}
            ></Route>
            <Route
              path="/PasswordChangeComplete"
              element={<PasswordChangeCompletepage />}
            ></Route>
              <Route path="/selectAccount" element={<CreateAccountpage />}></Route>
              <Route path="/selectAccount2" element={<CreateAccountpage />}></Route>
            <Route path="/mypage" element={<Mypagepage />}></Route>
            <Route path="/qapage" element={<InquiryWritepage />}></Route>
            <Route path="/myinfo" element={<MyInfomationpage />}></Route>
            
          </Routes>
        </BrowserRouter>

      ) : (

        <BrowserRouter>
          <Topcontent />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/signupcomplete" element={<Signupcompletepage />} />
            <Route path="/cardissuance" element={<NoLoginpage />} />
            <Route path="/Eventpage" element={<Eventpage />} />
            <Route path="/OngoingEventpage" element={<OngoingEventpage />} />
            <Route path="/loanapply" element={<NoLoginpage />} />
            <Route path="/transfer" element={<NoLoginpage />} />
            <Route path="/Commonpage" element={<Commonpage />} />
            <Route
              path="/Bankstatementpage"
              element={<NoLoginpage />}
            ></Route>
            <Route
              path="/Customerservicepage"
              element={<NoLoginpage />}
            ></Route>
            <Route
              path="/Eventfinishedpage"
              element={<Eventfinishedpage />}
            ></Route>
            <Route path="/Netsecpage" element={<Netsecpage />}></Route>
            <Route path="/Newnewspage" element={<Newnewspage />}></Route>
            <Route path="/productpage" element={<Productpage />}></Route>
            <Route path="/Quicksearchpage" element={<NoLoginpage />}></Route>
            <Route
              path="/Winnerannouncementpage"
              element={<Winnerannouncementpage />}
            ></Route>

            <Route
              path="/Incidentnotificationpage"
              element={<Incidentnotificationpage />}
            ></Route>
            <Route path="/findid" element={<Findidpage />}></Route>
            <Route path="/findpassword" element={<Findpasswordpage />}></Route>
            <Route path="/passwordchange" element={<Passwordchangepage />}></Route>
            <Route path="/idguide" element={<Idguidepage />}></Route>
            <Route
              path="/temporarypasswordguide"
              element={<Temporarypasswordguidepage />}
            ></Route>
            <Route
              path="/CreateAccountpage"
              element={<NoLoginpage />}
            ></Route>
            <Route
              path="/PasswordChangeComplete"
              element={<PasswordChangeCompletepage />}
            ></Route>
            <Route path="/selectAccount" element={<NoLoginpage />}></Route>
            <Route path="/noLogin" element={<NoLoginpage />}></Route>
            <Route path="/mypage" element={<NoLoginpage />}></Route>
            <Route path="/qapage" element={<NoLoginpage />}></Route>
            <Route path="/myinfo" element={<NoLoginpage />}></Route>
            <Route path="/CreateAccount_2page" element={<NoLoginpage />}></Route>
            <Route path="/selectAccount2" element={<NoLoginpage />}></Route>



          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App; // 이걸 index.js에서 import 해서 사용한다.
