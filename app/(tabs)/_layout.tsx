import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="Reminder" options={{ headerShown: false }} />
    </Stack>
  );
}
