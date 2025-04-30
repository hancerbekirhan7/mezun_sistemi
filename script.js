document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');
    const search = document.getElementById('search');
    let contacts = [];

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const year = document.getElementById('year').value;

        const contact = { name, email, phone, year };
        contacts.push(contact);
        addContactToList(contact);
        contactForm.reset();
    });

    search.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        contactList.innerHTML = '';
        contacts
            .filter(contact => 
                contact.name.toLowerCase().includes(searchTerm) ||
                contact.email.toLowerCase().includes(searchTerm) ||
                contact.phone.includes(searchTerm) ||
                contact.year.includes(searchTerm)
            )
            .forEach(addContactToList);
    });

    function addContactToList(contact) {
        const li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.email} - ${contact.phone} - ${contact.year}`;
        contactList.appendChild(li);
    }
});

// Anasayfa bağlantısını hedefleme
const homeLink = document.getElementById('homeLink');

// Anasayfa bağlantısına tıklama olayını dinleme
homeLink.addEventListener('click', function(event) {
    // Sayfanın yeniden yüklenmesini engellemek için varsayılan davranışı durdurma
    event.preventDefault();
    
    // Anasayfaya yönlendirme
    window.location.href = "mezun_bilgi.html";
});

// İletişim bağlantılarını hedefleme
const instagramLink = document.getElementById('instagramLink');
const twitterLink = document.getElementById('twitterLink');

// Instagram ve Twitter bağlantılarına tıklama olaylarını dinleme
instagramLink.addEventListener('click', function(event) {
    // Yeni bir sekme açıp Instagram'a yönlendirme
    window.open('https://www.instagram.com/', '_blank');
});

twitterLink.addEventListener('click', function(event) {
    // Yeni bir sekme açıp Twitter'a yönlendirme
    window.open('https://twitter.com/', '_blank');
});
