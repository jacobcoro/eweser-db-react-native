// @refresh resetnpc
import { Database } from '@eweser/db';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import crypto from 'react-native-quick-crypto';
export default function Main() {
  const [db, setDb] = useState<Database | null>(null);
  useEffect(() => {
    // global.crypto = crypto as any;

    setDb(new Database());
  }, []);

  return (
    <View style={styles.container}>
      <Text>{db?.authServer ?? 'loading'}</Text>

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
