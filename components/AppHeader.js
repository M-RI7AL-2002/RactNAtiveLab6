import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.accent} />
      <Text style={styles.title}>RIHAL BOCADIO</Text>
      <Text style={styles.subtitle}>Fresh food · Great taste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  accent: {
    width: 50,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 2,
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#333333',
  },
});
