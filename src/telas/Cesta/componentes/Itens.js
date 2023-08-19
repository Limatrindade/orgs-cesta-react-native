import { Text, View, Image, StyleSheet } from "react-native";

export default function Itens({ titulo, lista }) {
    return (
        <>
          <Text style={styles.titulo}>{titulo}</Text>
          { lista.map(({ nome, imagem }) => {
            return (
                <View style={styles.item}>
                  <Image source={imagem} style={styles.imagem} />  
                  <Text style={styles.nome} >{nome}</Text>
                </View>
            )
          })}
        </>
    );
}

const styles = StyleSheet.create({
   titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
   },
   item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1, 
    borderBottomColor: "#ECECEC",
    paddingVertical: 16
   },
   imagem: {
    width: 50,
    height: 50
   },
   nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
   }
})