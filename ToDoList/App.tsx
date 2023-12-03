import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './src/Header/Header';
import Content from './src/Content/Content';
import InputField from './src/InputField/InputField';

const App = () => {
  const [tasks, setTasks] = useState<any>([]);
  const handleAddTask = (task: any) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const handleDeletePress = (deleteIndex: any) => {
    setTasks(tasks.filter((value: any, index: any) => index != deleteIndex));
  };
  return (
    <SafeAreaView style={style.safeView}>
      <View style={style.container}>
        <Header title={'Smart To-Do List'} />
        <ScrollView style={style.scrollView}>
          {tasks.map((task: any, index: any) => {
            return (
              <View key={index} style={style.taskContainer}>
                <Content
                  index={index + 1}
                  deletePress={() => handleDeletePress(index)}
                  task={task}
                />
              </View>
            );
          })}
        </ScrollView>
        <InputField addTask={handleAddTask} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
});

export default App;
