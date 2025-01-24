import type { TouchableOpacityProps } from "react-native";
import type { IconNameType } from "@/components/ui/Icon/Icon.types";

export type IconButtonTypes = "dark" | "dark-outline" | "empty" | "primary";

export type IconButtonProps = {
  className?: string;
  name: IconNameType;
  type: IconButtonTypes;
  iconSize?: number;
} & TouchableOpacityProps;
