import HomePage from './HomePage';

export default function Home({ navigation }) {

  // const onChangeUserImage = async () => {
  //   const resp = await fetch("https://www.thispersondoesnotexist.com/");
  //   const imageBlob = await resp.blob();
  //   const imageUrl = URL.createObjectURL(imageBlob);
  //   setUserImage(imageUrl);
  // }  

  const takeRouter = (nameRoute) => {
    navigation.navigate(nameRoute)
  }

  return (
    <HomePage takeRouter={takeRouter} />
  );
}
