import indexPage from './button.marko'

console.log('indexPage', indexPage)
var result = indexPage.renderSync({})

// @ts-expect-error
result.appendTo(window.markoApp)
