import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import base64 from 'react-native-base64';

import {questionItem} from './styles';

const QuestionItem = (props) => {
  return (
    <View style={questionItem.container}>
      <View style={questionItem.upperContainer}>
        <View style={questionItem.questionContainer}>
          <Text style={questionItem.questionText}>
            {base64.decode(props.questionObject.question)}
          </Text>
        </View>
      </View>
      <View style={questionItem.buttonContainer}>
        <TouchableOpacity
          style={questionItem.trueButton}
          onPress={() =>
            props.onAnswer(
              base64.decode(props.questionObject.correct_answer) === 'True',
            )
          }>
          <Text style={questionItem.buttonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={questionItem.falseButton}
          onPress={() =>
            props.onAnswer(
              base64.decode(props.questionObject.correct_answer) === 'False',
            )
          }>
          <Text style={questionItem.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {QuestionItem};
