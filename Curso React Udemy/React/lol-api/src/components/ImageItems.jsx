import React from "react";

export default function ImageItems({ image }) {
  return (
    <>
      <div className="w-8 rounded">
        <img className="block w-full rounded"
          src={`https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/${image}.png?image=q_auto,f_webp,w_64,h_64&v=1702977255104`}
          alt="imagen"
        />
      </div>
    </>
  );
}
