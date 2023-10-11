export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  const response = await fetch(
    `https://us1.locationiq.com/v1/reverse.php?key=${process.env.NEXT_LOCATIONQ_API_KEY}&lat=${lat}&lon=${lon}&format=json`,
  )

  const data = await response.json()

  return Response.json({ data })
}
