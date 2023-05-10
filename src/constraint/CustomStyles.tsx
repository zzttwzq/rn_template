import { mainTextColor, thirdColor, shadowColor } from "./CustomColors";
import { smallFont, normalFont, largeFont, titleFont } from "./CustomFonts";
import { getWidth, getHeight } from "./CustomLayout";

export const SmallTextStyle = {
  fontSize: smallFont,
  color: mainTextColor,
};

export const NormalTextStyle = {
  fontSize: normalFont,
  color: mainTextColor,
};

export const LargeTextStyle = {
  fontSize: largeFont,
  color: mainTextColor,
};

export const TitleTextStyle = {
  fontSize: titleFont,
  color: mainTextColor,
};

// 图片样式
export const ToolBarImageStyle = {
  width: getWidth(18),
  height: getHeight(20),
  // marginRight: 10,
};

// 分割线
export const LineVerticalStyle = {
  width: 1,
  height: "100%",
  backgroundColor: thirdColor,
};

export const LineHorizontalStyle = {
  width: "100%",
  height: 1,
  backgroundColor: thirdColor,
};

// 阴影
export const ShadowStyle = {
  shadowColor: shadowColor,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

// toolbar样式
export const ToolBarBackStyle = {
  position: "absolute",
  paddingTop: getWidth(10),
  paddingBottom: getWidth(10),
  paddingLeft: getWidth(15),
  paddingRight: getWidth(15),
  backgroundColor: "white",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 15,
};
