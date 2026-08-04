
import AsyncStorage from 
"@react-native-async-storage/async-storage";



// Sauvegarder une donnée

export const saveData = async(key,value)=>{

  try{

    await AsyncStorage.setItem(

      key,

      JSON.stringify(value)

    );


  }

  catch(error){

    console.log(
      "Erreur sauvegarde : ",
      error
    );

  }

};





// Récupérer une donnée

export const getData = async(key)=>{

  try{


    const data = 

    await AsyncStorage.getItem(key);



    return data 
    ? JSON.parse(data)
    : null;


  }

  catch(error){

    console.log(
      "Erreur récupération : ",
      error
    );


    return null;

  }


};






// Supprimer une donnée

export const removeData = async(key)=>{


  try{


    await AsyncStorage.removeItem(key);



  }

  catch(error){


    console.log(

      "Erreur suppression :",

      error

    );


  }


};
