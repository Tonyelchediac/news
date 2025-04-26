// Sample news data
const newsData = [
    {
        title: "New Technology Breakthrough in Renewable Energy",
        category: "Technology",
        image: "https://via.placeholder.com/300x200",
        description: "Scientists have made a significant breakthrough in solar panel efficiency, potentially revolutionizing renewable energy.",
        date: "2024-03-15"
    },
    {
        title: "Global Economic Summit Concludes with New Agreements",
        category: "Business",
        image: "https://via.placeholder.com/300x200",
        description: "World leaders have reached new trade agreements that could boost global economic growth.",
        date: "2024-03-14"
    },
    {
        title: "Major Sports Event Announces New Host City",
        category: "Sports",
        image: "https://via.placeholder.com/300x200",
        description: "The international sports committee has selected a new host city for the upcoming championship.",
        date: "2024-03-13"
    },
    {
        title: "Climate Change Conference: New Commitments Made",
        category: "World",
        image: "https://via.placeholder.com/300x200",
        description: "Countries have pledged to reduce carbon emissions by 50% by 2030.",
        date: "2024-03-12"
    },
    {
        title: "Tech Giant Announces Revolutionary AI Features",
        category: "Technology",
        image: "https://via.placeholder.com/300x200",
        description: "A leading tech company has unveiled new AI capabilities that could transform user experience.",
        date: "2024-03-11"
    },
    {
        title: "New Healthcare Initiative Launched",
        category: "Health",
        image: "https://via.placeholder.com/300x200",
        description: "Global health organizations have announced a new initiative to improve healthcare access.",
        date: "2024-03-10"
    }
];

// Function to create news item HTML
function createNewsItem(news) {
    return `
        <div class="news-item">
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <span class="category">${news.category}</span>
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <span class="date">${formatDate(news.date)}</span>
            </div>
        </div>
    `;
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to load news into the grid
function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = newsData.map(createNewsItem).join('');
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredNews = newsData.filter(news => 
            news.title.toLowerCase().includes(searchTerm) ||
            news.description.toLowerCase().includes(searchTerm) ||
            news.category.toLowerCase().includes(searchTerm)
        );
        
        const newsGrid = document.getElementById('newsGrid');
        newsGrid.innerHTML = filteredNews.map(createNewsItem).join('');
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Function to handle category filtering
function handleCategoryFilter() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.textContent;
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            if (category === 'Home') {
                loadNews();
            } else {
                const filteredNews = newsData.filter(news => 
                    news.category.toLowerCase() === category.toLowerCase()
                );
                
                const newsGrid = document.getElementById('newsGrid');
                newsGrid.innerHTML = filteredNews.map(createNewsItem).join('');
            }
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    handleSearch();
    handleCategoryFilter();
}); 