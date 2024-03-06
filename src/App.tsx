import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

export interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {

  const [gamesQuery, setGamesQuery] = useState<GamesQuery>({} as GamesQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX='5'>
          <GenreList
            selectedGenre={gamesQuery.genre}
            onselectGenre={(genre) => setGamesQuery({ ...gamesQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector
          selectedPlatform={gamesQuery.platform}
          onSelectPlatform={(platform) => setGamesQuery({...gamesQuery, platform})}
        />
        <GameGrid gameQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
