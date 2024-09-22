import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      {/* Product Information */}
      <View style={styles.product}>
        <Image
          source={{ uri: 'https://nhatrangbooks.com/wp-content/uploads/2020/01/8a692ce25c7ed5778c5e2e72576a15cc-600x600.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSubtitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>
            141.800 đ <Text style={styles.discountedPrice}>141.800 đ</Text>
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              value={quantity.toString()}
              keyboardType="numeric"
              onChangeText={(val) => setQuantity(parseInt(val) || 1)}
            />
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buyLaterText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Coupon Input */}
      <View style={styles.couponContainer}>
        <TextInput style={styles.couponInput} placeholder="Mã giảm giá" />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Gift Voucher Link */}
      <Text style={styles.giftText}>
        Bạn có phiếu quà tặng Tiki/Got it/Urbox? <Text style={styles.linkText}>Nhập tại đây?</Text>
      </Text>

      {/* Price Information */}
      <View style={styles.priceInfo}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Tạm tính</Text>
          <Text style={styles.priceValue}>141.800 đ</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>Thành tiền</Text>
          <Text style={styles.totalValue}>141.800 đ</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  product: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  productImage: {
    width: 140,
    height: 200,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productSubtitle: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  discountedPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginRight: 5,
  },
  quantityText: {
    fontSize: 16,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    textAlign: 'center',
    width: 40,
    marginRight: 5,
  },
  buyLaterText: {
    marginLeft: 10,
    color: '#007bff',
  },
  couponContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  giftText: {
    marginBottom: 10,
    fontSize: 12,
    color: '#888',
  },
  linkText: {
    color: '#007bff',
  },
  priceInfo: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  priceLabel: {
    fontSize: 14,
    color: '#888',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

