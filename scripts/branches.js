let section = document.createElement('section');
section.className = "branches";

// Export the fetchBranches function for use in other modules
export async function fetchBranches(targetSelector = '.branche-items') {
    let branch_div = document.querySelector(targetSelector);
    if (!branch_div) {
        console.error('Target element not found:', targetSelector);
        return;
    }
    
    let branchesArray = await fetch('./backend/branches.json');
    let branhes = await branchesArray.json();
    let numbering = 1;
    await branhes.forEach(element => {
        let branche = branchesHTMLGenerator(element , numbering);
        numbering++;
        section.innerHTML += branche;
        
    });
    branch_div.appendChild(section);
}

// Export the branchesHTMLGenerator function for use in other modules
export function branchesHTMLGenerator(branches , numbering) {
    let branch=`
        <section class="branch branch${numbering}">
            <h2>${branches.branchName}</h2>
            <div class="info">
                <span class="about-branch">
                    <span><b>Location:</b>${branches.location}</span>
                    <span><b>About:</b> ${branches.about}</span>
                    <span><b>Facilities:</b> ${branches.facilities}</span>
                    <span><b>Timings:</b> ${branches.timing} PM</span>
                </span>
                <section class="image">
                    <img src="${branches.image}" alt="">
                </section>
            </div>
            
        </section>
    `;
    return branch;
}

// Auto-initialize when this script is loaded directly (for branches.html)
if (document.querySelector('.branche-items')) {
    fetchBranches();
}
