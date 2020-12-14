import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import axios from 'axios';

import {introPageStyles} from './styles';
import {CategorySelectModal, CountDownTimerModel} from '../components';
import {useDispatch} from 'react-redux';

const Intro = (props) => {
  const [modalFlag, setModalFlag] = useState(false);
  const [timerModalFlag, setTimerModalFlag] = useState(false);
  const dispatch = useDispatch();

  const startGame = (selectedCategory) => {
    axios
      .get('https://opentdb.com/api.php?', {
        params: {
          amount: 10,
          category: selectedCategory.id,
          type: 'boolean',
          encode: 'base64',
        },
      })
      .then((res) => {
        let {data} = res;
        dispatch({type: 'SET_QUESTIONS', payload: {questions: data.results}});
      });

    setModalFlag(false);
    setTimerModalFlag(true);
  };

  return (
    <SafeAreaView style={introPageStyles.safe}>
      <View style={introPageStyles.container}>
        <View style={introPageStyles.Container}>
          <Text style={introPageStyles.bannerText}>True vs. False</Text>
          <Text style={introPageStyles.bannerText}>Game</Text>
        </View>
        <View style={introPageStyles.buttonContainer}>
          <TouchableOpacity
            style={introPageStyles.buttonContainer}
            onPress={() => setModalFlag(true)}>
            <Text style={introPageStyles.buttonText}>Start!</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CategorySelectModal
            visibility={modalFlag}
            onClose={() => {
              setModalFlag(false);
            }}
            onCategorySelect={startGame}
          />
        </View>
        {timerModalFlag && (
          <CountDownTimerModel
            onClose={(value) => {
              setTimerModalFlag(value);
              props.navigation.navigate('Questions');
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export {Intro};
