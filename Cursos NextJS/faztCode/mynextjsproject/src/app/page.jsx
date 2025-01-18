import Users from "@/src/components/Users";

export const metadata = {
  title: "Mi tienda con NextJS - Home",
};

export default function homePage() {
  return (
    <>
      {/* Server component */}
      <h1>Hello World</h1>
      <button>Click</button>
      {/* Cliente component */}
      <Users />
    </>
  );
}
