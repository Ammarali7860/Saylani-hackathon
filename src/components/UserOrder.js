import React, { useState } from 'react';

const UserOrder = () => {
const [user, setUser] = useState({
name: 'John Doe',
img: 'https://via.placeholder.com/150',
});

const [orders, setOrders] = useState([
{
id: 1,
date: '2022-01-01',
products: [
{ name: 'Product 1', quantity: 2 },
{ name: 'Product 2', quantity: 1 },
],
},
{
id: 2,
date: '2022-02-01',
products: [
{ name: 'Product 3', quantity: 1 },
{ name: 'Product 4', quantity: 3 },
],
},
]);

const handleLogout = () => {
console.log('User logged out');
};

return (
<div>
<div>
<img src={user.img} alt={user.name} />
<h1>{user.name}</h1>
</div>
<div>
<h2>Orders:</h2>
<ul>
{orders.map((order) => (
<li key={order.id}>
<h3>Order {order.id} ({order.date})</h3>
<ul>
{order.products.map((product) => (
<li key={product.name}>
{product.name} ({product.quantity})
</li>
))}
</ul>
</li>
))}
</ul>
</div>
<button onClick={handleLogout}>Logout</button>
</div>
);
};

export default UserOrder;



