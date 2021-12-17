import { NavBar } from "./components";
import { Authentication } from './api';
import { routes } from './utils/constnats';
import { useEffect, useState } from "react";
import { UserInterface } from "./interfaces";
import { AlertModal, Loading } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Posts, Login, Signup, Redirect, Me } from "./routes";

function App() {
  
  const location = useLocation();

  const [user, setUser] = useState<UserInterface | null>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Authentication.isLogedIn().then((response) => {
      const user = response.data;
      if (user) setUser(user);
      setLoading(false);
    });
  }, [])

  function toggleModal({ text }: { text: string }) {
    setModalText(text);
    setVisible((previousState) => !previousState)
  }

  return !loading ? (
    <div className="App">
      <AlertModal isVisible={isVisible} toggleModal={toggleModal} text={modalText}/>
      {
        !location.pathname.startsWith('/redirect') ?
        <NavBar routes={routes} user={user} /> :
        <Loading/>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} toggleModal={toggleModal}/>} />
        <Route path="/signup" element={<Signup setUser={setUser} user={user} toggleModal={toggleModal}/>} />
        <Route path="/redirect/*" element={<Redirect />} />
        <Route path="/me/*" element={<Me user={user} />} />
      </Routes>
    </div>
  ) : <Loading/>;
}

export default App;
