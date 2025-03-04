import * as React from "react";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import './src/translations/i18n';
import { ThemeProvider } from "./src/context/ThemeProvider";

const App = () => {
  return (
   
    <Provider store={store}>
      <NavigationContainer>
      <ThemeProvider>
        <BottomTabNavigator />
        </ThemeProvider>

      </NavigationContainer>
      
    </Provider>
  );
};

export default App;