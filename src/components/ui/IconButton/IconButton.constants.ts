import { cva } from "class-variance-authority";

export const buttonClasses = cva(
  ["h-[48px] w-[48px] items-center justify-center rounded-lg"],
  {
    variants: {
      type: {
        dark: "bg-black border-black",
        empty: "bg-transparent",
        "dark-outline": "bg-transparent border-grey-light",
        primary: "bg-primary border-primary",
      },
    },
  },
);
