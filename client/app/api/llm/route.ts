export async function GET() {
  return new Response(JSON.stringify({ hi: "Hello World" }));
}
