const { body,validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

let {Place} = require('../models')

let APIController = {};


APIController.place_create_post =
   
    // Validate that the name field is not empty.
    //[
      //body('title', 'Place title is required').isLength({ min: 1 }).trim(),
      //body('description', 'Place description is required').isLength({min: 1}).trim(),
      //body('coordinates', 'coordinates are required').isLength({min: 1}),
    //],
    
    // Sanitize (trim and escape) the name field.
    //sanitizeBody(['title','description', 'coordinates', 'tags']).trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var place = new Place.model(
          { 
            title: req.body.title,
            description: req.body.description,
            coordinates: {
              longitude : JSON.parse(req.body.coordinates).longitude,
              latitude : JSON.parse(req.body.coordinates).latitude
            },
            tags: JSON.parse(req.body.tags)
          }
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            //res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
        return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Place.model.findOne({ 'title': req.body.title })
                .exec( function(err, found_place) {
                     if (err) { return next(err); }

                     if (found_place) {
                         // Genre exists, redirect to its detail page.
                         //res.redirect(found_genre.url);
                         res.json({message: "duplicate place found"})
                     }
                     else {

                         place.save(function (err) {
                           if (err) { return next(err); }
                           // Genre saved. Redirect to genre detail page.
                           //res.redirect(genre.url);
                           res.json({message: "Successfuly created new place"})
                         });

                     }

                 });
        }
    }

module.exports = APIController;