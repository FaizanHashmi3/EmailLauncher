document.getElementById("emailBtn").addEventListener("click", function () {
    // Array of recipient emails
    const emails = [
        "person1@example.com",
        "person2@example.com",
        "person3@example.com"
    ];

    const subject = "Hello from my website";
    const body = "Hi everyone,\n\nThis email is sent using mailto with multiple recipients.\n\nRegards,\nYour Name";

    // Join emails with commas for multiple recipients in mailto
    const mailtoLink = `mailto:${emails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);
    window.location.href = mailtoLink;
});
