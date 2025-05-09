export default function Home() {
  return (
    <div className="text-white bg-gray-950 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Kearse Konsortium</h1>
      <p className="text-lg mb-6">Explore our futuristic, luxurious equipment:</p>
      <ul className="space-y-4 text-xl underline">
        <li><a href="/products/vending-machines">Vending Machines</a></li>
        <li><a href="/products/ev-chargers">EV Chargers</a></li>
        <li><a href="/products/digital-billboards">Digital Billboards</a></li>
        <li><a href="/products/kiosks">Interactive Kiosks</a></li>
      </ul>
    </div>
  );
}