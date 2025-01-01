import OpenAI from "openai";
import { Text } from "react-native";
import axios from "axios";

const config = {
  onDownloadProgress: (progressEvent) => {
    console.log(progressEvent.total);
  },
};

axios.get("https://jsonplaceholder.typicode.com/todos", config);

export default function RootLayout() {
  return <Text>12312</Text>;
}
