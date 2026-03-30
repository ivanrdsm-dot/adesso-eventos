import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, guests, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Nombre y email son requeridos' }, { status: 400 });
    }

    // If Resend API key is configured, send email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: 'ADESSO Eventos <onboarding@resend.dev>',
        to: ['asoto@adessomexico.com', 'mherrero@adessomexico.com'],
        subject: `Nueva Cotización: ${eventType || 'Evento'} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f1535; color: #f0f0f5; padding: 30px; border-radius: 16px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #D4A843; margin: 0;">ADESSO Eventos</h1>
              <p style="color: #888;">Nueva solicitud de cotización</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 20px;">
              <h2 style="color: #D4A843; font-size: 18px; margin-top: 0;">Datos del Cliente</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #888; width: 140px;">Nombre:</td><td style="color: #fff;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Email:</td><td style="color: #fff;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Teléfono:</td><td style="color: #fff;">${phone || 'No proporcionado'}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Tipo de Evento:</td><td style="color: #00d4c8; font-weight: bold;">${eventType || 'No especificado'}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Asistentes:</td><td style="color: #fff;">${guests || 'No especificado'}</td></tr>
              </table>
            </div>
            ${message ? `
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px;">
              <h2 style="color: #D4A843; font-size: 18px; margin-top: 0;">Mensaje</h2>
              <p style="color: #ccc; line-height: 1.6;">${message}</p>
            </div>` : ''}
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="color: #666; font-size: 12px;">Este correo fue enviado desde adessoeventos.com</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, message: 'Solicitud enviada correctamente' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Error al enviar la solicitud' }, { status: 500 });
  }
}
