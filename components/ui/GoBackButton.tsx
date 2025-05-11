"use client"
import { useRouter } from "next/navigation";

export default function GoBackButton() {

    const router = useRouter()
  return (
        <button
            onClick={() => router.back()}
            className="bg-amber-400 px-10 py-2 font-bold rounded-lg hover:bg-amber-300 transition-all w-full lg:w-auto text-center"
        >Volver</button>
  )
}