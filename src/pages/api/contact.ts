import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, ruc, email, phone, message } = await request.json();
    console.log("New contact request received:", { name, ruc, email, phone, message });
    
    return new Response(JSON.stringify({ success: true, message: "Contacto recibido exitosamente." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Error procesando contacto" }), { status: 500 });
  }
};