import Image from "next/image"
import Ordered from "./Ordered";

const Summary = ({ popUp, setPopUp, fullCartItems }) => {

  // $$ Prices $$ 
  const total = fullCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = total * 0.2

  const numOfItems = fullCartItems.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = numOfItems * 12.5

  const grandTotal = total + shipping

  function formattedPrice(price) {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: price % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="flex flex-col bg-white md:max-w-[350px] w-full rounded-lg p-8 gap-8">
      <h5>summary</h5>

      <div className="flex flex-col gap-6">
        {fullCartItems.map(item => (
        <div key={item.id} className="flex items-start">
          <Image
            src={item.image.mobile}
            alt={item.name}
            width={64}
            height={64}
            className="rounded-lg"
          />

          <div className="flex flex-col mr-auto pl-4">
            <p className="font-bold uppercase">{item.name_cart}</p>
            <p className="text-black/50">${item.price.toLocaleString()}</p>
          </div>

          <p className="text-black/25 font-bold">x{item.quantity}</p>
        </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-black/50 uppercase">Total</p>
          <h5>${total.toLocaleString()}</h5>
        </div>

        <div className="flex justify-between">
          <p className="text-black/50 uppercase">Shipping</p>
          <h5>${formattedPrice(shipping)}</h5>
        </div>

        <div className="flex justify-between">
          <p className="text-black/50 uppercase">vat (included)</p>
          <h5>${formattedPrice(vat)}</h5>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-black/50 uppercase">Grand Total</p>
        <h5 className="text-[#D87D4A]">${formattedPrice(grandTotal)}</h5>
      </div>

      <Ordered popUp={popUp} setPopUp={setPopUp} fullCartItems={fullCartItems} />
    </div>
  );
};

export default Summary;
