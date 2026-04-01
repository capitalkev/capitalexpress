import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { empresa, ruc, usuarioSunat, passwordSunat } = await request.json();
    console.log("New enrolate request received:", { empresa, ruc, usuarioSunat, passwordSunat: "***" });
    
    return new Response(JSON.stringify({ success: true, message: "Enrolamiento recibido exitosamente." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Error procesando enrolamiento" }), { status: 500 });
  }
};