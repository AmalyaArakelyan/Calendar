//reducers
import { CalendarReducer } from './Calendar/CalendarReducer';
import { SearchReducer } from './Search/SearchReducer';
import {ToDoReducer} from './ToDo/ToDoReducer'
const rootReducer = {
  calendar: CalendarReducer,
  toDoList: ToDoReducer,
  search:SearchReducer
};

export default rootReducer;
