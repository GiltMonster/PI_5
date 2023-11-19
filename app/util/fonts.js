import { useFonts } from 'expo-font';

const fonts = {
  sfProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
  sfProTextSemibold: require('../assets/fonts/sf-pro-text-semibold.ttf'),
  sfProTextRegular: require('../assets/fonts/sf-pro-text-regular.ttf'),
};

export default function getFont(font) {
  const [loaded, error] = useFonts({
    [font]: fonts[font],
  });

  if (error) {
    console.error("Erro ao carregar a fonte: ", error);
  }

  return loaded ? font : null;
}
