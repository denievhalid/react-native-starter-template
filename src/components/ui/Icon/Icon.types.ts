import { icons } from "@/components/ui/Icon/Icon.data";

export type IconNameType = keyof typeof icons;

export type IconProps = {
  name: IconNameType;
  width?: number;
  height?: number;
};
