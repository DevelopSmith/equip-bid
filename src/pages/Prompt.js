import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Cubes from '../assets/cubes-duotone.png';
import PieIcon from '../assets/chart-pie-duotone.png';
import MenuIcon from '../assets/bars-light.png';
import ReloadIcon from '../assets/reload-icon.png';
import ShareIcon from '../assets/share-icon.png';
import LinearGradient from 'react-native-linear-gradient';

const Prompt: () => Node = ({onLogin}) => {
  const createNewAuction = () => {
    console.log('New Auction!');
  };

  const loadExistingAuction = () => {
    console.log('Load Existing Auction!');
  };

  const gotToMyPerformance = () => {
    console.log('Load Existing Auction!');
  };

  return (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={MenuIcon} />
        </TouchableOpacity>

        <View style={styles.actionIcons}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={ReloadIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={ShareIcon} style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapper}>
        <LinearGradient
          colors={['#F3F6FF', '#FFFFFF']}
          style={styles.gradient}></LinearGradient>

        <Image style={styles.cubes} source={Cubes} />

        <TouchableOpacity
          style={[styles.button, styles.solidButton]}
          onPress={createNewAuction}>
          <Text style={[styles.buttonText, styles.solidButtonText]}>
            Create New Auction
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.outlinedButton]}
          onPress={loadExistingAuction}>
          <Text style={[styles.buttonText, styles.outlinedButtonText]}>
            Load Existing Auction
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.myPerformanceButton}
          onPress={gotToMyPerformance}>
          <Image source={PieIcon} />
          <Text style={styles.myPerformance}>My Performance</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 24,
    paddingLeft: 20,
    paddingBottom: 24,
    paddingRight: 20,
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIcon: {
    marginLeft: 25,
    width: 24,
    height: 24,
  },
  wrapper: {
    alignItems: 'center',
    height: '100%',
  },
  gradient: {
    width: '100%',
    height: 35,
    marginBottom: 50,
  },
  cubes: {
    width: 200,
    height: 176,
    marginBottom: 59,
  },
  button: {
    borderRadius: 6,
    height: 50,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  solidButton: {
    backgroundColor: '#3BB54B',
    borderColor: '#3BB54B',
    color: '#fff',
  },
  outlinedButton: {
    backgroundColor: '#fff',
    borderColor: '#3BB54B',
    marginTop: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  solidButtonText: {
    color: '#fff',
  },
  outlinedButtonText: {
    color: '#3BB54B',
  },
  myPerformanceButton: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myPerformance: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#3BB54B',
    marginLeft: 10,
  },
});

export default Prompt;
