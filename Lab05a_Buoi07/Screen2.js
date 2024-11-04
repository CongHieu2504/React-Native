import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute(); // Lấy đối tượng route

  // Dữ liệu cục bộ
  const [data, setData] = useState([
    { id: 1, title: 'To check email', icon: require('./img/iconamoon_edit-bold.png') },
    { id: 2, title: 'UI task web page', icon: require('./img/iconamoon_edit-bold.png') },
    { id: 3, title: 'Learn javascript basic', icon: require('./img/iconamoon_edit-bold.png') },
    { id: 4, title: 'Learn HTML Advance', icon: require('./img/iconamoon_edit-bold.png') },
    { id: 5, title: 'Medical App UI', icon: require('./img/iconamoon_edit-bold.png') },
    { id: 6, title: 'Learn Java', icon: require('./img/iconamoon_edit-bold.png') },
  ]);

  // State cho câu b: Search
  const [searchQuery, setSearchQuery] = useState('');

  // Lọc dữ liệu khi search
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) // Chuyển về chữ thường để không phân biệt chữ hoa/thường
  );

  // Câu c: Hàm thêm job mới
  const addJob = (newJob) => {
    setData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, title: newJob, icon: require('./img/iconamoon_edit-bold.png') }
    ]);
  };

  // Hàm cập nhật công việc đã được chỉnh sửa "CÂU C"
  const editJob = (editedJobId, editedJobTitle) => {
    setData((prevData) =>
      prevData.map(item =>
        item.id === editedJobId ? { ...item, title: editedJobTitle } : item
      )
    );
  };

  // Sử dụng useEffect để lắng nghe khi quay lại từ Screen 3 với dữ liệu chỉnh sửa
  useEffect(() => {
    if (isFocused) {
      const newJob = route.params?.newJob;
      const editedJobId = route.params?.editedJobId;
      const editedJobTitle = route.params?.editedJobTitle;

      if (newJob) {
        addJob(newJob); // Thêm công việc mới
      }

      if (editedJobId && editedJobTitle) {
        editJob(editedJobId, editedJobTitle); // Chỉnh sửa công việc
      }
    }
  }, [isFocused]);

  // Hàm render từng item trong FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={require('./img/mdi_marker-tick.png')}
        style={styles.iconImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Screen3', { jobId: item.id, jobTitle: item.title })}>
        <Image
          source={require('./img/iconamoon_edit-bold.png')}
          style={styles.editIcon}
        />
      </TouchableOpacity>
    </View>
  );

  // Giao diện chính
  return (
    <View style={styles.container}>
      <View style={styles.avatar_icon}>
        <View style={styles.icon}>
          <Image source={require('./img/IconButton 12.png')} />
        </View>
        <View style={styles.avatar}>
          <View style={styles.avatar_1}>
            <Image source={require('./img/Avatar31.png')} />
          </View>
          <View style={styles.avatar_2}>
            <Text style={styles.avatar_text_1}>Ho nguyen Cong Hieu</Text>
            <Text style={styles.avatar_text_2}>DHKTPM17A</Text>
          </View>
        </View>
      </View>

      {/* Input tìm kiếm */}
      <View style={styles.func}>
        <Image source={require('./img/mingcute_search-fill.png')} />
        <TextInput
          style={styles.funcInput}
          placeholder='Search'
          placeholderTextColor="#BCC1CA"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Cập nhật state khi nhập liệu
        />
      </View>

      {/* FlatList hiển thị kết quả tìm kiếm */}
      <View style={styles.flatlistContainer}>
        <FlatList
          data={filteredData} // Sử dụng dữ liệu đã lọc
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* Nút chuyển sang Screen 3 */}
      <View style={styles.button}>
        <TouchableOpacity style={styles.button_screen3} onPress={() => navigation.navigate('Screen3')}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Định dạng CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  avatar_icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 20,
  },

  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 220,
  },

  avatar_text_1: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  icon: {
    marginLeft: 10,
  },

  func: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    width: '90%',
    height: 43,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginVertical: 20,
  },

  funcInput: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },

  button: {
    marginVertical: 20,
  },

  button_screen3: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button_text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  flatlistContainer: {
    flex: 1,
    width: '90%',
    marginVertical: 20,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#ddd',
    borderColor: '#ddd',
    padding: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  editIcon: {
    width: 20,
    height: 20,
  },

  iconImage: {
    width: 20,
    height: 20,
  },

});
