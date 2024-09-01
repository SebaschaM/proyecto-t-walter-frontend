import { StatusBar } from "expo-status-bar";
import { Platform, StatusBar as RNStatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" backgroundColor="white" translucent={false} />
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
          {children}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
