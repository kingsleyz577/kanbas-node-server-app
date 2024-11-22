//console.log('Hello World from Hello.js!');

export default function Helloroutes(app) {
    app.get('/hello',(req, res) => {
        res.send('hello life is very good');
   });
   
   app.get('/', (req, res) => {
       res.send('Welcome to Full Stack Development!')
    });
}