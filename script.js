

const third = 1 / 3
const paper = 'paper'
const sci = 'scissors'
const rock = 'rock'


const AIPlay = () => {
    let rand = Math.random()
    let ai = ''

    if (rand < third) {
        ai = rock
    } else if (rand < (third * 2)) {
        ai = paper
    } else {
        ai = sci
    }
    return ai
}


const RPS = (playerSel, AIsel) => {

    if (playerSel === AIsel) {
        return null
    } else {

        let playerWon = true


        switch (playerSel) {
            case rock:

                if (AIsel === paper) {
                    playerWon = false
                    return { playerWon, AIsel, playerSel }
                } else if (AIsel === sci) {
                    return { playerWon, AIsel, playerSel }
                }
                break;

            case paper:
                if (AIsel === sci) {
                    playerWon = false
                    return { playerWon, AIsel, playerSel }
                } else if (AIsel === rock) {
                    return { playerWon, AIsel, playerSel }

                }

                break;

            case sci:
                if (AIsel === paper) {
                    return { playerWon, AIsel, playerSel }

                } else if (AIsel === rock) {
                    playerWon = false
                    return { playerWon, AIsel, playerSel }
                }

                break;

            default:
                return null

        }
    }

}

const Game = () => {

    let playerScore = 0
    let PCScore = 0
    let playerWon

    alert('ROCK SCISSORS PAPER\n----FIVE ROUNDS----')

    for (i = 1; i < 6; i++) {

        const playerInput = prompt(`Round ${i}\nShoot your shot...`).toLowerCase()
        const AIChoice = AIPlay()
        let res = RPS(playerInput, AIChoice)

        console.log(`ROUND ${i}\nPlayer Choice: ${playerInput}\nPC Choice: ${AIChoice}`)

        if (res == null) {
            console.log("It's a tie, or maybe a typo, repeat the round...")
            i--
        } else {
            if (res.playerWon) {
                playerScore += 1
                console.log(`You Won, ${res.playerSel} beats ${res.AIsel}`)
            } else {
                PCScore += 1
                console.log(`You Lose, ${res.AIsel} beats ${res.playerSel}`)
            }
        }

        console.log(`SCORE\nPC: ${PCScore} - Player: ${playerScore}`)

    }

    playerScore > PCScore
        ? console.log(`YOU WON\nFINAL SCORE Player: ${playerScore} - PC: ${PCScore}`)
        : console.log(`YOU LOSE\nFINAL SCORE Player: ${playerScore} - PC: ${PCScore}`)
}

Game()