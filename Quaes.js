document.addEventListener('DOMContentLoaded', () => {
    let elements = []
    let container = document.querySelector('#container')
    // Add each row to the array
    container.querySelectorAll('.rbw').forEach(el => elements.push(el))
    // Clear the container
    container.innerHTML = ''
    // Sort the array from highest to lowest
    elements.sort((a, b) => a.querySelector('.pos').textContent - b.querySelector('.pos').textContent)
    // Put the elements back into the container
    elements.forEach(e => container.appendChild(e))
  })