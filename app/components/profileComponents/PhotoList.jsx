import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import avatarImages from '../../util/avatarImages';

export default function PhotoList({ imageIndex, setImageIndex }) {
    const images = avatarImages;
    const data = Object.keys(images); // Obtém as chaves do objeto images como fonte de dados

    return (
        <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item: code, index }) => (
            <TouchableOpacity onPress={() => setImageIndex(index)}>
            <Image
                source={images[code]}
                style={[
                    styles.images,
                    { borderWidth: imageIndex === index ? 5 : 0, borderColor: '#BF5BF3' },
                ]}
            />
            </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} // Use o índice como chave
        />
    );
}

const styles = StyleSheet.create({
  images: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 20,
    marginBottom: 15
  },
});
