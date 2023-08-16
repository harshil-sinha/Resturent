import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Idly',
    description: 'Finest Idly , Sambhar, Chatni',
    price: 50,
  },
  {
    id: 'm2',
    name: 'Litti Chokha',
    description: 'A Bihari Famous Dish litti Chokha!',
    price: 40,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, raw, meaty',
    price: 120,
  },
  {
    id: 'm4',
    name: 'Pizza',
    description: 'Healthy...and green...',
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

  return (
    <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
    </section>
  );
};

export default AvailableMeals;
