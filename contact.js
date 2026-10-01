
// Make it so that the form submission automatically sends an email to the record label's contact email address. This can be done using a backend service or an email API like SendGrid or EmailJS. For this example, we will just show an alert.
  function sendEmail(name, email, message) {
    // Here you would integrate with an email service
    console.log(`Sending email from ${name} (${email}): ${message}`);
  }
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    sendEmail(name, email, message);
    alert('Thank you for your message! We will get back to you soon.');
  });
