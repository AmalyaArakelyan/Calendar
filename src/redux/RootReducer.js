//reducers
import { CalendarReducer } from './Calendar/CalendarReducer';
import { ItemListReducer } from './ItemList/ItemListReducer';
import { SearchReducer } from './Search/SearchReducer';

const rootReducer = {
  calendar: CalendarReducer,
  itemList: ItemListReducer,
  search:SearchReducer
};

export default rootReducer;
