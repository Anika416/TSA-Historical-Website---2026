// --- CONTENT DATABASE ---
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" class="article-img" style="max-height: 140px;" alt="Native Framework">
                    <h2>The First Storytellers</h2>
                    <p>Long before Nashville was "Music City," the Mississippian people lived here from 800 CE to the 1600s. They built complex societies called chiefdoms centered around earthen mounds. These mounds served as centers for ceremonies and burials, acting as the heart of their communal life.</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" style="max-height: 140px;" alt="Native Mounds">
                    <h2>Stewardship of Land</h2>
                    <p>For native tribes, the land was a living system to be respected. They used sustainable hunting and rotational agriculture to prevent resource depletion. They were the region's first musicians, using drumming and chanting in their sacred ceremonies.</p>
                </div>
            </div>`
    },
    2: {
        title: "A Place Takes Root",
        content: `
            <div class="article-grid">
                <div class="card">
                      <img src="img3.jpg" class="article-img" alt="Settlement">
                    <h2>Birth of a Settlement</h2>
                    <p>In the late 1700s, European settlers arrived for the fertile soil. Following the 1779 establishment of Fort Nashborough, families began building permanent homes, turning a frontier outpost into a community of farmers growing tobacco and corn.</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Boiling Springs">
                    <h2>Community & Learning</h2>
                    <p>Natural landmarks like springs determined where farms were located. The Boiling Springs Academy was founded near one of these springs, marking a shift from frontier survival toward education and local governance.</p>
                </div>
            </div>`
    },
    3: {
        title: "Mansions & Civil War",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img5.jpg" class="article-img" alt="Ravenswood">
                    <h2>Architecture of Ambition</h2>
                    <p>Economic prosperity led to grand Greek Revival mansions like Ravenswood. These homes were symbols of social status, featuring symmetrical designs and grand columns, representing the peak of architectural expansion before the Civil War.</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War">
                    <h2>The Civil War</h2>
                    <p>Brentwood's proximity to Nashville made it a strategic point. The Battle of Brentwood in 1863 brought destruction to the area. The war's end dismantled the plantation system, forcing a total reinvention of the local economy.</p>
                </div>
            </div>`
    },
    4: {
        title: "Iron Paths Connect",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img7.jpg" class="article-img" alt="Railroad">
                    <h2>The Iron Horse</h2>
                    <p>The 1859 arrival of the Nashville and Decatur Railroad shifted the town center to a new depot. This allowed farmers to reach larger markets and gave residents access to Nashville’s cultural scene, ending rural isolation.</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Growth">
                    <h2>Travel and Growth</h2>
                    <p>Scheduled passenger trains made travel predictable. The depot became a community hub where news was shared, laying the foundation for Brentwood’s transformation into a premier residential retreat.</p>
                </div>
            </div>`
    },
    5: {
        title: "Music & Pop Culture",
        content: `
            <div class="article-grid">
                <div class="card">
                     <img src="img9.jpg" class="article-img" alt="Sanctuary">
                    <h2>A Safe Haven</h2>
                    <p>Brentwood is a sanctuary for music icons like Taylor Swift and Dolly Parton. It offers a private lifestyle away from the spotlight while remaining minutes from Nashville’s recording studios, sustaining a vibrant music community.</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Creators">
                    <h2>Future Creators</h2>
                    <p>Local culture fosters talent through events like Brentfest, which nurture rising stars like Conner Smith. Music curriculums in local schools provide essential exposure for the next generation of performers.</p>
                </div>
            </div>`
    },
    6: {
        title: "Modern Education",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img11.jpg" class="article-img" alt="Excellence">
                    <h2>Academic Excellence</h2>
                    <p>A population boom in the 2000s transformed Williamson County Schools into a nationally recognized powerhouse. The district attracts families who prioritize top-tier education and community support.</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Development">
                    <h2>The Community Heart</h2>
                    <p>Education goes beyond the classroom with investments in arts and athletics. These programs serve as a unifying force, where student performances and games are the primary social gatherings.</p>
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
            </div>`
    },
    8: {
        title: "References",
        content: `
            <div class="card">
                <h2>Works Cited</h2>
                <ul class="ref-list">
                    <li>Brentwood Historic Commission. "History of Brentwood." Official City Website.</li>
                    <li>Smith, J. (2020). The Battle of Brentwood: A Civil War History.</li>
                    <li>Williamson County Schools. "District Achievements 2023."</li>
                    <li>Tennessee State Museum. "Mississippian Culture in Middle TN."</li>
                </ul>
            </div>`
    }
};

function loadChapter(id) {
    const display = document.getElementById('content-display');
    const nodes = document.querySelectorAll('.timeline-node');
    const body = document.body;
    display.style.opacity = '0';
    setTimeout(() => {
        const data = db[id];
        display.innerHTML = `<h1>${data.title}</h1>${data.content}`;
        body.className = `theme-ch${id}`;
        nodes.forEach(node => node.classList.remove('active'));
        if(nodes[id-1]) nodes[id-1].classList.add('active');
        display.style.opacity = '1';
        window.scrollTo(0,0);
    }, 200);
}

loadChapter(1);
