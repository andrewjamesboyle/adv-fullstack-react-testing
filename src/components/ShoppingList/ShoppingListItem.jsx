export default function ShoppingListItem({ 
  shoppingItem, 
  onUpdateShoppingItem,
  onDeleteShoppingItem 
}) {
  
  return <>
  <div>
    {shoppingItem.item_name}
    </div>
    <input type='text' value={shoppingItem} onChange={(e) => {onUpdateShoppingItem({...shoppingItem, })}} />
    <button onClick={() => onDeleteShoppingItem(shoppingItem)}
  </>;
}
