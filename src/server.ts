import { app } from './app';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Apllication started at port ' + PORT);
});