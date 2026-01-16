// --- CONTENT DATABASE ---
// Contains the text directly from your PDF and placeholders for images.
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" alt="Native Farmwork">
                    <h2>The First Storytellers</h2>
                    <p>Long before Nashville earned the nickname "Music City," the Mississippian people lived on these lands from 800 CE to the 1600s. Deeply rooted in agriculture and communal life, they built complex chiefdoms centered around earthen mounds used for ceremonies and burials.</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" alt="Native Mounds">
                    <h2>Stewardship of Land</h2>
                    <p>For the native tribes, land was a living system to be respected, not owned. Sustainable hunting, rotational agriculture, and seasonal migration prevented resource depletion. They introduced the region's first musical traditions—drumming and chanting.</p>
                </div>
            </div>`
    },
    2: {
        title: "A Place Takes Root",
        content: `
            <div class="article-grid">
                <div class="card">
                      <img src="img3.jpg" class="article-img" alt="Log Cabins">
                    <h2>Birth of a Settlement</h2>
                    <p>In the late 1700s, European settlers were drawn to the fertile soil. Following the establishment of Fort Nashborough in 1779, families began building permanent homes, transitioning from frontier survival to habitation.</p>
                </div>
                <div class="card">
                    <h2>Community & Learning</h2>
                    <p>Farming was the foundation. Natural springs determined farm locations; one such spring gave rise to the Boiling Springs Academy, marking a shift from survival to education and structured community life.</p>
                </div>
            </div>`
    },
    3: {
        title: "Mansions & Civil War",
        content: `
            <div class="article-grid">
                <div class="card">
                    <div class="img-placeholder"><img src="images/img5.jpg" alt="Image 5: Ravenswood Mansion"></div>
                    <h2>Architecture of Ambition</h2>
                    <p>The transition to Greek Revival mansions, like the Alexander Smith House (Ravenswood), signaled economic prosperity. These homes were symbols of social change in Williamson County.</p>
                </div>
                <div class="card">
                    <h2>The Civil War</h2>
                    <p>Brentwood’s proximity to Nashville made it a strategic pivot point. The Battle of Brentwood (1863) brought raids and destruction. The end of the war dismantled the plantation system, forcing an economic transition.</p>
                </div>
            </div>`
    },
    4: {
        title: "Iron Paths Connect",
        content: `
            <div class="article-grid">
                <div class="card">
                    <div class="img-placeholder"><img src="images/img7.jpg" alt="Image 7: Steam Train"></div>
                    <h2>The Iron Horse</h2>
                    <p>The arrival of the Nashville and Decatur Railroad in 1859 shifted the town center. It allowed farmers to ship crops and residents to access Nashville’s cultural scene, breaking rural isolation.</p>
                </div>
            </div>`
    },
    5: {
        title: "Music & Pop Culture",
        content: `
            <div class="article-grid">
                <div class="card">
                     <div class="img-placeholder"><img src="images/img10.jpg" alt="Image 10: Microphone/Stage"></div>
                    <h2>A Safe Haven</h2>
                    <p>While Nashville is the stage, Brentwood is the home. It serves as a sanctuary for artists like Taylor Swift and Dolly Parton who seek a normal life away from the spotlight.</p>
                </div>
                <div class="card">
                    <h2>Future Creators</h2>
                    <p>Events like Brentfest nurture new talent. Rising stars such as Conner Smith and Thomas Day are taking the spotlight, proving the "Music City" legacy continues here.</p>
                </div>
            </div>`
    },
    6: {
        title: "Modern Education",
        content: `
            <div class="article-grid">
                <div class="card">
                    <h2>Academic Excellence</h2>
                    <p>The 2000s saw a population boom transforming Williamson County Schools into nationally recognized institutions. Facilities for arts and athletics have attracted families prioritizing education.</p>
                </div>
            </div>`
    },
    7: {
        title: "Interactive Map",
        content: `
            <p style="text-align:center; margin-bottom:20px;">Explore the local attractions that define Brentwood today.</p>
            <div id="map-frame">
                <div class="pin" style="top:30%; left:40%;" data-label="Ravenswood Mansion"></div>
                <div class="pin" style="top:50%; left:60%;" data-label="Crockett Park"></div>
                <div class="pin" style="top:15%; left:75%;" data-label="Dyer Observatory"></div>
                <div class="pin" style="top:70%; left:30%;" data-label="Hill Center"></div>
            </div>
            <div class="img-placeholder" style="margin-top:20px;"><img src="images/img13.jpg" alt="Image 13: Map Overview"></div>`
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
                    <li>[Add full citations from your document here]</li>
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
        nodes[id-1].classList.add('active');

        // 5. Fade In
        display.style.opacity = '1';
        window.scrollTo(0,0);
    }, 200);
}

// Initialize
loadChapter(1);
