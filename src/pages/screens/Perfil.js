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
    Dimensions,
    Button
  } from 'react-native';






export default function App({navigation}) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));


    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.featuredContainer}>
        <Text style={styles.Text}> Você não está logado! Clique no botão abaixo e entre em sua conta!</Text>
        <TouchableOpacity style={styles.buttonSubmit}>
            <Text onPress={() => navigation.navigate('Login')}>Logar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView> 

              
    );  
  };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
   
    featuredContainer: {
      padding: 20,
    },
 
    buttonSubmit: {
        backgroundColor: '#2e9699',
        width: '90%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor:'#FFF',
        marginTop: 5, 
        borderWidth: 1,
        borderColor:'#FFF',
        alignSelf: 'center'
        
      },

      Text: {
        marginTop: 250,
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textDecorationColor: 'blue'
      }
  });

