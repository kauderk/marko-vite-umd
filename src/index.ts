import indexPage from './button.marko'

console.log('indexPage', indexPage)
const markoApp =
  document.getElementById('markoApp') || document.createElement('div')
markoApp.id = 'markoApp'
if (!document.body.contains(markoApp)) {
  document.body.appendChild(markoApp)
}

indexPage.render({}).then((result) => {
  result.appendTo(markoApp)
})
