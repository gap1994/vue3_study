import { App } from "vue";
import { 
  Button,
  Card,
  Cell,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Sidebar,
  SidebarItem,
  Sticky,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem
} from "vant";

const plugins = [
  Button,
  Card,
  Cell,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Sidebar,
  SidebarItem,
  Sticky,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem
];

export const vantPlugins = {
  install: function(app: App) {
    plugins.forEach(item => {
      app.component(item.name, item);
    });
  }
};