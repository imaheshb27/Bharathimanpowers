import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-functions-B9g4-yNT.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendEmail_createServerFn_handler = createServerRpc({
	id: "08a758e7d6230116a0b6744cff40a623ca5ff37af1b98eecb391e40f1c570d17",
	name: "sendEmail",
	filename: "src/lib/server-functions.ts"
}, (opts) => sendEmail.__executeServer(opts));
var sendEmail = createServerFn({ method: "POST" }).validator((data) => data).handler(sendEmail_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env["RESEND_API_KEY"];
	if (!apiKey) {
		console.error("RESEND_API_KEY environment variable is not defined");
		return {
			success: false,
			error: "Email service is not configured on the server."
		};
	}
	const isCareer = data.type === "career";
	const subject = isCareer ? "New Career Application — Bharathi Manpower Services" : "New Website Enquiry — Bharathi Manpower Services";
	let htmlContent = "";
	if (isCareer) htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="border-bottom: 2px solid #b5945b; padding-bottom: 10px; color: #161a29;">New Career Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; border-bottom: 1px solid #f9f9f9;">Full Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.email || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Position Interested In:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.requirement || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Experience:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.experience || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top; border-bottom: 1px solid #f9f9f9;">Message:</td>
              <td style="padding: 8px 0; white-space: pre-wrap; border-bottom: 1px solid #f9f9f9;">${data.message || "N/A"}</td>
            </tr>
          </table>
          <p style="margin-top: 25px; font-size: 0.8rem; color: #888; text-align: center;">Sent from Bharathi Manpower Services website careers form.</p>
        </div>
      `;
	else htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="border-bottom: 2px solid #b5945b; padding-bottom: 10px; color: #161a29;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; border-bottom: 1px solid #f9f9f9;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Company / Organisation:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.organisation || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.email || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f9f9f9;">Service Required:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${data.requirement || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top; border-bottom: 1px solid #f9f9f9;">Message:</td>
              <td style="padding: 8px 0; white-space: pre-wrap; border-bottom: 1px solid #f9f9f9;">${data.message || "N/A"}</td>
            </tr>
          </table>
          <p style="margin-top: 25px; font-size: 0.8rem; color: #888; text-align: center;">Sent from Bharathi Manpower Services website contact form.</p>
        </div>
      `;
	try {
		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Authorization": `Bearer ${apiKey}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				from: "Bharathi Manpower Services <onboarding@resend.dev>",
				to: "bharathi.bms0909@gmail.com",
				subject,
				html: htmlContent
			})
		});
		if (!response.ok) {
			const errorText = await response.text();
			console.error("Resend API responded with error:", errorText);
			return {
				success: false,
				error: `Resend email delivery failed: ${errorText}`
			};
		}
		return {
			success: true,
			id: (await response.json()).id
		};
	} catch (err) {
		console.error("Email send error:", err);
		return {
			success: false,
			error: err?.message || "Internal server error during email delivery."
		};
	}
});
//#endregion
export { sendEmail_createServerFn_handler };
