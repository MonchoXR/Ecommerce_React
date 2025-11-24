import { Truck, ShieldCheck, CreditCard, ShoppingBag } from "lucide-react";
import { Button } from "flowbite-react";

export default function ItemDetailPurchase({ precio }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl p-5 mt-2 relative overflow-hidden">
      <div className="mb-5 pb-4">
        <h2 className="text-4xl font-bold text-[black]">${precio}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">+ envío gratis</p>
      </div>

      <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6 text-sm">
        <li className="flex items-center gap-2"><Truck size={18} /> Entrega estimada: <strong>3–7 días</strong></li>
        <li className="flex items-center gap-2"><CreditCard size={18} /> Pago seguro con tarjeta o PayPal</li>
        <li className="flex items-center gap-2"><ShieldCheck size={18} /> Garantía de satisfacción</li>
        <li className="flex items-center gap-2"><ShoppingBag size={18} /> Hecho a mano en Perú 🇵🇪</li>
      </ul>

      <div className="flex flex-col gap-3 mt-auto w-full">
        <Button pill className="w-full text-lg py-3 border-2 bg-[white] border-[#DC5C57] text-[#DC5C57] font-medium hover:bg-[#DC5C57] hover:text-white transition-all duration-300 focus:ring-2 focus:ring-[#DC5C57]/40 rounded-xl">
          Agregar al carrito 🛒
        </Button>

        <Button pill className="w-full text-lg py-3 bg-[#DC5C57] hover:bg-[#c44b47] text-white font-medium transition-all duration-300 shadow-md rounded-xl focus:ring-2 focus:ring-[#DC5C57]/40">
          Comprar ahora 💳
        </Button>
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center leading-snug">
        Producto artesanal único <br /> Envíos a todo EE.UU.
      </p>
    </div>
  );
}
