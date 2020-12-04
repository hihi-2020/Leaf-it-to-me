import request from 'superagent'

const rootUrl = '/api/v1/plants'




export function retrievePlants () {
  return request.get(rootUrl)
    .then(res => res.body)
}

export function addPlantImage (plantImage) {
  return request.post('/api/v1/image-upload')
    .send(plantImage)
    .then(res => {
      return res.text
    })
}

export function addPlantData (plantData) {
  return request.post(rootUrl)
    .send(plantData)
    .then(res => {
      return res.body
    })
}
