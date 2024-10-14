import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Thêm useRoute để lấy tham số
import React, { useState, useEffect } from 'react'; // Thêm useEffect để cập nhật state khi nhận tham số

export default function App() {

  // Khởi tạo biến navigation
  const navigation = useNavigation();
  const route = useRoute(); // Lấy route để nhận tham số từ Screen 2

  // Kiểm tra xem có dữ liệu job được truyền đến hay không
  const jobId = route.params?.jobId || null;
  const initialJob = route.params?.jobTitle || '';

  // Khởi tạo state cho job
  const [job, setJob] = useState(initialJob);

  // Hàm xử lý khi nhấn nút "Finish"
  const handleFinish = () => {
    if (jobId) {
      // Nếu đang chỉnh sửa (có jobId), gửi dữ liệu chỉnh sửa về Screen 2
      navigation.navigate('Screen2', { editedJobId: jobId, editedJobTitle: job });
    } else {
      // Nếu đang thêm mới, gửi dữ liệu mới về Screen 2
      navigation.navigate('Screen2', { newJob: job });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar_icon}>
        <View style={styles.avatar}>
          <View style={styles.avatar_1}>
            <Image source={require('./img/Avatar 31.png')} />
          </View>
          <View style={styles.avatar_2}>
            <Text style={styles.avatar_text_1}>Ho nguyen Cong Hieu</Text>
            <Text style={styles.avatar_text_2}>DHKTPM17A</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Image source={require('./img/Icon Button 12.png')} />
        </View>
      </View>

      {/* Hiển thị tiêu đề dựa vào chế độ */}
      <View style={styles.title}>
        <Text style={styles.title_container}>{jobId ? 'EDIT YOUR JOB' : 'ADD YOUR JOB'}</Text>
      </View>

      <View style={styles.func}>
        <Image source={require('./img/fxemoji_note.png')} />
        <TextInput
          style={styles.funcInput}
          placeholder='Input your job'
          placeholderTextColor="#BCC1CA"
          value={job}
          onChangeText={(text) => setJob(text)}
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.button_screen3} onPress={handleFinish}>
          <Text style={styles.button_text}>Finish</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footer_img}>
          <Image source={require('./img/Image 95.png')}
            style={styles.footer_images}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar_icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
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
    marginRight: 30,
  },

  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  title_container: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  func: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    width: 334,
    height: 43,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 50,
  },

  funcInput: {
    fontSize: 16,
    marginLeft: 16,
  },

  button: {
    marginTop: 50,
  },

  button_screen3: {
    width: 190,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
  },

  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer_images: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    marginTop: 100,
  }
});
