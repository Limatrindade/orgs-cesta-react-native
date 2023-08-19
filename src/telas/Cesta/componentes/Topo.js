import { SafeAreaView, Image, Text, StyleSheet, Dimensions } from "react-native";

import topoImage from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;


export default function Topo() {
    return (
        <SafeAreaView>
            <Image source={topoImage} style={styles.topo} />
            <Text style={styles.title}>Detalhe da cesta</Text>
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
});