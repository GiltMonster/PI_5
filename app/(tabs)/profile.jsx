import { Link } from "expo-router";
import { View, Text, Button} from "react-native";

export default function Profile() {
    return(
        <View>
            <Text>INDEX</Text>

            <Link href={"/"} asChild>
                <Button title={"AIIII"} onPress={() => {console.log("GAAYYYYYY");}}></Button>
            </Link>
        </View>
    )
}
