import {
  render,
  screen,
} from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists', () => {
  it('renders a list of shopping lists', () => {
    const now = new Date().toString();
    const shoppingLists = [
      {
        id: 1,
        created_at: now,
        name: 'cats',
        shoppingItems: [],
      },
      {
        id: 2,
        created_at: now,
        name: 'dogs',
        shoppingItems: [],
      },
      {
        id: 3,
        created_at: now,
        name: 'turtles',
        shoppingItems: [],
      },
    ];
    render(
      <ShoppingLists
        shoppingLists={shoppingLists}
      />
    );
    
    expect(screen.getByTestId('shopping-lists')).not.toBe(null);
  });
});
