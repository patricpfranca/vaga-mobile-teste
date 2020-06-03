import React from 'react';
import { View } from 'react-native';
import { Title, Button, Searchbar } from 'react-native-paper';
import { useNavigation } from 'react-navigation-hooks';

import Background from '~/components/Background';

import styles from './styles';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <Background>
      <View>
        <Title style={styles.title}>Qual pokemon você está procurando?</Title>
        <View style={styles.inputSearch}>
          <Searchbar placeholder="Buscar Pokemon" />
        </View>
        <View style={styles.contentButtons}>
          <Button
            mode="contained"
            style={[styles.buttons, { backgroundColor: '#6AF3CA' }]}
            onPress={() => navigate('Pokedex')}>
            Pokemons
          </Button>
          <Button
            mode="contained"
            style={[styles.buttons, { backgroundColor: '#77C4FE' }]}
            onPress={() => console.log('Pressed')}>
            Pokemons
          </Button>
        </View>
      </View>
    </Background>
  );
}
