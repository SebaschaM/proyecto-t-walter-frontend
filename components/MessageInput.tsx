import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface MessageInputProps {
  onSend: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <StyledView className="flex-row items-center p-4 bg-white border-t border-gray-300">
      <StyledTextInput
        value={input}
        onChangeText={setInput}
        placeholder="Escribe un mensaje..."
        placeholderTextColor="#666"
        className="flex-1 p-3 text-lg bg-gray-200 rounded-full mr-2"
      />
      <StyledTouchableOpacity
        onPress={handleSend}
        className="p-3 bg-[#003366] rounded-full shadow-lg justify-center items-center"
      >
        <Ionicons name="send" size={24} color="#ffffff" />
      </StyledTouchableOpacity>
    </StyledView>
  );
};
