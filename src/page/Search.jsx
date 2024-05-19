// import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { EvilIcons } from "@expo/vector-icons";
// import Bus  from '../../assets/images/bus.png'
// export default function Search() {
//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: " MOVELK",
//       headerTitleStyle: {
//         color: "white",
//         fontSize: 20,
//         fontWeight: "bold",
//         paddingHorizontal: "35%",
//       },
      
//       headerStyle: {
//         backgroundColor: "#FED339",
//         height: 100,

//       },
     
//     });
    
//   }, []);
//   return (
//     <ScrollView>
//       <View
//         style={{
//           margin: 20,
//           borderColor: "#FED339",
//           borderWidth: 3,
//           borderRadius: 6,
//         }}
//       >
//         <Pressable
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             paddingHorizontal: 5,
//             borderColor: "#FED339",
//             borderWidth: 2,
//             paddingVertical: 5,
//           }}
//         >
//           <EvilIcons name="location" size={24} color="black" />
//           <TextInput
//             placeholder="From"
//             placeholderTextColor="#FED339"
//             style={{ fontSize: 16 }}
//           />
//         </Pressable>
//         <Pressable
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             paddingHorizontal: 5,
//             borderColor: "#FED339",
//             borderWidth: 2,
//             paddingVertical: 5,
//           }}
//         >
//           <EvilIcons name="location" size={24} color="black" />
//           <TextInput
//             placeholder="Where"
//             placeholderTextColor="#FED339"
//             style={{ fontSize: 16 }}
//           />
//         </Pressable>

//         <Pressable
//           style={{
            
//             paddingHorizontal: 5,
//             borderColor: "#FED339",
//             borderWidth: 2,
//             paddingVertical: 5,
//             backgroundColor:"#FED339"
//           }}
//         >
//           <Text style={{textAlign:"center",fontSize:16,fontWeight:'bold',color:'white',}}>Search</Text>
//         </Pressable>
//       </View>
//     </ScrollView>
//   );
// }


// import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { EvilIcons } from "@expo/vector-icons";
// import Bus  from '../../assets/images/bus.png'
// export default function Search() {
//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: " MOVELK",
//       headerTitleStyle: {
//         color: "white",
//         fontSize: 20,
//         fontWeight: "bold",
//         paddingHorizontal: "35%",
//       },
      
//       headerStyle: {
//         backgroundColor: "#FED339",
//         height: 100,

//       },
     
//     });
    
//   }, []);
//   return (
//     <ScrollView>
//       <View
//         style={{
//           margin: 20,
//           borderColor: "#FED339",
//           borderWidth: 3,
//           borderRadius: 6,
//         }}
//       >
//         <Pressable
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             paddingHorizontal: 5,
//             borderColor: "#FED339",
//             borderWidth: 2,
//             paddingVertical: 5,
//           }}
//         >
//           <EvilIcons name="location" size={24} color="black" />
//           <TextInput
//             placeholder="From"
//             placeholderTextColor="#FED339"
//             style={{ fontSize: 16 }}
//           />
//         </Pressable>
//         <Pressable
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             paddingHorizontal: 5,
//             borderColor: "#FED339",
//             borderWidth: 2,
//             paddingVertical: 5,
//           }}
//         >
//           <EvilIcons name="location" size={24} color="black" />
//           <TextInput
//             placeholder="Where"
//             placeholderTextColor="#FED339"
//             style={{ fontSize: 16 }}
//           />
//         </Pressable>

//         <Pressable
//           style={{
            
//             paddingHorizontal: 5,
//             borderColor: "#FED339",
//             borderWidth: 2,
//             paddingVertical: 5,
//             backgroundColor:"#FED339"
//           }}
//         >
//           <Text style={{textAlign:"center",fontSize:16,fontWeight:'bold',color:'white',}}>Search</Text>
//         </Pressable>
//       </View>
//     </ScrollView>
//   );
// }


import { View, Text, ScrollView, Pressable, TextInput, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import Bus from '../../assets/images/bus.png';

export default function Search() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: " MOVELK",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: "30%",
      },
      headerStyle: {
        backgroundColor: "#FED339",
        height: 100,
      },
      headerLeft: () => (
        <Image
          source={Bus}
          style={{ width: 40, height: 40, marginLeft: 10 , borderRadius:50, backgroundColor:"red"}}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View
        style={{
          margin: 20,
          borderColor: "#FED339",
          borderWidth: 3,
          borderRadius: 6,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 5,
            borderColor: "#FED339",
            borderWidth: 2,
            paddingVertical: 5,
          }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <TextInput
            placeholder="From"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 5,
            borderColor: "#FED339",
            borderWidth: 2,
            paddingVertical: 5,
          }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <TextInput
            placeholder="Where"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </Pressable>

        <Pressable
          style={{
            paddingHorizontal: 5,
            borderColor: "#FED339",
            borderWidth: 2,
            paddingVertical: 5,
            backgroundColor: "#FED339",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "black" }}>Search</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
