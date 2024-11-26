import { useState } from "react";
import { Alert,ActivityIndicator,StatusBar,Modal,View,Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";
import Greet from "./components/Greet";

const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  const [isModalVisible, setIsModalVisible] = useState(false);
  return ( 
  <View style={{ flex:1,backgroundColor:"plum", padding: 60}}>
    {/* <ScrollView>
        <Image source={{uri:"https://picsum.photos/200"}} style={{width:300,height:300}} />
        <Text>
        In vitae ligula nec justo suscipit volutpat. Quisque id lobortis sem, ut porttitor urna. Proin viverra, mi quis aliquam cursus, elit nunc fermentum est, elementum gravida eros libero vitae nisl. Donec leo nulla, sagittis a erat ut, cursus rutrum massa. Curabitur eu libero dolor. Integer mattis sapien in nisi porta, vitae placerat enim gravida. Ut ligula sapien, porttitor in consectetur in, molestie ac mi. Vestibulum a eros id risus venenatis luctus eget quis eros. Mauris vitae enim volutpat, pretium leo non, laoreet neque. Quisque quis risus quis ante semper blandit. Nullam sed justo ultricies, volutpat sem sed, vehicula nisi. Aenean egestas, ex at sagittis congue, purus ligula eleifend neque, sed convallis tortor massa sed nunc. Vestibulum mollis luctus velit, sit amet suscipit mauris pulvinar in. Vestibulum a tristique massa. Praesent vulputate urna in fermentum scelerisque.
        </Text>
        <Image source={{uri:"https://picsum.photos/200"}} style={{width:300,height:300}} />
        <Image source={{uri:"https://picsum.photos/200"}} style={{width:300,height:300}} />
    </ScrollView> */}
    {/* <Button color="midnightblue" title="Press" onPress={()=>setIsModalVisible(true)}/> */}
    
    {/* <Pressable onPress={()=>console.log("Image pressed")}>
      <Image source={{uri:"https://picsum.photos/200"}} style={{width:300,height:300}} />
    </Pressable>
    <Pressable onPress={()=>console.log("Text pressed")}> 
      <Text>
        In vitae ligula nec justo suscipit volutpat. Quisque id lobortis sem, ut porttitor urna. Proin viverra, mi quis aliquam cursus, elit nunc fermentum est, elementum gravida eros libero vitae nisl. Donec leo nulla, sagittis a erat ut, cursus rutrum massa. Curabitur eu libero dolor. Integer mattis sapien in nisi porta, vitae placerat enim gravida. Ut ligula sapien, porttitor in consectetur in, molestie ac mi. Vestibulum a eros id risus venenatis luctus eget quis eros. Mauris vitae enim volutpat, pretium leo non, laoreet neque. Quisque quis risus quis ante semper blandit. Nullam sed justo ultricies, volutpat sem sed, vehicula nisi. Aenean egestas, ex at sagittis congue, purus ligula eleifend neque, sed convallis tortor massa sed nunc. Vestibulum mollis luctus velit, sit amet suscipit mauris pulvinar in. Vestibulum a tristique massa. Praesent vulputate urna in fermentum scelerisque.
      </Text>
    </Pressable> */}
    {/* <Modal visible={isModalVisible}
      onRequestClose={()=> setIsModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={{ flex:1,backgroundColor:"lightblue", padding: 60}}>
        <Text>Modal content</Text>
        <Button title="Close" color="midnightblue" onPress={()=>setIsModalVisible(false)}/>
      </View>
    </Modal> */}
    {/* <StatusBar 
      backgroundColor="green"
      barStyle="light-content"    
    /> */}
    {/* <ActivityIndicator size="large" color="midnightblue" animating={true} /> */}
    {/* <Button title="Alert" onPress={() => Alert.alert("Invalid data")} />
    <Button title="Alert2" onPress={() => Alert.alert("Invalid data", "DOB Incorrect")} />
    <Button title="Alert3" onPress={() => Alert.alert("Invalid data", "Date of birth incorrect", [
      {
        text: 'Cancel',
        onPress: () => console.log("Cancel pressed")
      },
      {
        text: 'OK',
        onPress: () => console.log("OK pressed")
      }
    ])} /> */}
    
    {/* Custom compoenents */}
    <Greet name="Bruce wayne" />
    <Greet name="Clark Kent" />
  </View>
  )
}