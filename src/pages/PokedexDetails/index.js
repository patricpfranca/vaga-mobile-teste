import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Title, Text, Divider, Chip } from 'react-native-paper';
import { useNavigationParam } from 'react-navigation-hooks';

import Background from '~/components/Background';

import { padDigits } from '~/config/utils/pad';
import api from '~/services/api';

import styles from './styles';

export default function PokedexDetails() {
  const [details, setDetails] = useState();

  const pokemonId = useNavigationParam('id');

  async function load() {
    try {
      const response = await api.get(`pokemon/${pokemonId}`);

      setDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Background>
      <ScrollView>
        <View style={styles.contentImg}>
          <Image
            style={styles.img}
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDigits(
                pokemonId
              )}.png`,
            }}
          />
        </View>
        <View style={styles.content}>
          <Title style={styles.title}>{details?.name}</Title>
          <View style={styles.boxSize}>
            <View style={styles.boxItem}>
              <Text style={styles.boxText}>{details?.weight}kg</Text>
              <Text style={styles.boxTextType}>weight</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={styles.boxText}>{details?.height}m</Text>
              <Text style={styles.boxTextType}>height</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.contentType}>
            <Title style={styles.titleType}>Types</Title>
            <View style={styles.contentChips}>
              {details?.types.map((item, index) => (
                <Chip
                  key={index}
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  {item.type.name}
                </Chip>
              ))}
            </View>
          </View>
          <Divider />
          <View>
            <Title style={styles.titleType}>Evolution</Title>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
