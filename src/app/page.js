import CountryList from "@/components/CountryList";

export default function Home() {
  return (
    <div>
      <h1 className="text-2x1 font-bold text-center my-4">Countries and Capitals</h1>
      <CountryList />
    </div>
  );
}