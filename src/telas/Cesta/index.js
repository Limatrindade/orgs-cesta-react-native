import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <ScrollView>

          <Topo {...topo} />
          
          <View style={styles.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
          </View>
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});

