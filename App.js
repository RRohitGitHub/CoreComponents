import { View, Text,StyleSheet } from "react-native";

export default function App(){
  return (
    // <View style={{flex:1,backgroundColor:"plum", padding:60}}>
    //   <Text>Stylesheet API</Text>
    // </View>
    // <View style={styles.container}>
    //   <Text>Stylesheet API</Text>
    // </View>

    <View style={styles.container}>
      {/* Value from the last element in the array takes precedence */}
      <View style={[styles.lightblueBox, styles.box]}>
        <Text>Light blue box</Text>
      </View>
      <View style={[styles.lightGreenBox,styles.box]}>
        <Text>Light green box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "plum",
    padding:60
  },
  box:{
    width:100,
    height:100,
    padding:10
  },
  lightblueBox:{
    backgroundColor:"lightblue"
  },
  lightGreenBox:{
    backgroundColor:"lightgreen"
  }
})