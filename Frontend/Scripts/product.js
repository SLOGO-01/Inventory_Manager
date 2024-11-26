import { API_BASE_URL } from './config.js';

async function uploadProduct(name, description, price, quantity, supplier_id) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price, quantity, supplier_id }),
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        // window.location.href = 'dashboard.html'; // Redirect on success
    } else {
        alert('Login failed. Please check your credentials.');
    }
}
