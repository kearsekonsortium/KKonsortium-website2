import ProductPage from '../../components/ProductPage';
export default function Evchargers() {
  return (
    <ProductPage
      title="EV Chargers"
      image="/ev-chargers.jpg"
      description="Power the future with state-of-the-art EV chargers. Perfect for commercial spaces looking to attract eco-conscious consumers while earning through charging fees."
      features=[{'"Level 2 & DC fast charge options",\n        "Real-time usage analytics",\n        "User-friendly interface",\n        "Solar-ready systems available",\n        "Secure payment integration"'}]
      backLink="/#products"
    />
  );
}
