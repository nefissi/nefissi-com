export async function onRequestPost(context) {
  const { request, env } = context;

  const jsonHeaders = {
    "Content-Type": "application/json; charset=utf-8"
  };

  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "Contact nefissi.com").trim();
    const message = String(body.message || "").trim();
    const honeypot = String(body.website || "").trim();

    // Protection honeypot silencieuse contre les robots
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: jsonHeaders });
    }

    if (!name || !email || !email.includes("@") || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Champs requis invalides." }), {
        status: 400,
        headers: jsonHeaders
      });
    }

    // Si la clé RESEND_API_KEY est configurée dans Cloudflare Pages, envoi direct par e-mail
    if (env.RESEND_API_KEY) {
      const mailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Portfolio nefissi.com <noreply@nefissi.com>",
          to: [env.CONTACT_TO_EMAIL || "contact@nefissi.com"],
          reply_to: email,
          subject: `[nefissi.com] ${subject} — ${name}`,
          text: `Nom : ${name}\nEmail : ${email}\nProfil : ${subject}\n\nMessage :\n${message}`
        })
      });

      if (!mailResponse.ok) {
        return new Response(JSON.stringify({ ok: false, error: "Erreur lors de l'envoi." }), {
          status: 502,
          headers: jsonHeaders
        });
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: jsonHeaders });
    }

    // Aucune clé API configurée : le front bascule automatiquement sur le client mail
    return new Response(JSON.stringify({ ok: false, error: "API non configurée" }), {
      status: 501,
      headers: jsonHeaders
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Requête invalide" }), {
      status: 400,
      headers: jsonHeaders
    });
  }
}