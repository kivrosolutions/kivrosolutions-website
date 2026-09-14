import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { firstName, lastName, phone, email, company, budget, source, message } = body;

    if (!firstName || !lastName || !phone || !email || !company) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Kivro Solutions <info@kivrosolutions.com>",
      to: ["info@kivrosolutions.com"],
      replyTo: email,
      subject: `New contact inquiry from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}
        Company: ${company}
        Budget: ${budget}
        Source: ${source}
        Message: ${message || "N/A"}
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}