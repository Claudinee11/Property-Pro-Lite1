import express from 'express';
import route from './routers/propertyRoute';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/', route);
const port = 2000
app.listen(port, ()=>{

    console.log(`app running on port ${port}`);
})
export default app;
