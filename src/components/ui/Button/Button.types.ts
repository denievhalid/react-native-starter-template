import type { TouchableOpacityProps } from "react-native";
import type { ReactNode } from "react";

export type ButtonTypes = "dark" | "dark-outline" | "primary";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  type: ButtonTypes;
} & TouchableOpacityProps;
