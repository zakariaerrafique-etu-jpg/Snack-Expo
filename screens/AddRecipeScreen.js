
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





export default function AddRecipeScreen({
navigation
}) {



const {

addRecipe

}=useContext(RecipeContext);




const [name,setName]=useState("");

const [image,setImage]=useState(null);

const [ingredients,setIngredients]=useState("");

const [instructions,setInstructions]=useState("");






// Choisir une image


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








const save=()=>{


const newRecipe={


name:name,


image:image || 
"https://via.placeholder.com/300",



category:"Mes aliments",



ingredients:

ingredients

.split(",")

.map(item=>item.trim()),



instructions:

instructions

.split(".")


.map(item=>item.trim())

.filter(Boolean),



time:"30 min",


servings:"2 personnes",


calories:"400 kcal",


difficulty:"Facile"


};





addRecipe(newRecipe);



navigation.goBack();



};








return (

<ScrollView style={styles.container}>




<Text style={styles.title}>

➕ Ajouter une recette

</Text>







<TextInput

placeholder="Nom de la recette"

style={styles.input}

value={name}

onChangeText={setName}

/>







<TouchableOpacity

style={styles.imageButton}

onPress={pickImage}

>


<Text>

📷 Choisir une image

</Text>


</TouchableOpacity>






{

image &&


<Image

source={{uri:image}}

style={styles.image}

/>

}








<TextInput

placeholder="Ingrédients séparés par des virgules"

style={[
styles.input,
styles.large
]}

multiline

value={ingredients}

onChangeText={setIngredients}

/>








<TextInput

placeholder="Instructions séparées par des points"

style={[
styles.input,
styles.large
]}

multiline

value={instructions}

onChangeText={setInstructions}

/>







<TouchableOpacity

style={styles.save}

onPress={save}

>


<Text style={styles.saveText}>

💾 Enregistrer la recette

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
