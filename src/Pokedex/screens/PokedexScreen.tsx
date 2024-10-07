import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, Text, View } from 'react-native';
import { PokedexRootParams } from '../../navigation/Pokedex/pokedexRootParams';
import { Pokemon, PokemonResponse } from '../../interfaces/Pokemon/pokemonInterfaces';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../styles/pokedexStyles';
import PokedexItem from '../components/PokedexItem';

interface Item {
    index: number;
    item: Pokemon;
}

interface Props extends StackScreenProps<PokedexRootParams, 'PokedexScreen'> { };

export const PokedexScreen = ({ navigation, route }: Props) => {
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetchPokemons();
    }, [offset]);

    const fetchPokemons = async () => {
        if (isloading || !hasMore) return;

        setIsLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Pokémon data');
            }
            const data: PokemonResponse = await response.json();

            const pokemonsWithImages = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const details = await res.json();
                    return {
                        name: pokemon.name,
                        url: pokemon.url,
                        image: details.sprites.front_default,
                    };
                })
            );

            setPokemons(prevPokemons => [...prevPokemons, ...pokemonsWithImages]);
            if (!data.next) {
                setHasMore(false);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const loadMorePokemons = () => {
        if (!isloading && hasMore) {
            setOffset(prevOffset => prevOffset + 10);
        }
    };

    const renderItem = ({ index, item }: Item) => (
        <PokedexItem index={index} item={item} navigation={navigation} />
    );

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/images/FondoPokemon.jpg')} resizeMode="cover" style={styles.background}>
                {isloading && pokemons.length === 0 ?
                    <ActivityIndicator size={'large'} color={'red'} /> :
                    <FlatList
                        data={pokemons}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={loadMorePokemons}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={isloading && hasMore ? <ActivityIndicator size="small" color="red" /> : null}
                        style={{ marginVertical: 10 }}
                    />
                }
                {error && <Text>Error: {error}</Text>}
            </ImageBackground>
        </View>
    )
}
