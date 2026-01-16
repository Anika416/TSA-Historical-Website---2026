// --- CONTENT DATABASE ---
const db = {
    1: {
        title: "Before the Pages Began",
        content: `
            <div class="article-grid">
                <div class="card">
                   <img src="img1.jpg" class="article-img" style="max-height: 140px !important;" alt="Native Framework">
                    <h2>The First Storytellers</h2>
                    [cite_start]<p>Long before Nashville earned the nickname "Music City," the Mississippian people lived on these lands from 800 CE to the 1600s[cite: 2]. [cite_start]They built complex societies known as chiefdoms centered around earthen mounds used for ceremonies and burials[cite: 4, 5].</p>
                </div>
                <div class="card">
                    <img src="img2.jpg" class="article-img" style="max-height: 140px !important;" alt="Native Mounds">
                    <h2>Stewardship of Land</h2>
                    [cite_start]<p>For native tribes, land was a living system to be respected, not owned[cite: 11]. [cite_start]Their stewardship included sustainable hunting and rotational agriculture, which prevented the overuse of resources[cite: 15].</p>
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
                    [cite_start]<p>In the early 1800s, European settlers established permanent homes[cite: 28]. [cite_start]The first American settlement began in 1779 with Fort Nashborough, which served as a center for trade and migration[cite: 31, 32].</p>
                </div>
                <div class="card">
                    <img src="img4.jpg" class="article-img" alt="Boiling Springs">
                    <h2>Community & Learning</h2>
                    [cite_start]<p>Farming was the foundation of early life, with small family farms dominating the landscape[cite: 39, 42]. [cite_start]Natural springs like the one at Boiling Springs Academy were central to the community[cite: 45, 46].</p>
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
                    [cite_start]<p>Historic homes like Ravenswood Mansion reflect the evolution from frontier settlements to established agricultural communities[cite: 51]. [cite_start]These homes featured Greek Revival details like columns and symmetrical frontage[cite: 54, 56].</p>
                </div>
                <div class="card">
                    <img src="img6.jpg" class="article-img" alt="Civil War">
                    <h2>The Civil War</h2>
                    [cite_start]<p>Brentwood was a strategic point during the Civil War, experiencing significant military movement and conflict[cite: 67]. [cite_start]The war reshaped the local economy and ended the plantation-based system[cite: 74, 76].</p>
                </div>
            </div>`
    },
    4: {
        title: "Iron Paths Connect",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img7.jpg" class="article-img" alt="Steam Train">
                    <h2>The Iron Horse</h2>
                    [cite_start]<p>The railroad arrived in 1859, connecting Brentwood to Nashville and shifting the town center to a new depot[cite: 91, 92]. [cite_start]It allowed farmers to reach larger markets and reduced rural isolation[cite: 93, 105].</p>
                </div>
                <div class="card">
                    <img src="img8.jpg" class="article-img" alt="Railroad Station">
                    <h2>Growth of the Depot</h2>
                    [cite_start]<p>The railroad transformed Brentwood into a connected hub, laying the foundation for suburban growth[cite: 112, 113]. [cite_start]It encouraged families to settle in the area for its balance of rural quiet and urban access[cite: 108].</p>
                </div>
            </div>`
    },
    5: {
        title: "Music & Pop Culture",
        content: `
            <div class="article-grid">
                <div class="card">
                     <img src="img9.jpg" class="article-img" alt="Nashville Stage">
                    <h2>A Safe Haven</h2>
                    [cite_start]<p>Brentwood serves as a sanctuary for artists like Taylor Swift and Dolly Parton, offering a private lifestyle away from the spotlight[cite: 116, 120]. [cite_start]This balance allows creativity to blossom in a familial setting[cite: 117].</p>
                </div>
                <div class="card">
                    <img src="img10.jpg" class="article-img" alt="Microphone">
                    <h2>Future Creators</h2>
                    [cite_start]<p>Local venues like Brentfest nurture rising stars such as Conner Smith[cite: 148, 149]. [cite_start]School curriculums in band and theater provide essential exposure for the next generation[cite: 126, 143].</p>
                </div>
            </div>`
    },
    6: {
        title: "Modern Education",
        content: `
            <div class="article-grid">
                <div class="card">
                    <img src="img11.jpg" class="article-img" alt="Modern School">
                    <h2>Academic Excellence</h2>
                    [cite_start]<p>During the 2000s, Williamson County Schools gained national recognition for academic excellence[cite: 129, 130]. [cite_start]Expansion included new facilities for music programs, aiding the growth of the local musician population[cite: 132, 134].</p>
                </div>
                <div class="card">
                    <img src="img12.jpg" class="article-img" alt="Sports and Arts">
                    <h2>Holistic Development</h2>
                    [cite_start]<p>Local schools nurture the next generation of creative thinkers through theater and music ensembles[cite: 139, 143]. [cite_start]These programs serve as a unifying force for the community[cite: 144].</p>
                </div>
            </div>`
    },
    7: {
        title: "Interactive Map",
        content: `
            [cite_start]<p style="text-align:center; margin-bottom:20px;">The accumulation of culture and different types of people[cite: 151].</p>
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
                    <li>Brentwood Historic Commission. [cite_start]"History of Brentwood." [cite: 80]</li>
                    <li>Smith, J. (2020). [cite_start]*The Battle of Brentwood: A Civil War History*. [cite: 80]</li>
                    <li>Williamson County Schools. [cite_start]"District Achievements 2023." [cite: 130]</li>
                    <li>Tennessee State Museum. [cite_start]"Mississippian Culture in Middle TN." [cite: 11]</li>
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
        if(nodes[id-1]) {
            nodes[id-1].classList.add('active');
        }

        display.style.opacity = '1';
        window.scrollTo(0,0);
    }, 200);
}

loadChapter(1);
