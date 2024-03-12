import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit='cover'
        height='60%'
      />
      <CardBody
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100%'
      >
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <HStack align='center' justifyContent='flex-end' width='100%'>
            <CriticScore score={game.metacritic} />
            <Emoji rating={game.rating_top} />
          </HStack>
        </HStack>
        <Heading fontSize='2xl'>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
