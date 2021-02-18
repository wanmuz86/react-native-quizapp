import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View,Text,TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
return (
<View>
<Image
        style={styles.banner}
        source={{uri:
            'https://www.profweb.ca/system/meta/images/13009/facebook_facebook_quizizz-fb.png'
        }}
      />
      <TouchableOpacity onPress={() =>{navigation.push('Quiz')}}>
      <Text style={styles.startGame}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{}}>
      <Text style={styles.highScore}>High Score</Text>
      </TouchableOpacity>
</View>)
}
const styles = StyleSheet.create({
    banner: {
    width:'100%',
    height:300
    },
    startGame:{
        backgroundColor:'#f00',
        color:'#fff',
        padding:20,
        textAlign:'center',
        marginVertical:10
    },
    highScore:{
        backgroundColor:'#00f',
        color:'#fff',
        padding:20,
        textAlign:'center',
        marginVertical:10
    }
  }
  
  );
  
