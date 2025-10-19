document.getElementById("emailBtn").addEventListener("click", function () {
    // Array of recipient emails
    const emails = [
        "durgapurps2024@gmail.com"
    ];

    const subject = "Immediate action requested — Complaint for online religious insult by Subhodeep (Andal, Durgapur)";
    const body = `
Dear Sir or Madam,

I hereby file a formal complaint requesting urgent investigation and legal action against the person named below for publicly doing blasphemy of Allah and the Prophet Muhammad (peace be upon him) on Facebook and via WhatsApp.

Accused: Subhodeep
Location: Andal, Durgapur, Paschim Bardhaman, West Bengal
Mobile: +91 86170 78573

Offending links:
Facebook: https://www.facebook.com/share/14PRu4jfzj9/
Related public post / campaign (tweet): https://x.com/labbaik46/status/1979797046745018847?t=wTFNwXJSSF2b-Lx3uySGQA&s=19

Evidence provided in the given URL, including screenshots with timestamps and unedited screen recordings of the Facebook content and WhatsApp direct messages.
URL: https://drive.google.com/drive/folders/1zzuBR4e7Ybf6MGvGlQzbM54TVJ0WhhAB?usp=drive_link

Requested actions:
• Please investigate the matter.
• Preserve account metadata of the accused.
• Remove offending content where possible.
• Take legal action under applicable laws.
• Kindly inform me of the FIR/case number and next steps.


Thank you for your prompt attention.

  `;

    // Join emails with commas for multiple recipients in mailto
    const mailtoLink = `mailto:${emails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);
    window.location.href = mailtoLink;
});
