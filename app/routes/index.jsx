import { NavigationContainer } from "@react-navigation/native";
import TabRoutesLayout from "./tab.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRoutesLayout />
        </NavigationContainer>
    )
}