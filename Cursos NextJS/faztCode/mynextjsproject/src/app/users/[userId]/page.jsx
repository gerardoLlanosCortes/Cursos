"use client";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();
  console.log(params)

  return <div>UserPage
    <button onClick={() => {
      console.log("click")
    }}></button>
  </div>;
}
