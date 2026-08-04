import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";



export default function CategoryItem({

  category,

  selected,

  onPress

}) {


return (

<TouchableOpacity

style={[

styles.item,

selected && styles.selected

]}

onPress={onPress}

>


<Text style={styles.icon}>

{category.icon}

</Text>


<Text style={styles.name}>

{category.name}

</Text>


</TouchableOpacity>


);


}



const styles = StyleSheet.create({

item:{


backgroundColor:"#eeeeee",

padding:12,

marginHorizontal:6,

borderRadius:20,

alignItems:"center"


},


selected:{


backgroundColor:"#ff8c42"


},


icon:{


fontSize:24


},


name:{


fontSize:12,

marginTop:5


}


});
