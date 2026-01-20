export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const params = url.searchParams.toString();

  const res = await fetch(
    `https://www.omdbapi.com/?${params}&apikey=${env.OMDB_KEY}`
  );

  return new Response(res.body, {
    headers: { "Content-Type": "application/json" }
  });
}