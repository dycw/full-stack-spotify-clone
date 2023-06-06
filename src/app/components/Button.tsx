import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
            bg-green-500
            border
            border-transparent
            disabled:cursor-not-allowed
            disabled:opacity-50
            font-bold
            hover:opacity-75
            px-3
            py-3
            rounded-full
            text-black
            transition
            w-full
          `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
