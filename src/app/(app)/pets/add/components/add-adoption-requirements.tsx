import { Input } from '@/components/form/input'
import { Plus, XSquare } from 'lucide-react'
import { useRef, useState } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { FormCreatePetData } from './form-create-pet'

export function AddAdoptionRequirements() {
  const [requirement, setRequirement] = useState('')
  const requirementInputRef = useRef<null | HTMLInputElement>(null)
  const {
    control,
    formState: { errors },
  } = useFormContext<FormCreatePetData>()
  const { fields, append, remove } = useFieldArray({
    name: 'requirements',
    control,
  })

  function handleAppendRequirement(name: string) {
    append(
      {
        name,
      },
      {
        shouldFocus: false,
      },
    )
    requirementInputRef.current?.focus()
    setRequirement('')
  }

  function handleRemoveRequirement(index: number) {
    remove(index)
  }

  return (
    <fieldset className="mt-12">
      <legend className="text-[2rem] text-secondary-500 leading-7 font-extrabold">
        Requisitos para adoção
      </legend>

      <hr className="h-px bg-slate-350 my-7" />

      <label className="space-y-2 block mb-5 text-secondary-500">
        <span className="text-semibold">Requisito</span>
        <Input
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Defina um requisito"
          ref={requirementInputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleAppendRequirement(requirement)
            }
          }}
          disabled={fields.length >= 6}
        />
      </label>

      <div className="flex flex-col gap-3 text-secondary-500">
        {fields &&
          fields.length > 0 &&
          fields.map((field, index) => (
            <div className="relative group" key={field.id}>
              <Controller
                name={`requirements.${index}.name`}
                control={control}
                render={({ field }) => <Input {...field} className="pr-14" />}
              />
              <button
                type="button"
                className="group-focus-within:block hidden group-hover:block absolute z-10 right-6 top-1/2 -translate-y-1/2"
                title="Remover requisito para adoção"
                onClick={() => handleRemoveRequirement(index)}
              >
                <XSquare className="text-red-app w-6 h-6" />
              </button>
            </div>
          ))}
      </div>

      {errors.requirements && (
        <span
          className="text-red-app text-sm block mt-2"
          aria-describedby={errors.requirements.message}
        >
          {errors.requirements.message}
        </span>
      )}

      <button
        type="button"
        className="mt-3 border w-full border-dashed border-red-app py-4 rounded-input overflow-hidden bg-[rgba(252,134,134,0.10);] text-red-app"
        onClick={() => {
          handleAppendRequirement(requirement)
        }}
      >
        <Plus className="w-6 h-6 mx-auto" />
      </button>
    </fieldset>
  )
}
