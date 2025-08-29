import { FiX, FiTrash2, FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

const AddToCard = ({ isOpen, setIsOpen }) => {
  const cart = [
    {
      id: 1,
      name: "Cream",
      price: 6.74,
      qty: 1,
      img: "https://i.postimg.cc/TwzxJRdq/imgi-36-8.png",
    },
    {
      id: 2,
      name: "Cream",
      price: 7.84,
      qty: 1,
      img: "https://i.postimg.cc/Yq7kvsGZ/Gravity-Defying-Cream.png",
    },
    {
      id: 3,
      name: "Precision Injection",
      price: 3.84,
      qty: 2,
      img: "https://i.postimg.cc/0NwHd9hf/Precision-Injection.png",
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[92%] sm:w-[430px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-gray-900">
            My Cart <span className="text-gray-700">(3)</span>
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Clear Cart */}
        <div className="px-5 sm:px-6 py-3 flex justify-end">
          <button className="text-teal-600 hover:text-teal-700 font-semibold">
            Clear Cart
          </button>
        </div>

        {/* Items */}
        <div className="px-5 sm:px-6 space-y-6 overflow-y-auto max-h-[60vh]">
          {cart.map((it) => (
            <div key={it.id} className="pb-6 border-b">
              <div className="flex gap-4">
                <img
                  src={it.img}
                  alt={it.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      {it.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded border hover:bg-gray-50">
                        <FiEdit2 />
                      </button>
                      <button className="p-2 rounded border hover:bg-gray-50">
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-800">${it.price}</span>
                  </div>

                  {/* Qty Control */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between w-40 border rounded-md px-3 py-2">
                      <button className="p-1">
                        <FiMinus />
                      </button>
                      <span className="text-gray-800">1</span>
                      <button className="p-1">
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto border-t px-5 sm:px-6 py-5">
          <div className="flex items-center justify-between text-lg">
            <span className="text-gray-800">Sub Total :</span>
            <span className="font-semibold text-teal-600">$50.00</span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="w-full py-2 rounded-md border border-teal-500 text-teal-700 font-semibold hover:bg-teal-50">
              View Cart
            </button>
            <button className="w-full py-2 rounded-md bg-teal-500 text-white font-semibold hover:bg-teal-600">
              Check Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AddToCard;
