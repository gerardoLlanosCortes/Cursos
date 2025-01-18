"use client";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Mi tienda con NextJS - About",
// };

export default function aboutPage() {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi
        accusantium commodi at dolores assumenda ullam facere officia, ipsum et
        ipsa sunt aut tempora cumque quidem repudiandae eligendi accusamus
        inventore quos enim eos doloremque facilis? Minima facere rerum
        recusandae libero et dicta omnis rem facilis molestias magnam quibusdam
        qui perferendis eius dolorem laboriosam sapiente quod nesciunt
        distinctio labore, praesentium earum quis numquam assumenda ullam!
        Reiciendis excepturi ut officia soluta tempore. Quisquam, est. Laborum
        cum incidunt eos recusandae fugiat beatae, veniam modi ea sed ex quam
        reiciendis nam voluptas mollitia corrupti magnam culpa, minima unde
        atque ad iusto reprehenderit laudantium delectus.
      </p>

      <button
        onClick={() => {
          alert("executing code");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}
