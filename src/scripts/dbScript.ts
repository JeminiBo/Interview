import firestore from '@react-native-firebase/firestore';

export const setTopicData = async (
  id: string,
  title: string,
  questions: { question: string; answer: string }[],
) => {
  await firestore().collection('topics').doc(id).set({ title, questions });
};
