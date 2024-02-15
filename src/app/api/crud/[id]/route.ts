export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log(`🎃 Request to GET /api/crud/[${id}]`);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  console.log(`🎃 Request to DELETE /api/crud/[${id}]`);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const data = await request.json();
  console.log(`🎃 Request to PUT /api/crud/[${id}]`, data);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
