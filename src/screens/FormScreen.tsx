import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { FormScreen: undefined; ListScreen: undefined };
type Props = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;

export default function FormScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Formulário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome: "
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Email: "
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textArea}
        placeholder="Bio: "
        keyboardType="default"
        multiline={true}
      />
      <Button
        title="Listar"
        onPress={() => navigation.navigate('ListScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  textArea: {
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});