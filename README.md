# Wanderlust (Airbnb Clone)

A full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS. 

## Features

- **User Authentication:** Secure signup, login, and logout using Passport.js (Local Strategy).
- **Listing Management:** Users can create, view, edit, and delete their own property listings.
- **Reviews:** Users can leave ratings and reviews on listings.
- **Image Upload:** Integration with Cloudinary for seamless and reliable image storage.
- **Interactive Maps:** Mapbox API integration to display the precise location of listings.
- **Flash Messages:** Instant feedback for user actions (success/error messages) using connect-flash.
- **Responsive Design:** Styled with custom CSS and modern web design principles.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS, EJS-Mate
- **Authentication:** Passport.js, express-session
- **Image Storage:** Cloudinary, Multer
- **Maps:** Mapbox SDK
- **Styling:** Custom CSS

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- MongoDB (running locally or via MongoDB Atlas)
- Cloudinary Account (for image uploads)
- Mapbox Account (for maps)

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate into the project directory:
```bash
cd air_bnb
```

3. Install dependencies:
```bash
npm install
```

4. Start your local MongoDB server (if running locally):
```bash
mongod
```

5. Run the application:
```bash
node app.js
```
*(Alternatively, use `nodemon app.js` for development)*

6. Open your browser and visit:
```text
http://localhost:8080
```

## Folder Structure

- `models/`: Mongoose schemas (Listing, Review, User).
- `controllers/`: Logic for handling routes.
- `routes/`: Express routers for listings, reviews, and users.
- `views/`: EJS templates for rendering the UI.
- `public/`: Static files (CSS, JS).
- `utils/`: Error handling utilities.
- `init/`: Scripts to initialize the database with sample data.

## License

This project is licensed under the ISC License.
