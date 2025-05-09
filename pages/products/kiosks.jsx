import ProductPage from '../../components/ProductPage';
export default function Kiosks() {
  return (
    <ProductPage
      title="Interactive Kiosks"
      image="/kiosks.jpg"
      description="Self-service kiosks designed for ordering, check-ins, surveys, or digital directories. Improve service speed and gather data with every interaction."
      features=[{'"Touchscreen interface",\n        "Multiple use case software options",\n        "Custom enclosure designs",\n        "Multilingual support",\n        "Contactless payment capable"'}]
      backLink="/#products"
    />
  );
}
