
const fetch=require("node-fetch")

const {Type} = require('../db');


const getTypeApi = async () => {
    let reqType = await fetch('https://pokeapi.co/api/v2/type');
    let info= await reqType.json()
    arrTypes = []
    for (var i = 0; i < info.results.length; i++) {
        
      await Type.findOrCreate({where:{name: info.results[i].name}})

    }
      const types = await Type.findAll()
  
      
      return types;

}


module.exports = {
    getTypeApi
};