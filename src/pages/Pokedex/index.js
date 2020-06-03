import React from 'react';
import { View, FlatList } from 'react-native';
import { Title, Text } from 'react-native-paper';

import Background from '~/components/Background';

export default function Pokedex() {
  return (
    <Background>
      <View style={{ marginTop: 50 }}>
        <Title style={{ fontSize: 26 }}>Pokedex</Title>
      </View>
      <View style={{ marginTop: 45 }}>
        <FlatList
          data={[]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </Background>
  );
}
