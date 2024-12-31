"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch("/api/crypto");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (err: any) {
        console.error(err.message);
        setError("Failed to load data");
      }
    };

    fetchCryptoData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Crypto Prices</h1>
      <pre>{JSON.stringify(cryptoData, null, 2)}</pre>
    </div>
  );
}
