import { Dimensions } from "react-native";
const Dimens = Dimensions.get("window");

console.log(">>> Dimensions", Dimens);

const designWidth = 1334;
const designHeight = 760;
const windowWidth = Dimens.width;
const windowHeight = Dimens.height;

export function getWidth(width: number) {
  const dw = (designWidth / windowWidth) * width;
  // console.log(">>> designRate", designRate);
  // console.log(">>> dw", dw);

  return dw;
}

export function getHeight(height: number) {
  const dh = (designHeight / windowHeight) * height;
  // console.log(">>> dh", dh);

  return dh;
}

// export function getPadding(width: number) {
//   const dh = (designHeight / windowHeight) * height;
//   // console.log(">>> dh", dh);

//   return dh;
// }
