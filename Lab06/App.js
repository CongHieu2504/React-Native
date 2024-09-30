import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

// Dữ liệu giả lập các sản phẩm, sử dụng require để lấy ảnh cục bộ
const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    imageUrl: require('./assets/images/image1.png'),  // Ảnh cục bộ
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: require('./assets/images/image2.png'),  // Ảnh cục bộ
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    imageUrl: require('./assets/images/image3.png'),  // Ảnh cục bộ
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    imageUrl: require('./assets/images/image4.png'),  // Ảnh cục bộ
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    imageUrl: require('./assets/images/image5.png'),  // Ảnh cục bộ
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    imageUrl: require('./assets/images/image6.png'),  // Ảnh cục bộ
  },
];

// Component Item để hiển thị từng sản phẩm
const Item = ({title, shop, imageUrl}) => (
  <View style={styles.item}>
    <Image source={imageUrl} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shop}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} shop={item.shop} imageUrl={item.imageUrl} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    backgroundColor: '#FF3D00',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
