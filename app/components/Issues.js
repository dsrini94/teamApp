import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// import PropTypes from 'prop-types';

const Issues= ({ issues, tabLabel }) => (
  <ScrollView>
    {issues.map((item, key) => (
      <View style={{ margin: 10, backgroundColor: 'white', elevation: 8 }} key={key}>
        <Text
          style={{
            margin: 15,
            color: '#a5154a',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Status as on 18th Apr 2018
        </Text>
        <Text
          style={{
            marginLeft: 15,
            marginBottom: 10,
            color: 'black',
            fontSize: 16,
          }}
        >
          {item}
        </Text>
      </View>
    ))}
  </ScrollView>
);
export default Issues;
