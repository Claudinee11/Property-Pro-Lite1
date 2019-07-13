import pController from '../controllers/propertyController';
import express from 'express';

const app = express.Router();


app.get('/property', pController.getAllProperties);
app.delete('/property/:id', pController.deleteProperty);

export default app; 
