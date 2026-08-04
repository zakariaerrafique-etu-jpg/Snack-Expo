
import React, { 
  createContext, 
  useState, 
  useEffect 
} from "react";


import AsyncStorage from 
"@react-native-async-storage/async-storage";


import initialRecipes from "../data/recipes";


const RecipeContext = createContext();
const clearAllData = async()=>{

  await AsyncStorage.removeItem("favorites");

  await AsyncStorage.removeItem("myRecipes");

  setFavorites([]);

  setMyRecipes([]);

};


export function RecipeProvider({children}) {


  const [recipes,setRecipes] = useState([clearAllData]);

  const [favorites,setFavorites] = useState([clearAllData]);

  const [myRecipes,setMyRecipes] = useState([clearAllData]);



  // Chargement des données sauvegardées

  useEffect(()=>{

    loadData();

  },[]);



  const loadData = async()=>{

    try{


      const savedFavorites =
      await AsyncStorage.getItem("favorites");


      const savedRecipes =
      await AsyncStorage.getItem("myRecipes");



      if(savedFavorites){

        setFavorites(
          JSON.parse(savedFavorites)
        );

      }



      if(savedRecipes){

        setMyRecipes(
          JSON.parse(savedRecipes)
        );

      }


      setRecipes(initialRecipes);



    }

    catch(error){

      console.log(
        "Erreur chargement : ",
        error
      );

    }


  };




  // Sauvegarde favoris

  const saveFavorites = async(data)=>{

    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify(data)
    );

  };



  // Sauvegarde recettes personnelles

  const saveMyRecipes = async(data)=>{

    await AsyncStorage.setItem(
      "myRecipes",
      JSON.stringify(data)
    );

  };





  // Ajouter / retirer favori


  const toggleFavorite = (recipe)=>{


    let updated;



    const exists =
    favorites.some(
      item=>item.id===recipe.id
    );



    if(exists){


      updated =
      favorites.filter(
        item=>item.id!==recipe.id
      );


    }

    else{


      updated=[
        ...favorites,
        recipe
      ];


    }



    setFavorites(updated);

    saveFavorites(updated);


  };





  // Ajouter recette personnelle


  const addRecipe = (recipe)=>{


    const newRecipe={

      ...recipe,

      id:
      Date.now().toString(),

      personal:true

    };



    const updated=[

      ...myRecipes,

      newRecipe

    ];



    setMyRecipes(updated);

    saveMyRecipes(updated);



  };






  // Modifier recette


  const updateRecipe=(id,data)=>{


    const updated =

    myRecipes.map(recipe=>

      recipe.id===id

      ?

      {
        ...recipe,
        ...data
      }

      :

      recipe

    );



    setMyRecipes(updated);

    saveMyRecipes(updated);


  };






  // Supprimer recette


  const deleteRecipe=(id)=>{


    const updated =

    myRecipes.filter(

      recipe=>

      recipe.id!==id

    );



    setMyRecipes(updated);

    saveMyRecipes(updated);



  };






  return (

    <RecipeContext.Provider

      value={{

        recipes,

        favorites,

        myRecipes,

        toggleFavorite,

        addRecipe,

        updateRecipe,

        deleteRecipe


      }}

    >

      {children}


    </RecipeContext.Provider>


  );


}



export default RecipeContext;
