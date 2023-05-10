import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { routers } from "./route/index";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <ErrorBoundary>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            {routers.map((it) => {
              return (
                <Stack.Screen
                  name={it.name}
                  key={it.name}
                  component={it.component}
                  options={it.options}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
