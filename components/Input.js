import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from 'react';
import goal from '../assets/images/goal.png';

export default function Input({ onAddGoal, isVisible, setIsVisible }) {
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e);
    // console.log(e);
  };

  const addHandler = () => {
    onAddGoal(text);
    setText('');
    setIsVisible(false);
  }

  const cancelModal = () => {
    setIsVisible(false);
  }

  return (
    <Modal visible={isVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image style={{width: 150, height: 150, margin: 20}} source={goal} />
        <TextInput
          style={styles.textInput}
          placeholder="type goal here..."
          onChangeText={onTextChange}
          value={text}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              color='#48CF5F'
              title="Add"
              onPress={addHandler}
              disabled={text === "" ? true : false}
            />
          </View>

          <View style={styles.btn}>
            <Button title='Cancle' onPress={cancelModal} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50
  },

  textInput: {
    width: "80%",
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderWidth: 2,
    padding: 16,
    borderRadius: 15,
    marginVertical: 30
    // flex: 4,
  },

  btnContainer: {
    flexDirection: 'row',
  },

  btn: {
    width: 90,
    marginHorizontal: 10
  },
});
