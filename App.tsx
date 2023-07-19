import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { bgColor } from "./utils/constants";

const Stack = createNativeStackNavigator();
const Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: bgColor,
	},
};

const App = (): JSX.Element => {
	return (
		<NavigationContainer theme={Theme}>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
			<StatusBar backgroundColor={bgColor} />
		</NavigationContainer>
	);
};

export default App;
