import React, { useState } from "react";
import "./App1.css";


function App1() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // New state to store orders
  const [showProducts, setShowProducts] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showHome, setShowHome] = useState(true); // State to manage home page display
  const [showOrders, setShowOrders] = useState(false); // State to manage orders page display
  const [selectedItem, setSelectedItem] = useState(null); // State to manage selected item details

  // Pre-filled profile data simulating an already registered user
  const [profile, setProfile] = useState({
    name: "John Doe", // Pre-filled name
    address: "123 Main St, Springfield, IL", // Pre-filled address
    description: "High-quality DSLR camera for professional photography.",
    profilePhoto: "https://via.placeholder.com/150", // Placeholder image as profile photo
  });

  const items = [
    {
      id: 1,
      name: "DSLR Camera",
      price: 500,
      image: "https://img.freepik.com/premium-photo/black-dslr-camera-with-visible-lens-facing-forward-dark-background_427757-5083.jpg",
      description: "A high-quality DSLR camera for professional photography with advanced features.",
      specifications: [
        "Sensor: Full-frame",
        "Lens: 24-70mm f/2.8",
        "Shutter Speed: 1/8000s",
        "ISO: 100-25600",
        "Weight: 850g"
      ]
    },
    {
      id: 2,
      name: "Mirrorless Camera",
      price: 700,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvqXnKJAo1gX4jMqWAx4knSwqTeHtvp8vAA&s",
      description: "Compact and lightweight mirrorless camera with high-speed autofocus and 4K video recording.",
      specifications: [
        "Sensor: APS-C",
        "Lens: 16-50mm f/3.5-5.6",
        "Shutter Speed: 1/4000s",
        "ISO: 100-51200",
        "Weight: 500g"
      ]
    },
    {
      id: 3,
      name: "Action Camera",
      price: 300,
      image: "https://img.pikbest.com/wp/202348/ultra-hd-compact-action-camera-against-black-background-rendered-in-3d_9782503.jpg!w700wp",
      description: "Ultra-compact action camera with 4K recording, perfect for adventure sports.",
      specifications: [
        "Sensor: CMOS",
        "Lens: 170° wide angle",
        "Shutter Speed: 1/2000s",
        "ISO: 100-3200",
        "Weight: 90g"
      ]
    },
    {
      id: 4,
      name: "Vintage camera",
      price: 900,
      image: "https://s3.envato.com/files/243502783/preview%20images/preview%20000.jpg",
      description: "Classic vintage-style camera with modern digital features.",
      specifications: [
        "Sensor: 20 MP",
        "Lens: Fixed 35mm f/1.8",
        "Shutter Speed: 1/8000s",
        "ISO: 100-16000",
        "Weight: 600g"
      ]
    },
  ];
  
  
  const addToCart = (item) => {
    // Ensure that quantity is set to 1 if it's undefined
    const quantity = item.quantity || 1;
  
    const cartItem = {
      ...item,
      quantity: quantity,
      totalPrice: item.price * quantity, // Calculate the total price for this quantity
    };
  
    setCart((prevCart) => [...prevCart, cartItem]);
  };
  
  const viewDetails = (item) => {
    setSelectedItem(item);
    setShowProducts(false);
    setShowHome(false);
  };

  const moveToOrders = () => {
    setOrders((prevOrders) => [...prevOrders, ...cart]); // Move all items from cart to orders
    setCart([]); // Clear the cart after moving to orders
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePhoto: reader.result, // Set the base64 image string as profile photo
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleLogout = () => {
    setShowProfile(false);
    setShowOrders(false); // Close orders page when logging out
    setShowCart(false); // Close cart page when logging out
    setShowHome(true); // Show home page after logging out
  };
  
 

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">PSV</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-links">
          <a
            href="#home"
            onClick={() => {
              setShowHome(true);
              setShowProducts(false);
              setShowCart(false);
              setShowProfile(false);
              setShowOrders(false); // Close orders page when going to home
            }}
          >
            Home
          </a>
          <a
            href="#orders"
            onClick={() => {
              setShowProfile(false);
              setShowCart(false);
              setShowProducts(false);
              setShowHome(false); // Hide home page when going to orders
              setShowOrders(true); // Show orders
            }}
          >
            Orders
          </a>
          <a
            href="#profile"
            className="icon"
            onClick={() => {
              setShowProfile(true);
              setShowProducts(false);
              setShowCart(false);
              setShowHome(false); // Hide home page when viewing profile
              setShowOrders(false); // Close orders page when going to profile
            }}
          >
            Profile👤
          </a>
          <a
            href="#cart"
            className="icon"
            onClick={() => {
              setShowCart(true);
              setShowProducts(false);
              setShowProfile(false);
              setShowHome(false); // Hide home page when viewing cart
              setShowOrders(false); // Close orders page when going to cart
            }}
          >
            Cart 🛒 ({cart.length})
          </a>
        </div>
      </nav>

      {/* Home Section */}
      {showHome && !showProducts && !showCart && !showProfile && !showOrders && (
        <header className="hero">
          <div className="hero-text">
            <h1>Capture Life’s Best Moments</h1>
            <h2>
              A lifestyle filled with creativity and memories captured
              perfectly with our advanced camera collection.
            </h2>
            <button
              className="hero-button"
              onClick={() => {
                setShowProducts(true);
                setShowHome(false); // Hide home page when moving to products
              }}
            >
              Shop the Latest
            </button>
          </div>
        </header>
      )}

       {/* Products Section */}
       {showProducts && !selectedItem && (
        <section className="products">
          <h2>Our Products</h2>
          <div className="product-list">
            {items.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} className="product-image" />
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => viewDetails(item)}>View Details</button>
              </div>
            ))}
          </div>
        </section>
      )}
{/* Product Details Section */}

