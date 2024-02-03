import { Pressable, Text, View } from 'react-native';
import ChevronRight from '../../../assets/icons/chevron-right.svg';
import { useAccordion } from '../../../hooks/useAccordion';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const tagsStyles = {
  body: { marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
  p: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 8,
  },
  ul: {
    marginTop: 0,
    marginBottom: 0,
    overflow: 'scroll',
  },
  li: {},
  div: { marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
  img: {
    marginTop: 10
  }
};

interface Props {
  question: string;
  answer: any;
  image?: any;
}

export const QuestionRow = (props: Props) => {
  const { question, answer } = props;
  const { width } = useWindowDimensions();
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
            <RenderHtml
              contentWidth={width - 64}
              source={{
                html: `<div style='color: white; font-size: 16px'>${answer}<div>`,
              }}
              // @ts-ignore
              tagsStyles={tagsStyles}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
