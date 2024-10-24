import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-white font-normal whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 w-max /[box-shadow:_0px_3px_1px_0px_#A8B5DE80_inset] /[box-shadow:_0px_4px_4px_0px_#00000040]",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90 border-2 border-[#0D2972] ",
        destructive: "bg-destructive  hover:bg-destructive/80 border-",
        secondary: " border-2 border-secondary text-secondary font-medium",
      },
      size: {
        default: "h-12 px-6 py-2 text-lg",
        sm: "h-10 px-4 py-2 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButonProps>(({ variant, size, className, ...props }, ref) => {
  return <button ref={ref} type="button" {...props} className={cn(buttonVariants({ variant, size }), className)} />;
});

export default Button;
