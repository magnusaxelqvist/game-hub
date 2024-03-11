import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={25}>
            <PlatformSelector
              selectedPlatform={gamesQuery.platform}
              onSelectPlatform={(platform) =>
                setGamesQuery({ ...gamesQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gamesQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGamesQuery({ ...gamesQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
