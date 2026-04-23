// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Events Data
const events = {
    proximos: [
        { day: '15', month: 'MAY', title: 'Día del Maestro', desc: 'Ceremonia de gala y entrega de reconocimientos.' },
        { day: '22', month: 'MAY', title: 'Asamblea Regional', desc: 'Discusión de pliego petitorio zona norte.' },
        { day: '05', month: 'JUN', title: 'Taller Pedagógico', desc: 'Nuevas tendencias en evaluación formativa.' }
    ],
    pasados: [
        { day: '10', month: 'ABR', title: 'Congreso Nacional', desc: 'Elección de comité ejecutivo 2026-2030.' },
        { day: '28', month: 'MAR', title: 'Marcha por la Dignidad', desc: 'Movilización pacífica por el presupuesto educativo.' },
        { day: '15', month: 'MAR', title: 'Feria del Libro Sindical', desc: 'Exposición de autores agremiados.' }
    ]
};

// Filter Events Function
function filterEvents(category) {
    const eventsList = document.getElementById('events-list');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Update buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Clear and Fill List
    eventsList.innerHTML = '';
    
    events[category].forEach(event => {
        const eventItem = `
            <div class="event-item">
                <div class="event-date">
                    <span>${event.day}</span>
                    <span>${event.month}</span>
                </div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>${event.desc}</p>
                </div>
            </div>
        `;
        eventsList.innerHTML += eventItem;
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Load upcoming events by default
    const eventsList = document.getElementById('events-list');
    events.proximos.forEach(event => {
        const eventItem = `
            <div class="event-item">
                <div class="event-date">
                    <span>${event.day}</span>
                    <span>${event.month}</span>
                </div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>${event.desc}</p>
                </div>
            </div>
        `;
        eventsList.innerHTML += eventItem;
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
