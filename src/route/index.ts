import HomeScreen from "../views/Home/HomeScreen";
import { DrawingCanvas } from "../views/Examples/Drawing/DrawingCanvas";

const routers = [
  // {
  //   name: "DrawingCanvas",
  //   component: DrawingCanvas,
  //   options: {
  //     title: "🎨 DrawingCanvas",
  //     // header: () => null, // 隐藏顶部导航栏
  //   },
  // },
  {
    name: "Home",
    component: HomeScreen,
    options: {
      title: "🎨 Skia",
      header: () => null, // 隐藏顶部导航栏
    },
  },
];

export { routers };
