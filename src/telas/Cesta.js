import { Image, StyleSheet, Dimensions, Text, SafeAreaView, View } from "react-native";

import topoImage from '../../assets/topo.png';
import logoFarm from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <SafeAreaView>
          <Image source={topoImage} style={styles.topo} />
          <Text style={styles.title}>Detalhe da cesta</Text>

          <View style={styles.cesta}>
            <Text style={styles.name}>Cesta de Verduras</Text>
            <View style={styles.farm}>
              <Image source={logoFarm} style={styles.imageFarm}/>
              <Text style={styles.nameFarm}>Matheus Lima Farm</Text>
            </View>
            <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
            <Text style={styles.price}>R$ 40,00</Text>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
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