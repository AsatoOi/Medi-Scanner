import { NavigationContainer } from "@react-navigation/native";

import { TabNavigation } from "./src/components/Navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
