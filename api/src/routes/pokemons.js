const {Router} = require('express')
const {getAllPoke} = require('../midleware/PokemonControl');
const { Pokemon, Type} = require('../db')


const router = Router()




//UNIFICO RUTAS, PARA BUSCAR NAME POR QUERY Y TODOS LOS POKEMONES

router.get('/pokemons', async (req, res) => {

const name = req.query.name
const pokemonesTodos= await getAllPoke()

if(name){

  let pokeName= await pokemonesTodos.filter(e=> e.name.toUpperCase().includes(name.toUpperCase()))//busqueda global 
  pokeName.length ? 
  res.status(200).send(pokeName) :
  res.send(["Pokemon no encontrado"])
}else{
  res.status(200).send(pokemonesTodos)
}
});


//POSTEAMOS UN POKEMON
router.post('/pokemon', async (req, res) => {
    const {
        name,
        vida,
        attack,
        defensa,
        velocidad,
        altura,
        peso,
        imagen,
        creadoBd,
        type
    } = req.body //indica los parametros pertenecientes al body en el JSON
      

    let newPokemon = await Pokemon.create({
        name,
        vida,
        attack,
        defensa,
        velocidad,
        altura,
        peso,
        imagen,
        creadoBd
    }) //creador del nuevo Pokemon en la base de datos

    

    let tipoDb = await Type.findAll({
        where:  {name: type}
      })
        newPokemon.addType(tipoDb)
        res.send('El pokemon ha sido creado con éxito')
    })// agrega el tipo al nuevo pokemon


    
 router.get("/pokemons/:id", async (req,res)=>{

  const id= req.params.id;
  const PokeTotal= await getAllPoke()

  if(id){
    let pokeId= await PokeTotal.filter(e=> e.id == id)
   pokeId.length?
   res.status(200).json(pokeId):
   res.status(404).send("No se encontro pokemon")
  }
 })





  module.exports = router;









