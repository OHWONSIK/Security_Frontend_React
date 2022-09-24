import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Productpage from "./page/Productpage";
import Newnewspage from "./page/Newnewspage";
import Netsecpage from "./page/Netsecpage";
import Eventfinishedpage from "./page/Eventfinishedpage";
import Winnerannouncementpage from "./page/Winnerannouncementpage";
import Bankstatementpage from "./page/Bankstatementpage";
import Quicksearchpage from "./page/Quicksearchpage";
import Customerservicepage from "./page/Customerservicepage";
import Winnerannouncement_detailpage from "./page/Winnerannouncement_detailpage";
import Customerservice_detailpage from "./page/Customerservice_detailpage";
import Newnews_detailpage from "./page/Newnews_detailpage";
import Netsec_detailpage from "./page/Netsec_detailpage";
import Eventfinished_detailpage from "./page/Eventfinished_detailpage";
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
import Topcontent from "./components/TopContent";
import Testtopcontent from "./components/testtopcontent";
import SelectAccountpage from "./page/selectAccountpage";
import SelectAccountpage2 from "./page/selectAccountpage2";
import SelectAccountpage3 from "./page/selectAccountpage3";
import NoLoginpage from "./page/noLoginpage";
import InquiryWritepage from "./page/inquiryWritepage";
import Mypagepage from "./page/Mypagepage.js";
import MyInfomationpage from "./page/myInfomationpage";
import CardListpage from "./page/cardListpage";
import LoanListpage from "./page/loanListpage";
import OngoingEvent_detailpage from "./page/ongoingEvent_detailpage";
import OngoingEvent_detailpage_2 from "./page/ongoingEvent_detailpage_2";
import OngoingEvent_detailpage_3 from "./page/ongoingEvent_detailpage_3";
import OngoingEvent_detailpage_4 from "./page/ongoingEvent_detailpage_4";
import CertificationCenterpage from "./page/certificationCenterpage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loginId") === null) {
      console.log("isLogin ?? :: ", isLogin);
    } else {
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("loginId") !== null) {
      Axios.get(
        "/api/v1/user/accounts/inquiry",
        // { params: { userId: sessionStorage.getItem('loginId') } }
        {
          params: { loginId: sessionStorage.getItem("loginId") },
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
            "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
          },
        }
      )
        .then((res) => {
          if (Object.keys(res.data.data).length === 0)
            console.log("isAccount ?? :: ", isAccount);
          else {
            console.log("isAccount ?? :: ", isAccount);
            // setAccountNum(res.data.data[0].accountNumber)
            // account = res.data.data[0].accountNumber
            // balance = res.data.data[0].balance
            setIsAccount(true);
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
          // sessionStorage.removeItem('loginId')
          // document.location.href = "/";
        });
    }
  }, []);

  return (
    <div className="App">
      {isAccount ? (
        <BrowserRouter>
          <Testtopcontent />
          <Routes>
            <Route path="/" element={<Testhomepage />} />
            <Route path="/cardissuance" element={<Cardissuancepage />} />
            <Route
              path="/cardissuancecomplete"
              element={<Cardissuancecompletepage />}
            />
            <Route path="/event" element={<Eventpage />} />
            <Route path="/ongoingevent" element={<OngoingEventpage />} />
            <Route path="/certification" element={<Certificationpage />} />
            <Route path="/loanapply" element={<Loanapplypage />} />
            <Route path="/loancomplete" element={<Loancompletepage />} />
            <Route path="/transfer" element={<Transferpage />} />
            <Route
              path="/transfercomplete"
              element={<Transfercompletepage />}
            />
            <Route
              path="/customerservice_detail"
              element={<Customerservice_detailpage />}
            />
            <Route
              path="/winnerannouncement_detail"
              element={<Winnerannouncement_detailpage />}
            />
            <Route path="/newnews_detail" element={<Newnews_detailpage />} />
            <Route path="/netsec_detail" element={<Netsec_detailpage />} />
            <Route
              path="/eventfinished_detail"
              element={<Eventfinished_detailpage />}
            />
            <Route
              path="/bankstatement"
              element={<Bankstatementpage />}
            ></Route>
            <Route
              path="/customerservice"
              element={<Customerservicepage />}
            ></Route>
            <Route
              path="/eventfinished"
              element={<Eventfinishedpage />}
            ></Route>
            <Route path="/netsec" element={<Netsecpage />}></Route>
            <Route path="/newnews" element={<Newnewspage />}></Route>
            <Route path="/product" element={<Productpage />}></Route>
            <Route path="/quicksearch" element={<Quicksearchpage />}></Route>
            <Route
              path="/winnerannouncement"
              element={<Winnerannouncementpage />}
            ></Route>
            <Route
              path="/incidentnotification"
              element={<Incidentnotificationpage />}
            ></Route>
            <Route
              path="/passwordchange"
              element={<Passwordchangepage />}
            ></Route>
            <Route
              path="/createaccount"
              element={<CreateAccountpage />}
            ></Route>
            <Route
              path="/createaccount02"
              element={<CreateAccount_2page />}
            ></Route>
            <Route
              path="/createaccount03"
              element={<CreateAccount_3page />}
            ></Route>
            <Route
              path="/passwordchangecomplete"
              element={<PasswordChangeCompletepage />}
            ></Route>
            <Route
              path="/selectaccount"
              element={<SelectAccountpage />}
            ></Route>
            <Route
              path="/selectaccount02"
              element={<SelectAccountpage2 />}
            ></Route>
            <Route path="/mypage" element={<Mypagepage />}></Route>
            <Route path="/qa" element={<InquiryWritepage />}></Route>
            <Route path="/myinfo" element={<MyInfomationpage />}></Route>
            <Route path="/cardlist" element={<CardListpage />}></Route>
            <Route path="/loanlist" element={<LoanListpage />}></Route>
            <Route
              path="/ongoingevent_detail"
              element={<OngoingEvent_detailpage />}
            ></Route>{" "}
            <Route
              path="/ongoingevent2_detail"
              element={<OngoingEvent_detailpage_2 />}
            ></Route>{" "}
            <Route
              path="/ongoingevent3_detail"
              element={<OngoingEvent_detailpage_3 />}
            ></Route>{" "}
            <Route
              path="/ongoingevent4_detail"
              element={<OngoingEvent_detailpage_4 />}
            ></Route>{" "}
            <Route
              path="/certificationcenter"
              element={<CertificationCenterpage />}
            ></Route>{" "}
            <Route path="/signup" element={<Testhomepage />}></Route>
          </Routes>
        </BrowserRouter>
      ) : isLogin ? (
        <BrowserRouter>
          <Testtopcontent />
          <Routes>
            <Route
              path="/transfercomplete"
              element={<Transfercompletepage />}
            />
            <Route path="/" element={<Testhomepage />} />
            <Route path="/cardissuance" element={<CreateAccountpage />} />
            <Route path="/eventpage" element={<Eventpage />} />
            <Route path="/ongoingevent" element={<OngoingEventpage />} />
            <Route path="/loanapply" element={<CreateAccountpage />} />
            <Route path="/transfer" element={<CreateAccountpage />} />
            <Route
              path="/customerservice_detail"
              element={<Customerservice_detailpage />}
            />
            <Route
              path="/winnerannouncement_detail"
              element={<Winnerannouncement_detailpage />}
            />
            <Route path="/newnews_detail" element={<Newnews_detailpage />} />
            <Route path="/netsec_detail" element={<Netsec_detailpage />} />
            <Route
              path="/eventfinished_detail"
              element={<Eventfinished_detailpage />}
            />
            <Route
              path="/bankstatement"
              element={<CreateAccountpage />}
            ></Route>
            <Route
              path="/customerservice"
              element={<Customerservicepage />}
            ></Route>
            <Route
              path="/eventfinished"
              element={<Eventfinishedpage />}
            ></Route>
            <Route path="/netsec" element={<Netsecpage />}></Route>
            <Route path="/newnews" element={<Newnewspage />}></Route>
            <Route path="/product" element={<Productpage />}></Route>
            <Route path="/quicksearch" element={<CreateAccountpage />}></Route>
            <Route
              path="/winnerannouncement"
              element={<Winnerannouncementpage />}
            ></Route>
            <Route
              path="/incidentnotification"
              element={<Incidentnotificationpage />}
            ></Route>
            <Route
              path="/passwordchange"
              element={<Passwordchangepage />}
            ></Route>
            <Route
              path="/createaccount"
              element={<CreateAccountpage />}
            ></Route>
            <Route
              path="/createaccount02"
              element={<CreateAccount_2page />}
            ></Route>
            <Route
              path="/createaccount03"
              element={<CreateAccount_3page />}
            ></Route>
            <Route
              path="/passwordchangecomplete"
              element={<PasswordChangeCompletepage />}
            ></Route>
            <Route
              path="/selectaccount"
              element={<CreateAccountpage />}
            ></Route>
            <Route
              path="/selectaccount02"
              element={<CreateAccountpage />}
            ></Route>
            <Route path="/mypage" element={<Mypagepage />}></Route>
            <Route path="/qa" element={<InquiryWritepage />}></Route>
            <Route path="/myinfo" element={<MyInfomationpage />}></Route>
            <Route
              path="/ongoingevent_detail"
              element={<OngoingEvent_detailpage />}
            ></Route>{" "}
            <Route
              path="/ongoingevent2_detail"
              element={<OngoingEvent_detailpage_2 />}
            ></Route>{" "}
            <Route
              path="/ongoingevent3_detail"
              element={<OngoingEvent_detailpage_3 />}
            ></Route>{" "}
            <Route
              path="/ongoingevent4_detail"
              element={<OngoingEvent_detailpage_4 />}
            ></Route>{" "}
            <Route
              path="/certificationcenter"
              element={<CertificationCenterpage />}
            ></Route>{" "}
            <Route path="/signup" element={<Testhomepage />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Topcontent />
          <Routes>
            <Route
              path="/transfercomplete"
              element={<Transfercompletepage />}
            />
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/signupcomplete" element={<Signupcompletepage />} />
            <Route path="/cardissuance" element={<NoLoginpage />} />
            <Route path="/event" element={<Eventpage />} />
            <Route path="/ongoingevent" element={<OngoingEventpage />} />
            <Route path="/loanapply" element={<NoLoginpage />} />
            <Route path="/transfer" element={<NoLoginpage />} />
            <Route
              path="/customerservice_detail"
              element={<Customerservice_detailpage />}
            />
            <Route
              path="/winnerannouncement_detail"
              element={<Winnerannouncement_detailpage />}
            />
            <Route path="/newnews_detail" element={<Newnews_detailpage />} />
            <Route path="/netsec_detail" element={<Netsec_detailpage />} />
            <Route
              path="/eventfinished_detail"
              element={<Eventfinished_detailpage />}
            />
            <Route path="/bankstatement" element={<NoLoginpage />}></Route>
            <Route path="/customerservice" element={<NoLoginpage />}></Route>
            <Route
              path="/eventfinished"
              element={<Eventfinishedpage />}
            ></Route>
            <Route path="/netsec" element={<Netsecpage />}></Route>
            <Route path="/newnews" element={<Newnewspage />}></Route>
            <Route path="/product" element={<Productpage />}></Route>
            <Route path="/quicksearch" element={<NoLoginpage />}></Route>
            <Route
              path="/winnerannouncement"
              element={<Winnerannouncementpage />}
            ></Route>
            <Route
              path="/incidentnotification"
              element={<Incidentnotificationpage />}
            ></Route>
            <Route path="/findid" element={<Findidpage />}></Route>
            <Route path="/findpassword" element={<Findpasswordpage />}></Route>
            <Route
              path="/passwordchange"
              element={<Passwordchangepage />}
            ></Route>
            <Route path="/idguide" element={<Idguidepage />}></Route>
            <Route
              path="/temporarypasswordguide"
              element={<Temporarypasswordguidepage />}
            ></Route>
            <Route path="/createaccount" element={<NoLoginpage />}></Route>
            <Route
              path="/passwordchangecomplete"
              element={<PasswordChangeCompletepage />}
            ></Route>
            <Route path="/selectaccount" element={<NoLoginpage />}></Route>
            <Route path="/nologin" element={<NoLoginpage />}></Route>
            <Route path="/mypage" element={<NoLoginpage />}></Route>
            <Route path="/qa" element={<NoLoginpage />}></Route>
            <Route path="/myinfo" element={<NoLoginpage />}></Route>
            <Route path="/createaccount02" element={<NoLoginpage />}></Route>
            <Route path="/selectaccount02" element={<NoLoginpage />}></Route>
            <Route
              path="/ongoingevent_detail"
              element={<OngoingEvent_detailpage />}
            ></Route>{" "}
            <Route
              path="/ongoingevent2_detail"
              element={<OngoingEvent_detailpage_2 />}
            ></Route>{" "}
            <Route
              path="/ongoingevent3_detail"
              element={<OngoingEvent_detailpage_3 />}
            ></Route>{" "}
            <Route
              path="/ongoingevent4_detail"
              element={<OngoingEvent_detailpage_4 />}
            ></Route>{" "}
            <Route
              path="/certificationcenter"
              element={<NoLoginpage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App; // 이걸 index.js에서 import 해서 사용한다.
