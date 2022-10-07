export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'Category',
      title: 'Category name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name: 'image',
      title: 'Category image',
      type: 'image',
    },
  ],
}
