import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { PokedexRootParams } from '../../navigation/Pokedex/pokedexRootParams';
import { Pokemon } from '../../interfaces/Pokemon/pokemonInterfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<PokedexRootParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {
    const pokemon: Pokemon = route.params.item;

    const [pokemonData, setPokemonData] = useState<any>();

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon data');
        }
        const data = await response.json();
        setPokemonData(data);
    };

    return (
        <ImageBackground source={require('../../assets/images/FondoPokemonItem.jpg')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', opacity: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white', height: 200, width: '100%', opacity: 0.8, borderBottomLeftRadius: 200, justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={{ uri: pokemon.image, width: 270, height: 100 }} />
                        <Text style={{ alignSelf: 'center', fontSize: 40, fontWeight: 'bold', color: 'black' }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                    </View>
                </View>
                {pokemonData !== undefined &&
                    <ScrollView horizontal style={{ height: 100, marginTop: 20, alignSelf: 'center', marginHorizontal: 10, }}>
                        {pokemonData.sprites.front_default && <Image source={{ uri: pokemonData.sprites.front_default, width: 80, height: 80 }} />}
                        {pokemonData.sprites.back_default && <Image source={{ uri: pokemonData.sprites.back_default, width: 80, height: 80 }} />}
                        {pokemonData.sprites.front_shiny && <Image source={{ uri: pokemonData.sprites.front_shiny, width: 80, height: 80 }} />}
                        {pokemonData.sprites.back_shiny && <Image source={{ uri: pokemonData.sprites.back_shiny, width: 80, height: 80 }} />}
                        {pokemonData.sprites.front_shiny_female && <Image source={{ uri: pokemonData.sprites.front_shiny_female, width: 80, height: 80 }} />}
                    </ScrollView>
                }
            </View>
            {/* <View style={{ alignSelf: 'center' }}>
                <Image source={{ uri: pokemon.image, width: 270, height: 100 }} />
                <Text style={{ alignSelf: 'center', fontSize: 40, fontWeight: 'bold', color: 'red' }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
            </View> */}
        </ImageBackground>
    )
}

