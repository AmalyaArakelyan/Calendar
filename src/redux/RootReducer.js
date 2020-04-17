//reducers
import { CalendarReducer } from './Calendar/CalendarReducer';
import { SearchReducer } from './Search/SearchReducer';
import {ItemListReducer} from './ItemList/ItemListReducer'
import {CreateItemReducer} from './CreateItem/CreateItemReducer'
const rootReducer = {
  calendar: CalendarReducer,
  toDoList: ItemListReducer,
  search:SearchReducer,
  createItem:CreateItemReducer
};

export default rootReducer;
