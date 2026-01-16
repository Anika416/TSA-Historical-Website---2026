// --- CONTENT DATABASE ---
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" class="article-img" alt="First Storytellers">
                    <h2>The First Storytellers</h2>
                    <p>Long before Nashville was known as "Music City," the Mississippian people built complex societies known as chiefdoms here. They used river systems as highways for trade and were the first to introduce traditions of music through drumming and chanting. Their earthen mounds served as centers for both ceremony and burial, rooting the land's identity in communal performance.</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" alt="Native Stewardship">
                    <h2>Stewardship of Land</h2>
                    <p>For native tribes, land was not property but a living system. This stewardship was reflected in sustainable hunting and rotational agriculture. Their cultural legacy persists today through the rolling hills and sacred springs they protected, as well as the name "Tennessee" itself, which is derived from the Cherokee village "Tanasi."</p>
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
                    <p>In 1779, Fort Nashborough was established as a defensive stronghold and gateway for families pushing southward. Early settlers like the Johnson family invested in the land, building permanent homes and establishing the social networks that turned a temporary frontier into a long-term community.</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Boiling Springs">
                    <h2>Community & Learning</h2>
                    <p>Early life was built on farming staples like corn and wheat. Natural landmarks like springs determined where homes were built; one such spring supported the community until it eventually gave rise to Boiling Springs Academy, symbolizing a cultural shift from survival to education.</p>
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
                    <p>The 1800s saw the rise of grand homes like Ravenswood Mansion, reflecting the evolution from basic log cabins to formal Greek Revival architecture. These symmetrical, vertically-oriented designs became symbols of the social and economic prosperity of Williamson County.</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War">
                    <h2>The Civil War</h2>
                    <p>The Battle of Brentwood in 1863 brought severe damage and military occupation. The emancipation of enslaved people transformed the local labor system, and while the recovery was slow, it set the stage for major social change and the eventual modernization of Middle Tennessee.</p>
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
                    <p>The arrival of the Nashville and Decatur Railroad in 1859 shifted the town center to a new depot. This connectivity allowed farmers to reach larger markets and gave residents easy access to Nashville’s cultural scene, including the Ryman Auditorium, ending the community's rural isolation.</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Growth">
                    <h2>Travel and Growth</h2>
                    <p>Scheduled trains made travel predictable for the first time. The railroad-supported economy stabilized the region after the war, encouraging families to settle in Brentwood for its balance of rural quiet and urban access, laying the foundation for the suburban hub it is today.</p>
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
                    <p>Brentwood has become a safe haven for icons like Taylor Swift and Dolly Parton, who value the city's serene, familial atmosphere. It supports the state's music industry by providing a stable home for artists to balance professional fame with a private lifestyle.</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Influence">
                    <h2>Creative Community</h2>
                    <p>The community fuels music through education and local infrastructure. By encouraging musical interest in younger generations and cultivating an appreciation for live performance, Brentwood enriches the broader culture of Tennessee while remaining a quiet cornerstone of the industry.</p>
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
                    <p>The 2000s population boom led to the rapid expansion of Williamson County Schools. National recognition for academic excellence followed, with significant funding dedicated to state-of-the-art facilities for theater, band, and athletics.</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Talent">
                    <h2>Nurturing Future Creators</h2>
                    <p>Schools serve as a primary social hub, where theater programs and music ensembles nurture the next generation. Events like Brentfest provide a starting point for rising stars like Conner Smith, proving that Brentwood’s music-based culture is constantly evolving.</p>
                </div>
            </div>`
    },
    7: {
        title: "Interactive Map",
        content: `
            <p style="text-align:center; margin-bottom:20px;">The accumulation of culture and different types of people across Brentwood.</p>
            <div id="map-frame">
                <div class="pin" style="top:30%; left:40%;" data-label="Ravenswood Mansion"></div>
                <div class="pin" style="top:50%; left:60%;" data-label="Crockett Park"></div>
                <div class="pin" style="top:15%; left:75%;" data-label="Dyer Observatory"></div>
                <div class="pin" style="top:70%; left:30%;" data-label="Hill Center"></div>
            </div>
            <div style="margin-top:20px;"><img src="img13.jpg" class="article-img" alt="Map Overview"></div>`
    },
    8: {
        title: "References",
        content: `
            <div class="card">
                <h2>Works Cited</h2>
                <ul class="ref-list">
                    <li>Brentwood Historic Commission. "History of Brentwood."</li>
                    <li>Tennessee State Museum. "Mississippian Culture in Middle TN."</li>
                    <li>Williamson County Heritage Foundation. "Pres
