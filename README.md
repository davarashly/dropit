![Dropit](src/tools/assets/logo-dropit-business.svg)

#### Welcome to Dropit's Frontend Test

### Disclaimers

* The stack for this task are similar to the ones we're using here at Dropit (React with Typescript) 
* The architecture as well (simple implementation)  
* You can add and modify the given architecture, or implement a different architecture of your choosing

### Guidelines

* Keep code clean and organized
* Submit the task via mail or a private repo

## Requirements

* Set up an application state (consistent for a single session)
* Support responsive design for mobile, tablet and desktop.

* #### Catalog page
    * Add a column of category to the table
    * Add filters section above the table that consists the following:
      * Search input that filters locally the displayed data by product's name
      * Sort locally by any column
      * Filter locally by categories
    * Handle add product to cart
    * Display the cart icon with a badge counter for the number of items (not products) in the cart
    * Support responsive design for the table by using the "Transformed" solution from the article [5 Practical Solutions to Make Responsive Data Tables](https://medium.com/appnroll-publication/5-practical-solutions-to-make-responsive-data-tables-ff031c48b122)
      
* #### Cart page
    * Set up a new page for the cart
    * Display products that are in the cart state with the data: image, name, price per unit, quantity, total price
    * Show summary data (number of products, number of items, total price)
    * Add input for user's name
    * Add a checkout button (disabled when cart or user's name is empty)
    * Handle checkout by displaying a successful snackbar/modal with a message
