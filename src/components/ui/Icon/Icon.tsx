import Svg from "react-native-svg";
import { useMemo } from "react";
import { icons } from "./Icon.data";
import type { IconProps } from "./Icon.types";

export const Icon = ({ name, width = 24, height = 24 }: IconProps) => {
  const IconComponent = useMemo(() => icons[name], [name]);

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <IconComponent />
    </Svg>
  );
};
