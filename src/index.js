// @ts-check
import indexPage from './pages/index'

console.log('indexPage', indexPage)
var result = indexPage.renderSync({})

result.appendTo(document.body)
