import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { CryptoState } from "../../CryptoContext"; // Import context for currency

// Function to format numbers with commas
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const BuyCryptoForm = () => {
  const { currency, setCurrency, symbol } = CryptoState(); // Fetch currency and symbol from context
  const [coinData, setCoinData] = useState(null); // State for storing coin data (Bitcoin for now)
  const [investmentAmount, setInvestmentAmount] = useState(0); // Investment amount entered by the user
  const [cryptoAmount, setCryptoAmount] = useState(0); // Amount of cryptocurrency user can buy
  const [selectedCoin, setSelectedCoin] = useState("bitcoin"); // Default to Bitcoin
  const [paymentOption, setPaymentOption] = useState(""); // Payment method
  const [coinList, setCoinList] = useState([]); // List of all coins for searching
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering coins
  const [loading, setLoading] = useState(true); // Loading state for API calls

  // Fetch the list of all coins and their data
  const fetchCoinList = async () => {
    try {
      setLoading(true); // Set loading to true while fetching data
      const { data } = await axios.get("/api/api/v3/coins/markets", {
        params: {
          vs_currency: currency, // Fetch data for the selected currency
        },
      });
      setCoinList(data);
    } catch (error) {
      console.error("Error fetching coin list:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Fetch the current price of the selected cryptocurrency
  const fetchCoinData = async () => {
    try {
      const { data } = await axios.get(`/api/api/v3/coins/markets`, {
        params: {
          vs_currency: currency,
          ids: selectedCoin, // Fetch data for the selected coin
        },
      });
      setCoinData(data[0]);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchCoinList();
    fetchCoinData();
  }, [currency, selectedCoin]); // Refetch data when currency or selected coin changes

  // Handle the investment amount change
  const handleInvestmentChange = (e) => {
    const amount = e.target.value;
    setInvestmentAmount(amount);
    
    // Calculate how much crypto user can buy
    if (coinData) {
      const crypto = (amount / coinData.current_price).toFixed(6); // Calculate crypto amount
      setCryptoAmount(crypto);
    }
  };

  // Handle payment option change
  const handlePaymentChange = (e) => {
    setPaymentOption(e.target.value);
  };

  // Filter the coin list based on the search term
  const filteredCoins = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto", borderRadius: "8px" }}>
        {/* Currency Selector */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h6" sx={{ color: "black", marginBottom: "10px" }}>
            Select Currency
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              label="Currency"
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              <MenuItem value="JPY">JPY</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography variant="h4" sx={{ color: "black", marginBottom: "20px" }}>
          Buy {selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)}
        </Typography>

        {/* Search Input for Cryptocurrency */}
        <TextField
          label="Search Cryptocurrency"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginBottom: "20px" }}
        />

        {/* Loading State */}
        {loading ? (
          <Typography variant="h6" sx={{ color: "black", marginBottom: "20px" }}>
            Loading coins...
          </Typography>
        ) : (
          // Select Cryptocurrency Dropdown
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel>Cryptocurrency</InputLabel>
            <Select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              label="Cryptocurrency"
            >
              {filteredCoins.length > 0 ? (
                filteredCoins.map((coin) => (
                  <MenuItem key={coin.id} value={coin.id}>
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">
                  No coins found
                </MenuItem>
              )}
            </Select>
          </FormControl>
        )}

        {/* Current Price */}
        {coinData && (
          <Typography variant="h6" sx={{ color: "black", marginBottom: "20px" }}>
            Current Price: {symbol} {numberWithCommas(coinData.current_price.toFixed(2))}
          </Typography>
        )}

        {/* Investment Section */}
        <TextField
          label={`Amount in ${currency}`}
          variant="outlined"
          fullWidth
          value={investmentAmount}
          onChange={handleInvestmentChange}
          sx={{ marginBottom: "20px" }}
        />

        {/* How much crypto can be bought */}
        {cryptoAmount > 0 && (
          <Typography variant="h6" sx={{ color: "black", marginBottom: "20px" }}>
            You can buy {cryptoAmount} {selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)} with your investment.
          </Typography>
        )}

        {/* Payment Options */}
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel>Payment Method</InputLabel>
          <Select value={paymentOption} onChange={handlePaymentChange} label="Payment Method">
            <MenuItem value="credit_card">Credit Card</MenuItem>
            <MenuItem value="debit_card">Debit Card</MenuItem>
            <MenuItem value="paypal">PayPal</MenuItem>
          </Select>
        </FormControl>

        {/* Buy Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!investmentAmount || !paymentOption}
          sx={{ marginTop: "20px", padding: "14px", fontSize: "16px" }}
        >
          Buy {selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)}
        </Button>
      </Box>
    </>
  );
};

export default BuyCryptoForm;
