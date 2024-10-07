import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        opacity: 1
    },
    line: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        height: 20,
        justifyContent: 'center',
        width: 80,
    },
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 80,
        borderWidth: 2,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
    imageCenterContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 80,
        borderWidth: 5,
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    heardContainer: {
        backgroundColor: 'white',
        borderRadius: 80,
        borderWidth: 2,
        height: 20,
        width: 20,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    textContainer: {
        backgroundColor: 'red',
        borderTopRightRadius: 30,
        flex: 1,
        height: 30,
    }
});
