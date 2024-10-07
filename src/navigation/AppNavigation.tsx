import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PokedexStackNavigation } from './Pokedex/PokedexStackNavigation';

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <PokedexStackNavigation />
        </NavigationContainer>
    );
};
