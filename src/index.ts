import indexPage from './button.marko'

console.log('indexPage', indexPage)
indexPage.render({}).then((result) => {
  // @ts-expect-error
  result.appendTo(window.markoApp)
})
