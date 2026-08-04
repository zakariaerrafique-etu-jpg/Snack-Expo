
import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";



export default function RecipeDetails({route}) {


const {recipe}=route.params;



return (

<ScrollView style={styles.container}>


<Image

source={{
uri:recipe.image
}}

style={styles.image}

/>




<Text style={styles.title}>

{recipe.name}

</Text>




<View style={styles.infoBox}>


<Text>

⏱️ Temps : {recipe.time}

</Text>


<Text>

🍽️ Portions : {recipe.servings}

</Text>


<Text>

🔥 Calories : {recipe.calories}

</Text>


<Text>

⭐ Difficulté : {recipe.difficulty}

</Text>



</View>





<Text style={styles.section}>

🥘 Ingrédients

</Text>



{

recipe.ingredients.map(

(item,index)=>(


<Text

key={index}

style={styles.text}

>

• {item}

</Text>


)

)

}







<Text style={styles.section}>

👩‍🍳 Instructions

</Text>




{

recipe.instructions.map(

(step,index)=>(


<Text

key={index}

style={styles.text}

>

{index+1}. {step}

</Text>


)

)



}



</ScrollView>


);


}




const styles=StyleSheet.create({


container:{


flex:1,

backgroundColor:"#fff"

},



image:{


width:"100%",

height:250


},



title:{


fontSize:28,

fontWeight:"bold",

padding:15


},



infoBox:{


backgroundColor:"#f5f5f5",

margin:15,

padding:15,

borderRadius:10


},



section:{


fontSize:22,

fontWeight:"bold",

margin:15


},



text:{


fontSize:16,

marginHorizontal:20,

marginVertical:5


}


});
