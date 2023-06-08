import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Task from './tasks/Task';
import TaskViewHeader from './tasks/TaskViewHeader';
import CleanCompleteForm from './tasks/CleanCompleteForm';
import ScheduleTaskForm from './tasks/ScheduleTaskForm';
import styles from '../lib/styles.js';
import axios from 'axios';
import Modal from 'react-native-modal';

export default function Tasks({ tasks, propertyIDs, refreshFunc }) {
  const [IDs, setIDs] = useState(propertyIDs);
  // TODO: add functionality for user to change the list of IDs to filter by.
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  function openForm(task) {
    setCurrentTask(task);
    setModalVisible(true);
  }

  function pluck(array, property) {
    return array.map(item => item[property]);
  }

  function formatDateString (dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  function formatTasks(taskList, returnScheduled) {
    const formattedTasks = taskList
      .filter((task) => (!!task.scheduled === returnScheduled))
      .filter((task) => IDs.includes(task.propertyID));
    if (!returnScheduled) {
      return formattedTasks.map(task =>(
        <Task task={task}
          key={task._id}
          handlePress={openForm}
          formatDateString={formatDateString}
        />)
      );
    }
    const dateSet = new Set([...pluck(formattedTasks, 'scheduled')]);
    const sortedDates = [...dateSet].sort((a, b) => new Date(a.scheduled) - new Date(b.scheduled));
    const dateTaskMap = new Map();
    sortedDates.forEach((date) => {
      dateTaskMap.set(date, formattedTasks.filter((task) => task.scheduled === date))
    });
    console.log('dtm: ', dateTaskMap);
    const result = [];
    dateTaskMap.forEach((taskList, date) => {
      result.push(
        <View key={date}>
          <Text style={[styles.big5, {paddingLeft: 10}]}>{formatDateString(date)}</Text>
          {taskList.map(task => (
            <Task
              task={task}
              key={task._id}
              handlePress={openForm}
              formatDateString={formatDateString}
            />
          ))}
        </View>
      )
    });
    return result;
  }

  // TODO: combine these two into one function
  function handleCompleteSubmit(task, stars, issues, comments) {
    axios.put(`http://localhost:8000/tasks/${task._id}`, { complete: true })
      .then(() => refreshFunc())
      .catch(console.error)
  }

  function handleScheduleSubmit(task, scheduleDate) {
    axios.put(`http://localhost:8000/tasks/${task._id}`, { scheduled: scheduleDate })
      .then(() => refreshFunc())
      .catch(console.error)
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.big2}>Unscheduled Tasks</Text>
      <TaskViewHeader />
      <ScrollView style={{ height: 250, width: '100%' }} >
        {formatTasks(tasks, false)}
      </ScrollView>

      <Text style={styles.big2}>Scheduled Tasks</Text>
      <View>
        <TaskViewHeader />
        {formatTasks(tasks, true)}
      </View>
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
