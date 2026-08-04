# Snack-Expo
Foodie 🍳
A recipe app built with React Native (Expo) for my final project. Foodie lets you browse recipes by category, view full recipe details, save favorites, and manage your own recipes.

Features
Main feed with 12 recipe categories in a horizontal scroll bar (Breakfast, Lunch, Dinner, Desserts, Snacks, Salads, Soups, Pasta, Seafood, Vegan, Drinks, Grilled)
Tap a category to see recipes for just that category
Recipe details: ingredients, step-by-step instructions, prep time, servings, calories and difficulty level
Favorites: heart icon on every recipe to favorite/unfavorite, plus a Favorites screen (heart icon in the header)
My Food section in the categories bar with:
Add New Recipe – recipe name, photo upload, ingredients list, step-by-step instructions, and a Save Recipe button
My Recipes – your saved recipes with working Edit and Delete buttons
Back navigation on every screen
How to run (for reviewers)
Go to snack.expo.dev
Click the project menu (three dots) → Import Git Repository
Paste this repository's URL and import
Preview in the Web tab, or scan the QR code with the Expo Go app
You can also run it locally:

npm install
npx expo start
Tech
Expo / React Native
React Navigation (native stack)
expo-image-picker for photo uploads
React Context for favorites and user recipes
Notes
Recipes you add are kept in memory for the current session (no backend needed for review).
Recipe photos in the feed are loaded from Unsplash.
