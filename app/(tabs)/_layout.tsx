import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="reminder-list" options={{ headerShown: false }} />
    </Stack>
  );
}
