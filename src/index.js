// @ts-check
import indexPage from './button.marko'

console.log('indexPage', indexPage)
var result = indexPage.renderSync({})

result.appendTo(document.body)
