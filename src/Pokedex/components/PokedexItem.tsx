import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Pokemon } from '../../interfaces/Pokemon/pokemonInterfaces';
import { styles } from '../styles/pokedexStyles';

interface Props {
    index: number;
    item: Pokemon;
    navigation: any;
}

const PokedexItem = ({ index, item, navigation }: Props) => (
    <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => navigation.navigate('PokemonScreen', { item: item })}>
        <View style={styles.imageContainer}>
            <View style={styles.line}>
                <View style={styles.imageCenterContainer}>
                    <View style={styles.heardContainer}>
                        <Image source={{ uri: item.image, width: 80, height: 80 }} />
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
        </View>
    </TouchableOpacity>
)

export default React.memo(PokedexItem);
