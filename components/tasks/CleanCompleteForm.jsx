import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../lib/styles.js';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';

export default function CleanCompleteForm({ task, modalVisible, setModalVisible, handleSubmit }) {
  const [stars, setStars] = useState(0);
  const [issues, setIssues] = useState('');
  const [comments, setComments] = useState('');
  const [focused, setFocused] = useState('');

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection='down'
    >
      <View style={styles.modal}>
        <Text style={[styles.big2, {paddingBottom: 20}]}>Mark Clean Complete</Text>
        <Text style={styles.big4}>How clean did the guest leave the home?</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={stars}
          selectedStar={setStars}
          fullStarColor='#a9a9a9'
        />

        <TextInput
          style={[styles.input, {marginTop: 40}, focused === 'issues' ? styles.focus : {}]}
          multiline={true}
          numberOfLines={4}
          placeholder={focused === 'issues' ? '' : 'Any issues to report?'}
          placeholderTextColor='#929292'
          value={issues}
          onChangeText={setIssues}
          onFocus={() => setFocused('issues')}
          onBlur={() => focused === 'issues' && setFocused('')}
        />
        <TextInput
          style={[styles.input, focused === 'comments' ? styles.focus : {}]}
          multiline={true}
          numberOfLines={4}
          placeholder={focused === 'comments' ? '' :'Any other comments?'}
          placeholderTextColor='#929292'
          value={comments}
          onChangeText={setComments}
          onFocus={() => setFocused('comments')}
          onBlur={() => focused === 'comments' && setFocused('')}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 30}}>
          <Button
            title='Cancel'
            onPress={() => {
              setStars(0);
              setIssues('');
              setComments('');
              setFocused('');
              setModalVisible(false)
            }}
          />
          <Button
            title='Submit'
            onPress={() => {
              handleSubmit(task, stars, issues, comments);
              setStars(0);
              setIssues('');
              setComments('');
              setFocused('');
              setModalVisible(false)
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
