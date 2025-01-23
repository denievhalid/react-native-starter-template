import { SafeArea } from "@/src/components/ui";
import { Text } from "react-native";

export default function IndexScreen() {
  return (
    <SafeArea className="bg-red-300">
      <Text className="text-3xl">Chat</Text>
    </SafeArea>
  );
}
