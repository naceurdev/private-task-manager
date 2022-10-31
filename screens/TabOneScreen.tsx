import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

type Task = {title: string, priority: number}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [task, setTask] = useState({title: '', priority: 0});
  const [tasks, setTasks] = useState<Task[]>([]);

  const renderItem = (task) => {
    console.log(task)
    return (
    <Text>{task.item.title}</Text>
  )};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Task</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setTask({...task, title: value})}
        value={task.title}
        placeholder="Enter Task title"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setTask({...task, priority: Number(value)})}
        value={String(task.priority)}
        placeholder="Enter priority"
      />
       <Button
        title="Add new task"
        onPress={() => {
          setTasks([...tasks, task])
          setTask({title: '', priority: 0})
        }}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
