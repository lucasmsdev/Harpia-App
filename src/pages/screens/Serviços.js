import React, { useState, useEffect } from 'react';


import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard,
    StyleSheet,
    ScrollView,
    Dimensions
  } from 'react-native';

import { MaterialIcons} from '@expo/vector-icons'




export default function App({navigation}) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));
  const width = Dimensions.get('window').width;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title}> Encontre os serviços que você precisa</Text>
        </View>

        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/servicos/DELIVERY.png') }
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/servicos/ELETRICA.png') }
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/servicos/FRETE.png') }
            style={styles.bannerImage}
          />
        </View>
         <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/servicos/GAS.png') }
            style={styles.bannerImage}
          />
        </View>
        
      </ScrollView> 
      

              
    );  
  };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    bannerContainer: {
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerImage: {
      marginTop: 30,
      width: '96%',
      height: '85%',
      resizeMode: 'cover',
      borderRadius:15
    },
    title: {
      paddingTop: 20,
      alignSelf: 'center',
      fontSize: 23,
      fontWeight: 'bold',
      color: 'orange'

    },
   
  });

