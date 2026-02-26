import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { 
    FormScreen: undefined; 
    ListScreen: undefined;
    PreviewScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'PreviewScreen'>;

export default function PreviewScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Text style={styles.title}>Usuário</Text>
        <Text style={styles.text}>Nome do usuário aqui </Text>
        <Text style={styles.text}>Email do usuário aqui </Text>
        <Text style={styles.textArea}>Bio do usuário aqui </Text>
      </View>
      <View style={styles.buttonsRow}>
        <View style={styles.buttonItem}>
          <Button
            title="Editar"
            onPress={() => navigation.navigate('FormScreen')}
          />
        </View>
        <View style={styles.buttonItem}>
          <Button
            title="Excluir"
            color="red"
            onPress={() => navigation.navigate('ListScreen')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 62,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  contentArea: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    height: 40,
    borderWidth: 0.3,
    borderColor: 'gray',
    color: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  textArea: {
    width: '80%',
    height: 100,
    borderWidth: 0.3,
    borderColor: 'gray',
    color: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  buttonItem: {
    minWidth: 120,
  },
});