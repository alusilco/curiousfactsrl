import { JSDOM } from 'jsdom';

describe ('test de h1', ()=> {
    test("prueba de h1", async () =>{
       const dom = await JSDOM.fromFile ("./index.html");
       const h1 = dom.window.document.querySelector('h1');
       expect (h1.innerHTML).toBe('CURIOUS FACTS')
       
    })

})

