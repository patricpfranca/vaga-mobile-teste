import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import { padDigits } from '~/config/utils/pad';

import styles from './styles';

export default function ListPokedex({ item }) {
  return (
    <View style={styles.box}>
      <Image
        style={styles.img}
        source={{
          uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDigits(
            item.id
          )}.png`,
        }}
      />
      <Text style={styles.id}>{padDigits(item.id)}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
}
