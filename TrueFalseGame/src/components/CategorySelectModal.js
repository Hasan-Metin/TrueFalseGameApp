import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';

import {categoryModalStyles} from './styles';

const CategorySelectModal = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const fetchData = async () => {
    const {
      data: {trivia_categories},
    } = await axios.get('https://opentdb.com/api_category.php');
    setCategoryList(trivia_categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const CategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={categoryModalStyles.categoryItemContainer}
        onPress={() => props.onCategorySelect(item)}>
        <Text style={categoryModalStyles.categoryItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={props.visibility}
      style={categoryModalStyles.modal}
      onBackdropPress={props.onClose}>
      <View style={categoryModalStyles.container}>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={categoryList}
          renderItem={CategoryItem}
        />
      </View>
    </Modal>
  );
};

export {CategorySelectModal};
