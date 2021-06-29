import { App } from "vue";
import { 
  Button,
  Card,
  Cell,
  CellGroup,
  ConfigProvider,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Popup,
  Sidebar,
  SidebarItem,
  Sticky,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem
} from "vant";

const plugins = [
  Button,
  Card,
  Cell,
  CellGroup,
  ConfigProvider,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Popup,
  Sidebar,
  SidebarItem,
  Sticky,
  Swipe,
  SwipeItem,
  Switch,
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