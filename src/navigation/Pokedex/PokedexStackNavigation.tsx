import { createStackNavigator } from "@react-navigation/stack";
import { PokedexRootParams } from "./pokedexRootParams";
import { PokedexScreen } from "../../Pokedex/screens/PokedexScreen";
import { PokemonScreen } from "../../Pokemon/screens/PokemonScreen";

const Stack = createStackNavigator<PokedexRootParams>();

export const PokedexStackNavigation = (props: any) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen
                name="PokedexScreen"
                options={{
                    title: 'Pokedex',
                    headerStyle: {
                        backgroundColor: 'red',
                    },
                }}
                component={PokedexScreen} />
            <Stack.Screen
                name="PokemonScreen"
                options={{
                    title: 'Pokemon',
                    headerStyle: {
                        backgroundColor: 'red',
                    },
                }}
                component={PokemonScreen} />
        </Stack.Navigator>
    );
}
