import { CardOrg } from './components/card-org'
import { FormCreatePet } from './components/form-create-pet'
import { OrgDetailsProvider } from './components/org-details-context'

export default function AddPets() {
  return (
    <main className="overflow-y-auto h-full">
      <div className="max-w-[44rem] mx-auto mt-28 mb-44 w-full grid gap-8">
        <OrgDetailsProvider>
          <CardOrg />

          <section className="bg-white pt-16 px-20 pb-20 rounded-2.5xl border border-slate-350">
            <h1 className="text-secondary-500 text-4.5xl/9 font-extrabold">
              Adicione um pet
            </h1>
            <hr className="h-px w-full bg-slate-350 mt-6 mb-10" />
            <FormCreatePet />
          </section>
        </OrgDetailsProvider>
      </div>
    </main>
  )
}
