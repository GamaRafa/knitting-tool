import './Home.css'

export function Home() {
    return (
        <div className='description'>
            <h2>Choose a tool from the navbar</h2>
            <div id="paragraphs">
                <p>
                    The <strong>Row counter</strong> tool keeps track of how many rows you've knitted.
                </p>
                <br />
                <p>
                    The <strong>Row counter with repetitions</strong> tool keeps track of how many rows you've knitted, and how many times you've repeated the pattern.
                </p>
                <br />
                <p>
                    The <strong>Increase calculator</strong> tool calculates the distribution of increases for a given number of stitches.
                </p>
                <br />
                <p>
                    The <strong>Decrease calculator</strong> tool calculates the distribution of decreases for a given number of stitches.
                </p>
                <br />
            </div>
        </div>
    )
}

