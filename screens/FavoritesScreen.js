
import React, {
  useContext
} from "react";


import {

View,

Text,

FlatList,

StyleSheet

} from "react-native";



import RecipeContext from "../context/RecipeContext";


import RecipeCard from "../components/RecipeCard";





export default function FavoritesScreen({
navigation
}) {



const {

favorites,

toggleFavorite

}=useContext(RecipeContext);






const isFavorite=(id)=>{


return favorites.some(

item=>item.id===id

);


};






return (


<View style={styles.container}>


<Text style={styles.title}>

❤️ Mes favoris

</Text>





<FlatList


data={favorites}



keyExtractor={(item)=>item.id}



renderItem={({item})=>(


<RecipeCard


recipe={item}



isFavorite={
isFavorite(item.id)
}




toggleFavorite={
toggleFavorite
}





onPress={()=>


navigation.navigate(

"RecipeDetails",

{

recipe:item

}

)



}



/>


)}





ListEmptyComponent={


<Text style={styles.empty}>

Aucune recette favorite

</Text>


}




/>



</View>


);


}





const styles=StyleSheet.create({


container:{


flex:1,

backgroundColor:"#fafafa"


},



title:{


fontSize:25,

fontWeight:"bold",

padding:15


},



empty:{


textAlign:"center",

marginTop:50,

fontSize:17


}


});
