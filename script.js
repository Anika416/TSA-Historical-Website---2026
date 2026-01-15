const contentData = {
    ch1: {
        title: "Before the Pages Began",
        theme: "theme-global",
        html: `<h3>The First Storytellers</h3><p>Content from Document...</p><div class='img-frame'>[Image 1]</div>`
    },
    ch5: {
        title: "Music & Pop Culture",
        theme: "theme-pop",
        html: `<h3>Safe Haven for Stars</h3><p>Brentwood became a sanctuary for artists like Taylor Swift[cite: 120].</p><div class='img-frame'>[Image 10 - Microphones/Stage]</div>`
    },
    ch7: {
        title: "Explore Local Attractions",
        theme: "theme-global",
        html: `<p>The accumulation of culture[cite: 151].</p>
               <div id='map-canvas' style='height:400px; background:#aed6f1; border:3px solid var(--gold);'>
                <p style='text-align:center; padding-top:180px;'>[Interactive Map Interface]</p>
               </div>`
    }
    // Add other chapters similarly...
};

function changeChapter(id) {
    const main = document.getElementById('content-viewport');
    const display = document.getElementById('current-era');
    
    // Clear old classes and content
    main.className = contentData[id].theme;
    main.innerHTML = `
        <section class="page active">
            <h1>${contentData[id].title}</h1>
            ${contentData[id].html}
        </section>
    `;
    
    // Update Dropdown Label
    display.innerText = contentData[id].title;
    window.scrollTo(0,0);
}
