import React, { useEffect } from 'react';
import { Button, Text, View } from "react-native";
import { styles } from './styles/UserDetail';
import { primaryColor, secondColor } from './../constants/constants'

const UserDetail = (props) => {
    useEffect(() => {
    }, []);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Detalles del usuario</Text>
        <Text style={styles.text}>Nombre del usuario: {props.history.location.state.name}</Text>
        <Text style={styles.text}>Email: {props.history.location.state.email}</Text>
        <Text style={styles.text}>Phone: {props.history.location.state.phone}</Text>
        <Text style={styles.text}>Web Site: {props.history.location.state.website}</Text>
        <Text style={styles.text}>Company: {props.history.location.state.company.name}</Text>
        <Button
          title="Regresar"
          onPress={() => props.history.goBack('/Users')}
          color={primaryColor}
        />
      </View>
    );
}

export { UserDetail };