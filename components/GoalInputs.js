import React, { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';

const GoalInputs = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/appl2.jpg')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b189f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputs;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#311b6b',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    color: '#120438',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
