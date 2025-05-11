"use client"

import { updateProduct } from "@/actions/update-product-action";
import { ProductSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

export default function EditProductForm({children}: {children: React.ReactNode}) {
  const router = useRouter()
  const params = useParams()
  const id = +params.id!

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('categoryId'),
      image: formData.get('image')
    }

    const result = ProductSchema.safeParse(data)
    if(!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }

    const response = await updateProduct(result.data, id)
    if(response?.errors) {
      response.errors.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }

    toast.success('Producto Actualizado Correctamente')
    router.push('/admin/products')
  }

    
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        <form 
          action={handleSubmit}
          className="space-y-5"
        >
            {children}

            <input 
                type="submit" 
                value="Guardar Cambios" 
                className="bg-indigo-600 p-3 text-white font-bold rounded-lg w-full hover:bg-indigo-800 transition-all cursor-pointer mt-5 uppercase"
            />
        </form>
    </div>
  )
}