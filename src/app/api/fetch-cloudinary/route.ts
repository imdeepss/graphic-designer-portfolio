import fetchImages from "@/app/(home)/_lib/fetchImages";

export async function POST(request: Request) {
  const result = await fetchImages();

  return new Response(JSON.stringify(result), {
    status: 200,
  });
}
