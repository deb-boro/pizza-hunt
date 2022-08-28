const router = require('express').Router()
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizzaById,
  deletePizza,
} = require('../../controllers/pizza-controller')

// Set up GET all and POST at /api/pizzas
router.route('/').get(getAllPizza).post(createPizza)

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route('/:id').get(getPizzaById).put(updatePizzaById).delete(deletePizza)

module.exports = router
