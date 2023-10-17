import { Text, View } from "react-native";
import { GlobalStyles } from "../style/GlobalStyle";
import { HeaderContent } from "../style/HeaderContent";

export default function Header() {
    return(
        <View style={GlobalStyles.headerContainer}>
            <Text style={HeaderContent.main}>Title</Text>
        </View>
    );
}