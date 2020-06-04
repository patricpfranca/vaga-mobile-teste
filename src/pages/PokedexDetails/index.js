import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Title, Text, Divider, Chip } from 'react-native-paper';
import { useNavigationParam } from 'react-navigation-hooks';
import { Text as TextSvg } from 'react-native-svg';
import { BarChart, Grid } from 'react-native-svg-charts';

import Background from '~/components/Background';
import PokedexController from '~/controllers/pokedexController';

import { padDigits } from '~/config/utils/pad';

import styles from './styles';

export default function PokedexDetails() {
  const [details, setDetails] = useState({
    name: '',
    weight: 0,
    height: 0,
    types: [],
    stats: [],
  });

  const pokemonId = useNavigationParam('id');

  async function load() {
    try {
      const response = PokedexController.pokemonById(pokemonId);

      setDetails(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const Labels = ({ x, y, bandwidth }) =>
    details.stats.map((value, index) => (
      <TextSvg
        key={index}
        x={x(0) + 10}
        y={y(index) + bandwidth / 2}
        fontSize={14}
        fill={'white'}
        alignmentBaseline={'middle'}>
        {value.stat.name} - {value.base_stat}
      </TextSvg>
    ));

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Title style={styles.title}>{details.name}</Title>
          <View style={styles.boxSize}>
            <View style={styles.boxItem}>
              <Text style={styles.boxText}>{details.weight}kg</Text>
              <Text style={styles.boxTextType}>weight</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={styles.boxText}>{details.height}m</Text>
              <Text style={styles.boxTextType}>height</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.contentType}>
            <Title style={styles.titleType}>Types</Title>
            <View style={styles.contentChips}>
              {details.types.map((item, index) => (
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
            <Title style={styles.titleType}>Stats</Title>
            <View style={styles.contentChart}>
              <BarChart
                style={styles.barChart}
                data={details.stats}
                horizontal
                yAccessor={({ item }) => item.base_stat}
                svg={{ fill: '#40A5B2' }}
                contentInset={styles.barChartInset}
                spacing={2}
                gridMin={0}>
                <Grid direction={Grid.Direction.HORIZONTAL} />
                <Labels />
              </BarChart>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
