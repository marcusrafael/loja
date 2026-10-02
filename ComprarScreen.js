import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function ComprarScreen({ route }) {
  const navigation = useNavigation();

  const [quantidade, setQuantidade] = useState(0);
  const [soma, setSoma] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{route.params.item.nome}</Text>
      <Text>{route.params.item.preco}</Text>
      <Text>{quantidade}</Text>
      <Text>{soma}</Text>
      <Button
        title="-"
        onPress={() => {
          setQuantidade(quantidade - 1);
          setSoma(soma - route.params.item.preco);
        }}
      />
      <Button
        title="+"
        onPress={() => {
          setQuantidade(quantidade + 1);
          setSoma(soma + route.params.item.preco);
        }}
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
