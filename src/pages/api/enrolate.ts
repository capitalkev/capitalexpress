import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const payload = {
      ruc: data.ruc,
      usuario_sol: data.usuarioSunat,
      clave_sol: data.passwordSunat,
      email: "correo@empresa.com" // Obligatorio para tu modelo CredencialesNuevas
    };

    // AQUÍ DEBE ESTAR LA RUTA COMPLETA HACIA FASTAPI
    const FASTAPI_URL = "http://localhost:8000/api-sunat/enrolate"; 

    const backendResponse = await fetch(FASTAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const responseData = await backendResponse.json();

    if (!backendResponse.ok) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: responseData.detail || "Error en la autenticación" 
      }), { 
        status: backendResponse.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: responseData.mensaje,
      detalle: responseData.detalle
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error conectando a FastAPI:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: "Error de conexión con el servidor backend." 
    }), { status: 500 });
  }
};