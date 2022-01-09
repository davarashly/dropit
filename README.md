![Dropit](front/src/tools/assets/logo-dropit-business.svg)

#### Welcome to Dropit's Fullstack Test

### Disclaimers
* The stacks for this task are similar to the ones we're using here at Dropit (Kotlin for the BE, React with Typescript for the FE) 
* The architecture as well (simple implementation)  
* Some features for this task are optional
* For the FE, you can add and modify the given architecture, or implement a different architecture of your choosing
* For the BE, you can add and modify the given implementation, or implement the same functionalities with a language/framework of your choosing from scratch (using the products [here](/back/src/main/resources/static/products.json))

### Guidelines

* Open the [back](/back) and [front](/front) projects separately in your IDE (so it can understand each project's context)
* Use existing implementation (e.g.: libraries, configuration)
* Try to mimic the implemented architecture when adding content
* Keep code clean and organized
* Submit the task via mail or a private repo

## Requirements

* ### Client (http://localhost:3000/)

  * Set up an application state (consistent for a single session)

  * #### Catalog page
      * get products' categories by sending a request to the BE and render the categories within the filter (see next line)
      * add selector to filter the displayed data by a selected category (filter is done by the BE)
      * add search input that filter the displayed data by product's name (search is done by the BE)
      * **optional:** add sort functionality by any property (sort is done by the BE)
      * handle add product to cart
      * **optional:** handle click row (navigate to product page or open product modal)
      * display the cart icon with a badge counter for the number of items (not products) in the cart
      * display "No Results" for an empty table
      
  * #### Product page/modal (Optional)
      * set up new page/modal and module (use existing configuration)
      * get product extended data by id (send request to BE)
      * display all product extended data
      * display the cart icon with a badge counter for the number of items (not products) in the cart
      * add and handle back/close button
      
  * #### Cart page
      * set up new page and module (use existing configuration)
      * display products that are in the cart state as a table (image, name, price per unit, quantity, total price)
      * show summary data (number of products, number of items, total price)
      * add input for user's name
      * add a checkout button (disabled when cart or user's name is empty)
      * post checkout request with the quantity of each product that are in the cart
      * display a successful message when done
      * add and handle back/close button
      
* ### Server (http://localhost:8080/)

  * #### Catalog api & controller
    * create **getCategories** endpoint that returns all products categories (can add functionalities to increase efficiency)
    * modify **getProducts** to accept params and implement filter functionalities (search by name, filter by category and sort by any property)
    * **optional:** create **getProduct** endpoint that returns a new ProductDetailsDTO (with all available product data)

  * #### Orders api & controller
    * modify **checkout** to accept user's name and validate name and list are not empty (respond with 400 if validation failed)
