import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchTasks } from '../../lib/supabase_crud';

const TaskList = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, []);

  const renderTask = ({ item }: { item: { id: number; task_name: string; name: string; email: string; completed: boolean } }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.task_name}</Text>
      <Text>Assigned to: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Status: {item.completed ? 'Completed' : 'Pending'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskList;
