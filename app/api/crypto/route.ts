import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API, 
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
