"use client"

import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function ProductSearchForm() {

    const router = useRouter()

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }

        console.log(result)
        router.push(`/admin/products/search?search=${result.data.search}`)
    }

  return (
    <form 
        action={handleSearchForm}
        className="flex items-center"
    >

        <input 
            type="text" 
            className="p-2 placeholder-gray-400 w-full lg:w-auto rounded-l-lg"
            name="search" 
            id="search" 
            placeholder="Buscar Producto" 
        />

        <input 
            type="submit" 
            value={'Buscar'} 
            className="bg-indigo-600 p-2 uppercase text-white cursor-pointer rounded-r-lg hover:bg-indigo-500 transition-all" 
        />
    </form>
  )
}