import React from "react";
import { styled } from "styled-components/native";
import { padding, textColor } from "../utils/constants";
import { Text } from "react-native";

interface Props {
	name: string;
	photo: string;
}

const Chat = ({ name, photo }: Props) => {
	return (
		<>
			<Component onPress={() => console.log("Chat:", name)}>
				<ImgContainer>
					<Photo source={{ uri: photo }} />
				</ImgContainer>
				<Texts>
					<Name>{name}</Name>
					<Message>Hello Welcome back !!</Message>
				</Texts>
				<RightSide>
					<Message>11:11 P.M</Message>
					<Number>
						<Text style={{ color: textColor }}>12</Text>
					</Number>
				</RightSide>
			</Component>
			<Line />
		</>
	);
};

export default Chat;

const Component = styled.Pressable`
	flex-direction: row;
	align-items: center;
	padding: 0 ${padding};
`;
const ImgContainer = styled.View`
	aspect-ratio: 1;
	width: 55px;
	overflow: hidden;
	border-radius: 9999px;
	margin: 10px 0;
	margin-right: 10px;
`;
const Photo = styled.Image`
	width: 100%;
	height: 100%;
`;
const Texts = styled.View`
	flex: 1;
`;
const Name = styled.Text`
	color: ${textColor};
	font-size: 20px;
`;
const Message = styled.Text`
	color: #aaa;
	font-weight: 300;
`;
const RightSide = styled.View`
	align-items: flex-end;
`;
const Number = styled.View`
	border-radius: 9999px;
	align-items: center;
	justify-content: center;
	background-color: #3c5162;
	width: auto;
	height: 20px;
	min-width: 20px;
	padding: 0 3px;
`;
const Line = styled.View`
	flex: 1;
	height: 1px;
	background-color: #0003;
	margin-left: 75px;
`;
