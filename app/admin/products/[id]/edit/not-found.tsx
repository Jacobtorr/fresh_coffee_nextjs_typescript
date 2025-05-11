import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function Notfound() {
  return (
    <div className="text-center">
        <Heading>Producto no Encontrado</Heading>

        <Link
            href='/admin/products'
            className="bg-amber-400 hover:bg-amber-600 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto transition-all rounded-lg "
        >
        Ir a Productos
        </Link>
    </div>
  )
}