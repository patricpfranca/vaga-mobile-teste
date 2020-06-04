import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Title, ActivityIndicator } from 'react-native-paper';

import Background from '~/components/Background';
import ListPokedex from '~/components/ListPokedex';
import PokedexController from '~/controllers/pokedexController';

import styles from './styles';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);

  async function loadPokemon() {
    const response = await PokedexController.index(limit, offset);

    setPokemons([...pokemons, ...response.results]);
    setOffset(offset + 20);
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <Background>
      <View style={styles.containerTitle}>
        <Title style={styles.title}>Pokedex</Title>
      </View>
      <View style={styles.contentFlat}>
        <FlatList
          data={pokemons}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }) => (
            <ListPokedex {...{ item }} {...{ index }} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          onEndReached={loadPokemon}
          onEndReachedThreshold={0.1}
        />
      </View>
    </Background>
  );
}
