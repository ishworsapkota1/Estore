let API = "http://localhost:8000/api";

export const getAllProducts = () => {
  return fetch(`${API}/getallproduct`)
    .then((res) => res.json)
    .catch((err) => console.log(err));
};

export const addProduct = (product, token) => {
  return fetch(`${API}/addnewproduct`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => res.json)
    .catch((err) => console.log(err));
};
export const deleteProduct = (id) => {
  return fetch(`${API}/deleteproduct/${id}`, {
    method: "DELETE",
    headers: {
      accept: "Application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getProduct = (id) => {
  return fetch(`${API}/getproduct/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateProduct = (id, product, token) => {
  return fetch(`${API}/updateproduct/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
