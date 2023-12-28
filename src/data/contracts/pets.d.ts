export enum Sizes {
  XS,
  S,
  M,
  L,
  XL,
}

export enum Levels {
  LOW,
  MEDIUM,
  HIGH,
}

export interface Image {
  id: number
  url: string
  alt: string | null
  pet_id: string
}

export interface AdoptionRequirement {
  id: number
  requirement: string
  pet_id: string
}

export interface Pet {
  id: string
  name: string
  about: string
  age: number
  city: string
  state: string
  energy: number
  independence: Levels
  environment: Levels
  created_at: Date
  adopted_at: null | Date
  org_id: string
  Image: Image[]
  AdoptionRequirement: AdoptionRequirement[]
}
