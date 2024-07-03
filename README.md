# Poultry-Autopsy-App
Chicken Autopsy Tutorial App

Purpose: 
An app that can teach inexperienced farmers how to dissect a deceased diseased poultry and photograph dissected organs for future vet diagnoses. Taken photo will be saved for future computational analysis, such as ML and Computer Vision

Function
front
Start menu
Autopsy dissection tutorial page
Camera (with tutorial)
Language toggle
Dark mode/light mode
Sample photos
Permission prompt for location and camera
 

back
Pictures database
Location
Gmail login / User login 
(future) ML algorithm


Implementation
Programing language:
Front:  React Native, 
Back: SQL, maybe Python
https://www.youtube.com/watch?v=mJ3bGvy0WAY


This sounds like an interesting and impactful project. Here's a high-level overview of how you might approach the development of this app:

### Front-End Development
**Programming Language: React Native**

1. **Start Menu:**
   - Simple UI to navigate to different sections of the app.
   - Include buttons for "Autopsy Tutorial", "Camera", "Sample Photos", "Settings".

2. **Autopsy Dissection Tutorial Page:**
   - Use multimedia elements (images, videos, text) to guide the user through the dissection process.
   - Step-by-step instructions with an option to proceed to the next step.

3. **Camera Integration:**
   - Implement a camera feature that allows users to take photos while following the tutorial.
   - Overlay tutorial instructions on the camera screen to guide the user.

4. **Language Toggle:**
   - Add a language selection option in the settings.
   - Implement internationalization (i18n) to support multiple languages.

5. **Dark Mode/Light Mode:**
   - Add a toggle switch in the settings to switch between dark and light themes.

6. **Sample Photos:**
   - A gallery section to display sample dissected organ photos for reference.

7. **Permission Prompts:**
   - Prompt users for camera and location permissions when the app is first launched or when the respective features are accessed.

### Back-End Development
**Programming Language: SQL (Database), Python (Future ML integration)**

1. **Pictures Database:**
   - Design a SQL database schema to store the photos along with metadata (e.g., date, time, location, organ type, user ID).
   - Implement CRUD operations (Create, Read, Update, Delete) for the photo entries.

2. **Location Services:**
   - Capture and store the location data where the photo was taken.
   - Ensure compliance with privacy regulations regarding location data.

3. **User Login (Gmail):**
   - Integrate Google Sign-In for user authentication.
   - Store user data securely in the database.

4. **Future ML Algorithm:**
   - Plan the integration of a machine learning model to analyze the photos.
   - Use Python for developing and integrating the ML model.
   - Store analysis results in the database for user access.

### Implementation Steps

1. **Set up React Native Project:**
   - Initialize a new React Native project.
   - Set up navigation (e.g., React Navigation) and basic UI components.

2. **Develop UI Components:**
   - Create individual components for the start menu, tutorial page, camera, settings, and gallery.
   - Implement language and theme toggle functionalities.

3. **Integrate Camera Functionality:**
   - Use a library like `react-native-camera` or `expo-camera`.
   - Implement photo capture and overlay tutorial instructions.

4. **Set up Backend Server:**
   - Choose a server framework (e.g., Node.js, Django).
   - Set up a SQL database and connect it to the server.
   - Implement RESTful APIs for interacting with the database.

5. **User Authentication:**
   - Integrate Google Sign-In using a library like `react-native-google-signin`.
   - Securely handle user data and session management.

6. **Photo Storage and Retrieval:**
   - Implement endpoints to upload, retrieve, and manage photos.
   - Ensure efficient storage and retrieval of photo data.

7. **ML Integration (Future):**
   - Develop a machine learning model to analyze the photos.
   - Integrate the model with the backend to process and analyze uploaded photos.

8. **Testing and Deployment:**
   - Conduct thorough testing of all functionalities.
   - Deploy the app to app stores and the backend server to a reliable hosting service.

This plan provides a structured approach to developing the app. Feel free to ask for more details on any specific part of the implementation!




