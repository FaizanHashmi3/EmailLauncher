document.getElementById("emailBtn").addEventListener("click", function () {
    const emails = ["durgapurps2024@gmail.com"];
    const subject = "Immediate Action Requested — Complaint for Online Religious Insult by Subhodeep (Andal, Durgapur)";

    // Body text with line breaks (%0A) for Gmail
    const body = 
`Dear Sir,

I hereby file a formal complaint requesting urgent investigation and legal action against the person named below for publicly committing blasphemy of Allah and the Prophet Muhammad (peace be upon him) on Facebook and via WhatsApp.

Accused Details:
Name: Subhodeep
Location: Andal, Durgapur, Paschim Bardhaman, West Bengal
Mobile: +91 86170 78573

Offending Links:
Facebook: https://www.facebook.com/share/14PRu4jfzj9/
Related Public Campaign (Tweet): https://x.com/labbaik46/status/1979797046745018847?t=wTFNwXJSSF2b-Lx3uySGQA&s=19

Evidence Provided:
Screenshots with timestamps and unedited screen recordings are available at: https://drive.google.com/drive/folders/1zzuBR4e7Ybf6MGvGlQzbM54TVJ0WhhAB?usp=drive_link

Requested Actions:
• Please investigate the matter promptly.
• Preserve account metadata of the accused.
• Remove offending content wherever possible.
• Take legal action under applicable laws.
• Kindly inform me of the FIR/case number and next steps.

Thank you for your prompt attention.
`;

    // Encode subject and body for URL
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emails.join(","))}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail compose window
    window.open(mailtoLink, "_blank");
});
