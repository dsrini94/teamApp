import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types';

import Done from './../components/Done';
import Doing from './../components/Doing';
import Issues from './../components/Issues';

export default class Tabs extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.navigation.state;
    const data = params ? params.details : null;
    console.log(data.done);

    return (
      <ScrollableTabView tabBarActiveTextColor="#a5154a">
        <Done done={data.done} tabLabel="Done" />
        <Doing doing={data.doing} tabLabel="Doing" />
        <Issues issues={data.issues} tabLabel="Issues" />
      </ScrollableTabView>
    );
  }
}
