import Image from "next/image";

const Items = ({ fullcartItems, showAll, setshowAll }) => {
  
  const firstItem = fullcartItems[0];
  const remainingItems = fullcartItems.slice(1);

  return (
    <div className="bg-[#F1F1F1] rounded-t-lg sm:rounded-l-lg p-6 sm:w-[246px] flex flex-col justify-center">
      {firstItem && (
        <div className="flex items-start">
          <Image
            src={firstItem.image.mobile}
            alt={firstItem.name}
            width={50}
            height={50}
            className="rounded-lg"
          />

          <div className="flex flex-col mr-auto pl-4">
            <p className="font-bold uppercase">{firstItem.name_cart}</p>
            <p className="text-black/50">${firstItem.price.toLocaleString()}</p>
          </div>

          <p className="text-black/25 font-bold">x{firstItem.quantity}</p>
        </div>
      )}

      {/* If more item btn*/}
      {remainingItems.length > 0 && !showAll && (
        <>
        <div className="w-full h-0.5 bg-black/10 my-2"/>
        <p className="text-sm text-black/50 text-center cursor-pointer" onClick={() => setshowAll(true)}>
          and {remainingItems.length} other item {remainingItems.length > 1 ? "(s)" : ""}
        </p>
        </>
      )}

      {/* show remaning item when expanded */}
      {showAll && 
       <>
        {remainingItems.map(item => (
          <div key={item.id} className="flex items-start py-2">
          <Image
            src={item.image.mobile}
            alt={item.name}
            width={50}
            height={50}
            className="rounded-lg"
          />

          <div className="flex flex-col mr-auto pl-4">
            <p className="font-bold uppercase">{item.name_cart}</p>
            <p className="text-black/50">${item.price.toLocaleString()}</p>
          </div>

          <p className="text-black/25 font-bold">x{item.quantity}</p>
        </div>
        ))}
        <div className="w-full h-0.5 bg-black/10 my-2"/>
        <p className="text-xs text-black/50 text-center cursor-pointer" onClick={() => setshowAll(false)}>
          View less
        </p>
        </>
      }
    </div>
  );
};

export default Items;
