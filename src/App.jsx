import React, { useEffect, useState} from 'react';
import { useFetch } from "./useFecth";

export const App = () => {

  const [pokeDatos,setPokeDatos] = useState([])

  const [data, loading, error] = useFetch('https://pokeapi.co/api/v2/pokemon');
 
  const Pokemons = []

  if(!loading ){
    data.results.map((pokemon)=>{Pokemons.push(pokemon)})
  }
  else if(error){
    alert("ah ocurrido un error")
  }

  useEffect(()=>{
    const fecthPokemonsDatos = async ()=>{

      const arrayPokeURLS = [];
      Pokemons.map((poke)=> arrayPokeURLS.push(poke.url) );
      const responses = await Promise.all(arrayPokeURLS.map(url => fetch(url)));
      const jsonDatas = await Promise.all(responses.map((e)=>{ e.json() }));
      console.log(jsonDatas)
      setPokeDatos(jsonDatas)
    }
  
    fecthPokemonsDatos()


  },[data])

  return (
    <>
      <ul>
        {
          Pokemons.map((poke, index)=>(
            <li key={index} > {poke.name} </li>
          ))
        }
      </ul>
    </>
  );
};








