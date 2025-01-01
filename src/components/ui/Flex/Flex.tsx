import { createElement } from "react";
import { View } from "react-native";
import { flexClasses, flexRowClasses } from "./Flex.constants";
import type { FlexProps, FlexRowProps } from "./Flex.types";

const Flex = ({ children, className, gap }: FlexProps) =>
  createElement(View, {
    children,
    className: flexClasses({ className, gap }),
  });

const FlexRow = ({ children, className }: FlexRowProps) =>
  createElement(View, {
    children,
    className: flexRowClasses({ className }),
  });

export { Flex, FlexRow };
