// "use client";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li className="bg-slate-400 mb-2 rounded-md p-4 text-black flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-200">email: {user.email}</p>
            </div>
            <img
              className="rounded-full w-20"
              src={user.avatar}
              alt="imagen del usuario"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}
