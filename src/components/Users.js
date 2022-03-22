import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../actions/users';
import { styles } from './styles/Users';

const Users = (props) =>{
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const handleTouchItem = (item) => {
      props.history.push({
        pathname: '/UserDetail',
        state: item
      })
    }

    useEffect(() => {
      dispatch(getUsers('users'))
    }, []);

    useEffect(() => {
      console.log(users);
    }, [users]);

    if(users.loading){
      return (
        <View style={[styles.containerLoad, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    const ItemRender = ({ item }) => (
      <View style={styles.itemContent}>
        <TouchableWithoutFeedback onPress={()=> handleTouchItem(item)}><Text style={styles.itemText} >{item.name}</Text></TouchableWithoutFeedback>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.tittle} onPress={handleTouchItem}>Lista de Usuarios:</Text>
        <FlatList
          data={ users.user && users.user.data }
          renderItem={({item}) => <ItemRender item={item} />  }
        />
      </View>
    );
}

export { Users };