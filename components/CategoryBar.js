
import React from "react";

import {
  View,
  FlatList,
  StyleSheet
} from "react-native";

import CategoryItem from "./CategoryItem";



export default function CategoryBar({
  categories,
  selectedCategory,
  onSelectCategory
}) {


  return (

    <View style={styles.container}>

      <FlatList

        data={categories}

        horizontal

        showsHorizontalScrollIndicator={false}

        keyExtractor={(item)=>item.id}

        renderItem={({item})=>(

          <CategoryItem

            category={item}

            selected={
              selectedCategory === item.name
            }

            onPress={()=> 
              onSelectCategory(item.name)
            }

          />

        )}

      />


    </View>

  );


}




const styles = StyleSheet.create({

  container:{

    paddingVertical:10

  }

});
