// frontend/src/components/ProductManager.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !quantity) {
      setErrorMessage("Please fill all required fields.");
      setSuccessMessage("");
      return;
    }

    const productData = {
      name: name.trim(),
      description: description.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };

    const request = editingId
      ? axios.put(
          `http://127.0.0.1:8000/api/products/${editingId}/`,
          productData
        )
      : axios.post("http://127.0.0.1:8000/api/products/", productData);

    request
      .then(() => {
        setSuccessMessage(editingId ? "Product updated!" : "Product added!");
        setErrorMessage("");
        resetForm();
        fetchProducts();
      })
      .catch((err) => {
        console.error(err.response?.data);
        setErrorMessage("Operation failed. Please check your input.");
        setSuccessMessage("");
      });
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(() => fetchProducts())
      .catch((err) => console.error(err));
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product Manager
      </Typography>

      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <Paper sx={{ p: 2, mt: 2, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
            <TextField
              label="Price"
              type="number"
              inputProps={{ step: "0.01" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              fullWidth
            />

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" type="submit">
                {editingId ? "Update Product" : "Add Product"}
              </Button>
              {editingId && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={resetForm}
                >
                  Cancel Edit
                </Button>
              )}
            </Stack>
          </Stack>
        </form>
      </Paper>

      <TextField
        label="Search by name or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Price (₹)</b>
              </TableCell>
              <TableCell>
                <b>Quantity</b>
              </TableCell>
              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.description}</TableCell>
                  <TableCell>{p.price}</TableCell>
                  <TableCell>{p.quantity}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        onClick={() => handleEdit(p)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No matching products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
