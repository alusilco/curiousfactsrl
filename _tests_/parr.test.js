import {JSDOM} from 'jsdom'

describe ('test de p', ()=> {
    test('testeando de p', async () =>{
       const dom = await JSDOM.fromFile ("./index.html");
       const p = dom.window.document.querySelector('p');
       expect (p.innerHTML).toBe('Developed by Rafaela Silveira and Ana Lucía Silva Córdoba')
       
    })

})


