import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ goalObj, deleteGoal }) {
  const { item, index } = goalObj;

  // const onDelete = () => {
  //   setListGoals(current => (current.splice(index, 1)));
  // };

  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#2b0b54" }}
        onPress={() => deleteGoal(item.key)}
      >
        <Text style={styles.goalText}>{index + 1 + ". " + item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
    padding: 8,
    fontSize: 18
  },
});
