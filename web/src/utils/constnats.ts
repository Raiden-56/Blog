import { RouteInterface } from "../interfaces";

const apiUrl = 'http://41.97.99.98:3003/api';
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
      icon: 'fas fa-external-link-alt',
    },
  ];

export {
    apiUrl,
    routes,
};