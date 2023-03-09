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
  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

    return (
      <ScrollView style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/banner.png') }
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredTitle}>Produtos em destaque</Text>
          <View style={styles.productContainer}>
            <Image
              source={require('../../assets/p1.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Batom Premium 3</Text>
              <Text style={styles.productPrice}>R$ 49,99</Text>
              <Text style={styles.productDescription}>Fique linda com este batom!</Text>
              <Text style={styles.productLink}>Comprar</Text>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../assets/p1.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Batom Premium 4</Text>
              <Text style={styles.productPrice}>R$ 49,99</Text>
              <Text style={styles.productDescription}>Fique linda com este batom!</Text>
              <Text style={styles.productLink}>Comprar</Text>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../assets/p1.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Batom Premium 2</Text>
              <Text style={styles.productPrice}>R$ 49,99</Text>
              <Text style={styles.productDescription}>Fique linda com este batom!</Text>
              <Text style={styles.productLink}>Comprar</Text>
            </View>
          </View>
          
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
    featuredContainer: {
      padding: 20,
    },
    featuredTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    productContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
      overflow: 'hidden',
    },
    productImage: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
    productInfo: {
      flex: 1,
      padding: 10,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    productPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#008000',
      marginBottom: 5,
    },
    productDescription: {
      fontSize: 14,
      marginBottom: 5,
    },
    productLink: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#008000',
      alignSelf: 'flex-end',
    },
  });

