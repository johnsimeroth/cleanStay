import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Task from './tasks/Task.jsx';
import CleanCompleteForm from './tasks/CleanCompleteForm.jsx';
import ScheduleTaskForm from './tasks/ScheduleTaskForm.jsx';
import styles from '../lib/styles.js';
import axios from 'axios';
import Modal from 'react-native-modal';

export default function Tasks({ tasks, propertyIDs, refreshFunc }) {
  const [IDs, setIDs] = useState(propertyIDs);
  // TODO: add functionality for user to change the list of IDs to filter by.
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  function openForm (task) {
    setCurrentTask(task);
    setModalVisible(true);
  }

  // TODO: combine these two into one function
  function handleCompleteSubmit (task, stars, issues, comments) {
    axios.put(`http://localhost:8000/tasks/${task._id}`, {complete: true})
      .then(() => refreshFunc())
      .catch(console.error)
  }

  function handleScheduleSubmit (task, scheduleDate) {
    axios.put(`http://localhost:8000/tasks/${task._id}`, {scheduled: scheduleDate})
      .then(() => refreshFunc())
      .catch(console.error)
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.big2}>Unscheduled Tasks</Text>
      <View style={[styles.flexRow, {borderBottomWidth: 0}]}>
      <View style={{flex: 5, paddingLeft: 10}} >
        <Text style={styles.small1}>Task</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.small1}>Due</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.small1}>Priority</Text>
      </View>
    </View>
      <ScrollView style={{height: 250, width: '100%'}} >
        {tasks
          .filter((task) => !task.scheduled)
          .filter((task) => IDs.includes(task.propertyID))
          .map(task => <Task task={task} key={task._id} handlePress={openForm}/>)}
      </ScrollView>

      <Text style={styles.big2}>Scheduled Tasks</Text>
      <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection='down'
      >
        {currentTask.scheduled ?
        <CleanCompleteForm
          task={currentTask}
          closeModal={() => setModalVisible(false)}
          handleSubmit={handleCompleteSubmit}
        />
        :
        <ScheduleTaskForm
          task={currentTask}
          closeModal={() => setModalVisible(false)}
          handleSubmit={handleScheduleSubmit}
        />}
      </Modal>
    </ScrollView>
  );
}