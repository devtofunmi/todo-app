import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

interface FeatureCard {
  id: number;
  image: React.ReactNode;
  heading: string;
  text: string;
  isInverted: boolean;
}

const FeaturesCard: FeatureCard[] = [
  {
    id:1,
    image: <img src={one} alt="Feature 1" />,
    heading: 'Plan and manage your day',
    text: 'Start your morning with a clean slate, Plan ahead your day with a task in our note',
    isInverted: false,
  },
  {
    id:2,
    image: <img src={two} alt="Feature 2" />,
    heading: 'Never forget a thing',
    text: 'Quickly add your tasks, notes, expenses',
    isInverted: true,
  },
  {
    id:3,
    image: <img src={three} alt="Feature 3" />,
    heading: 'Find everything fast',
    text: 'Quickly search through your items with one tap',
    isInverted: false,
  },
  {
    id:4,
    image: <img src={four} alt="Feature 4" />,
    heading: 'With you, everywhere',
    text: 'Accessible across all your devices',
    isInverted: true,
  },
];

export default FeaturesCard;
