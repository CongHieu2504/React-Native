import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Thêm icon

const DATA = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/giacchuyen 1.png'),
    rating: 4,
    reviews: 15,
    discount: '-39%',
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/daynguon 1.png'),
    rating: 4,
    reviews: 15,
    discount: '-39%',
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/dauchuyendoipsps2 1.png'),
    rating: 4,
    reviews: 15,
    discount: '-39%',
  },  
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image:  require('./img/dauchuyendoi 1.png'),
    rating: 4,
    reviews: 15,
    discount: '-39%',
  },  
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image:  require('./img/carbusbtops2 1.png'),
    rating: 4,
    reviews: 15,
    discount: '-39%',
  },
  {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image:  require('./img/daucam 1.png'),
    rating: 4,
    reviews: 15,
    discount: '-39%',
  },
];

const ProductItem = ({ title, price, image, rating, reviews, discount }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.discount}>{discount}</Text>
    </View>
    <View style={styles.ratingContainer}>
      <FontAwesome name="star" size={14} color="#ffd700" />
      <FontAwesome name="star" size={14} color="#ffd700" />
      <FontAwesome name="star" size={14} color="#ffd700" />
      <FontAwesome name="star" size={14} color="#ffd700" />
      <FontAwesome name="star-half" size={14} color="#ffd700" />
      <Text style={styles.reviews}>({reviews})</Text>
    </View>
  </View>
);

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#000" />
        <TextInput placeholder="Dây cáp usb" style={styles.searchInput} />
        <TouchableOpacity style={styles.cartIcon}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ProductItem
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            reviews={item.reviews}
            discount={item.discount}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // Hiển thị 2 cột
      />

      {/* Thanh điều hướng */}
      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./img/more.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./img/interface.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./img/1.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 10,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  cartIcon: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 8,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 12,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  reviews: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1BA9FF',
    height: 60, // Tăng chiều cao để không bị tràn
    paddingHorizontal: 20, // Tạo khoảng cách cho icon
  },
  navItem: {
    alignItems: 'center', // Đảm bảo icon được căn giữa
    justifyContent: 'center', 
  },
  navIcon: {
    width: 24,
    height: 24, // Đặt kích thước cố định cho các icon
  },
});

export default ProductListScreen;
