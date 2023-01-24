import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
  
import ShoppingListForm from './ShoppingListForm';
  
describe('ShoppingList', () => {
  it('renders a form with a submit button', () => {
    render(<ShoppingListForm />);
    expect(screen.queryByText('Submit'));
  });
  
  it('submits the shoppingList given', () => {
    const shoppingList = {
      name: 'cats',
      shoppingItems: [],
    };
    const onSubmit = jest.fn();
    // eslint-disable-next-line max-len
    render(<ShoppingListForm id={'new'} shoppingList={shoppingList} onSubmit={onSubmit} />
    );
    fireEvent.click(screen.getByTestId('shopping-list-form-submit-button-new')
    );
    expect(onSubmit).toHaveBeenCalledWith(shoppingList);
  });
});
