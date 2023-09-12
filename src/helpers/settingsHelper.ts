import firestore from '@react-native-firebase/firestore';

type Settings = {
  version: number;
};

export const getDbSettings = async () => {
  const settings: Settings = await firestore()
    .collection('settings')
    .doc('app-settings')
    .get()
    .then((snapshot) => {
      return snapshot.data() as Settings;
    });
  return settings;
};
