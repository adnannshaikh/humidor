import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col, Form, Toast, ToastContainer, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stockList from "../dummy/stockList";  // ✅ import stock list


// Dummy index data
const indexes = [
  { name: "Nifty 50", price: 22350, changePercent: 0.45 },
  { name: "Bank Nifty", price: 47650, changePercent: -0.15 },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  const [searchInput, setSearchInput] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "", variant: "" });
  const [loading, setLoading] = useState(true);

  const fetchWatchlist = async () => {
    try {
      const res = await axios.get(`/api/watchlists/${userId}`);
      
      if (res.data.length > 0) {
        const allStocks = res.data.flatMap(watchlist => watchlist.stocks);
        setWatchlist(allStocks);
      } else {
        setWatchlist([]);
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
    fetchWatchlist();
  }, [navigate, username]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

  const handleSearchAdd = async (e) => {
    e.preventDefault();
    if (!searchInput) return;
  
    try {
      const matchedStock = stockList.find(
        (stock) =>
          stock.symbol.toLowerCase() === searchInput.toLowerCase() ||
          stock.name.toLowerCase() === searchInput.toLowerCase()
      );
  
      if (!matchedStock) {
        setToast({ show: true, message: "Stock not found!", variant: "danger" });
        return;
      }
  
      const res = await axios.post("/api/watchlists/auto-add", {
        userId,
        stock: {
          symbol: matchedStock.symbol,
          name: matchedStock.name,
          price: 1000,  // Dummy price for now
        },
      });
  
      setToast({ show: true, message: "Stock added to Watchlist!", variant: "success" });
      setSearchInput("");
      fetchWatchlist();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setToast({ show: true, message: error.response.data.message, variant: "danger" });
      } else {
        console.error("Error adding stock:", error);
        setToast({ show: true, message: "Failed to add stock.", variant: "danger" });
      }
    }
  };
  

  const handleRemoveStock = async (symbol) => {
    try {
      const res = await axios.delete(`/api/watchlists/remove-stock`, {
        data: { userId, symbol }
      });
      setToast({ show: true, message: "Stock removed from Watchlist!", variant: "warning" });
      fetchWatchlist();
    } catch (error) {
      console.error("Error removing stock:", error);
    }
  };

  return (
    <Container className="py-5">
      {/* Toast Notifications */}
      <ToastContainer position="top-center" className="p-3">
        <Toast
          bg={toast.variant}
          onClose={() => setToast({ show: false, message: "", variant: "" })}
          show={toast.show}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {username} 👋</h2>
        {/* <Button variant="danger" onClick={handleLogout}>Logout</Button> */}
      </div>

      {/* Index Section */}
      <Row className="g-4">
        {indexes.map((index, idx) => (
          <Col md={6} key={idx}>
            <Card className="text-center p-4 shadow-sm mb-3">
              <Card.Title>{index.name}</Card.Title>
              <Card.Text>Price: ₹{index.price}</Card.Text>
              <Card.Text>Change: {index.changePercent}%</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Search Bar */}
      {/* Search Bar */}
        <Card className="p-4 shadow-sm mb-5">
        <Form onSubmit={handleSearchAdd}>
            <Form.Group className="mb-3">
            <Form.Control
                list="stockOptions"
                type="text"
                placeholder="Search Stock Symbol or Name"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <datalist id="stockOptions">
                {stockList.map((stock, idx) => (
                <option key={idx} value={stock.symbol}>
                    {stock.name}
                </option>
                ))}
            </datalist>
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
            ➕ Add to Watchlist
            </Button>
        </Form>
        </Card>


      {/* Watchlist Section */}
      <h4 className="mb-4">📋 My Watchlist</h4>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : watchlist.length > 0 ? (
        <Row>
          {watchlist.map((stock, idx) => (
            <Col md={3} key={idx} className="mb-4">
              <Card className="text-center p-3 shadow-sm">
                <Card.Title>{stock.name}</Card.Title>
                <Card.Text>Symbol: {stock.symbol}</Card.Text>
                <Card.Text>Price: ₹{stock.price}</Card.Text>
                <Button variant="info" size="sm" onClick={() => navigate(`/stock/${stock.symbol}`)}>
                  📈 View Chart
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleRemoveStock(stock.symbol)}>
                  ❌ Remove
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No stocks in your watchlist yet. Start adding!</p>
      )}
    </Container>
  );
};

export default DashboardPage;

// import React, { useEffect, useState } from "react";
// import { Container, Card, Button, Row, Col, Form, Toast, ToastContainer, Spinner, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const indexes = [
//   { name: "Nifty 50", price: 22350, changePercent: 0.45 },
//   { name: "Bank Nifty", price: 47650, changePercent: -0.15 },
// ];

// const DashboardPage = () => {
//   const navigate = useNavigate();
//   const username = localStorage.getItem("username");
//   const userId = localStorage.getItem("userId");

//   const [searchInput, setSearchInput] = useState("");
//   const [watchlist, setWatchlist] = useState([]);
//   const [toast, setToast] = useState({ show: false, message: "", variant: "" });
//   const [loading, setLoading] = useState(true);

//   // Fetch Watchlist
//   const fetchWatchlist = async () => {
//     try {
//       const res = await axios.get(`/api/watchlist/${userId}`);
//       setWatchlist(res.data.stocks || []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching watchlist:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!username) {
//       navigate("/login");
//     }
//     fetchWatchlist();
//   }, [navigate, username]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   const handleSearchAdd = async (e) => {
//     e.preventDefault();
//     if (!searchInput) return;

//     try {
//       await axios.post("/api/watchlist/add-stock", {
//         userId,
//         stock: {
//           symbol: searchInput.toUpperCase(),
//           name: searchInput.toUpperCase(),
//           price: 1000, // dummy price
//         },
//       });

//       setToast({ show: true, message: "Stock added successfully!", variant: "success" });
//       setSearchInput("");
//       fetchWatchlist();
//     } catch (error) {
//       console.error("Error adding stock:", error);
//       setToast({ show: true, message: "Failed to add stock.", variant: "danger" });
//     }
//   };

//   const handleRemoveStock = async (symbol) => {
//     try {
//       await axios.delete(`/api/watchlist/remove-stock`, { data: { userId, symbol } });
//       setToast({ show: true, message: "Stock removed successfully!", variant: "warning" });
//       fetchWatchlist();
//     } catch (error) {
//       console.error("Error removing stock:", error);
//     }
//   };

//   return (
//     <Container className="py-5">
//       {/* Toast Notifications */}
//       <ToastContainer position="top-center" className="p-3">
//         <Toast
//           bg={toast.variant}
//           onClose={() => setToast({ show: false, message: "", variant: "" })}
//           show={toast.show}
//           delay={3000}
//           autohide
//         >
//           <Toast.Body className="text-white">{toast.message}</Toast.Body>
//         </Toast>
//       </ToastContainer>

//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>Welcome, {username} 👋</h2>
//         <Button variant="danger" onClick={handleLogout}>Logout</Button>
//       </div>

//       {/* Indexes */}
//       <Row className="mb-4">
//         {indexes.map((index, idx) => (
//           <Col md={6} key={idx}>
//             <Card className="text-center p-4 shadow-sm mb-3">
//               <Card.Title>{index.name}</Card.Title>
//               <Card.Text>Price: ₹{index.price}</Card.Text>
//               <Card.Text>Change: {index.changePercent}%</Card.Text>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Search Bar */}
//       <Card className="p-4 shadow-sm mb-5">
//         <Form onSubmit={handleSearchAdd}>
//           <Form.Group className="d-flex">
//             <Form.Control
//               type="text"
//               placeholder="Enter Stock Symbol (eg: RELIANCE)"
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//             />
//             <Button type="submit" variant="primary" className="ms-2">
//               ➕ Add Stock
//             </Button>
//           </Form.Group>
//         </Form>
//       </Card>

//       {/* Watchlist */}
//       <h4 className="mb-4">📋 My Watchlist</h4>
//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" />
//         </div>
//       ) : watchlist.length > 0 ? (
//         <Row>
//           {watchlist.map((stock, idx) => (
//             <Col md={3} key={idx} className="mb-4">
//               <Card className="text-center p-3 shadow-sm">
//                 <Card.Title>{stock.name}</Card.Title>
//                 <Card.Text>Symbol: {stock.symbol}</Card.Text>
//                 <Card.Text>Price: ₹{stock.price}</Card.Text>
//                 <Button variant="info" size="sm" onClick={() => navigate(`/stock/${stock.symbol}`)}>
//                   📈 View Chart
//                 </Button>{" "}
//                 <Button variant="danger" size="sm" onClick={() => handleRemoveStock(stock.symbol)}>
//                   ❌ Remove
//                 </Button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <p>No stocks in your watchlist yet. Start adding!</p>
//       )}
//     </Container>
//   );
// };

// export default DashboardPage;
