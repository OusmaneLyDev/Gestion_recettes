import { createI18n } from 'vue-i18n';

// Messages de traduction
const messages = {
  en: {
    welcome: 'Welcome to Simplon Restaurant',
    description: 'Discover refined and authentic cuisine in a warm and friendly atmosphere.',
    viewRecipes: 'View our recipes',
    ourChefs: 'Our Chefs',
    testimonials: 'Client Testimonials',
    contactUs: 'Contact Us',
    send: 'Send',
    chefName1: 'Jean Dupont',
    chefName2: 'Marie Curie',
    chefName3: 'Pierre Legrand',
    testimonial1: 'Exceptional service and delicious dishes. I will definitely come back!',
    testimonial2: 'The best restaurant in town. The ambiance is fantastic.',
    testimonial3: 'An unforgettable culinary experience. Kudos to the entire team!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    home: 'Home',
    RecipeList: 'Recipe List',
    AddRecipe: 'Add Recipe',
    title: 'Add or Edit a Recipe',
    recipeTitle: 'Title',
    recipeIngredients: 'Ingredients',
    recipeType: 'Recipe Type',
    typeOptions: {
      appetizer: 'Appetizer',
      dish: 'Dish',
      dessert: 'Dessert',
    },
    submitButton: 'Submit',
    editButton: 'Edit',
    recipe: 'Recipe', // Ajouté ici pour maintenir la cohérence
  },
  fr: {
    welcome: 'Bienvenue au Restaurant Simplonien',
    description: 'Découvrez une cuisine raffinée et authentique dans un cadre chaleureux et convivial.',
    viewRecipes: 'Voir nos recettes',
    ourChefs: 'Nos Cuisiniers',
    testimonials: 'Témoignages de nos Clients',
    contactUs: 'Contactez-nous',
    send: 'Envoyer',
    chefName1: 'Jean Dupont',
    chefName2: 'Marie Curie',
    chefName3: 'Pierre Legrand',
    testimonial1: 'Un service exceptionnel et des plats délicieux. Je reviendrai sans hésiter!',
    testimonial2: 'Le meilleur restaurant en ville. L\'ambiance est fantastique.',
    testimonial3: 'Une expérience culinaire inoubliable. Bravo à toute l\'équipe!',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    home: 'Accueil',
    RecipeList: 'Liste des Recettes',
    AddRecipe: 'Ajouter une Recette',
    title: 'Ajouter ou Modifier une Recette',
    recipeTitle: 'Titre',
    recipeIngredients: 'Ingrédients',
    recipeType: 'Type de recette',
    typeOptions: {
      appetizer: 'Entrée',
      dish: 'Plat',
      dessert: 'Dessert',
    },
    submitButton: 'Soumettre',
    editButton: 'Modifier',
    recipe: 'recette', 
  },
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  messages,
});

export default i18n;
