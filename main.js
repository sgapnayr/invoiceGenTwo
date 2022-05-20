const buttonContainer = document.getElementById('button-div')
const transactionsDisp = document.getElementById('transactions')
const totalDisp = document.getElementById('total')

let totalArr = []

const buttonLabels = [
    {
        text: 'Clean',
        value: 10,
        currency: '$',
        id: Math.floor(Math.random() * 10000) * Math.floor(Math.random() * 1000)
    },
    {
        text: 'Wax',
        value: 20,
        currency: '$',
        id: Math.floor(Math.random() * 10000) * Math.floor(Math.random() * 1000)
    },
    {
        text: 'Shave',
        value: 10,
        currency: '$',
        id: Math.floor(Math.random() * 10000) * Math.floor(Math.random() * 1000)
    }
]

buttonLabels.forEach(button => {

    const newButton = document.createElement('button')
    newButton.innerText = `${button.text} - ${button.currency}${button.value}`
    buttonContainer.appendChild(newButton)

    newButton.addEventListener('click', () => {

        totalArr.push({ value: button.value, id: Math.floor(Math.random() * 1000) })

        const lastItem = totalArr[totalArr.length - 1]
        const newItemDiv = document.createElement('div')
        newItemDiv.classList.add('new-item-div')

        const newItem = document.createElement('li')
        newItem.innerText = `${button.text} ${button.currency}${button.value}`
        newItemDiv.appendChild(newItem)

        const removeButton = document.createElement('button')
        removeButton.innerText = 'Remove'
        newItemDiv.appendChild(removeButton)

        removeButton.addEventListener('click', () => {
            transactionsDisp.removeChild(newItemDiv)

            for (let i = 0; i < totalArr.length; i++) {
                if (totalArr[i].id === lastItem.id) {
                    totalArr.splice(i, 1)
                }
            }
            const sum = totalArr.reduce((acc, b) => acc + b.value, 0)
            totalDisp.innerText = `Total - ${button.currency}${sum}`
        })

        transactionsDisp.appendChild(newItemDiv)

        const sum = totalArr.reduce((acc, b) => acc + b.value, 0)
        totalDisp.innerText = `Total - ${button.currency}${sum}`
        console.log(sum);
    })
})
