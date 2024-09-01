import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface SidebarProps {
  onClose: () => void;
  isVisible: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose, isVisible }) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isVisible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      className="absolute top-0 left-0 h-full w-[75%] bg-white z-50 shadow-lg rounded-tr-2xl rounded-br-2xl"
      style={{
        transform: [{ translateX }],
      }}
    >
      <StyledSafeAreaView className="flex-1">
        {/* Header con ícono de hamburguesa */}
        <StyledView className="flex-row items-center justify-between p-5 bg-gray-100 border-b border-gray-200">
          <StyledTouchableOpacity onPress={onClose}>
            <Ionicons name="menu" size={24} color="gray" />
          </StyledTouchableOpacity>
          <StyledText className="text-xl font-semibold text-gray-800">
            Menú
          </StyledText>
        </StyledView>

        {/* Opciones del menú */}
        <StyledView className="p-5">
          <StyledTouchableOpacity
            className="flex-row items-center mb-5"
            //onPress={handleNavigateToCalendar} // Llama a la función para navegar
          >
            <Ionicons name="calendar" size={24} color="gray" />
            <StyledText className="ml-4 text-lg text-gray-800">
              Calendario
            </StyledText>
          </StyledTouchableOpacity>
          {/* Aquí puedes añadir más opciones del menú */}
        </StyledView>
      </StyledSafeAreaView>
    </Animated.View>
  );
};
