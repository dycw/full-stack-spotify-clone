import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
};

export default function SidebarItem({
  icon: Icon,
  label,
  active,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className={twMerge(
        `
          cursor-pointer
          flex
          flex-row
          font-medium
          gap-x-4
          h-auto
          hover:text-white
          items-center
          py-1
          text-md
          text-neutral-400
          transition
          w-full
        `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}
