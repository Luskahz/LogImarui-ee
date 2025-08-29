import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function LoginScreen() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    // aqui no futuro vai chamar auth real
    router.replace("/pages/rv"); // leva direto para tela de RV por enquanto
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>🚚 Imaruí Ambev – EE</Text>

      <TextInput
        placeholder="Matrícula"
        style={s.input}
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        placeholder="Senha"
        style={s.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Pressable style={s.button} onPress={handleLogin}>
        <Text style={s.btnText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, gap: 12 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 8 },
  button: { backgroundColor: "#0a7", padding: 14, borderRadius: 8, width: "100%", alignItems: "center" },
  btnText: { color: "white", fontWeight: "600" },
});
