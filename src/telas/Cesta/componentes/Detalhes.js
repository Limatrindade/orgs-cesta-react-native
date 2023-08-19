import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Detalhes({ name, nameFarm, description, price, logo, Botao }) {
    return (
        <SafeAreaView>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.farm}>
              <Image source={logo} style={styles.imageFarm}/>
              <Text style={styles.nameFarm}>{nameFarm}</Text>
            </View>
            <Text style={styles.description}>
                {description}
            </Text>
            <Text style={styles.price}>{price}</Text>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textBotao}>{Botao}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    farm: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12
    },
    imageFarm: {
        width: 32,
        height: 32
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textBotao: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26
    }
});