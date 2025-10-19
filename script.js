document.getElementById("emailBtn").addEventListener("click", function () {
    const emails = ["durgapurps2024@gmail.com"];
    const subject = "Immediate Action Requested — Complaint for Online Religious Insult by Subhodeep (Andal, Durgapur)";

    const body = `
<html>
  <body>
    <p>Dear Sir,</p>
    <p>
      I hereby file a formal complaint requesting urgent investigation and legal action against the person named below for publicly committing blasphemy of Allah and the Prophet Muhammad (peace be upon him) on Facebook and via WhatsApp.
    </p>

    <strong>Accused Details:</strong><br>
    Name: Subhodeep<br>
    Location: Andal, Durgapur, Paschim Bardhaman, West Bengal<br>
    Mobile: +91 86170 78573<br><br>

    <strong>Offending Links:</strong><br>
    Facebook: <a href="https://www.facebook.com/share/14PRu4jfzj9/" target="_blank">https://www.facebook.com/share/14PRu4jfzj9/</a><br>
    Related Public Campaign (Tweet): <a href="https://x.com/labbaik46/status/1979797046745018847?t=wTFNwXJSSF2b-Lx3uySGQA&s=19" target="_blank">https://x.com/labbaik46/status/1979797046745018847?t=wTFNwXJSSF2b-Lx3uySGQA&s=19</a><br><br>

    <strong>Evidence Provided:</strong><br>
    Screenshots with timestamps and unedited screen recordings are available at: 
    <a href="https://drive.google.com/drive/folders/1zzuBR4e7Ybf6MGvGlQzbM54TVJ0WhhAB?usp=drive_link" target="_blank">Google Drive Folder</a><br><br>

    <strong>Requested Actions:</strong>
    <ul>
      <li>Please investigate the matter promptly.</li>
      <li>Preserve account metadata of the accused.</li>
      <li>Remove offending content wherever possible.</li>
      <li>Take legal action under applicable laws.</li>
      <li>Kindly inform me of the FIR/case number and next steps.</li>
    </ul>

    <p>Thank you for your prompt attention.</p>
  </body>
</html>
`;

    // Encode HTML for mailto
    const mailtoLink = `mailto:${emails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});
