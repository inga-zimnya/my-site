import emailjs from "@emailjs/browser"
emailjs.init('3b9NBV0sgxYHQbFQW');
window.onload = function() {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'template_5i419mh', form)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}