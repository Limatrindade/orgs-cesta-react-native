import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

import logoFarm from '../../../../assets/logo.png';

export default function Detalhes() {
    return (
        <SafeAreaView>
            <Text style={styles.name}>Cesta de Verduras</Text>
            <View style={styles.farm}>
              <Image source={logoFarm} style={styles.imageFarm}/>
              <Text style={styles.nameFarm}>Matheus Lima Farm</Text>
            </View>
            <Text style={styles.description}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha
            </Text>
            <Text style={styles.price}>R$ 40,00</Text>
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
    }
});