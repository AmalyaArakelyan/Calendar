import React from 'react';
//Components
import ListHeader from '../components/itemList/ListHeader'
import List from '../components/itemList/List'
import CreateModal from '../components/createItem/CreateModal'
export default function ItemList() {

  return (
    <div className='list-page'>
      <ListHeader />
      <List />
      <CreateModal />
    </div>
  );
}
