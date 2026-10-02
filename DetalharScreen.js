import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetalharScreen({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>{route.params.item.nome}</Text>
      <Text>{route.params.item.preco}</Text>
      <Text>{route.params.item.categoria}</Text>
      <Text>{route.params.item.descricao}</Text>
      <Button
        title="Comprar"
        onPress={() => navigation.navigate("ComprarScreen", { item: route.params.item })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
