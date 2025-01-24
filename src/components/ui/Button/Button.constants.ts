import { cva } from "class-variance-authority";

export const buttonClasses = cva(
  ["border h-[48px] items-center justify-center px-4 rounded-lg text-white"],
  {
    variants: {
      type: {
        dark: "bg-black border-black",
        "dark-outline": "bg-transparent border-grey-light",
        primary: "bg-primary border-primary",
      },
    },
  },
);

export const textClasses = cva(["text-black text-base font-inter-semibold"], {
  variants: {
    type: {
      dark: "text-white",
      "dark-outline": "text-black",
      primary: "text-white",
    },
  },
});
