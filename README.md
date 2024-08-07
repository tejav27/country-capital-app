# Countries and Capitals Display with Next.js and Shadcn

This project is a simple Next.js application that fetches and displays a list of countries and their capitals from an external API. The data is fetched on the server-side and displayed on the client-side, utilizing components from the Shadcn UI library.

## Features

- Fetches country and capital data from an external API
- Displays the data in a clean, styled list using Shadcn components
- Includes a search box to filter countries by name

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   bash
   git clone https://github.com/your-username/countries-and-capitals.git
   cd countries-and-capitals
   

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- `app/api/countries/route.js`: Server-side API route to fetch country and capital data.
- `components/CountryList.js`: Client-side component to display the list of countries and their capitals.
- `app/page.js`: Main page that renders the `CountryList` component.
- `styles/globals.css`: Global CSS file, including styles from Shadcn UI.

## Usage

The main page displays a list of countries and their capitals. You can use the search box to filter the list by country name.

## Example API Response

The application fetches data from the following API endpoint: `https://countriesnow.space/api/v0.1/countries/capital`.

Sample API response:

json
{
  "error": false,
  "msg": "countries and capitals retrieved",
  "data": [
    {
      "name": "Afghanistan",
      "capital": "Kabul",
      "iso2": "AF",
      "iso3": "AFG"
    },
    {
      "name": "Aland Islands",
      "capital": "Mariehamn",
      "iso2": "AX",
      "iso3": "ALA"
    }
  ]
}


## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Countries Now API](https://countriesnow.space/)
