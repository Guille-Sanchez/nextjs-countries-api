'use client'

const Country = async ({ params }: { params: { country: string } }) => {
  const country = params.country

  return <div>{country}</div>
}

export default Country
