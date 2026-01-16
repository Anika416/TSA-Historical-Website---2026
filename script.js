// --- CONTENT DATABASE ---
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" class="article-img" alt="First Storytellers">
                    <h2>The First Storytellers</h2>
                    <p>The Mississippian people inhabited these lands from 800 CE to the 1600s, building complex societies known as chiefdoms. At the center of their communities were earthen mounds used for ceremonies and burials. Archaeological evidence suggests this area was part of a vast cultural network, using river systems as highways for trade and communication.</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" alt="Native Stewardship">
                    <h2>Stewardship of Land</h2>
                    <p>Native tribes viewed the land as a living system to be respected through sustainable hunting and rotational agriculture. Maize cultivation allowed for large populations and a class of skilled artisans who created pottery representing nature. They introduced the region's first musical traditions through drumming, chanting, and ceremonial dances.</p>
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
                    <p>In the late 1700s, European settlers were drawn to the fertile soil of the Central Basin. Following the 1779 establishment of Fort Nashborough, families began transitioning from frontier survival to permanent habitation. They utilized the land for farming tobacco, cotton, and corn, which formed the early economic backbone of the area.</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Boiling Springs">
                    <h2>Community & Learning</h2>
                    <p>The location of early farms was largely determined by natural springs. Near one of these springs, the Boiling Springs Academy was established. This marked a major cultural shift as the community moved beyond survival toward structured education and local governance, setting the stage for the Brentwood we know today.</p>
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
                    <p>Economic prosperity led to the rise of Greek Revival mansions, such as the Alexander Smith House, also known as Ravenswood. These grand residences were symbols of social status and progress in Williamson County, reflecting an era of massive architectural and agricultural expansion.</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War">
                    <h2>The Civil War</h2>
                    <p>Brentwood's proximity to Nashville made it a strategic pivot point during the Civil War. The Battle of Brentwood in 1863 brought destruction to the local infrastructure. The war's conclusion dismantled the plantation system, forcing the community to reinvent its economy and social structure for the first time.</p>
                </div>
            </div>`
    },
    4: {
        title: "Iron Paths Connect",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img7.jpg" class="article-img" alt="Iron Horse">
                    <h2>The Iron Horse</h2>
                    <p>The arrival of the Nashville and Decatur Railroad in 1859 shifted the center of the town toward a new railroad depot. This "Iron Horse" allowed local farmers to ship crops to distant markets and provided residents with easy access to Nashville’s growing cultural scene, effectively ending rural isolation.</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Travel">
                    <h2>Growth and Travel</h2>
                    <p>The introduction of scheduled passenger trains made travel predictable and frequent. The depot became the heart of the community, where people gathered to hear news from the outside world. This connectivity laid the essential groundwork for Brentwood's eventual transformation into a premier residential hub.</p>
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
                    <p>Brentwood serves as a sanctuary for music icons like Taylor Swift and Dolly Parton. It offers a private, familial environment away from the spotlight while remaining minutes away from Nashville's recording studios. The city maintains a vibrant music community that enriches the lives of residents and contributes to the state's vitality.</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Future Creators">
                    <h2>Future Creators</h2>
                    <p>The local culture fosters immense talent due to its roots in "Music City." Events like Brentfest nurture talent and serve as starting points for careers like Conner Smith’s. Curriculums in local schools, including band and choir, provide essential exposure for the next generation of performers and songwriters.</p>
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
                    <p>A population boom in the 2000s transformed Williamson County Schools into a nationally recognized powerhouse. The district is known for high test scores and a commitment to holistic development, attracting families from across the country who prioritize top-tier education and community support.</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Nurturing Talent">
                    <h2>The Heart of the Community</h2>
                    <p>Education in Brentwood goes beyond the classroom, with massive investments in arts and athletics. These programs serve as a unifying force for the city, where Friday night games and theater performances are the primary social gatherings for residents, cementing the city's modern identity.</p>
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
                    <li>City of Brentwood Parks and Recreation. "Ravenswood History."</li>
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
