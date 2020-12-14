import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

import {finishPage} from './styles';

const Finish = (props) => {
  const userScore = useSelector((globals) => globals.score);
  return (
    <SafeAreaView style={finishPage.safe}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>
      </View>
    </SafeAreaView>
  );
};

export {Finish};
