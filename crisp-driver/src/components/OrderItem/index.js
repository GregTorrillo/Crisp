import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { DataStore } from 'aws-amplify';
import { useNavigation } from "@react-navigation/native";
import {User} from '../../models';

const OrderItem = ({ order }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    DataStore.query(User, order.userID).then(setUser);
  }, [])

  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderColor: "#3FC060",
        borderWidth: 2,
        borderRadius: 12,
      }}
      onPress={() => navigation.navigate("OrderDelivery", { id: order.id })}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{
          width: "25%",
          height: "100%",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
      <View style={{ flex: 1, marginLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ fontSize: 10, color: "grey" }}>
          {order.Restaurant.address}
        </Text>

        <Text style={{ fontSize: 10, fontWeight: "bold", marginTop: 5 }}>
          Delivery Details:
        </Text>
        <Text style={{ fontSize: 10, color: "grey" }}>{user?.name}</Text>
        <Text style={{ fontSize: 10, color: "grey" }}>
          {user?.address}
        </Text>
      </View>
      <View
        style={{
          padding: 5,
          backgroundColor: "#3FC060",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo name="check" size={30} color="white" />
      </View>
    </Pressable>
  );
};

export default OrderItem;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});