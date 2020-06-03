import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';
import { Title } from 'react-native-paper';

import Background from '~/components/Background';
import ListPokedex from '~/components/ListPokedex';

import api from '~/services/api';

import styles from './styles';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  async function loadPokemon() {
    try {
      const listPokemon = [];

      for (let index = 1; index <= 40; index++) {
        const response = await api.get(`/pokemon/${index}`);

        listPokemon.push(response.data);
      }

      console.log(listPokemon);

      setPokemons(listPokemon);
    } catch (err) {
      console.log(err);
    }
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
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListPokedex {...{ item }} />}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    </Background>
  );
}
