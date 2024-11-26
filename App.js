import { View, Text,StyleSheet } from "react-native";

export default function App(){
  return (
    // <View style={{flex:1,backgroundColor:"plum", padding:60}}>
    //   <Text>Stylesheet API</Text>
    // </View>
    <View style={styles.container}>
      <Text>Stylesheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "plum",
    padding:60
  }
})