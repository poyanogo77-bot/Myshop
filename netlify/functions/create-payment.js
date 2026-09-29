export default async (req, context) => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Netlify Function فعال است ✅"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
