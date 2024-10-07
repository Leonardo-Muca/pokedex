import { Pokemon } from "../../interfaces/Pokemon/pokemonInterfaces";

export type PokedexRootParams = {
    PokedexScreen: {},
    PokemonScreen: {
        item: Pokemon,
    },
}
