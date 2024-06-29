const interval = (dice) => {
    const numberDice = Number(dice.slice(1))
    return Math.round(Math.random() * (numberDice - 1) + 1)
}

console.log(interval("d6"));