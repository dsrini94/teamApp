// import React, { Component } from 'react';
// import { TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     // borderWidth: 1,
//     borderRadius: 7,
//     borderColor: '#ddd',
//     borderBottomWidth: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 8,
//     backgroundColor: '#fff',
//     marginLeft: 15,
//     marginRight: 15,
//     marginTop: 15,
//     marginLeft: 15,
//     marginRight: 15,
//     marginTop: 15,
//     paddingHorizontal: 5,
//     paddingVertical: 8,
//   },

//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginRight: 15,
//     // marginTop: -25
//   },
//   rightSide: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '800',
//   },
// });

// class Card extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <TouchableHighlight onPress={() => this.props.navigation.navigate('poc')}>
//         <View style={styles.container}>
//           <Image source={{ uri: this.props.imageUrl }} style={styles.image} />

//           <View style={styles.rightSide}>
//             <View>
//               <Text style={styles.title}>{this.props.title}</Text>
//             </View>
//             <View>
//               <Text>Vertical: {this.props.vertical}</Text>
//               <Text>BU: {this.props.businessUnit}</Text>
//               <Text>Value: {this.props.businessValue}</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }
// export default Card;
