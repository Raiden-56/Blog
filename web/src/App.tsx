import { useState } from "react";
import { NavBar } from "./components";
import { AlertModal } from "./components";
import { routes } from './utils/constnats';
import {  UserInterface } from "./interfaces";
import { Routes, Route } from "react-router-dom";
import { Home, Posts, Login, Signup } from "./routes";

function App() {
  
  const [user, setUser] = useState<UserInterface | null>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");

  function toggleModal({ text }: { text: string }) {
    setModalText(text);
    setVisible((previousState) => !previousState)
  }

  return (
    <div className="App">
      <AlertModal isVisible={isVisible} toggleModal={toggleModal} text={modalText}/>
      <NavBar routes={routes} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} toggleModal={toggleModal}/>} />
        <Route path="/signup" element={<Signup setUser={setUser} user={user} toggleModal={toggleModal}/>} />
      </Routes>
    </div>
  );
}

export default App;
