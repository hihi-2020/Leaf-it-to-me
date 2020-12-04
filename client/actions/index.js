import { retrievePlants, addPlantImage, addPlantData } from "../apis/plants"

export const SET_PLANTS = 'SET_PLANTS'
export const ADD_PLANT = 'ADD_PLANT'
// export const SET_LOADED = 'SET_LOADED'

export const setPlants = (plants) => {
  return {
    type: SET_PLANTS,
    plants
  }
}

export function pushPlant (plant) {
  return {
    type: ADD_PLANT,
    plant: plant
  }
}

export const fetchPlants = () => {
  return dispatch => {
    return retrievePlants()
      .then(plants => {
        dispatch(setPlants(plants))
      })
  }
}

export function addPlant (plantImage, plantData) {
  return dispatch => {
    return addPlantImage(plantImage)
      .then(fileUrl => {
        fileUrl = JSON.parse(fileUrl)
        plantData.img = fileUrl.imageUrl
        console.log('here is the fileURL data:', fileUrl)
        return addPlantData(plantData)
          .then(plantId => {
            plantData.id = plantId
            dispatch(pushPlant(plantData))
            return null
          })
      })
      .catch(err => {
        console.log('error in actions: ', err.message)
      })
  }
}
// export const setLoaded = () => {
//   return {
//     type: SET_LOADED
//   }
// }
