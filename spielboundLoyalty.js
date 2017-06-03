<script>

document.getElementById('totalCardCount').innerHTML = totalCardCount
document.getElementById('bestChoice').innerHTML = totalFreeDrinksCount > Math.floor(totalDiceRollsCount / 9) ? 'Gambler' : 'Tortoise'

document.getElementById('totalDiceRollsCount_g').innerHTML = totalDiceRollsCount
document.getElementById('totalDestroyedCount_g').innerHTML = totalDestroyedCount
document.getElementById('totalFreeDrinksCount_g').innerHTML = totalFreeDrinksCount

document.getElementById('totalDiceRollsCount_t').innerHTML = totalDiceRollsCount
document.getElementById('totalFreeDrinksCount_t').innerHTML = Math.floor(totalDiceRollsCount / 9)
</script>