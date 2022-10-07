export default {
  name: 'dish',
  title: 'Dish name',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name: 'price',
      title: ' Dish price',
      type: 'number',
     
    },
    {
      name: 'image',
      title: 'Dish Image',
      type: 'image',
     
    },
    {
      name: 'description',
      title: 'dish description',
      type: 'string',
      validation:(Rule)=>Rule.max(200)

    },
  ]
 
}
