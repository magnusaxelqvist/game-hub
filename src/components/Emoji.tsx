import bullsEye from '../assets/bulls-eye.webp';
import thumsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { ImageProps, Image } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '15px'},
    4: { src: thumsUp, alt: 'recommended', boxSize: '15px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '25px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1}/>;
};

export default Emoji;
