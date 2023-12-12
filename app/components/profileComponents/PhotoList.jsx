import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import avatarImages from '../../util/avatarImages';

export default function PhotoList({ imageIndex, setImageIndex }) {
    const data = Object.keys(avatarImages);

    return (
        <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item: code, index }) => (
                <TouchableOpacity onPress={() => setImageIndex(index)}>
                <Image
                    source={avatarImages[code]}
                    style={[
                        styles.images,
                        { borderWidth: imageIndex === index ? 5 : 0, borderColor: 'blueviolet' },
                    ]}
                />
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
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
