// --- CONTENT DATABASE ---
// This database contains the full text from the TSA documentation.
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" class="article-img" alt="First Storytellers">
                    <h2>The First Storytellers</h2>
                    <p>Long before Nashville earned the nickname "Music City," the Mississippian people lived on these lands from 800 CE to the 1600s. Deeply rooted in agriculture and communal life, they built complex societies known as chiefdoms centered around earthen mounds used for ceremonies and burials. They used river systems as highways for trade and were the first to introduce musical traditions of drumming and chanting.</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" alt="Native Stewardship">
                    <h2>Stewardship of Land</h2>
                    <p>For native tribes, land was a living system to be respected, not owned. Sustainable hunting, rotational agriculture, and seasonal migration prevented resource depletion. Their legacy lives on in the natural landscape of Brentwood and in the name "Tennessee," derived from the Cherokee village "Tanasi."</p>
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
                    <p>In the early 1800s, European settlers established permanent homes, drawn by fertile soil and fresh water. The first American settlement began in 1779 with Fort Nashborough, which served as a center for trade and migration, eventually pushing settlement southward into what is now Williamson County.</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Boiling Springs">
                    <h2>Community & Learning</h2>
                    <p>Farming was the foundation of early life, with small family farms dominating the landscape. Natural springs determined farm locations; one such spring supported the community until it eventually gave rise to Boiling Springs Academy, symbolizing a shift from survival toward education.</p>
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
                    <p>Historic homes like Ravenswood Mansion reflect the evolution from log cabins to formal residences. These homes, featuring symmetrical frontage and multi-story designs, are symbols of Middle Tennessee's architectural heritage and the social ambitions of early families.</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War">
                    <h2>The Civil War</h2>
                    <p>Brentwood was a pivotal point during the Civil War, experiencing significant military movement and conflict, including the Battle of Brentwood in 1863. The war reshaped the local economy and ended the plantation-based system, setting the stage for the eventual modernization of the region.</p>
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
                    <p>The railroad arrived in 1859, connecting Brentwood to Nashville and shifting the town center to a new depot. It allowed farmers to ship crops to larger markets and gave residents access to Nashville’s cultural scene, effectively ending the town's rural isolation.</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Growth">
                    <h2>Growth and Travel</h2>
                    <p>The railroad introduced scheduled passenger trains, making travel predictable and reducing isolation. This connectivity laid the foundation for Brentwood's transformation into a suburban community, encouraging families to settle in the area for its balance of rural quiet and urban access.</p>
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
                    <p>Brentwood serves as a sanctuary for artists like Taylor Swift and Dolly Parton, offering a private lifestyle away from the spotlight while remaining close to the Nashville music hub. This environment allows for creativity to blossom in a familial setting.</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Future Creators">
                    <h2>Future Creators</h2>
                    <p>The community enriches musical culture by supporting local programs and venues like Brentfest, which serve as starting points for rising stars like Conner Smith. School curriculums in band and theater provide essential exposure for the next generation.</p>
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
                    <p>During the 2000s, Williamson County Schools gained national recognition for academic excellence following a rapid population boom. Expansion included new facilities for music programs, aiding the growth of the local musician population.</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Nurturing Talent">
                    <h2>Nurturing the Next Generation</h2>
                    <p>Local schools nurture the next generation of creative thinkers through theater and music ensembles. These programs serve as a unifying force for the city, where student performances are primary social gatherings, cementing the city's modern identity.</p>
                </div>
            </div>`
    },
    7: {
        title: "Interactive Map",
        content: `
            <p style="text-align:center; margin-bottom:20px;">The accumulation of culture and different types of people.</p>
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
                    <li>Brentwood Historic Commission. "History of Brentwood."</li>
                    <li>Tennessee State Museum. "Mississippian Culture in Middle TN."</li>
                    <li>Williamson County Heritage Foundation. "Preservation Awards."</li>
                    <li>American Battlefield Trust. "The Battle of Brentwood."</li>
                </ul>
            </div>`
    }
};

// --- LOGIC ---
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
        if(nodes[id-1]) {
            nodes[id-1].classList.add('active');
        }

        display.style.opacity = '1';
        window.scrollTo(0,0);
    }, 200);
}

// Initialize
loadChapter(1);
