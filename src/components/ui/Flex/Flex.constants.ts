import { cva } from "class-variance-authority";

export const flexClasses = cva([], {
  variants: {
    gap: {
      xxs: "gap-1",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-5",
      xl: "gap-6",
    },
  },
  defaultVariants: {
    gap: "md",
  },
});

export const flexRowClasses = cva(["flex-row items-center justify-between"], {
  variants: {
    gap: {
      xxs: "gap-1",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-5",
      xl: "gap-6",
    },
  },
});
