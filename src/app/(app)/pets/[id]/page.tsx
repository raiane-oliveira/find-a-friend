import { api } from '@/data/api'
import { PageProps } from '../../../../../.next/types/app/layout'

export default async function PetsProfile({ params }: PageProps) {
  const res = await api(`/pets/${params.id}/details`)
  const pet = await res.json()

  console.log(pet)

  return <h1>Hello</h1>
}
