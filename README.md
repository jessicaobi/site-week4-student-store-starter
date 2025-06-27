## Unit Assignment: Student Store

Submitted by: **JESSICA OBI**

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [X] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [X]  Use Prisma to define models for `products`, `orders`, and `order_items`.
  - []  **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: Use Prisma Studio to demonstrate the creation of your `products`, `orders`, and `order_items` tables. 
- [ ] **Products Model**
  - [X] Develop a products model to represent individual items available in the store. 
  - [X] This model should at minimum include the attributes:
    - [X] `id`
    - [X] `name`
    - [X] `description`
    - [X] `price` 
    - [X] `image_url`
    - [X] `category`
  - [X] Implement methods for CRUD operations on products.
  - [X] Ensure transaction handling such that when an product is deleted, any `order_items` that reference that product are also deleted. 
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: Use Prisma Studio to demonstrate the creation of all attributes (table columns) in your Products Model.
- [X] **Orders Model**
  - [X] Develop a model to manage orders. 
  - [X] This model should at minimum include the attributes:
    - [X] `order_id`
    - [X] `customer_id`
    - [X] `total_price`
    - [X] `status`
    - [X] `created_at`
  - [X] Implement methods for CRUD operations on orders.
  - [X] Ensure transaction handling such that when an order is deleted, any `order_items` that reference that order are also deleted. 
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: Use Prisma Studio to demonstrate the creation of all attributes (table columns) in your Order Model.

- [X] **Order Items Model**
  - [X] Develop a model to represent the items within an order. 
  - [X] This model should at minimum include the attributes:
    - [X] `order_item_id`
    - [X] `order_id`
    - [X] `product_id`
    - [X] `quantity`
    - [X] `price`
  - [X] Implement methods for fetching and creating order items.  
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: Use Prisma Studio to demonstrate the creation of all attributes (table columns) in your Order Items Model.
- [X] **API Endpoints**
  - [X] Application supports the following **Product Endpoints**:
    - [X] `GET /products`: Fetch a list of all products.
    - [X] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [X] `POST /products`: Add a new product to the database.
    - [X] `PUT /products/:id`: Update the details of an existing product.
    - [X] `DELETE /products/:id`: Remove a product from the database.
  - [X] Application supports the following **Order Endpoints**:
    - [X] `GET /orders`: Fetch a list of all orders.
    - [X] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [X] `POST /orders`: Create a new order with specified order items.
    - [X] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [X] `DELETE /orders/:order_id`: Remove an order from the database.
    - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: Use Postman or another API testing tool to demonstrate the successful implementation of each endpoint. For the `DELETE` endpoints, please use Prisma Studio to demonstrate that any relevant order items have been deleted. 
- [X] **Frontend Integration**
  - [X] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.
  - [X] Ensure the home page displays products contained in the product table.
  - [] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: Use `npm start` to run your server and display your website in your browser. 
    - [X] Demonstrate that users can successfully add items to their shopping cart, delete items from their shopping cart, and place an order
    - [X] After placing an order use Postman or Prisma Studio demonstrate that a corresponding order has been created in your orders table.

### Stretch Features

- [X] **Added Endpoints**
  - [X] `GET /order-items`: Create an endpoint for fetching all order items in the database.
  - [X] `POST /orders/:order_id/items` Create an endpoint that adds a new order item to an existing order. 
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders.
  - [ ] The page lists all past orders for the user, including relevant information such as:
    - [ ] Order ID
    - [ ] Date
    - [ ] Total cost
    - [ ] Order status.
  - [ ] The user should be able to click on any individual order to take them to a separate page detailing the transaction.
  - [ ] The individual transaction page provides comprehensive information about the transaction, including:
    - [ ] List of order items
    - [ ] Order item quantities
    - [ ] Individual order item costs
    - [ ] Total order cost
- [ ] **Filter Orders**.
  - [ ] Create an input on the Past Orders page of the frontend application that allows the user to filter orders by the email of the person who placed the order. 
  - [ ] Users can type in an email and click a button to filter the orders.
  - [ ] Upon entering an email address adn submitting the input, the list of orders is filtered to only show orders placed by the user with the provided email. 
  - [ ] The user can easily navigate back to the full list of ordres after filtering. 
    - [ ] Proper error handling is implemented, such as displaying "no orders found" when an invalid email is porvided.
- [ ] **Deployment**
  - [ ] Website is deployed using [Render](https://courses.codepath.org/snippets/site/render_deployment_guide).
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the deployed version of your website in your walkthrough with the URL visible. 



### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I think the labs actually greatly helped in the creation of the project. This was actually one of the units where doing the labs were almost imperative to understanding what is going on in the actual project. This goes from things such as setting up prisma and postgresql which were imperative for the completion of this project. I also think going over things such as the CRUD routes was definitely helpful with understanding this project. The labs were very clear, different from the milestones with the project that had unclear instructions.

Some features that I felt unprepared to complete was just things that had to do with the clarity such as the milestones stating classes even though we were instructed to use models in the schema. I think the project milestones are just outdated and unclear all around when it comes to instructions in comparison to the previous projects.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I definitely would have changed my front end more and customize some things. I also would have added another page where the user can see all of the past orders. I wish I could have also included an alert when the user submits.


* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think the overall order of my presentation ended up going very well. The only thing that didn't go as planned was my code breaking right before the presentation. I later realized that this had to do with the customer_id attribute within the order model, where I set it to be unique. So when I tried to add another order of the same customer id, the entire thing would break. So nothing would get added to Prisma, Postman would break, and so on. However, upon submission, I actually did not know that this was the problem. So, my handle checkout feature actually wasn't fully working, but I did not point that out to the audience which I think was a good choice. I was still able to showcase all the features successfully. I think the only mishap was when I tried to get all the orders on Postman, it didn't work. And after I did that and tried to reload the page, the products also didn't showup, but that wasn't until the feedback section and a lot of people said they did not notice.

I think I would definitely try to implement more stretch goals on this project if I had more time. A lot of people had the user get an alert if the user submitted an order which was another cool idea. I think it would be a good idea to also have all the previous order of the user.

### Open-source libraries used
- Github Demo provided by the instructors: https://github.com/dst2609/ftl-code-demo-2025/tree/main/week4/FullStackPokemonApp
- Copilot

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Oliver & Devarsh - database and postgresql setup
Lucia - connecting front end to back end and organizing controllers and routes
Liliana - handle checkout function