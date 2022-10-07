export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name: 'desc',
      title: 'Short desc',
     type:'string',
     validation:(Rule)=>Rule.max(200)

    },
    {
      name: 'image',
      title: 'image of the Restaurant',
      type: 'image',
      
    },
    {
      name: 'lat',
      title: 'latitude of restaurant',
      type: 'number',
     
    },
    {
      name: 'long',
      title: 'latitude of restaurant',
      type: 'number',
    
    },
    {
      name: 'adress',
      title: 'adress Resturent',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name: 'Rating',
      title: 'Enter the Rating stars (1-5)',
      type: 'number',
      validation:(Rule)=>Rule.required()
      .min(1)
      .max(5)
      .error("enter real rating")
    },
    {
      name: 'type',
      title: 'category',
      type: 'reference',
      to:[{type:'category'}]
    },
    {
      name: 'Dishs',
      title: 'Dishs',
      type: 'array',
      of:[{type:'reference', to:[{type:'dish'}]}]
    },
  ]

 
}
