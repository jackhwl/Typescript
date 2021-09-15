const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message, (error) => {
        if (error) {
            return console.error(error)
        }

        console.log('The message was delivered!')
    })
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not available')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        socket.emit('sendLocation', { latitude, longitude }, () => console.log('Location shared!'))
    })
})

