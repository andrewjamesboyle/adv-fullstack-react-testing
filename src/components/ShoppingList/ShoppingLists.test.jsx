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
        shoppingItems: [
          { id: '1', created_at: now, name: 'Target' },
          { id: '2', created_at: now, name: 'Home Depot' },
          { id: '3', created_at: now, name: 'Ikea' }
        ] }
    ];
    render(
      <ShoppingLists
        shoppingLists={shoppingLists}
      />
    );

    expect(screen.getByTestId('shopping-lists')).not.toBe(null);
  });
});