{selectedItem && (
  <section className="product-details">
    <h2>Product Details</h2>
    <div className="product-details-container">
      <img
        src={selectedItem.image}
        alt={selectedItem.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h3>{selectedItem.name}</h3>
        <p>{selectedItem.description}</p>

        {/* Render the specifications */}
        <div className="product-extra-info">
          <h4>Specifications:</h4>
          <ul>
            {selectedItem.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>

        {/* Display the price */}
        <div className="product-details-price">
          Price: ${selectedItem.price}
        </div>

        {/* Quantity Selector */}
        <div className="product-quantity">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={selectedItem.quantity || 1} // Default to 1 if quantity is not set
            onChange={(e) => {
              const quantity = parseInt(e.target.value, 10);
              setSelectedItem((prevItem) => ({
                ...prevItem,
                quantity: quantity, // Update quantity
              }));
            }}
          />
        </div>

        {/* Display the total price only once */}
        <div className="product-total-price">
          <span className="total-price-text">Total: </span>
          <span className="total-price-number">${selectedItem.price * (selectedItem.quantity || 1)}</span>
        </div>

        {/* Add to Cart button */}
        <button onClick={() => addToCart(selectedItem)}>Add to Cart</button>

        {/* Buy Now button */}
        <button
          onClick={() => {
            addToCart(selectedItem);  // Add to cart
            setShowCart(true);  // Show Cart page
            setShowProducts(false);  // Hide products page
            setSelectedItem(null);  // Clear selected product
          }}
        >
          Buy Now
        </button>

        <button onClick={() => { setShowProducts(true); setSelectedItem(null); }}>Back to Products</button>
      </div>
    </div>
  </section>
)}

      {/* Cart Section */}
      {showCart && (
  <section className="cart">
  <h2>Your Cart</h2>
  <div className="cart-items">
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))
    )}
  </div>
  {cart.length > 0 && (
    <div className="cart-summary">
      <h3>Total Amount: ${calculateTotal()}</h3>
      <button onClick={moveToOrders}>Proceed to Checkout</button>
    </div>
  )}
</section>
)}


      {/* Profile Section */}
      {showProfile && (
        <section className="profile">
          <h2>Profile</h2>
          <div className="profile-photo-container">
            <img
              src={profile.profilePhoto}
              alt="Profile"
              className="profile-photo"
            />
          </div>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Profile Photo:
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
              />
            </label>
          </form>
          <button onClick={() => { setShowOrders(true); setShowCart(false); }}>View Orders</button>
          <button onClick={() => { setShowCart(true); setShowOrders(false); }}>View Cart</button>
          <button onClick={handleLogout}>Log Out</button>
        </section>
      )}

      {/* Orders Section */}
      {showOrders && (
        <section className="orders">
          <h2>Your Orders</h2>
          <div className="order-list">
            {orders.length === 0 ? (
              <p>No orders placed yet.</p>
            ) : (
              orders.map((item, index) => (
                <div key={index} className="order-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-item-image"
                  />
                  <div className="order-item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default App1;
