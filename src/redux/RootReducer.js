//reducers
import { CalendarReducer } from './Calendar/CalendarReducer';
import { SearchReducer } from './Search/SearchReducer';
import {ItemListReducer} from './ItemList/ItemListReducer'

const rootReducer = {
  calendar: CalendarReducer,
  toDoList: ItemListReducer,
  search:SearchReducer
};

export default rootReducer;
