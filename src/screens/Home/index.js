import { View, StyleSheet, FlatList, ScrollView, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import PrimeoVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import MOVIESWATCHING from "../../utils/moviesWatching";
import MOVIESCRIME from "../../utils/moviesCrimes";
import MOVIESWATCH from "../../utils/moviesWatch";
import { MovieCard } from "../../components/MovieCard";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeoVideoLogo} />
                <Image source={AmazonLogo} style={styles.AmazonLogo}/>
            </View>
            <View style={styles.category}>
                <TouchableOpacity><Text style={styles.categoryText}>Home</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.categoryText}>TV Shows</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.categoryText}>Movies</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.categoryText}>Kids</Text></TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <TouchableOpacity style={styles.movieBanner}>
                    <Image source={MovieTheWhell} />
                </TouchableOpacity>

                <Text style={styles.subtitle}>Continue Watching</Text>

                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.subtitle}>Crime Movies</Text>

                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.subtitle}>Watch in your language</Text>

                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "#232F3E", alignItems: "flex-start"},
    header: {width: "100%", paddingTop: 80, alignItems: "center", justifyContent: "center"},
    AmazonLogo: {marginTop: -32, marginLeft: 30},
    category: {flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 30, marginBottom: 15, width: "100%"},
    categoryText: {fontSize: 14, color: "#FFF", fontWeight: 700},
    subtitle: {color: "#FFF", fontSize: 18, fontWeight: "700", padding: 15},
    movieBanner: {width: "100%", alignItems: "center"},
    contentList: {paddingLeft: 18, paddingRight: 30}
});