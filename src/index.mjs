import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); 
const app = express(); 
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

app.get('/', (req, res) => {
    res.status(200).json({message: "hey!This is a test message."});
});

app.get('/api/users',(req, res) => {
    const user = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Charlie'}
];
res.status(200).json(user);
});

app.get('/api/product',(req, res) => {
    const product = [
    { id: 1, name: 'Laptop', price: 999.99},
    { id: 2, name: 'Mouse', price: 29.99},
    { id: 3, name: 'Keyboard', price: 79.99}
];
res.status(200).json(product);
});

app.get("api/users/:id",(req, res) => {
    const parsedUser = parseInt(req.params.id);
    
    if (isNaN(parsedUser)){
        return response.status(400).json({error:"Invalid user ID"});
    }
    const findUser = mockUser.find(user => user.id ==parsedUser);
    if(!findUser){
        return response.status(404).json({error:"User not found"});

    }

    response.status(200).json(findUser);
});

