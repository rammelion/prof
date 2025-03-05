export default function MemoryGames() {
    // Given array


function addCards(num) {

    const array = [];

for (let i=0; i < num; i++) {
    let ranA = Math.floor(Math.random() * 90 + 10);
    let ranB = Math.floor(Math.random() * 90 + 10);
    array.push({
        'id': String(i) + 'A',
        'value' : String(ranA) + ' + ' + String(ranB),
    });
    array.push({
        'id': String(i) + 'B',
        'value': String(ranA + ranB),
    });
}

return array;
}

// Function to apply the Fisher-Yates Shuffle
function fisherYatesShuffle(array) {

    // Iterate over the array in reverse order
    for (let i = array.length - 1; i > 0; i--) {

        // Generate Random Index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get the shuffled array from the function
const cards = fisherYatesShuffle(addCards(6));



    return (
        <div className="card-container">
            {
                cards.map((card) => (
                    <div id={card.id} className="card" key={card.id}>

                        <p>
                            {card.value}
                        </p>
                    </div>
                ))
            }

        </div>

    )
}