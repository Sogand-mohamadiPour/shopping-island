# 🛍️🏝️ Shopping Island

A modern and responsive e-commerce frontend built with **React** and **React Router**.

Shoppini Center allows users to browse products, search and filter by category, view detailed product information, add products to a shopping basket, and switch between light and dark themes.

---

## ✨ Features

* 🏠 Independent landing/home page
* 🛍️ Product listing page
* 🔎 Product search
* 🗂️ Category filtering
* 📦 Product details page
* 🛒 Shopping basket
* ➕ Increase product quantity
* ➖ Decrease product quantity
* 🗑️ Remove products from basket
* 💰 Automatic basket total calculation
* 🔢 Basket item counter
* 🌙 Dark / Light mode
* 💾 Theme preference saved in `localStorage`
* 📱 Responsive design
* 🧭 Client-side routing
* ⏳ Loading states
* ❌ Error handling
* ❓ FAQ / About page with accordion
* 📱 Responsive mobile navigation
* 🦶 Responsive footer
* 🎨 CSS Modules for component-specific styling

---

## 🛠️ Technologies

* **React**
* **React Router**
* **JavaScript (JSX)**
* **CSS Modules**
* **React Icons**
* **Context API**
* **useReducer**
* **useState**
* **useEffect**
* **localStorage**
* **Fake Store API**

---

## 🧠 What This Project Demonstrates

This project was built to practice and demonstrate several important React concepts.

### Context API

Global application state is handled with React Context.

Two main contexts are used:

```text
ProductContext
BasketContext
```

The basket context provides access to:

* Basket products
* Product quantities
* Total price
* Total item count
* Basket actions

---

### useReducer

Basket operations are managed with `useReducer`.

Available actions include:

```text
add
plus
minus
delete
```

This keeps basket state management centralized instead of handling it separately inside every component.

---

### React Router

The application uses client-side routing for navigation between pages.

Example routes:

```text
/
├── /products
│   └── /products/:id
├── /basket
├── /about
└── /contactus
```

---

### Dynamic Product Pages

Each product has its own URL:

```text
/products/1
/products/2
/products/3
```

The product ID is obtained using:

```jsx
const { id } = useParams();
```

and the corresponding product is displayed on the details page.

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Loading.jsx
│
├── context/
│   ├── ProductContext.jsx
│   └── BasketContext.jsx
│
├── css/
│   ├── Header.module.css
│   ├── Footer.module.css
│   ├── Card.module.css
│   ├── Home.module.css
│   ├── PageProduct.module.css
│   ├── DetailsProduct.module.css
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── PageProducts.jsx
│   ├── DetailsProduct.jsx
│   ├── Basket.jsx
│   ├── About.jsx
│   ├── ContactUs.jsx
│   └── Page404.jsx
│
├── App.jsx
├── Layout.jsx
├── App.css
└── main.jsx
```

---

## 🔎 Product Search & Filtering

The products page supports searching by product title.

Users can also filter products by category:

```text
All
Men's Clothing
Women's Clothing
Electronics
Jewelry
```

Search and category filtering can be combined.

---

## 🌐 API

Product information is retrieved from the **Fake Store API**.

The application uses the API to retrieve products including:

* Product title
* Price
* Category
* Image
* Description
* Rating

```
```
