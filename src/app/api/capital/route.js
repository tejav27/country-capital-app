import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(`https://countriesnow.space/api/v0.1/countries/capital`);
    const countries = response.data.data;
    return Response.json(countries);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Failed to fetch countries data' });
  }
}

export async function POST(req) {
  const countryData = await req.json();
  try {
    const response = await axios.post(`https://countriesnow.space/api/v0.1/countries/capital`, {
      country: countryData.country
    });
    const data = response.data;
    console.log("data got::", data);
    return Response.json(data.data.capital);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Failed to fetch country data' });
  }
}