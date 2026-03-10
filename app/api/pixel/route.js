export async function GET(request) {

  const ip =
    request.headers.get("x-forwarded-for") ||
    "unknown";

  const userAgent = request.headers.get("user-agent");
  const referer = request.headers.get("referer");

  console.log({
    ip,
    userAgent,
    referer,
    time: new Date()
  });

  const pixel = Buffer.from(
    "R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    "base64"
  );

  return new Response(pixel, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store"
    }
  });
}