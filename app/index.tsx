import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Header } from "@/components/Header";
import { Message } from "@/components/Message";
import { IMessage } from "@/interfaces/IMessage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MessageInput } from "@/components/MessageInput";
import { Sidebar } from "@/components/Sidebar";

export default function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const backgroundOpacity = useRef(new Animated.Value(0)).current;

  const handleSend = (message: string) => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: message, user: "Me", timestamp },
    ]);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const renderItem = ({ item }: { item: IMessage }) => (
    <Message
      text={item.text}
      isUser={item.user === "Me"}
      timestamp={item.timestamp}
    />
  );

  useEffect(() => {
    Animated.timing(backgroundOpacity, {
      toValue: isSidebarVisible ? 0.5 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isSidebarVisible]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1  bg-white">
        <Header onMenuPress={toggleSidebar} />
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
          style={{ flex: 1 }}
        />
        <MessageInput onSend={handleSend} />

        {isSidebarVisible && (
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "black",
              opacity: backgroundOpacity,
              zIndex: 49,
            }}
          />
        )}
        <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />

        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}
