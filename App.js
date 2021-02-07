import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as PaperProvider } from "react-native-paper";
import MoviesList from "./src/app/screens/movies/moviesList";
import MovilDetail from "./src/app/screens/movies/movieDetail";
import SignIn from "./src/app/screens/signUp";
import Favorites from "./src/app/screens/favorites";
import { DarkTheme } from "react-native-paper";

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider theme={DarkTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Movies"
            options={{
              headerShown: false,
            }}
            component={MoviesList}
          />
          <Stack.Screen
            name="Details"
            options={{
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "100",
              },
            }}
            component={MovilDetail}
          />
          <Stack.Screen
            name="Favorites"
            options={{
              headerShown: false,
            }}
            component={Favorites}
          />
          <Stack.Screen
            name="SignIn"
            options={{
              headerShown: false,
            }}
            component={SignIn}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
