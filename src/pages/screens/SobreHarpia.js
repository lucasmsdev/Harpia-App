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
 


    return (
      <ScrollView style={styles.container}>
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredContainer} > Sobre o Harpia</Text>
          
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
      paddingTop: 20,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

