import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList,Image,} from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm gọi API từ MockAPI
  const fetchData = async () => {
    try {
      const response = await fetch("https://6459feb465bd868e930d904a.mockapi.io/users");
      const json = await response.json();
      setData(json); // Cập nhật dữ liệu lấy từ API
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Gọi API khi component được mount
  useEffect(() => {
    fetchData();
  }, []);

    // Hàm thêm sản phẩm mới
  const handleAddProduct = () => {
    const newProduct = {
      id: (data.length + 1).toString(),  // Tạo id mới dựa trên độ dài mảng
      name: 'Sản phẩm mới',
      shop: 'Cửa hàng mới',
      image: 'https://loremflickr.com/640/480/fashion',  // URL hình ảnh mặc định
    };
    setData([...data, newProduct]);  // Thêm sản phẩm mới vào mảng
  };
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  

  // làm như bình thường
  return (
    <View style={styles.container}>
      <View style={styles.func}>
        <TouchableOpacity style={styles.touch}  onPress={handleAddProduct}>
          <Text style={styles.text}>Thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text}>Xóa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text}>Sửa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatlist}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  touch:{
    backgroundColor: 'black',
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderRadius:10,
    justifyContent:'center',
  },
  func:{
    flex:1,
    color: 'white',
    fontSize: 20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'red',
  },
  text:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  flatlist:{
    flex: 2,
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