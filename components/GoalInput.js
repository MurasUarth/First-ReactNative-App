import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

  const [Goal, setGoal] = useState('');

  const goalHandler = Goal => {
    setGoal(Goal);
  }

  const clear = () => {

  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.header}>
        <TextInput placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalHandler}
          value={setGoal} />
        <Button title='Add Goal' onPress={props.onAddGoal.bind(this, Goal)} />
        <Button title='Cancel' color='red' onPress={props.onCancel} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 12,
    borderWidth: 2,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
});

export default GoalInput;