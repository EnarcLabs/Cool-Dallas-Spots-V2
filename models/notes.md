## Models

Here is all you need to know about using our models

### Importing models:

To import a model write the following

```javascript 
let {<modelname>} = require(<pathto models folder>) 
```

Example:

```javascript
let {Place} = require('./models') // This will import the place model

Place.model // The mongoose model
Place.schema // The mongoose schema

```