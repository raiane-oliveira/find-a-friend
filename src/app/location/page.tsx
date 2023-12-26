import { PageProps } from '../../../.next/types/app/layout'

export default function Location({ searchParams }: PageProps) {
  return (
    <h1>
      Location: {searchParams?.city} {searchParams?.state}
    </h1>
  )
}
