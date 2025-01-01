import { View } from "react-native";
import { createElement } from "react";
import { classes } from "./Container.constants";
import type { ContainerProps } from "Container.types";

export const Container = ({ children, className }: ContainerProps) =>
  createElement(View, {
    children,
    className: classes({ className }),
  });
