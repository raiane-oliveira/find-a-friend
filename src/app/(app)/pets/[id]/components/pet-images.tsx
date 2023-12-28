'use client'

import { Image as ImageInterface } from '@/data/contracts/pets'
import Image from 'next/image'
import { useState } from 'react'

interface PetImagesProps {
  images: ImageInterface[]
}

export function PetImages({ images }: PetImagesProps) {
  const [currentImage, setCurrentImage] = useState(0)

  function handleChangeImage(index: number) {
    setCurrentImage(index)
  }

  return (
    <div className="space-y-8">
      <div className="w-full h-[21rem] bg-slate-50">
        <Image
          src={images[currentImage].url}
          alt={images[currentImage].alt ?? ''}
          width={704}
          height={336}
          className="w-full h-full object-cover"
          quality={100}
        />
      </div>

      <div className="flex gap-4 px-16.5 max-w-full w-full overflow-x-auto py-1 touch-pan-x">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`w-20 flex-shrink-0 ring-4 h-20 bg-slate-50 rounded-2xl overflow-hidden ${
              currentImage === index
                ? 'opacity-100 ring-secondary-500'
                : 'opacity-30 ring-transparent'
            }`}
            onClick={() => handleChangeImage(index)}
          >
            <Image
              src={image.url}
              alt={image.alt ?? ''}
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
