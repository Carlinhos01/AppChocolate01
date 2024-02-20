import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';

export default function App() {
  return (
  
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo}>Melhores Chocolates
      </Text>

      <View style={styles.imagens}>
      <Image style={styles.chocolate} source={require('./assets/lacreme.png')}/>
      
      </View>
      <View style={styles.imagens}>
      <Image style={styles.chocolate} source={require('./assets/copenhague.png')}/>
      
      </View>
      <View style={styles.imagens}>
      <Image style={styles.chocolate} source={require('./assets/lollo.png')}/>
      
      </View>
      </ScrollView>
    </View>
  
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#682721',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagens:{
    width: 350,
    height: 300,
    borderRadius: 50,
    margin: 20,
    shadowColor:'black',
    textShadowOffset:{width:0 , height: 5},
    shadowOpacity: 2.0,
    elevation: 10,
  },
  titulo:{
    margin:30,
    fontSize:30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight:'bold',
    color: '#3c1100',
  },
  chocolate:{
    backgroundColor: '#7f3200',
    width: 350,
    height: 300,
    borderRadius: 50,
    
  },
});
