import { FileText, Plus, UploadCloud } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { FormCreatePetData } from './form-create-pet'
import { useRef } from 'react'

export function UploadPhotos() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileLabelInputRef = useRef<null | any>(null)

  const {
    watch,
    formState: { errors },
    setValue,
    register,
  } = useFormContext<FormCreatePetData>()

  const files: FileList = watch('photos')

  function handleAddFiles(filesValue: FileList) {
    setValue('photos', filesValue)
  }

  return (
    <div
      className="flex flex-col gap-4"
      onDragOver={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      onDrop={(e) => {
        e.preventDefault()
        handleAddFiles(e.dataTransfer.files)
      }}
    >
      <label className="space-y-2" ref={fileLabelInputRef}>
        <span className="font-semibold text-secondary-500">Fotos</span>

        <section className="text-secondary-500 relative cursor-pointer bg-slate-50 border border-slate-350 rounded-input overflow-hidden min-h-38 flex flex-col gap-3 items-center justify-center">
          <UploadCloud className="w-6 h-6" />
          <span className="text-lg font-semibold">
            Arraste e solte o arquivo
          </span>
        </section>

        <input
          type="file"
          className="sr-only"
          multiple
          accept="image/.jpeg,.jpg,.png"
          {...register('photos')}
        />

        {errors.photos && (
          <span className="text-red-app text-sm block mt-2">
            {errors.photos.message?.toString()}
          </span>
        )}
      </label>

      {files && files.length > 0 && (
        <div className="flex flex-col gap-3">
          {Array.from(files).map((file, index) => (
            <div
              key={index}
              className="border group border-slate-350 rounded-input p-3.5 flex items-center gap-3"
            >
              <FileText className="w-6 h-6 text-slate-350" />
              <p className="text-sm/7 text-secondary-500">{file.name}</p>
              {/* <button
                type="button"
                className="sr-only group-hover:not-sr-only group-focus-within:block !ml-auto"
                title="Remover foto"
                onClick={() => handleRemovePhoto(index)}
              >
                <XSquare className="text-red-app w-6 h-6" />
              </button> */}
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => fileLabelInputRef.current?.click()}
        className="mt-6 border border-dashed border-red-app py-4 rounded-input overflow-hidden bg-[rgba(252,134,134,0.10);] text-red-app"
      >
        <Plus className="w-6 h-6 mx-auto" />
      </button>
    </div>
  )
}
