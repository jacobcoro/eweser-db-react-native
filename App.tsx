// @refresh resetnpc
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Database } from '@eweser/db';

export default function App() {
  const db = new Database();
  return (
    <View style={styles.container}>
      <Text>{db.authServer}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
