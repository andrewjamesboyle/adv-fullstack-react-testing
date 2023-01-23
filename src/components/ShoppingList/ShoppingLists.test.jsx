import {
  render,
  screen,
} from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists', () => {
  it('renders shopping lists', () => {
    const now = new Date().toString();
    const shoppingLists = [
      {
        id: 1,
        created_at: now,
        name: 'shopping-lists',
        shoppingItems: [],
      }
    ];
    render(
      <ShoppingLists
        shoppingLists={shoppingLists}
      />
    );
    
    expect(screen.getByTestId('shopping-lists')).not.toBe(null);
  });
});
