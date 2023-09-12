import { Pressable, Text, View, Image } from 'react-native';
import ChevronRight from '../../assets/icons/chevron-right.svg';
import { useAccordion } from '../../hooks/useAccordion';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';

interface Props {
  question: string;
  answer: any;
  image?: any;
}

export const QuestionRow = (props: Props) => {
  const { question, answer, image } = props;
  const { animatedRef, setHeight, isOpened, animatedHeightStyle } =
    useAccordion();
  const animatedChevronStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: withTiming(`${isOpened.value ? 90 : 0}deg`, { duration: 200 }),
      },
    ],
  }));
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => runOnUI(setHeight)()}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{question}</Text>
          <Animated.View style={[animatedChevronStyle]}>
            <ChevronRight />
          </Animated.View>
        </View>
      </Pressable>
      <Animated.View style={[animatedHeightStyle]}>
        <View style={styles.absoluteContentWrapper}>
          <View
            ref={animatedRef}
            collapsable={false}
            style={styles.contentWrapper}>
            {!!answer && <Text style={styles.description}>{answer}</Text>}
            {image && (
              <View
                style={{
                  width: '100%',
                  height: 200,
                  flexDirection: 'row',
                }}>
                <Image
                  source={image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            )}
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
