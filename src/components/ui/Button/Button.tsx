import { Text, TouchableOpacity } from "react-native";
import { buttonClasses, textClasses } from "./Button.constants";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  className,
  type,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    className={buttonClasses({ className, type })}
    {...props}
  >
    <Text className={textClasses({ type })}>{children}</Text>
  </TouchableOpacity>
);
