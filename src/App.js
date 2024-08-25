import GlobalStyles from "./Global";
import React from "react";
import Login from "./login/loginPage";
import Register from "./register/registerPage";
import HomePage from "./home/home";
import UserHome from "./userhome/userHomePage";
import CreateProductorProfile from "./profile/createProductorProfile";
import { CreateEvent } from "./events/createEvent";
import SelectEventType from "./events/selectEventType";
import CreateTicket from "./events/createTicket";
import EventDetails from "./events/eventDetails";
import EditEvent from "./events/editEvent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEventSucess from "./events/createEventSucess";
import SelectTicketType from "./events/selectTicketType";
import Checkout from "./ticket/checkout";
import PublicProfile from "./profile/publicProfile";
import EditProfile from "./profile/editProfile";
import CheckoutSucess from "./ticket/checkoutSucess";
import Equipe from './ticket/equipe'

import Relatorios from "./analytics/relatorio";
import Transacoes from "./analytics/transacoes";
import Financeiro from "./analytics/financeiro";
import CommercialProfileError from "./profile/commercialProfileError";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/register" element={<Register />}>
          {" "}
        </Route>
        <Route path="/profile" element={<UserHome />}>
          {" "}
        </Route>
        <Route
          path="/createproductorprofile"
          element={<CreateProductorProfile />}
        >
          {" "}
        </Route>
        <Route path="/createevent" element={<CreateEvent />}>
          {" "}
        </Route>
        <Route path="/createonlineevent" element={<CreateEvent />}>
          {" "}
        </Route>

        <Route path="/selecteventtype" element={<SelectEventType />}>
          {" "}
        </Route>
        <Route path="/selecttickettype/:eventId" element={<SelectTicketType />}>
          {" "}
        </Route>
        <Route path="/createticket/:eventId" element={<CreateTicket />}>
          {" "}
        </Route>
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/eventedit/:eventId" element={<EditEvent />} />
        <Route path="/createevent/success" element={<CreateEventSucess  text={'Evento'} text2={'Boas vendas!'} text3={'Gerenciar evento'} router={'profile'}/>} />
        <Route path="/createticket/success" element={<CreateEventSucess text={'Ingresso'} text2={'Boas vendas!'} text3={'Gerenciar evento'} router={'profile'} />} />
        <Route path="/createcomercialprofile/success" element={<CreateEventSucess text={'Perfil comercial'} text2={'Crie o seu primeiro evento!'} text3={'Criar evento'} router={'createevent'} />} />


        <Route path="/profile/:profileId" element={<PublicProfile />} />
        <Route path="/commercialprofileerror" element={<CommercialProfileError />} />

        <Route path="/checkout/:eventId" element={<Checkout />} />

        <Route path="/checkout/success" element={<CheckoutSucess />} />

        <Route path="/editprofile" element={<EditProfile />} />

        <Route path="/reports/:eventId" element={<Relatorios />} />
        <Route path="/transactions/:eventId" element={<Transacoes />} />


        <Route path="/team/:eventId" element={<Equipe />} />

        <Route path="/financial/eventId" element={<Financeiro />} />


        
      </Routes>
    </Router>
  );
}

export default App;
