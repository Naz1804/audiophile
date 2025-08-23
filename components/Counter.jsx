
const Counter = ({ widthSize, heightSize, quantity, setQuantity }) => {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className={`max-w-[120px] w-full flex justify-between ${heightSize} bg-[#F1F1F1]`}>
      <button className={`bg-transparent font-bold text-sm text-black/25 hover:text-[#D87D4A] ${widthSize}`} onClick={decrement}>-</button>
      <button className={`bg-transparent ${widthSize}`}>{quantity}</button>
      <button className={`bg-transparent font-bold text-sm text-black/25 hover:text-[#D87D4A] ${widthSize}`} onClick={increment}>+</button>
    </div>
  )
}

export default Counter