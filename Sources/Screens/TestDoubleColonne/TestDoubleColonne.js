import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';

export default class Example extends Component {
  render() {
    // Taken from https://flatuicolors.com/
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
	];
	
	var item = [
		{
			specieName: 'girafe',
			specieProfilePicture: 'http://www.legorafi.fr/2017/06/02/un-adorable-panda-roux-en-a-assez-detre-aime-uniquement-pour-son-physique/',
			specieId: '1'
		},
		{
			specieName: 'girafe',
			specieProfilePicture: 'http://www.legorafi.fr/2017/06/02/un-adorable-panda-roux-en-a-assez-detre-aime-uniquement-pour-son-physique/',
			specieId: '1'
		},
		{
			specieName: 'girafe',
			specieProfilePicture: 'http://www.legorafi.fr/2017/06/02/un-adorable-panda-roux-en-a-assez-detre-aime-uniquement-pour-son-physique/',
			specieId: '1'
		},
		{
			specieName: 'girafe',
			specieProfilePicture: 'http://www.legorafi.fr/2017/06/02/un-adorable-panda-roux-en-a-assez-detre-aime-uniquement-pour-son-physique/',
			specieId: '1'
		},
	
	]

    return (
    //   <GridView
    //     itemDimension={130}
    //     items={items}
    //     style={styles.gridView}
    //     renderItem={item => (
    //       <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
    //         <Text style={styles.itemName}>{item.name}</Text>
    //         <Text style={styles.itemCode}>{item.code}</Text>
    //       </View>
    //     )}
    //   />

	  <GridView
	  itemDimension={150}
	  items={items}
	  style={styles.gridView}
	  renderItem={item => (
		  <TouchableOpacity>
		<View style={[styles.itemContainer]}>
		 <Image
                            style={{ width: 150, height: 130}}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />
		 <Text>Girafe d'afrique</Text>
		 
		</View>
		</TouchableOpacity>
	  )}
	/>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    padding: 10,
    height: 160,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});







