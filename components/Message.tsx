import React from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";

interface MessageProps {
  text: string;
  isUser: boolean;
  timestamp: string;
}

const StyledView = styled(View);
const StyledText = styled(Text);

export const Message: React.FC<MessageProps> = ({
  text,
  isUser,
  timestamp,
}) => {
  return (
    <StyledView
      className={`w-full flex mb-2 ${isUser ? "items-end" : "items-start"}`}
    >
      <StyledView
        className={`max-w-[75%] p-4 rounded-2xl ${
          isUser
            ? "bg-[#003366] rounded-tr-none shadow-lg"
            : "bg-[#f0f0f0] rounded-tl-none shadow-md"
        }`}
      >
        <StyledText
          className={`text-base ${
            isUser ? "text-white" : "text-[#333333]"
          } leading-6 tracking-wide`}
        >
          {text}
        </StyledText>
      </StyledView>
      {/* La marca de tiempo fuera del contenedor del mensaje */}
      <StyledText
        className={`text-xs mt-1 ${isUser ? "text-gray-500" : "text-gray-600"}`}
        style={{
          alignSelf: isUser ? "flex-end" : "flex-start",
          marginRight: isUser ? 8 : 0,
          marginLeft: isUser ? 0 : 8,
        }}
      >
        {timestamp}
      </StyledText>
    </StyledView>
  );
};
