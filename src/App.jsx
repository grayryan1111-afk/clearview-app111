import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export default function App() {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [units, setUnits] = useState("");
  const [quote, setQuote] = useState(null);

  // Load services on start
  useEffect(() => {
    api.get
