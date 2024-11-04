import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

// Initial state
const initialState = {
  data: [
    { id: 1, title: 'To check email', icon: require('./iconamoon_edit-bold.png') },
    { id: 2, title: 'UI task web page', icon: require('./iconamoon_edit-bold.png') },
    { id: 3, title: 'Learn javascript basic', icon: require('./iconamoon_edit-bold.png') },
    { id: 4, title: 'Learn HTML Advance', icon: require('./iconamoon_edit-bold.png') },
    { id: 5, title: 'Medical App UI', icon: require('./iconamoon_edit-bold.png') },
    { id: 6, title: 'Learn Java', icon: require('./iconamoon_edit-bold.png') },
  ],
};

// Action types
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// Action creators
const addItem = () => ({ type: ADD_ITEM });
const deleteItem = () => ({ type: DELETE_ITEM });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newId = state.data.length + 1;
      const newItem = { id: newId, title: `New Item ${newId}`, icon: require('./iconamoon_edit-bold.png') };
      return { ...state, data: [...state.data, newItem] };
    case DELETE_ITEM:
      const updatedData = state.data.slice(0, -1); // Xóa phần tử cuối cùng
      return { ...state, data: updatedData };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

// Main App Component
function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filtered data based on search query
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render item function
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={require('./mdi_marker-tick.png')} style={styles.iconImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={() => console.log(`Edit job with ID: ${item.id}`)}>
        <Image source={require('./iconamoon_edit-bold.png')} style={styles.editIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.avatar_icon}>
        <View style={styles.icon}>
          <Image source={require('./IconButton12.png')} />
        </View>
        <View style={styles.avatar}>
          <View style={styles.avatar_1}>
            <Image source={require('./Avatar31.png')} />
          </View>
          <View style={styles.avatar_2}>
            <Text style={styles.avatar_text_1}>Ho nguyen Cong Hieu</Text>
            <Text style={styles.avatar_text_2}>DHKTPM17A</Text>
          </View>
        </View>
      </View>

      {/* Search input */}
      <View style={styles.func}>
        <Image source={require('./mingcute_search-fill.png')} />
        <TextInput
          style={styles.funcInput}
          placeholder="Search"
          placeholderTextColor="#BCC1CA"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* FlatList */}
      <View style={styles.flatlistContainer}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* Add and Delete Buttons */}
      <View style={styles.button}>
        <TouchableOpacity style={styles.buttona} onPress={() => dispatch(deleteItem())}>
          <Text style={styles.buttona_1}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_screen3} onPress={() => dispatch(addItem())}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Main App with Provider
export default function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Styles
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
    marginVertical: 80,
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
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom: 100,
    width:'40%',
  },
  button_screen3: {
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttona: {
    width: 60,
    height: 60,
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
  buttona_1: {
    color: '#fff',
    fontSize: 14,
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
