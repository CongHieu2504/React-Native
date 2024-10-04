import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const DATA = [
  {
    id: "1",
    image: require("./img/ca_nau_lau.png"), // replace with your image URL
    name: "Ca nấu lẩu, nấu mì mini",
    shop: "Shop Devang",
  },
  {
    id: "2",
    image: require("./img/ga_bo_toi.png"),
    name: "1KG KHÔ GÀ BƠ TỎI",
    shop: "Shop LTD Food",
  },
  {
    id: "3",
    image: require("./img/xa_can_cau.png"),
    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
  },
  {
    id: "4",
    image: require("./img/do_choi_dang_mo_hinh.png"),
    name: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
  },
  {
    id: "5",
    image: require("./img/lanh_dao_gian_don.png"),
    name: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
  },
  {
    id: "6",
    image: require("./img/hieu_long_con_tre.png"),
    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
  },
  {
    id: "7",
    image: require("./img/trump.png"),
    name: "Donald Trump: Thiên tài lãnh đạo",
    shop: "Minh Long Book",
  },
];

const App = () => {
  const navbar = (
    <View>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          marginTop: 30,
          alignItems: "center",
          paddingHorizontal: 30,
          height: 42,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("./img/back-arrow.png")}
          style={styles.imageicon}
        ></Image>
        <Text style={{ color: "white", fontSize: 23 }}>Chat</Text>
        <Image
          source={require("./img/shopping-cart.png")}
          style={styles.imageicon}
        ></Image>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black", fontSize: 15, padding: 10 }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
    </View>
  );
  const footer = (
    <View>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          alignItems: "center",
          paddingHorizontal: 30,
          height: 42,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("./img/more.png")}
          style={styles.imageicon}
        ></Image>
        <Image
          source={require("./img/interface.png")}
          style={styles.imageicon}
        ></Image>
        <Image
          source={require("./img/1.png")}
          style={styles.imageicon}
        ></Image>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text><Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {navbar}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {footer}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  imageicon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shopName: {
    fontSize: 14,
    color: "#666",
  },
  chatButton: {
    backgroundColor: "#F31111",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chatText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;