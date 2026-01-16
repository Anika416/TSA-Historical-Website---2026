const chapters = {
    1: {
        title: "Before the Pages Began",
        theme: "theme-ch1",
        html: `
            <div class="article-grid">
                <div class="card">
                    <div class="image-box"><img src="image1.jpg" alt="Image 1"></div>
                    <h2>The First Storytellers of the Land</h2>
                    <p>Long before Nashville earned the nickname "Music City," the first inhabitants were native tribes, most notably the Mississippian people (800 CE to 1600s).</p>
                    <p>They built complex chiefdoms and earthen mounds for ceremonies and burial. They were the first to introduce musical traditions through drumming and chanting.</p>
                </div>
                <div class="card">
                    <div class="image-box"><img src="image2.jpg" alt="Image 2"></div>
                    <h2>Stewardship of the Land</h2>
                    <p>For natives, land was a living system to be respected, not property. Stewardship was reflected in sustainable hunting and rotational agriculture. Rivers like the Cumberland were sacred spiritual entities.</p>
                </div>
            </div>`
    },
    5: {
        title: "Music & Pop Culture",
        theme: "theme-ch5",
        html: `
            <div class="article-grid">
                <div class="card">
                    <div class="image-box"><img src="image10.jpg" alt="Image 10"></div>
                    <h2>A Safe Haven for Artists</h2>
                    <p>Brentwood serves as a sanctuary for artists like Taylor Swift and Dolly Parton to live away from the spotlight while remaining close to the Nashville music hub.</p>
                    <p>Its serene communities allow creativity to blossom in a familial environment.</p>
                </div>
                <div class="card">
                    <h2>Future Creators</h2>
                    <p>The local music culture fuels a new generation of artists. Local venues like Brentfest nurture talent, serving as the starting point for careers like Conner Smith's.</p>
                </div>
            </div>`
    },
    7: {
        title: "Interactive Map",
        theme: "theme-ch1",
        html: `<div class="card" style="max-width:800px; margin:auto;">
                <h2>Explore Brentwood</h2>
                <p>The accumulation of culture and different types of people.</p>
                <div style="height:400px; background:#aed6f1; border-radius:10px; position:relative;">
                    <p style="text-align:center; padding-top:180px;">[Interactive Map Simulation - Image 13 Reference]</p>
                </div>
               </div>`
    },
    8: {
        title: "References",
        theme: "theme-ch8",
        html: `
            <div class="card">
                <h2>Works Cited & Credits</h2>
                <ul style="line-height:2;">
                    <li>Brentwood Historic Commission Archives</li>
                    <li>Tennessee State Museum: Mississippian Culture</li>
                    <li>Williamson County Heritage Foundation</li>
                    <li>City of Brentwood Parks & Recreation Preservation Records</li>
                </ul>
            </div>`
    }
};

function loadPage(id) {
    const main = document.getElementById('main-content');
    const nodes = document.querySelectorAll('.timeline-node');
    const page = chapters[id] || chapters[1];

    document.body.className = page.theme;
    main.innerHTML = `<h1>${page.title}</h1>${page.html}`;

    nodes.forEach((node, idx) => {
        node.classList.toggle('active', idx === (id - 1));
    });
    window.scrollTo(0,0);
}

// Start with Chapter 1
loadPage(1);
