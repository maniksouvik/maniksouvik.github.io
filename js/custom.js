document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Starfield effect
    const starfield = document.getElementById('starfield');
    if (starfield) {
        // Main stars (200 stars with varying sizes)
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const sizeClass = Math.random() < 0.4 ? 'small' : Math.random() < 0.7 ? 'medium' : 'large';
            star.classList.add(sizeClass);
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            starfield.appendChild(star);
        }
        // Faint background stars for depth (50 stars)
        for (let i = 0; i < 50; i++) {
            const faintStar = document.createElement('div');
            faintStar.className = 'star faint';
            faintStar.style.left = `${Math.random() * 100}%`;
            faintStar.style.top = `${Math.random() * 100}%`;
            faintStar.style.animationDelay = `${Math.random() * 5}s`;
            starfield.appendChild(faintStar);
        }
    }

    // Back to Top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0');
            } else {
                backToTopButton.classList.add('opacity-0');
            }
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Filter news by category
    const filterNews = document.getElementById('filter-news');
    if (filterNews) {
        filterNews.addEventListener('change', () => {
            const selectedCategory = filterNews.value;
            const newsList = document.getElementById('news-list');
            const newsItems = Array.from(newsList.getElementsByClassName('news-card'));

            newsItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Filter awards by category
    const filterAwards = document.getElementById('filter-awards');
    if (filterAwards) {
        filterAwards.addEventListener('change', () => {
            const selectedCategory = filterAwards.value;
            const awardsList = document.getElementById('awards-list');
            const awards = Array.from(awardsList.getElementsByClassName('award-card'));

            awards.forEach(award => {
                const awardCategory = award.getAttribute('data-category');
                if (selectedCategory === 'all' || awardCategory === selectedCategory) {
                    award.style.display = 'block';
                } else {
                    award.style.display = 'none';
                }
            });
        });
    }

    // Filter publications by type
    const filterPublications = document.getElementById('filter-publications');
    if (filterPublications) {
        filterPublications.addEventListener('change', () => {
            const selectedType = filterPublications.value;
            const publicationsList = document.getElementById('publications-list');
            const publications = Array.from(publicationsList.getElementsByClassName('publication-card'));

            publications.forEach(pub => {
                const pubType = pub.getAttribute('data-type');
                if (selectedType === 'all' || pubType === selectedType) {
                    pub.style.display = 'block';
                } else {
                    pub.style.display = 'none';
                }
            });
        });
    }

    // Sort publications by year or journal
    const sortPublications = document.getElementById('sort-publications');
    if (sortPublications) {
        sortPublications.addEventListener('change', () => {
            const sortOption = sortPublications.value;
            const publicationsList = document.getElementById('publications-list');
            const publications = Array.from(publicationsList.getElementsByClassName('publication-card'));

            if (sortOption === 'year-newest') {
                publications.sort((a, b) => {
                    const yearA = parseInt(a.getAttribute('data-year'));
                    const yearB = parseInt(b.getAttribute('data-year'));
                    return yearB - yearA;
                });
            } else if (sortOption === 'year-oldest') {
                publications.sort((a, b) => {
                    const yearA = parseInt(a.getAttribute('data-year'));
                    const yearB = parseInt(b.getAttribute('data-year'));
                    return yearA - yearB;
                });
            } else if (sortOption === 'journal') {
                publications.sort((a, b) => {
                    const journalA = a.getAttribute('data-journal').toLowerCase();
                    const journalB = b.getAttribute('data-journal').toLowerCase();
                    return journalA.localeCompare(journalB);
                });
            }

            // Clear and re-append sorted publications
            publicationsList.innerHTML = '';
            publications.forEach(pub => publicationsList.appendChild(pub));
        });
    }
});

// Toggle news content visibility
function toggleNews(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    content.classList.toggle('hidden');
    icon.classList.toggle('open');
}

// Toggle award content visibility
function toggleAward(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    content.classList.toggle('hidden');
    icon.classList.toggle('open');
}

// Toggle publication content visibility
function togglePublication(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    content.classList.toggle('hidden');
    icon.classList.toggle('open');
}

// Copy to Clipboard function for email
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Email copied to clipboard!');
}