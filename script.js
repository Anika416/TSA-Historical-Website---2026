// --- CONTENT DATABASE ---
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" class="article-img" alt="Native Framework">
                    <h2>The First Storytellers</h2>
                    <p>Long before Nashville was known as Music City, the Mississippian people lived on these lands from 800 CE to the 1600s. They built organized societies known as chiefdoms centered around earthen mounds used for ceremonies and burials. These traditions represent the earliest cultures in the region deeply rooted in sound and communal performance.</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" alt="Native Mounds">
                    <h2>Stewardship of Land</h2>
                    <p>For native tribes, land was a living system to be respected. This stewardship was reflected in sustainable hunting and rotational agriculture. Their legacy lives on in the name Tennessee, derived from the Cherokee village Tanasi, and in the natural landscape they shaped for generations.</p>
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
                    <p>In the early 1800s, European settlers established permanent homes, drawn by fertile soil and fresh water. The establishment of Fort Nashborough in 1779 served as a gateway that pushed settlement southward into what is now Williamson County and Brentwood.</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Boiling Springs">
                    <h2>Community & Learning</h2>
                    <p>Farming became the foundation of life, with small family farms dominating the landscape. Natural springs were central to these households, eventually leading to the creation of Boiling Springs Academy, which symbolized a shift toward formal education.</p>
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
                    <p>Historic homes like Ravenswood Mansion reflect the evolution from log cabins to formal residences. These grand homes featured symmetrical frontage and multi-story designs, standing as markers of social and economic change in the region.</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War">
                    <h2>The Civil War</h2>
                    <p>Due to its proximity to Nashville, Brentwood was a strategic point during the Civil War. The Battle of Brentwood in 1863 and the eventual end of the plantation system reshaped the local economy and paved the way for modernization.</p>
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
                    <p>The railroad arrived in 1859, connecting Brentwood to Nashville and shifting the town center to a new depot. It allowed farmers to ship crops to larger markets and gave residents access to the cultural scene of the city.</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Growth">
                    <h2>Growth and Travel</h2>
                    <p>Scheduled passenger trains made travel predictable, reducing isolation and connecting Brentwood to the region's social life. This connectivity laid the foundation for its eventual transformation into a suburban community.</p>
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
                    <p>Brentwood serves as a sanctuary for artists like Taylor Swift and Dolly Parton, offering a private lifestyle away from the spotlight. Its serene environment allows creativity to blossom in a familial setting while remaining close to Nashville's music hub.</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Creators">
                    <h2>Future Creators</h2>
                    <p>The community enriches musical culture by supporting local programs and venues like Brentfest. School curriculums in band and theater provide essential exposure for the next generation of rising stars.</p>
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
                    <p>During the 2000s, Williamson County Schools gained national recognition for academic excellence. Rapid expansion included new facilities and improvements to music programs, helping the growing musician population.</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Development">
                    <h2>Holistic Development</h2>
                    <p>Local schools nurture creative thinkers through theater and music ensembles. These programs serve as a unifying force for the community, where student performances are major social gatherings.</p>
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
            </div>`
    },
    8: {
        title: "References",
        content: `
            <div class="card">
                <h2>Works Cited</h2>
                <ul class="ref-list">
                    <li>Brentwood Historic Commission. History of Brentwood.</li>
                    <li>Tennessee State Museum. Mississippian Culture in Middle Tennessee.</li>
                    <li>Williamson County Heritage Foundation. Preservation Awards.</li>
                    <li>American Battlefield Trust. The Battle of Brentwood.</li>
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
