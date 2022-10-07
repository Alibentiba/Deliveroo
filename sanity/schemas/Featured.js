export default {
  name: 'Featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name: 'description',
      title: 'short description',
      type: 'string',
      validation:(Rule)=>Rule.max(200)

    },
    
  {
   name : "restaurants" ,
   type : "array" ,
   title : "Restaurants" ,
   of : [ { type : "reference" , to : [ { type :"restaurant" }] }],
  },
]

}