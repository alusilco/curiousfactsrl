import {JSDOM} from 'jsdom'

describe ('test de h2', ()=> {
    test('prueba de h2', async () =>{
       const dom = await JSDOM.fromFile ("./index.html");
       const h2 = dom.window.document.querySelector('h2');
       expect (h2.innerHTML).toBe('Do you Know?')
       
    })

})



