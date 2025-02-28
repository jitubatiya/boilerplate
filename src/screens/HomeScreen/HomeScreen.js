// HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeContext } from '../../context/ThemeProvider';

const HomeScreen = () => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.text }}>Welcome to the {isDarkMode ? 'Dark' : 'Light'} Theme!</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;