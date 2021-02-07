import React, { Fragment } from "react";
import Navigation from "../../common/Navigation";

export default function ScreenWithNavigation({ children, navigation }) {
  return (
    <Fragment>
      <Navigation
        navFavorites={() => navigation.navigate("Favorites")}
        navMovies={() => navigation.navigate("Movies")}
        navUser={() => navigation.navigate("SignIn")}
      />
      {children}
    </Fragment>
  );
}
