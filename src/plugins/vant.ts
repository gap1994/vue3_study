import { App } from "vue";
import { 
  Button,
  Card,
  Cell,
  ConfigProvider,
  Field,
  Form,
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
  Tab,
  Tabs,
  Tabbar,
  TabbarItem
} from "vant";

const plugins = [
  Button,
  Card,
  Cell,
  ConfigProvider,
  Field,
  Form,
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
  Tab,
  Tabs,
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