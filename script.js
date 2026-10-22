
/* ========================================
   V PLAN — DIGITAL BUSINESS CARD
   Contact download functionality
======================================== */

document.addEventListener("DOMContentLoaded", function () {
  const saveContactButton = document.getElementById("saveContact");

  // V PLAN business contact information
  const contact = {
    name: "V PLAN",
    phone: "+918639169498",
    email: "connect@vplaninterior.com",
    website: "https://vplaninterior.com",
    location: "Secunderabad, Telangana, India"
  };

  // Create and download a contact file
  function downloadContact() {
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:" + contact.name,
      "ORG:V PLAN Interiors & Contracting",
      "TEL;TYPE=WORK,VOICE:" + contact.phone,
      "EMAIL;TYPE=WORK:" + contact.email,
      "URL:" + contact.website,
      "ADR;TYPE=WORK:;;;" + contact.location + ";;;;",
      "NOTE:Interiors and Contracting",
      "END:VCARD"
    ].join("\r\n") + "\r\n";

    // Convert the contact text into a downloadable file
    const file = new Blob(
      [vCard],
      { type: "text/vcard;charset=utf-8" }
    );

    // Create a temporary download link
    const fileURL = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");

    downloadLink.href = fileURL;
    downloadLink.download = "V-PLAN-Contact.vcf";

    // Start the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    // Release the temporary file URL
    setTimeout(function () {
      URL.revokeObjectURL(fileURL);
    }, 1000);

    // Give the user feedback
    const originalText = saveContactButton.innerHTML;

    saveContactButton.innerHTML = "Contact Downloaded ✓";
    saveContactButton.disabled = true;

    setTimeout(function () {
      saveContactButton.innerHTML = originalText;
      saveContactButton.disabled = false;
    }, 2500);
  }

  // Connect the button to the download function
  if (saveContactButton) {
    saveContactButton.addEventListener("click", downloadContact);
  }
});
