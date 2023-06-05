import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Box({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        `
          bg-neutral-900
          h-fit
          rounded-lg
          w-full
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
