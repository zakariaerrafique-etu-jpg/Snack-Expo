
import React from "react";

import {

TouchableOpacity,

Text,

StyleSheet

} from "react-native";




export default function FavoriteButton({

isFavorite,

onPress

}){


return (


<TouchableOpacity

style={styles.button}

onPress={onPress}

>


<Text style={styles.icon}>

{

isFavorite

?

"❤️"

:

"🤍"

}

</Text>



</TouchableOpacity>


);


}




const styles = StyleSheet.create({


button:{


position:"absolute",

right:15,

top:15,


backgroundColor:"white",

borderRadius:20,

padding:8


},


icon:{


fontSize:24


}


});
