document.addEventListener('DOMContentLoaded', () => {
    const animalCellData = {
        overview: {
            title: "Animal Cells: Complexity in Miniature",
            description: "Animal cells are intricate, dynamic structures that form the foundation of all animal life. Unlike plant cells, they possess unique characteristics that enable complex functions and adaptability.",
            keyFeatures: [
                "Flexible cell membrane",
                "No cell wall",
                "Diverse specialized organelles",
                "Capable of complex movements"
            ]
        },
        organelles: [
            {
                "name": "Cell Membrane",
                "scientificName": "Plasma Membrane",
                "description": "Surrounds the cell, acting as a selective barrier between the cell's internal environment and the outside world.",
                "functions": [
                    "Protect cellular contents",
                    "Control substance entry and exit",
                    "Maintain cell shape"
                ],
                "funFacts": [
                    "Composed of a phospholipid bilayer",
                    "Contains embedded proteins for communication",
                    "Able to change shape and fluidity"
                ],
                "size": "5-10 nanometers thick",
                "image": "cell-membrane.png"
            },
            {
                "name": "Cytoplasm",
                "scientificName": "Cellular Matrix",
                "description": "Gel-like substance that contains organelles and facilitates cellular processes.",
                "functions": [
                    "Support cellular organelles",
                    "Enable chemical reactions",
                    "Provide medium for cellular movement"
                ],
                "funFacts": [
                    "Consists of 70-80% water",
                    "Contains dissolved nutrients and enzymes",
                    "Helps maintain cell temperature"
                ],
                "size": "Fills entire cell volume",
                "image": "cystoplasm.jpg"
            },
            {
                "name": "Nucleus",
                "scientificName": "Karyon",
                "description": "The cell's control center that contains genetic material and directs cellular activities.",
                "functions": [
                    "Store DNA",
                    "Control gene expression",
                    "Regulate cell reproduction"
                ],
                "funFacts": [
                    "Contains chromosomes",
                    "Surrounded by a double-layered nuclear membrane",
                    "Can change size during different cell stages"
                ],
                "size": "3-10 micrometers in diameter",
                "image": "nucleus.png"
            },
            {
                "name": "Mitochondria",
                "scientificName": "Chondriosomes",
                "description": "Cellular powerhouses that break down food molecules and release energy.",
                "functions": [
                    "Produce ATP",
                    "Conduct cellular respiration",
                    "Generate heat for the cell"
                ],
                "funFacts": [
                    "Contains its own DNA",
                    "Believed to have originated from ancient bacteria",
                    "Number varies based on cell's energy needs"
                ],
                "size": "0.5-1 micrometer long",
                "image": "mitochondria1.jpg"
            },
            {
                "name": "Ribosomes",
                "scientificName": "Protein Synthesis Complexes",
                "description": "Tiny molecular machines responsible for synthesizing proteins.",
                "functions": [
                    "Translate genetic information",
                    "Assemble amino acids",
                    "Create protein chains"
                ],
                "funFacts": [
                    "Can be free in cytoplasm or attached to endoplasmic reticulum",
                    "Composed of RNA and proteins",
                    "Exist in thousands within a single cell"
                ],
                "size": "20-30 nanometers in diameter",
                "image": "ribosome.jpg"
            },
            {
                "name": "Endoplasmic Reticulum",
                "scientificName": "ER",
                "description": "A network of sacs that manufactures, processes, and transports chemical compounds.",
                "functions": [
                    "Protein and lipid synthesis",
                    "Chemical compound processing",
                    "Intracellular transportation"
                ],
                "funFacts": [
                    "Two types: Rough (with ribosomes) and Smooth",
                    "Extensive interconnected network",
                    "Helps in calcium storage"
                ],
                "size": "Extends throughout cell",
                "image": "endoplasmic-reticulum.jpg"
            },
            {
                "name": "Golgi Body",
                "scientificName": "Golgi Apparatus",
                "description": "Cellular packaging center that processes and secretes proteins.",
                "functions": [
                    "Modify and package proteins",
                    "Sort cellular products",
                    "Prepare proteins for secretion"
                ],
                "funFacts": [
                    "Looks like a stack of flattened membranes",
                    "Named after Camillo Golgi",
                    "Critical for protein modification"
                ],
                "size": "1-3 micrometers",
                "image": "golgi-body.jpg"
            },
            {
                "name": "Vacuoles",
                "scientificName": "Cellular Storage Vesicles",
                "description": "Membrane-bound organelles that handle waste products and provide storage.",
                "functions": [
                    "Store cellular waste",
                    "Maintain cell shape",
                    "Isolate harmful materials"
                ],
                "funFacts": [
                    "Smaller than plant cell vacuoles",
                    "Can change size and number",
                    "Help in cell maintenance"
                ],
                "size": "0.1-1 micrometer",
                "image": "vacuole.jpg"
            },
            {
                "name": "Centrosome",
                "scientificName": "Microtubule Organizing Center",
                "description": "Cellular structure that helps in cell division and chromosome separation.",
                "functions": [
                    "Organize microtubules",
                    "Assist in cell division",
                    "Form spindle fibers during mitosis"
                ],
                "funFacts": [
                    "Contains two perpendicular centrioles",
                    "Critical during cell reproduction",
                    "Helps in precise chromosome distribution"
                ],
                "size": "0.5-1 micrometer",
                "image": "centrosome.jpg"
            }
        ]
        ,
        scientificInsights: [
            {
                title: "Cellular Communication",
                description: "Animal cells communicate through complex signaling pathways, using chemical messengers and receptor proteins.",
                mechanisms: [
                    "Hormonal signaling",
                    "Neurotransmitter transmission",
                    "Immune system communication"
                ]
            }
        ],
        researchFrontiers: [
            "Stem cell research",
            "Cellular reprogramming",
            "Regenerative medicine",
            "Cancer cell behavior"
        ]
    };

    function createOrganelleSection(organelle) {
        const section = document.createElement('div');
        section.classList.add('organelle-detail');
        section.innerHTML = `
            <div class="organelle-header">
                <img src="${organelle.image}" alt="${organelle.name}">
                <div class="organelle-title">
                    <h3>${organelle.name}</h3>
                    <small>${organelle.scientificName}</small>
                </div>
            </div>
            <div class="organelle-content">
                <p>${organelle.description}</p>
                <div class="organelle-details">
                    <div class="functions">
                        <h4>Key Functions</h4>
                        <ul>
                            ${organelle.functions.map(func => `<li>${func}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="fun-facts">
                        <h4>Fun Facts</h4>
                        <ul>
                            ${organelle.funFacts.map(fact => `<li>${fact}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="size-info">
                    <strong>Typical Size:</strong> ${organelle.size}
                </div>
            </div>
        `;
        return section;
    }

    function renderCellPage() {
        const contentContainer = document.querySelector('main');
        
        // Clear any existing content
        contentContainer.innerHTML = '';
        
        // Overview Section
        const overviewSection = document.createElement('section');
        overviewSection.classList.add('cell-overview');
        overviewSection.innerHTML = `
            <h2>${animalCellData.overview.title}</h2>
            <p>${animalCellData.overview.description}</p>
            <div class="key-features">
                <h3>Key Features</h3>
                <ul>
                    ${animalCellData.overview.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        contentContainer.appendChild(overviewSection);

        // Organelles Section
        const organellesSection = document.createElement('section');
        organellesSection.classList.add('organelles-section');
        organellesSection.innerHTML = '<h2>Cellular Organelles</h2>';
        
        animalCellData.organelles.forEach(organelle => {
            const organelleElement = createOrganelleSection(organelle);
            organellesSection.appendChild(organelleElement);
        });
        contentContainer.appendChild(organellesSection);

        // Scientific Insights Section
        const insightsSection = document.createElement('section');
        insightsSection.classList.add('scientific-insights');
        insightsSection.innerHTML = `
            <h2>Scientific Insights</h2>
            ${animalCellData.scientificInsights.map(insight => `
                <div class="insight">
                    <h3>${insight.title}</h3>
                    <p>${insight.description}</p>
                    <div class="insight-details">
                        <h4>Key Mechanisms</h4>
                        <ul>
                            ${insight.mechanisms.map(mech => `<li>${mech}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        `;
        contentContainer.appendChild(insightsSection);

        // Research Frontiers Section
        const frontiersSection = document.createElement('section');
        frontiersSection.classList.add('research-frontiers');
        frontiersSection.innerHTML = `
            <h2>Current Research Frontiers</h2>
            <ul>
                ${animalCellData.researchFrontiers.map(frontier => `<li>${frontier}</li>`).join('')}
            </ul>
        `;
        contentContainer.appendChild(frontiersSection);
    }

    // Always run the render function
    renderCellPage();
});