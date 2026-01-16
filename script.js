const db = {
    1: {
        title: "Before the Pages Began",
        theme: "theme-ch1",
        html: `
            <article class="full-article card">
                <figure class="article-image">
                    <img src="images/img1.jpg" alt="Native Landscape of Middle Tennessee">
                    <figcaption>[Image 1] - The landscape before settlement.</figcaption>
                </figure>
                <h2>The First Storytellers of the Land</h2>
                <p>Long before Nashville earned the nickname "Music City," and before Brentwood existed and centuries before the first European settlers colonized these lands, the first inhabitants of the land were native tribes. The most abundant and influential of these tribes were the Mississippian people, who lived on these lands from 800 CE to the 1600s[cite: 2, 155].</p>
                <p>The Mississippian way of life was deeply rooted with agriculture, group traditions, and communal life. Rather than small, scattered groups, the Mississippians built complex, organized societies known as chiefdoms[cite: 3, 4, 156, 157]. At the center of these communities were mound-builds—earthen mounds used for ceremonies or burial[cite: 5, 159].</p>
                <p>The Mississippians were the first to introduce a tradition of music and sound, as both played a vital role in their ceremonies which used a combination of drumming, chanting, and dances[cite: 8, 162]. In many ways, their emphasis on communal gathering can be seen in present-day Nashville's identity[cite: 10, 164].</p>
            </article>

            <article class="full-article card">
                <figure class="article-image">
                    <img src="images/img2.jpg" alt="Mississippian Artifacts and Pottery">
                    <figcaption>[Image 2] - Artifacts showing the skilled craftsmanship of native tribes.</figcaption>
                </figure>
                <h2>Stewardship of the Land</h2>
                <p>For natives, the land and nature were not property to be owned, but a living system to be respected and worshipped[cite: 11, 166]. This stewardship was reflected in sustainable hunting practices, rotational agriculture, and seasonal migration patterns that prevented the overuse of resources[cite: 15, 171]. Rivers like the Cumberland were especially sacred to tribal culture as they served as a spiritual entity to the people[cite: 16, 172].</p>
            </article>`
    },
    5: {
        title: "Music & Pop Culture",
        theme: "theme-ch5",
        html: `
            <article class="full-article card">
                <h2>Music Culture</h2>
                <p>The smaller, more quiet city of Brentwood developed a distinctive culture within music shaped by the close relationship and proximity with Nashville[cite: 114]. Brentwood became a safe haven for artists, musicians, singers, and songwriters alike to dwell away from the spotlight while still being a music hub[cite: 116].</p>
            </article>
            <article class="full-article card">
                <figure class="article-image">
                    <img src="images/img10.jpg" alt="Modern musical performance in Brentwood">
                    <figcaption>[Image 10] - The modern music scene flourishing in local hubs.</figcaption>
                </figure>
                <h2>Future Creators</h2>
                <p>Specific new rising artists are constantly emerging, with artists such as Conner Smith and Thomas Day taking the spotlight[cite: 147]. The local venues and events, such as Brentfest, nurture talent and become the starting point for musical careers[cite: 148].</p>
            </article>`
    },
    7: {
        title: "Interactive Map",
        theme: "theme-ch7",
        html: `
            <article class="full-article card">
                <h2>The Accumulation of Culture</h2>
                <p>Explore the diverse cultural landscape of Brentwood through this interactive view[cite: 151].</p>
                <div id="interactive-map">
                   <img src="images/img13.jpg" alt="Interactive Map of Brentwood" style="width:100%; border-radius:10px;">
                   <p class="caption">[Image 13] - Interactive Map View</p>
                </div>
            </article>`
    }
};

function loadPage(id) {
    const main = document.getElementById('main-content');
    const nodes = document.querySelectorAll('.timeline-node');
    const page = db[id];

    if (!page) return;

    // Apply the theme to the body
    document.body.className = page.theme;
    
    // Smooth transition: Fade out, swap, fade in
    main.style.opacity = 0;
    setTimeout(() => {
        main.innerHTML = `<h1>${page.title}</h1><div class="articles-container">${page.html}</div>`;
        main.style.opacity = 1;
    }, 300);

    nodes.forEach((node, idx) => {
        node.classList.toggle('active', idx === (id - 1));
    });
}
