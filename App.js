import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import Input from "./components/Input";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const modalHandler = () => {
    setIsVisible(true);
  }

  const onAddGoal = (text) => {

    setListGoals((current) => [
      ...current,
      {text: text, key: Math.random().toString()},
    ]);
  };

  const deleteGoal = (key) => {
    setListGoals(current => current.filter(goalObj => goalObj.key !== key));
  };

  return (
    <>
    <StatusBar style={'auto'} />
    <View style={styles.rootContainer}>

      {/* Input area */}
      <View style={{paddingVertical: 15}}>
        <Button title="Add new goal"  onPress={modalHandler} />
      </View>
      <Input onAddGoal={onAddGoal} isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* List of Goals */}
      <View style={styles.goalsContainer}>
        <Text style={{fontSize: 20}}>{ listGoals.length===0 ? "Nothing to show 😕" : "Goals ✔" }</Text>
        <FlatList
          style={{paddingTop: 15}}
          data={listGoals}
          renderItem={(goalObj) => (<GoalItem goalObj={goalObj} deleteGoal={deleteGoal}/>)}
        />
          
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
    paddingTop: 30
  },

});
