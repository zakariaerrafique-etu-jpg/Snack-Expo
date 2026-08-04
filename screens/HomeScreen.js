
import React, {
  useContext,
  useState
} from "react";


import {

View,

Text,

FlatList,

StyleSheet

} from "react-native";



import RecipeContext from "../context/RecipeContext";

import categories from "../data/categories";


import CategoryBar from "../components/CategoryBar";

import RecipeCard from "../components/RecipeCard";





export default function HomeScreen({navigation}) {


const {

recipes,

favorites,

toggleFavorite

}=useContext(RecipeContext);




const [selectedCategory,setSelectedCategory]=useState(
"Tous"
);





// Filtrage des recettes

const filteredRecipes =

selectedCategory==="Tous"

?

recipes

:

recipes.filter(

recipe=>

recipe.category===selectedCategory

);






const isFavorite=(id)=>{


return favorites.some(

item=>item.id===id

);


};







const handleCategory=(category)=>{


if(category==="Mes aliments"){


navigation.navigate(
"Mes recettes"
);


}

else{


setSelectedCategory(category);


}


};






return (

<View style={styles.container}>


<Text style={styles.title}>

🍴 Foodie

</Text>




<CategoryBar

categories={[

{
id:"0",
name:"Tous",
icon:"🍽️"
},

...categories

]}

selectedCategory={selectedCategory}

onSelectCategory={handleCategory}

/>





<FlatList


data={filteredRecipes}


keyExtractor={(item)=>item.id}


showsVerticalScrollIndicator={false}



renderItem={({item})=>(


<RecipeCard


recipe={item}



isFavorite={
isFavorite(item.id)
}



toggleFavorite={toggleFavorite}



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

Aucune recette trouvée

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


fontSize:28,

fontWeight:"bold",

padding:15

},



empty:{


textAlign:"center",

marginTop:50,

fontSize:16

}


});
