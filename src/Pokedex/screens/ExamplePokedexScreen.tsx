import React from 'react'
import { View, Text, useColorScheme, Image, SafeAreaView, StatusBar, ImageBackground, FlatList } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const ExamplePokedexScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const pokemones = [
        { name: 'JorgeZard', level: '20', img: require('./images/jorge.jpg') },
        { name: 'RichieChu', level: '200', img: require('./images/richie.jpg') },
        { name: 'LeoSaur', level: '200', img: require('./images/leo.jpg') },
        { name: 'HoracioPod', level: '200', img: require('./images/horacio.jpg') },
        { name: 'ToñoPuff', level: '200', img: require('./images/tono.jpg') },
        { name: 'DalliFree', level: '200', img: require('./images/dalli.jpg') },
    ];

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    };

    const renderItem = ({ item, index }: { item: { name: string, level: string, img: any }, index: number }) => (
        <>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginRight: 5 }}>
                    <View style={{ width: 100, height: 50, backgroundColor: 'red', borderTopLeftRadius: 50, borderTopRightRadius: 50, borderWidth: 6 }} />
                    <View style={{ width: 100, height: 50, backgroundColor: 'white', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderWidth: 6 }} />
                    <View style={{ width: 100, position: 'absolute', zIndex: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'black', display: 'flex', alignItems: 'center', position: 'absolute', zIndex: 100, justifyContent: 'center' }} >
                            <View style={{ width: 11, height: 11, borderRadius: 5, backgroundColor: '#FFF' }} />
                        </View>
                        <Image source={item.img} style={{ width: 50, height: 50, position: 'absolute', top: 10, left: 60 }} />
                    </View>
                </View>
                <View key={index} style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, backgroundColor: '#e74c3c', color: 'white', width: 290, borderRadius: 10, paddingLeft: 13 }}>{item.name}</Text>
                </View>
            </View>
        </>
    );

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ImageBackground
                source={require('./images/pokemon.jpg')}
                style={{ flex: 1 }}
                imageStyle={{ resizeMode: 'cover' }}
            >
                <View style={{ height: 900 }}>
                    <FlatList
                        data={pokemones}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
