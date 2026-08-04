
import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import FavoriteButton from "./FavoriteButton";



export default function RecipeCard({

  recipe,

  onPress,

  isFavorite,

  toggleFavorite

}) {


return (

<TouchableOpacity

style={styles.card}

onPress={onPress}

>


<Image

source={{
uri:recipe.image
}}

style={styles.image}

/>



<View style={styles.info}>


<Text style={styles.name}>

{recipe.name}

</Text>



<Text style={styles.category}>

{recipe.category}

</Text>



</View>



<FavoriteButton

isFavorite={isFavorite}

onPress={()=>toggleFavorite(recipe)}

/>



</TouchableOpacity>

);


}





const styles = StyleSheet.create({

card:{


backgroundColor:"#fff",

margin:10,

borderRadius:15,

overflow:"hidden",

elevation:3

},


image:{


width:"100%",

height:180


},


info:{


padding:12


},


name:{


fontSize:18,

fontWeight:"bold"


},


category:{


color:"gray",

marginTop:5


}



});
