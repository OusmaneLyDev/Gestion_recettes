import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref([])

  const loadRecipesFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/recettes/')
      recipes.value = response.data
    } catch (error) {
      console.error('Erreur lors du chargement des recettes :', error)
    }
  }

  const ajoutRecette = async (recipe) => {
    try {
      const response = await axios.post('http://localhost:3000/recettes', recipe)
      recipes.value.push(response.data) 
    } catch (error) {
      console.error("Erreur lors de l'ajout de la recette :", error)
    }
  }

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      await axios.put(`http://localhost:3000/recettes/${id}`, updatedRecipe)
      const index = recipes.value.findIndex((r) => r.id === id)
      if (index !== -1) {
        recipes.value[index] = { ...recipes.value[index], ...updatedRecipe }
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la recette :', error)
    }
  }

  const deleteRecette = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recettes/${id}`)
      const index = recipes.value.findIndex((r) => r.id === id)
      if (index !== -1) {
        recipes.value.splice(index, 1)
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la recette :', error)
    }
  }

  return { recipes, loadRecipesFromApi, ajoutRecette, updateRecipe, deleteRecette }
})

// Store pour les catégories
export const useCategoryStore = defineStore('category', () => {
  const categories = ref([
    { id: 1, nom: 'Entrées' },
    { id: 2, nom: 'Plats Principaux' },
    { id: 3, nom: 'Desserts' }
  ])

  let nextId = 4 

  const loadCategoriesFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/categories')
      categories.value = response.data
    } catch (error) {
      console.error('Erreur lors du chargement des catégories :', error)
    }
  }

  // Récupérer toutes les catégories
  const getCategories = () => {
    return categories.value
  }

  // Ajouter une nouvelle catégorie
  const addCategory = (nom) => {
    const newCategory = { id: nextId++, nom }
    categories.value.push(newCategory)
  }

  // Supprimer une catégorie
  const deleteCategory = (id) => {
    const index = categories.value.findIndex((category) => category.id === id)
    if (index !== -1) {
      categories.value.splice(index, 1)
    }
  }

  // Mettre à jour une catégorie
  const updateCategory = (id, newNom) => {
    const category = categories.value.find((category) => category.id === id)
    if (category) {
      category.nom = newNom
    }
  }

  return {
    categories,
    loadCategoriesFromApi,
    getCategories,
    addCategory,
    deleteCategory,
    updateCategory
  }
})
