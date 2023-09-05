import { MouseEventHandler, ReactNode } from 'react'

declare global {
  interface ParentProps {
    children: ReactNode
  }
  
  interface CarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
  }

  interface FilterProps {
    manufacturer?: string
    year?: number
    model?: string
    limit?: number
    fuel?: string
  }

  interface HomeProps {
    searchParams: FilterProps
  }

  interface CarCardProps {
    model: string
    make: string
    mpg: number
    transmission: string
    year: number
    drive: string
    cityMPG: number
  }

  interface CustomButtonProps {
    isDisabled?: boolean
    btnType?: 'button' | 'submit'
    containerStyles?: string
    textStyles?: string
    title: string
    rightIcon?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
  }

  interface OptionProps {
    title: string
    value: string
  }

  interface CustomFilterProps {
    title: string
    options: OptionProps[]
  }

  interface ShowMoreProps {
    pageNumber: number
    isNext: boolean
  }

  interface SearchManuFacturerProps {
    manufacturer: string
    setManuFacturer: (manufacturer: string) => void
  }
}

export {}
