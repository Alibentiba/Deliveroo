import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import Featured from './Featured'
import category from './category'
import restaurant from './restaurant'
import Dish from './Dish'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
   
    restaurant,
    Dish,
    category,
    Featured,
  ]),
})
