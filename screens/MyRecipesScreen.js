
import React, {
  useContext
} from "react";


import {

View,

Text,

FlatList,

TouchableOpacity,

StyleSheet

} from "react-native";



import RecipeContext from "../context/RecipeContext";

import RecipeCard from "../components/RecipeCard";






export default function MyRecipesScreen({
navigation
}) {



const {

myRecipes,

deleteRecipe

}=useContext(RecipeContext);







return (

<View style={styles.container}>




<Text style={styles.title}>

👩‍🍳 Mes recettes

</Text>





<TouchableOpacity

style={styles.addButton}

onPress={()=>


navigation.navigate(
"AddRecipe"
)


}

>


<Text style={styles.addText}>

+ Ajouter une nouvelle recette

</Text>


</TouchableOpacity>







<FlatList



data={myRecipes}



keyExtractor={(item)=>item.id}



renderItem={({item})=>(



<View>


<RecipeCard


recipe={item}



isFavorite={false}



toggleFavorite={()=>{}}




onPress={()=>


navigation.navigate(

"RecipeDetails",

{

recipe:item

}

)


}



/>





<View style={styles.actions}>



<TouchableOpacity

style={styles.edit}

onPress={()=>


navigation.navigate(

"EditRecipe",

{

recipe:item

}

)


}

>


<Text>

✏️ Modifier

</Text>


</TouchableOpacity>







<TouchableOpacity

style={styles.delete}

onPress={()=>deleteRecipe(item.id)}

>


<Text>

🗑️ Supprimer

</Text>


</TouchableOpacity>




</View>



</View>



)}





ListEmptyComponent={


<Text style={styles.empty}>

Vous n'avez aucune recette personnelle

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



addButton:{


backgroundColor:"#ff8c42",

margin:15,

padding:15,

borderRadius:10,

alignItems:"center"


},



addText:{


color:"white",

fontWeight:"bold"


},



actions:{


flexDirection:"row",

justifyContent:"space-around",

marginBottom:10


},



edit:{


backgroundColor:"#ddd",

padding:10,

borderRadius:8


},



delete:{


backgroundColor:"#ffcccc",

padding:10,

borderRadius:8


},



empty:{


textAlign:"center",

marginTop:40


}


});
