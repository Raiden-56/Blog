import { RouteInterface } from "../interfaces";

const apiUrl = 'http://localhost:3003/api';
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
      url: "https://www.github.com",
    },
  ];

export {
    apiUrl,
    routes,
};