import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Text>{t('welcome')}</Text>
    </View>
  );
};

export default HomeScreen;