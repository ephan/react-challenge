# Create a React Application

# Step 1

- Using the api https://dummyjson.com/products?limit=10&skip=0
- Use fetch or axios

- Create your own `<List />` and `<ListItem />` components. `<List />` renders `<ListItems />`.
- Each `<ListItem />` needs to render the:
  - `id`
  - `title`
  - `thumbnail` with an `<img />` constrained to 100px width

# Step 2

- Create an `<Detail />` component
- Make the `<List />` display on the left and the `<Detail />` on the right
- When the user clicks on the `<ListItem />` show the the last image from `images` that isn't a thumbnail in the `<Detail />` component

# Step 3

- Turn the `<Detail />` component into a modal that can be closed

# Step 4

- Make the modal vertically and horizontally centered
  - you can write by hand or use any UI framework if you wish (a few are included)
- Display the `<ListItem />` components as a grid
- Create a dropdown to control pagination of the api
