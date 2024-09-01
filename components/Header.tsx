import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";

const StyledView = styled(View);

interface HeaderProps {
  onMenuPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
  return (
    <StyledView className="flex-row mb-2 items-center justify-between p-4 bg-white border-b border-gray-300">
      <TouchableOpacity onPress={onMenuPress} className="p-2">
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, fontWeight: "500" }}>Chat</Text>
      <View style={{ padding: 8 }}></View>
    </StyledView>
  );
};
