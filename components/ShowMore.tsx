'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import { updateSearchParams } from '@/utils'
import { CustomButton } from './CustomButton'

function ShowMore(props: ShowMoreProps) {
  const router = useRouter()

  const handleNavigation = useCallback(() => {
    const newLimit = (props.pageNumber + 1) * 10// Calculate the new limit based on the page number and navigation type
    const newPathname = updateSearchParams('limit', `${newLimit}`)// Update the "limit" search parameter in the URL with the new value

    router.push(newPathname)
  }, [props.pageNumber])

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!props.isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export { ShowMore }
