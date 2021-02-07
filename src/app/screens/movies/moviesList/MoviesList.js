import React from "react";
import ListCarouselMovies from "./containers/ListCarouselMovies";
import { Title } from "react-native-paper";
import { MoviesListProvider } from "@src/context/contextMoviesList";
import Pagination from "./containers/Pagination";
import ScreenSmart from "./containers/ScreenSmart";
import ScreenWithNavigation from "@src/app/layouts/ScreenWithNavigation";
import {
  Container,
  WrapperHeader,
  IconMovie,
  BackgroundHeader,
} from "./styles";

const ListCards = ({ navigation }) => (
  <ScreenWithNavigation navigation={navigation}>
    <MoviesListProvider>
      <ScreenSmart navigation={navigation}>
        <Container>
          <BackgroundHeader>
            <WrapperHeader>
              <IconMovie />
              <Title>Popular movies</Title>
            </WrapperHeader>
          </BackgroundHeader>
          <ListCarouselMovies />
          <Pagination />
        </Container>
      </ScreenSmart>
    </MoviesListProvider>
  </ScreenWithNavigation>
);

export default ListCards;
