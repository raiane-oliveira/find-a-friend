'use client'

import { api } from '@/lib/axios'
import { Org } from '@/data/contracts/orgs'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, createContext, useContext, useState } from 'react'

interface OrgDetailsContextProps {
  org: Org
}

const OrgDetailsContext = createContext({} as OrgDetailsContextProps)

export function OrgDetailsProvider({ children }: { children: ReactNode }) {
  const [orgId] = useState(() => {
    const orgId = localStorage.getItem('@findAfriend-v1:orgId')
    return orgId
  })

  const { data } = useQuery<{ org: Org } | undefined>({
    queryKey: ['org-details', orgId],
    queryFn: async () => {
      const response = orgId ? await api.get(`/orgs/${orgId}`) : undefined
      return response?.data
    },
  })

  if (!data) {
    return null
  }

  const { org } = data

  return (
    <OrgDetailsContext.Provider value={{ org }}>
      {children}
    </OrgDetailsContext.Provider>
  )
}

export const useOrgDetails = () => useContext(OrgDetailsContext)
