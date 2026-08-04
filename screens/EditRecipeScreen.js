
import React, {
  useState,
  useContext
} from "react";


import {

View,

Text,

TextInput,

TouchableOpacity,

Image,

ScrollView,

StyleSheet

} from "react-native";



import * as ImagePicker from "expo-image-picker";

import RecipeContext from "../context/RecipeContext";






export default function EditRecipeScreen({

route,

navigation

}) {



const {

recipe

}=route.params;



const {

updateRecipe

}=useContext(RecipeContext);







const [name,setName]=useState(
recipe.name
);


const [image,setImage]=useState(
recipe.image
);


const [ingredients,setIngredients]=useState(

recipe.ingredients.join(",")

);



const [instructions,setInstructions]=useState(

recipe.instructions.join(".")

);







const pickImage=async()=>{


const result =

await ImagePicker.launchImageLibraryAsync({

mediaTypes:
ImagePicker.MediaTypeOptions.Images,

quality:1

});



if(!result.canceled){


setImage(

result.assets[0].uri

);


}



};









const saveChanges=()=>{


const updatedRecipe={


name:name,


image:image,



ingredients:

ingredients

.split(",")

.map(item=>item.trim()),



instructions:

instructions

.split(".")


.map(item=>item.trim())

.filter(Boolean)



};





updateRecipe(

recipe.id,

updatedRecipe

);



navigation.goBack();



};








return (

<ScrollView style={styles.container}>



<Text style={styles.title}>

✏️ Modifier la recette

</Text>







<TextInput

style={styles.input}

value={name}

onChangeText={setName}

placeholder="Nom"

/>







<TouchableOpacity

style={styles.imageButton}

onPress={pickImage}

>


<Text>

📷 Changer l'image

</Text>


</TouchableOpacity>







<Image

source={{
uri:image
}}

style={styles.image}

/>









<TextInput

style={[
styles.input,
styles.large
]}

multiline

value={ingredients}

onChangeText={setIngredients}

placeholder="Ingrédients"

/>









<TextInput

style={[
styles.input,
styles.large
]}

multiline

value={instructions}

onChangeText={setInstructions}

placeholder="Instructions"

/>









<TouchableOpacity

style={styles.save}

onPress={saveChanges}

>


<Text style={styles.saveText}>

💾 Sauvegarder

</Text>


</TouchableOpacity>





</ScrollView>


);


}








const styles=StyleSheet.create({


container:{


flex:1,

padding:15,

backgroundColor:"#fff"


},



title:{


fontSize:25,

fontWeight:"bold",

marginBottom:20


},



input:{


borderWidth:1,

borderColor:"#ccc",

borderRadius:10,

padding:12,

marginBottom:15


},



large:{


height:120,

textAlignVertical:"top"


},



imageButton:{


backgroundColor:"#eee",

padding:15,

borderRadius:10,

alignItems:"center",

marginBottom:15


},



image:{


width:"100%",

height:200,

borderRadius:10,

marginBottom:15


},



save:{


backgroundColor:"#ff8c42",

padding:15,

borderRadius:10,

alignItems:"center"


},



saveText:{


color:"white",

fontWeight:"bold"


}



});
