import style from "./navbar.module.css";

export default function Navbar({
  pokemonNames,
  currentPokemon,
  setCurrentPokemon,
}: {
  pokemonNames: string[];
  currentPokemon: string;
  setCurrentPokemon: (pokemon: string) => void;
}) {
  const handlePreviousClick = () => {
    const currentIndex = pokemonNames.indexOf(currentPokemon);

    // Si l'indice du pokemon courant est 0
    if (currentIndex === 0)
      setCurrentPokemon(pokemonNames[pokemonNames.length - 1]);

    // Si l'indice du pokemon courant est supérieur à 0
    if (currentIndex > 0) setCurrentPokemon(pokemonNames[currentIndex - 1]);
  };

  const handleNextClick = () => {
    const currentIndex = pokemonNames.indexOf(currentPokemon);

    // si l'indice est l'indice maximal du tableau, revenir au début
    if (currentIndex === pokemonNames.length - 1)
      setCurrentPokemon(pokemonNames[0]);

    // indice++
    if (currentIndex < pokemonNames.length - 1)
      setCurrentPokemon(pokemonNames[currentIndex + 1]);
  };

  return (
    <nav className={style.navbar}>
      <span>Mon super site</span>
      <section className={style.navigation}>
        <button onClick={handlePreviousClick}>Précédent</button>
        <button onClick={handleNextClick}>Suivant</button>
      </section>
    </nav>
  );
}
