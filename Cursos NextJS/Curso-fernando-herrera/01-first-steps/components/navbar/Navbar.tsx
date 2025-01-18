import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import Activelink from "@/components/active-link/ActiveLink";


const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <Activelink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
}

export default Navbar;
