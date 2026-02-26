import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { 
  FormScreen: undefined; 
  ListScreen: undefined;
  PreviewScreen: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'ListScreen'>;

export default function ListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Text style={styles.title}>Usuários</Text>
        <Pressable
          onPress={() => navigation.navigate('PreviewScreen')}
          style={styles.nameItem}
        >
          <Text style={styles.nameText}>João Silva</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('PreviewScreen')}
          style={styles.nameItem}
        >
          <Text style={styles.nameText}>Maria Oliveira</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('PreviewScreen')}
          style={styles.nameItem}
        >
          <Text style={styles.nameText}>Carlos Santos</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsRow}>
        <View style={styles.buttonItem}>
          <Button
            title="Voltar"
            onPress={() => navigation.navigate('FormScreen')}
          />
        </View>
        <View style={styles.buttonItem}>
          <Button
            title="Excluir todos"
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
    paddingTop: 24,
    paddingBottom: 62,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  contentArea: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  buttonItem: {
    minWidth: 120,
  },
  nameItem: {
    paddingVertical: 6,
  },
  nameText: {
    fontSize: 16,
  },
});