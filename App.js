import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import ComprarScreen from "./ComprarScreen";
import DetalharScreen from "./DetalharScreen";

class Produto {
  constructor({ id, nome, preco, categoria, descricao }) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }
}

function HomeScreen() {
  const navigation = useNavigation();

  let produtos = [
    new Produto({
      id: "1",
      nome: "Notebook",
      preco: 4500,
      categoria: "Eletronicos",
      descricao: "Este notebook eh indicado para quem curte jogos",
    }),
    new Produto({
      id: "2",
      nome: "Celular",
      preco: 2500,
      categoria: "Eletronicos",
      descricao: "Celular com excelente desempenho",
    }),
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
            <Text>{item.categoria}</Text>
            <Button
              title="Ver detalhes"
              onPress={() =>
                navigation.navigate("DetalharScreen", { item: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    HomeScreen: {
      screen: HomeScreen,
    },
    DetalharScreen: {
      screen: DetalharScreen,
    },
    ComprarScreen: {
      screen: ComprarScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
