function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

function updateSearchParams(type: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search) // Get the current URL search params
  searchParams.set(type, value) // Set the specified search parameter to the given value

  return  `${window.location.pathname}?${searchParams.toString()}` // Set the specified search parameter to the given value
}

function deleteSearchParams(type: string) {
  const searchParams = new URLSearchParams(window.location.search) // Set the specified search parameter to the given value
  searchParams.delete(type.toLocaleLowerCase()) // Delete the specified search parameter

  return `${window.location.pathname}?${searchParams.toString()}` // Construct the updated URL pathname with the deleted search parameter
}

async function fetchCars(filters: FilterProps) {
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`,
    {
      headers: new Headers({
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
      }),
    }
  )

  return response.json()
}

function generateCarImageUrl(car: CarProps, angle?: string) {
  const url = new URL('https://cdn.imagin.studio/getimage')

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
  )
  url.searchParams.append('make', car.make)
  url.searchParams.append('modelFamily', car.model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${car.year}`)
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export {
  calculateCarRent,
  updateSearchParams,
  deleteSearchParams,
  fetchCars,
  generateCarImageUrl,
}