export interface Pokemon {
    name: string;
    url: string;
    image: string;
}

export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}
