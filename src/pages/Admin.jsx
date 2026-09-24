import { useState } from "react";
import { API_BASE} from "../api"

function Admin({ products }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

 async function handleSubmit(e) {
    e.preventDefault();

    if (!name  || !price) {
        alert("name or price is empty")
        return;
    }

    try {

        const newProduct = {
            name: name,
            price: price,
            inStock: true
        }

        const response = await fetch(`${API_BASE}/api/v1/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })

        if (response.ok) {
            alert("Product created successfully")
        }

        const data = await response.json();

        setName("");
        setPrice("");


    } catch (error) {
        console.log("An error occured while adding sneaker:", error);
        alert("An error occured while adding sneaker");
    }


  }

  return (
    <div className="admin">
      <h2>Add a sneaker</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Sneaker name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add sneaker</button>
      </form>

      <h2>Existing sneakers</h2>

      {products.map((product) => (
        <div className="admin-row">
          <span>{product.name}</span>

          <input type="number" value={product.price} readOnly />

          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
