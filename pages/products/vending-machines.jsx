import ProductPage from '../../components/ProductPage';
export default function Vendingmachines() {
  return (
    <ProductPage
      title="Vending Machines"
      image="/vending-machines.jpg"
      description="Smart vending machines designed for modern convenience. Dispense snacks, drinks, and essential goods using intuitive touch interfaces and accept both cash and contactless payments."
      features=[{'"Supports NFC/contactless payments",\n        "Remote stock monitoring",\n        "Built-in refrigeration system",\n        "Custom branding options",\n        "Eco-friendly, energy-saving operation"'}]
      backLink="/#products"
    />
  );
}
