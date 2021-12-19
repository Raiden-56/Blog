import { RouteInterface } from "../interfaces";

const apiPort = "3003";
const apiUrl = "http://localhost";
const routes: RouteInterface[] = [
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
    url: "/redirect/https://github.com/Raiden-56/Blog",
    target: "_blanc",
    icon: "fas fa-external-link-alt",
  },
];

export { apiUrl, apiPort, routes };
