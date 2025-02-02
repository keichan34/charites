mapboxgl.accessToken = '___MAPBOX_ACCESS_TOKEN___'

const map = new mapboxgl.Map({
  container: 'map',
  hash: true,
  style: `http://${window.location.host}/style.json`,
})

const socket = new WebSocket('ws://localhost:___PORT___')

socket.addEventListener('message', (message) => {
  map.setStyle(JSON.parse(message.data))
})

map.addControl(new mapboxgl.NavigationControl(), 'top-right')

map.addControl(
  new MapboxLegendControl(
    {},
    {
      showDefault: true,
      showCheckbox: true,
      onlyRendered: true,
      reverseOrder: true,
      accesstoken: mapboxgl.accessToken,
    },
  ),
  'bottom-left',
)

const showTileBoundaries = document.getElementById('showTileBoundaries')
const setShowTileBoundaries = function () {
  const checked = showTileBoundaries.checked
  map.showTileBoundaries = checked
}
setShowTileBoundaries()
showTileBoundaries.addEventListener('click', setShowTileBoundaries)

const showCollisionBoxes = document.getElementById('showCollisionBoxes')
const setShowCollisionBoxes = function () {
  const checked = showCollisionBoxes.checked
  map.showCollisionBoxes = checked
}
setShowCollisionBoxes()
showCollisionBoxes.addEventListener('click', setShowCollisionBoxes)

const showPadding = document.getElementById('showPadding')
const setShowPadding = function () {
  const checked = showPadding.checked
  map.showPadding = checked
}
setShowPadding()
showPadding.addEventListener('click', setShowPadding)
