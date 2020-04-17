import React from 'react';
//Components
import ListHeader from '../components/itemList/ListHeader'
import List from '../components/itemList/List'

export default function ItemList() {

  return (
    <div className='list-page'>
      <ListHeader />
      <List />
    </div>
  );
}
