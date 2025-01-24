import { G, Path } from "react-native-svg";

export const icons = {
  "arrow-right": () => (
    <Path
      d="M9.25 7.9l10.613-3.537c4.762-1.588 7.35 1.012 5.775 5.774L22.1 20.75c-2.375 7.137-6.275 7.137-8.65 0L12.4 17.6l-3.15-1.05c-7.137-2.375-7.137-6.263 0-8.65zM12.638 17.063l4.475-4.488"
      stroke="#fff"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  micro: () => (
    <>
      <Path
        d="M12 16c2.21 0 4-1.79 4-4V6.5c0-2.21-1.79-4-4-4s-4 1.79-4 4V12c0 2.21 1.79 4 4 4z"
        stroke="#333"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.35 10.15v1.7c0 4.22 3.43 7.65 7.65 7.65 4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.93c.9-.33 1.88-.33 2.78 0M11.2 9.05c.53-.14 1.08-.14 1.61 0M12 19.5v3"
        stroke="#333"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};
