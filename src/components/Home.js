import React, { useRef, useState, useEffect } from 'react';
import { Button, DrawerLayoutAndroid, Text, View, Image } from "react-native";
import MapView from 'react-native-maps';
import { styles } from './styles/Home';
import { primaryColor, secondColor } from './../constants/constants'

const HomeScreen = (props) =>{
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const onRegionChange = (region) => {
    setRegion({ region });
  }


  const date = new Date();

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Opciones del Menu</Text>
      <Button
        title="Home"
        onPress={() => {props.history.push('/') , drawer.current.closeDrawer()}}
        style={styles.secondButton}
        color={primaryColor}
      />
      <Text>-------------------------------</Text>
      <Button
        title="Lista de Usuarios"
        onPress={() =>props.history.push('/Users')}
        style={styles.secondButton}
        color={primaryColor}
      />
      <View>
        <Text>-------------------------------</Text>
      </View>
      <Button
        title="Cerrar Menu"
        onPress={() => drawer.current.closeDrawer()}
        color={primaryColor}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text style={styles.dateTime}>{ `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`  }</Text>
        <Image source = {{uri:'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/5cd405db5cafe829df48e212/funimation-1.jpg'}}
          style = {{ width: 200, height: 200 }}
        />
        <Button
          title="Abrir Menu de Opciones"
          onPress={() => drawer.current.openDrawer()}
          color={primaryColor}
        />
      </View>
      <View style={styles.containerMaps}>
        <Text style={styles.paragraph}>Mapa</Text>
        <MapView
          initialRegion={{
            latitude: 25.640246,
            longitude: -100.313689,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={onRegionChange}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

export { HomeScreen }