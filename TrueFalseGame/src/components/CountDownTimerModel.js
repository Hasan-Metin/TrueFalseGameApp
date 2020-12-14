import React from 'react';
import {Animated, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

import {timerModalStyles} from './styles';

const CountDownTimerModel = (props) => {
  return (
    <View style={timerModalStyles.modal}>
      <CountdownCircleTimer
        size={250}
        isPlaying
        duration={5}
        colors={[
          ['#fff176', 0.4],
          ['#ba68c8', 0.4],
          ['#ff8a65', 0.2],
        ]}
        onComplete={() => {
          props.onClose(false);
          return [false, 0];
        }}>
        {({remainingTime, animatedColor}) => (
          <Animated.Text style={{color: animatedColor, fontSize: 200}}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

export {CountDownTimerModel};
