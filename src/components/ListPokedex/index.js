import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from 'react-navigation-hooks';

import { padDigits } from '~/config/utils/pad';

import styles from './styles';

export default function ListPokedex({ item, index }) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigate('PokedexDetails', { id: index + 1 })}>
      <Image
        style={styles.img}
        source={{
          uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDigits(
            index + 1
          )}.png`,
        }}
      />
      <Text style={styles.id}>{padDigits(index + 1)}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
}
