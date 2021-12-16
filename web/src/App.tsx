import { NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Posts, Login, Signup } from "./routes";
import { RouteInterface, UserInterface } from "./interfaces";

function App() {
  
  var user: UserInterface | null = {
    _id: "85",
    username: "raiden",
    email: "nadirkichou@hotmail.fr",
    avatar: 45,
  };

  user = null;

  var routes: RouteInterface[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Posts",
      url: "/posts",
    },
    {
      name: "Join Us !",
      url: "/join",
    },
    {
      name: "Github",
      url: "https://www.github.com",
    },
  ];

  return (
    <div className="App">
      <NavBar routes={routes} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
