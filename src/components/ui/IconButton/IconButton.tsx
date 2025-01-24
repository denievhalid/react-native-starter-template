import { TouchableOpacity } from "react-native";
import { buttonClasses } from "./IconButton.constants";
import { Icon } from "@/components/ui/Icon/Icon";
import type { IconButtonProps } from "./IconButton.types";

export const IconButton = ({
  className,
  type,
  name,
  iconSize,
}: IconButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    className={buttonClasses({ className, type })}
  >
    <Icon name={name} width={iconSize} height={iconSize} />
  </TouchableOpacity>
);
