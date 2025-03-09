document.addEventListener('DOMContentLoaded', () => {
    const plantCellData = {
        overview: {
            title: "Plant Cells: Nature's Living Factories",
            description: "Plant cells are sophisticated biological units with unique structures that enable photosynthesis, structural support, and remarkable adaptability.",
            keyFeatures: [
                "Rigid cell wall",
                "Chloroplasts for photosynthesis",
                "Large central vacuole",
                "Ability to generate own food"
            ]
        },
        organelles: [
            {
                "name": "Plasma Membrane",
                "scientificName": "Phospholipid Bilayer",
                "description": "Separates the cell from its environment and regulates the movement of materials in and out of the cell.",
                "functions": [
                    "Control substance entry and exit",
                    "Maintain cell boundary",
                    "Facilitate cellular communication"
                ],
                "funFacts": [
                    "Composed of phospholipids and proteins",
                    "Selectively permeable membrane",
                    "Can change shape and fluidity"
                ],
                "size": "5-10 nanometers thick",
                "image": "cell-membrane.png"
            },
            {
                "name": "Mitochondria",
                "scientificName": "Cellular Powerhouses",
                "description": "Cellular organelles responsible for oxidizing ATP and generating energy.",
                "functions": [
                    "Oxidize ATP",
                    "Produce cellular energy",
                    "Conduct cellular respiration"
                ],
                "funFacts": [
                    "Contains its own DNA",
                    "Nicknamed the 'powerhouse of the cell'",
                    "Number varies based on cell's energy needs"
                ],
                "size": "0.5-1 micrometer long",
                "image": "mitochondria.jpg"
            },
            {
                "name": "Rough Endoplasmic Reticulum",
                "scientificName": "Rough ER",
                "description": "Membrane network specialized in protein synthesis with attached ribosomes.",
                "functions": [
                    "Protein synthesis",
                    "Protein folding",
                    "Protein transport"
                ],
                "funFacts": [
                    "Covered with ribosomes",
                    "Produces proteins for secretion",
                    "Part of the cellular protein factory"
                ],
                "size": "Extends throughout cell",
                "image": "rough-er.png"
            },
            {
                "name": "Smooth Endoplasmic Reticulum",
                "scientificName": "Smooth ER",
                "description": "Membrane network specialized in lipid synthesis and drug metabolism.",
                "functions": [
                    "Lipid synthesis",
                    "Drug metabolism",
                    "Calcium ion storage"
                ],
                "funFacts": [
                    "No attached ribosomes",
                    "Important in liver cell detoxification",
                    "Helps in steroid hormone production"
                ],
                "size": "Extends throughout cell",
                "image": "smooth er.jpg"
            },
            {
                "name": "Cell Wall",
                "scientificName": "Cellulosic Membrane",
                "description": "A rigid layer that provides support, protection, and shape to the cell, consisting mainly of cellulose.",
                "functions": [
                    "Provide structural support",
                    "Protect cell from mechanical damage",
                    "Maintain cell shape"
                ],
                "funFacts": [
                    "Composed primarily of cellulose",
                    "Unique to plant and fungal cells",
                    "Can be several micrometers thick"
                ],
                "size": "0.1-1 micrometer thick",
                "image": "cell-wall.jpg"
            },
            {
                "name": "Nucleus",
                "scientificName": "Karyon",
                "description": "The control center of the cell, containing DNA that directs all cell activities.",
                "functions": [
                    "Store genetic information",
                    "Control gene expression",
                    "Regulate cell reproduction"
                ],
                "funFacts": [
                    "Contains chromosomes",
                    "Surrounded by nuclear membrane",
                    "Can change size during different cell stages"
                ],
                "size": "3-10 micrometers in diameter",
                "image": "nucleus.jpg"
            },
            {
                "name": "Chloroplasts",
                "scientificName": "Chloroplastida",
                "description": "Specialized organelles that allow plants to capture the energy of the Sun in energy-rich molecules.",
                "functions": [
                    "Photosynthesis",
                    "Convert light energy to chemical energy",
                    "Produce glucose and oxygen"
                ],
                "funFacts": [
                    "Contains its own DNA",
                    "Believed to have originated from ancient bacteria",
                    "Can change shape based on light conditions"
                ],
                "size": "4-6 micrometers long",
                "image": "chloroplast.jpg"
            },
            {
                "name": "Vacuoles",
                "scientificName": "Cellular Storage Compartments",
                "description": "Large membrane-bound sacs that allow plant cells to change size and store materials.",
                "functions": [
                    "Maintain cell turgor pressure",
                    "Store nutrients and waste",
                    "Regulate cell size"
                ],
                "funFacts": [
                    "Can occupy up to 90% of cell volume",
                    "Important for plant cell growth",
                    "Contains water and dissolved substances"
                ],
                "size": "Up to 90% of cell volume",
                "image": "vacuole.jpg"
            }
        ]
        ,
        scientificInsights: [
            {
                title: "Photosynthesis Process",
                description: "The remarkable ability of plant cells to convert sunlight into chemical energy.",
                mechanisms: [
                    "Light-dependent reactions",
                    "Calvin cycle",
                    "Carbon dioxide fixation"
                ]
            }
        ],
        researchFrontiers: [
            "Genetic modification for crop resilience",
            "Understanding plant cell communication",
            "Biomimetic material development",
            "Climate change adaptation strategies"
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
            <h2>${plantCellData.overview.title}</h2>
            <p>${plantCellData.overview.description}</p>
            <div class="key-features">
                <h3>Key Features</h3>
                <ul>
                    ${plantCellData.overview.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        contentContainer.appendChild(overviewSection);

        // Organelles Section
        const organellesSection = document.createElement('section');
        organellesSection.classList.add('organelles-section');
        organellesSection.innerHTML = '<h2>Cellular Organelles</h2>';
        
        plantCellData.organelles.forEach(organelle => {
            const organelleElement = createOrganelleSection(organelle);
            organellesSection.appendChild(organelleElement);
        });
        contentContainer.appendChild(organellesSection);

        // Scientific Insights Section
        const insightsSection = document.createElement('section');
        insightsSection.classList.add('scientific-insights');
        insightsSection.innerHTML = `
            <h2>Scientific Insights</h2>
            ${plantCellData.scientificInsights.map(insight => `
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
                ${plantCellData.researchFrontiers.map(frontier => `<li>${frontier}</li>`).join('')}
            </ul>
        `;
        contentContainer.appendChild(frontiersSection);
    }

    // Always run the render function
    renderCellPage();
});