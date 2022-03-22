import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Platform} from 'react-native';
import { HomeScreen } from './components/Home'
import { Users } from './components/Users'
import { UserDetail } from './components/UserDetail.js'

import {NativeRouter, Route, AndroidBackButton} from 'react-router-native';

class Routes extends Component {

  render() {
    const routes = (
      <View style={{width: '100%', height: '100%'}}>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/UserDetail" component={UserDetail} />
      </View>
    );

    if (Platform.OS === 'ios') {
      return <NativeRouter>{routes}</NativeRouter>;
    } else {
      return (
        <NativeRouter>
          <AndroidBackButton>{routes}</AndroidBackButton>
        </NativeRouter>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  users: state,
});

/*const mapDispatchToProps = {
  action: "action",
};*/
export default connect(mapStateToProps, null)(Routes);
