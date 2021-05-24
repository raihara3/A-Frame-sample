const lobbyPos = document.getElementById('lobby').getAttribute('position')
const room1Pos = document.getElementById('room1').getAttribute('position')

AFRAME.registerComponent('door-on-touch', {
  schema: {
    room: {default: ''}
  },

  init: function () {
    // const data = this.data

    const el = this.el
    el.addEventListener('click', function() {
      const destinationRoomId = el.getAttribute('to')
      if(!destinationRoomId) {
        console.error(new Error('No destination found'))
        return
      }

      const currentRoom = document.querySelector('a-entity[visible=true]')
      if(!currentRoom) {
        console.error(new Error('Current location unknown'))
        return
      }

      const destinationRoom = document.querySelector(`#${destinationRoomId}`)
      if(!destinationRoom) {
        console.error(new Error('No destination found'))
        return
      }

      currentRoom.setAttribute('visible', 'false')
      destinationRoom.setAttribute('visible', 'true')
    })
  }
})

AFRAME.registerComponent('twitter-on-touch', {
  schema: {
    url: {default: ''}
  },

  init: function () {
    const data = this.data
    this.el.addEventListener('click', function() {
      location.href = data.url
    })
  }
})
