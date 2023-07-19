import { Pressable, ScrollView, Text } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import IconF from "react-native-vector-icons/FontAwesome";
import { padding, textColor } from "../utils/constants";
import { Shadow } from "react-native-shadow-2";
import { Chat } from "../components";
import { users } from "../utils/data";

const img1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fmutlx0zx2u851.jpg&f=1&nofb=1&ipt=55644dd7daf4f37a3cad3134002131958fc1fd223c20124f23887d28c4bf35ca&ipo=images";
const img2 = "https://www.thefamouspeople.com/profiles/images/bella-poarch-101462-4.jpg";

const HomeHeader = () => {
	return (
		<Header distance={2} startColor="#1117">
			<Pressable onPress={() => console.log("BARS")}>
				<IconF name="bars" size={25} color={textColor} />
			</Pressable>
			<Title>Telegram</Title>
			<Pressable onPress={() => console.log("SEARCH")}>
				<IconF name="search" size={25} color={textColor} />
			</Pressable>
		</Header>
	);
};

const Header = styled(Shadow)`
	height: 60px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 ${padding};
`;
const Title = styled.Text`
	flex: 1;
	font-size: 25px;
	color: ${textColor};
	padding-left: 20px;
`;

const HomeScreen = () => {
	return (
		<Screen>
			<HomeHeader />
			<ScrollView>
				{users.map((user, idx) => (
					<Chat key={idx} name={user.name} photo={user.photo} />
				))}
			</ScrollView>
		</Screen>
	);
};

export default HomeScreen;

const Screen = styled.View`
	flex: 1;
`;
