import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";
import LayoutDefault from "./views/LayoutDefault";
import LayoutBoxed from "./views/LayoutBoxed";
import LayoutChildMenu from "./views/LayoutChildMenu";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/layout-default",
      name: "LayoutDefault",
      component: LayoutDefault
    },
    {
      path: "/layout-boxed",
      name: "LayoutBoxed",
      component: LayoutBoxed
    },
    {
      path: "/layout-child-menu",
      name: "LayoutChildMenu",
      component: LayoutChildMenu
    }
  ]
});
