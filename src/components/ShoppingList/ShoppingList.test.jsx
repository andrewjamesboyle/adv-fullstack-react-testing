import {
  render,
  screen,
} from '@testing-library/react';

import ShoppingList from './ShoppingList.jsx';

describe('ShoppingList', () => {
  it('renders a shopping list', () => {
    const now = new Date().toString();
    const shoppingList =
      {
        id: 1,
        created_at: now,
        name:'my list',
        shoppingItems: [],
      };
    render(
      <ShoppingList shoppingList={shoppingList} />
    );
    expect(screen.queryByTestId('shopping-list-name-1')).not.toBe(null);

  });

  
});
