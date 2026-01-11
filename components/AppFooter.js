import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        © {year} My Restaurant · All rights reserved
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333333',
  },
});
