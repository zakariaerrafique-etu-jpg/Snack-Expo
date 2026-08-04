
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import RecipeDetails from "../screens/RecipeDetails";
import FavoritesScreen from "../screens/FavoritesScreen";
import MyRecipesScreen from "../screens/MyRecipesScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import EditRecipeScreen from "../screens/EditRecipeScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function HomeStack() {

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Foodie"
        }}
      />


      <Stack.Screen
  name="RecipeDetails"
  component={RecipeDetails}
  options={{
    title:"Détails recette",
    headerShown:true
  }}
/>


<Stack.Screen
  name="AddRecipe"
  component={AddRecipeScreen}
  options={{
    title:"Ajouter une recette",
    headerShown:true
  }}
/>


<Stack.Screen
  name="EditRecipe"
  component={EditRecipeScreen}
  options={{
    title:"Modifier une recette",
    headerShown:true
  }}
/>

    </Stack.Navigator>

  );

}



function MainTabs() {


  return (

    <Tab.Navigator

      screenOptions={({route}) => ({

        headerShown:false,

        tabBarIcon: ({color,size}) => {


          let iconName;


          if(route.name === "Accueil"){
            iconName="home";
          }

          else if(route.name==="Favoris"){
            iconName="heart";
          }

          else if(route.name==="Mes recettes"){
            iconName="restaurant";
          }


          return (

            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />

          );

        }


      })}


    >


      <Tab.Screen
        name="Accueil"
        component={HomeStack}
      />


      <Tab.Screen
        name="Favoris"
        component={FavoritesScreen}
      />


      <Tab.Screen
        name="Mes recettes"
        component={MyRecipesScreen}
      />


    </Tab.Navigator>

  );

}



export default function AppNavigator(){


  return (

    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >

      <Stack.Screen
        name="Main"
        component={MainTabs}
      />

    </Stack.Navigator>

  );


}
