import React from "react";

export default function About(propos) {
  return (
    <div>
      <h2>About page</h2>
      <h2> ceci et du segement dinamique =====> {propos.match.params.id}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        assumenda repellendus reprehenderit maiores ducimus corrupti impedit
        exercitationem saepe dolores laboriosam.
      </p>
    </div>
  );
}
