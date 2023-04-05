# Frontend

## Assignment Description
Create two pages. The first page should contain a form with the following fields:
- Name
- Email address
- Where do you want to go?
  - This is a dropdown with the following values: India, Africa, Europe
- No. of travellers
- Budget Per Person
- The currency should be in dollars
- Submit button

The second page should display all the submissions made using the form on the first page, along with sort and search functionality.

## Instructions for Use
To view and use the frontend pages for this assignment, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the `frontend` directory in your terminal.
3. Install the required packages by running the following command:
`npm install`

4. Start the server by running the following command:
`npm run dev`
5. Fill out the form on the first page and click the submit button.
6. Navigate to the second page to view all the submissions made using the form on the first page, along with sort and search functionality.

### Sorting
You can sort the submissions by clicking on the sort button.

### Searching
You can search for submissions by entering a search term in the search box. The table will display only the submissions that match the search term.


# Backend

## Assignment Description
Create 2 JSON API endpoints. The first endpoint should receive data from the form on the first page and store it
in a database of your choice. The second endpoint should retrieve existing form submissions.

## Instructions for Use
To run the backend API for this assignment, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the `backend` directory in your terminal.
3. Install the required packages by running the following command:
`npm install`

4. Start the server by running the following command:
`npm run dev`

5. You can now make requests to the following endpoints:
- `POST /api/travel-form`: This endpoint receives data from the form on the first page and stores it in a database of your choice.
- `GET /api/travel-form`: This endpoint retrieves existing form submissions.

Note: You will need to set up a database of your choice and update the `db.js` file with the necessary configuration settings.
