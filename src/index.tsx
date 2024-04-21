// @refresh resetnpc
import { Database } from '@eweser/db';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { localStoragePolyfill } from '../polyfills';

const randomRoomId = crypto.randomUUID();
const existingRoomId = localStoragePolyfill.getItem('roomId');
const roomId = existingRoomId || randomRoomId;
console.log({ existingRoomId, roomId, randomRoomId });
localStoragePolyfill.setItem('roomId', roomId);

export default function Main() {
  const [db, setDb] = useState<Database | null>(null);
  useEffect(() => {
    setDb(
      new Database({
        localStoragePolyfill: localStoragePolyfill as any,
      })
    );
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
