import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default GoalItem;