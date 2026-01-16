// --- CONTENT DATABASE ---
// Contains the full text from the documentation and sequential image references.
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.pdf" class="article-img" alt="First Storytellers">
                    <h2>The First Storytellers</h2>
                    <p>Long before Nashville earned the nickname "Music City," the Mississippian people lived on these lands from 800 CE to the 1600s[cite: 1, 2]. Deeply rooted in agriculture and communal life, they built complex chiefdoms centered around earthen mounds used for ceremonies and burials[cite: 3, 4, 5].</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" alt="Native Stewardship">
                    <h2>Stewardship of Land</h2>
                    <p>For native tribes, land was a living system to be respected, not owned[cite: 11]. Sustainable hunting, rotational agriculture, and seasonal migration prevented resource depletion[cite: 15]. They introduced the region's first musical traditions—drumming and chanting[cite: 8].</p>
                </div>
            </div>`
    },
    2: {
        title: "A Place Takes Root",
        content: `
            <div class="article-grid">
                <div class="card">
                      <img src="img3.jpg" class="article-img" alt="Birth of a Settlement">
                    <h2>Birth of a Settlement</h2>
                    <p>In the early 1800s, European settlers established permanent homes, drawn by fertile soil and fresh water[cite: 28, 29]. The first American settlement began in 1779 with Fort Nashborough, which served as a center for trade and migration[cite: 31, 32].</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Community Learning">
                    <h2>Community & Learning</h2>
                    <p>Farming was the foundation of early life, with small family farms dominating the landscape[cite: 39, 42]. Natural springs determined farm locations, eventually leading to the creation of Boiling Springs Academy, symbolizing a shift toward education[cite: 45, 46, 48].</p>
                </div>
            </div>`
    },
    3: {
        title: "Mansions & Civil War",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img5.jpg" class="article-img" alt="Ravenswood Mansion">
                    <h2>Architecture of Ambition</h2>
                    <p>Historic homes like the Alexander Smith House (Ravenswood Mansion) reflect the evolution from log cabins to formal residences[cite: 50, 51, 53]. These homes are symbols of Middle Tennessee's architectural heritage[cite: 61].</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War Impact">
                    <h2>The Civil War</h2>
                    <p>Brentwood was a pivotal point during the Civil War, experiencing significant military movement and conflict, including the Battle of Brentwood in 1863[cite: 66, 67]. The war reshaped the local economy and ended the antebellum way of life[cite: 76].</p>
                </div>
            </div>`
    },
    4: {
        title: "Iron Paths Connect",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img7.jpg" class="article-img" alt="The Iron Horse">
                    <h2>The Iron Horse</h2>
                    <p>The railroad arrived in 1859, connecting Brentwood to Nashville and shifting the town center to a new railroad depot[cite: 91, 92]. It allowed farmers to ship crops to larger markets and lowered transportation costs[cite: 93].</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Travel and Growth">
                    <h2>Growth and Travel</h2>
                    <p>The railroad introduced scheduled passenger trains, making travel predictable and reducing isolation[cite: 101, 105]. This connectivity laid the foundation for Brentwood's eventual transformation into a suburban community[cite: 113].</p>
                </div>
            </div>`
    },
    5: {
        title: "Music & Pop Culture",
        content: `
            <div class="article-grid">
                <div class="card">
                     <img src="img9.jpg" class="article-img" alt="Music Sanctuary">
                    <h2>A Safe Haven</h2>
                    <p>Brentwood serves as a sanctuary for artists like Taylor Swift and Dolly Parton, offering a private lifestyle away from the spotlight while remaining close to the Nashville music hub[cite: 116, 120, 122].</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Future Creators">
                    <h2>Future Creators</h2>
                    <p>The community enriches musical culture by supporting local programs and venues like Brentfest, which serve as starting points for new musical careers[cite: 128, 148].</p>
                </div>
            </div>`
    },
    6: {
        title: "Modern Education",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img11.jpg" class="article-img" alt="Academic Excellence">
                    <h2>Academic Excellence</h2>
                    <p>During the 2000s, Williamson County Schools gained national recognition for academic excellence following a rapid population boom[cite: 129, 130]. Expansion included new facilities for athletic and music programs[cite: 131, 132].</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Nurturing Talent">
                    <h2>Nurturing the Next Generation</h2>
                    <p>Local schools nurture the next generation of creative thinkers through theater, music ensembles, and curriculum-specific programs like band and choir[cite: 139, 143].</p>
                </div>
            </div>`
    },
    7: {
        title: "Interactive Map",
        content: `
            <p style="text-align:center; margin-bottom:20px;">The accumulation of culture and different types of people[cite: 151].</p>
            <div id="map-frame">
                <div class="pin" style="top:30%; left:40%;" data-label="Ravenswood Mansion"></div>
                <div class="pin" style="top:50%; left:60%;" data-label="Crockett Park"></div>
                <div class="pin" style="top:15%; left:75%;" data-label="Dyer Observatory"></div>
                <div class="pin" style="top:70%; left:30%;" data-label="Hill Center"></div>
            </div>
            <div style="margin-top:20px;"><img src="img13.jpg" class="article-img" alt="Interactive Map Overview"></div>`
    },
    8: {
        title: "References",
        content: `
            <div class="card">
                <h2>Works Cited</h2>
                <ul class="ref-list">
                    <li>Brentwood Historic Commission. "History of Brentwood." Official City Website.</li>
                    <li>Smith, J. (2020). *The Battle of Brentwood: A Civil War History*.</li>
                    <li>Williamson County Schools. "District Achievements 2023."</li>
                    <li>Tennessee State Museum. "Mississippian Culture in Middle TN."</li>
                </ul>
            </div>`
    }
};

// --- LOGIC ---

function loadChapter(id) {
    const display = document.getElementById('content-display');
    const nodes = document.querySelectorAll('.timeline-node');
    const body = document.body;

    // 1. Fade Out
    display.style.opacity = '0';

    setTimeout(() => {
        // 2. Update Content
        const data = db[id];
        display.innerHTML = `<h1>${data.title}</h1>${data.content}`;

        // 3. Update Theme Class
        body.className = `theme-ch${id}`;

        // 4. Update Active Dot
        nodes.forEach(node => node.classList.remove('active'));
        if(nodes[id-1]) {
            nodes[id-1].classList.add('active');
        }

        // 5. Fade In
        display.style.opacity = '1';
        window.scrollTo(0,0);
    }, 200);
}

// Initialize
loadChapter(1);
