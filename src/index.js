const lobbyPos = document.getElementById('lobby').getAttribute('position')
const room1Pos = document.getElementById('room1').getAttribute('position')

AFRAME.registerComponent('door-on-touch', {
  schema: {
    from: {default: ''},
    to: {default: ''}
  },

  init: function () {
    const data = this.data

    const el = this.el
    el.addEventListener('click', function() {
      if(!data.to || !data.from) {
        console.error(new Error('No destination found'))
        return
      }

      const currentRoom = document.querySelector(`#${data.from}`)
      if(!currentRoom) {
        console.error(new Error('Current location unknown'))
        return
      }

      const destinationRoom = document.querySelector(`#${data.to}`)
      if(!destinationRoom) {
        console.error(new Error('No destination found'))
        return
      }

      currentRoom.setAttribute('visible', 'false')
      destinationRoom.setAttribute('visible', 'true')
      const params = new URLSearchParams(location.search)
      params.set('room', data.to)
      history.pushState(null, null, `${location.origin}?${params.toString()}`)
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
