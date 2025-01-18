import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-300 mb-4 flex justify-between items-center px-20 p-3">
      <Link href={"/"}>Home</Link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
