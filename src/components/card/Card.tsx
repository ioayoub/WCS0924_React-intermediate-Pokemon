import type { PokemonType } from "../../lib/definitions";
import style from "./card.module.css";

export default function Card({ pokemon }: { pokemon: PokemonType }) {
  const { name, imgSrc } = pokemon;

  return (
    <article>
      <img
        src={imgSrc ? imgSrc : "https://picsum.photos/300/300"}
        alt={`Image de ${name}`}
        className={style.pokemonImage}
      />
      <h1 className={style.pokemonTitle}>{name}</h1>
    </article>
  );
}
