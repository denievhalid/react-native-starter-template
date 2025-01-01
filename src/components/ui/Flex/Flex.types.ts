import type { ReactNode } from "react";

export type FlexProps = {
  children: ReactNode;
  className?: string;
  gap?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
};

export type FlexRowProps = {
  children: ReactNode;
  className?: string;
};
