import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createElement } from "react";
import { classes } from "./SafeArea.constants";
import type { SafeAreaProps } from "./SafeArea.types";

export const SafeArea = ({ children, className }: SafeAreaProps) => {
  const { top } = useSafeAreaInsets();

  return createElement(View, {
    children,
    className: classes({ className }),
    style: {
      paddingTop: top,
    },
  });
};
