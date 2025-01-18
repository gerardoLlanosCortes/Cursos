"use client";
import Link from "next/link";
import style from "@/components/active-link/Activelink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export default function Activelink({ path, text }: Props) {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
}
