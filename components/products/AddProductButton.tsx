"use client"

import { Product } from "@prisma/client"
import { useStore } from "@/src/lib/store"

type AddProductButtonProps ={ 
  product: Product

}

export default function AddProductButton({product} : AddProductButtonProps) {

  const addToOrder = useStore((state) => state.addToOrder)

  return (
    <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white font-black uppercase mt-5 rounded-lg transition-all"
          onClick={() => addToOrder(product)}
        >
          Agregar
    </button>
  )
}