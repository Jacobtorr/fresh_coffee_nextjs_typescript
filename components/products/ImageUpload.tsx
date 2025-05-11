"use client"
import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

export default function ImageUpload({image} : {image: string | undefined}) {

    const [ imageUrl, setImageUrl ] = useState('')

  return (
    <CldUploadWidget
        onSuccess={(result, {widget}) => {
            if(result.event === 'success') {
                widget.close()
                // @ts-ignore
                setImageUrl(result.info?.secure_url)
            }
    }}
        uploadPreset="miPreset"
        options={{
            maxFiles: 1
        }}
        onUpload={(error, result) => {
        if (error) {
        console.error("Error uploading image:", error);
        } else {
        console.log("Image uploaded:", result);
        }
  }}
    
    >
        {({open}) => (
            <>
                <div className="space-y-2">
                    <label htmlFor="" className="text-slate-800">
                        Imagen Producto
                    </label>

                    <div 
                        className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100 rounded-lg"
                        onClick={() => open()}
                    >
                        <TbPhotoPlus 
                            size={50}
                        />

                        <p className="text-lg font-semibold">
                            Agregar Imagen
                        </p>

                        {imageUrl && (
                            <div 
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    fill
                                    style={{objectFit: 'contain'}}
                                    src={imageUrl}
                                    alt="Imagen de Producto"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {image && !imageUrl && (
                    <div className="space-y-2 flex flex-col items-center">
                        <label htmlFor="" className="">Imagen Actual:</label>
                        <div className="relative w-64 h-64">
                            <Image 
                                fill
                                style={{objectFit: 'contain'}}
                                src={getImagePath(image)}
                                alt="imagen producto"
                                className=" rounded-lg"
                                
                            />
                        </div>
                    </div>
                )}

                <input type="hidden" name="image" defaultValue={imageUrl ? imageUrl : image} />
            </>
        )}
    </CldUploadWidget>
  )
}