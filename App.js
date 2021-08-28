import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [Goals, setGoals] = useState([]);

  const addGoalhandler = goalTitle => {
    setGoals(Goals => [...Goals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(Goals => {
      return Goals.filter((goal) => goal.id !== goalId)
    });
  }

  const [isAddMode, setIsAddMode] = useState(false);

  const cancel = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalhandler} onCancel={cancel} />
      <FlatList data={Goals} renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});