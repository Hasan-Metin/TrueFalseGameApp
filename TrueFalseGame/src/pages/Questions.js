import React, {useState, useRef} from 'react';
import {View, Text, SafeAreaView, FlatList, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

import {QuestionItem} from '../components';
import {questionsPage} from './styles';

const Questions = (props) => {
  const dispatch = useDispatch();
  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const questionList = useSelector((globals) => globals.questions);

  const renderQuestion = ({item}) => (
    <QuestionItem questionObject={item} onAnswer={answer} />
  );

  const answer = (result) => {
    dispatch({type: 'SET_SCORE', payload: {isTrue: result}});
    const newIndex = currentIndex + 1;
    if (newIndex === questionList.length) {
      return props.navigation.navigate('Finish');
    }
    listRef.current.scrollToIndex({index: newIndex});
    setCurrentIndex(newIndex);
  };
  return (
    <SafeAreaView style={questionsPage.safe}>
      <View style={questionsPage.safe}>
        <View
          style={{
            backgroundColor: '#3949ab',
            alignItems: 'center',
            padding: 20,
          }}>
          <CountdownCircleTimer
            size={250}
            isPlaying
            duration={60}
            colors={[
              ['#fff176', 0.4],
              ['#ba68c8', 0.4],
              ['#ff8a65', 0.2],
            ]}
            onComplete={() => {
              props.navigation.navigate('Finish');
            }}>
            {({remainingTime, animatedColor}) => (
              <Animated.Text style={{color: animatedColor, fontSize: 60}}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
        <FlatList
          ref={listRef}
          horizontal
          data={questionList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderQuestion}
          scrollEnabled={false}
          // onEndReached={}
        />
      </View>
    </SafeAreaView>
  );
};

export {Questions};
