import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Title, Button, Searchbar, Text } from 'react-native-paper';
import { useNavigation } from 'react-navigation-hooks';

import Background from '~/components/Background';

import styles from './styles';
import api from '~/services/api';

export default function Home() {
  const [pokemon, setPokemon] = useState('');
  const [error, setError] = useState(false);

  const { navigate } = useNavigation();

  async function searchPokemon() {
    try {
      const { data } = await api.get(`pokemon/${pokemon}`);

      navigate('PokedexDetails', { id: data.id });
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Title style={styles.title}>Qual pokemon você está procurando?</Title>
          <View style={styles.inputSearch}>
            <Searchbar
              placeholder="Buscar Pokemon"
              onChangeText={(text) => setPokemon(text)}
              onIconPress={() => searchPokemon()}
              onFocus={() => {
                setError(false);
                setPokemon('');
              }}
            />
            {error && (
              <Text style={{ color: 'red' }}>Pokémon não localizado</Text>
            )}
          </View>
          <View style={styles.contentButtons}>
            <Button
              mode="contained"
              style={[styles.buttons, { backgroundColor: '#6AF3CA' }]}
              onPress={() => navigate('Pokedex')}>
              Pokemons
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Background>
  );
}
