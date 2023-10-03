import { StyleSheet, Image, TouchableOpacity, View } from "react-native";

export const MovieCard = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={props.movieURL} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: { marginLeft: 20 }
});