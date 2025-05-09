import ProductPage from '../../components/ProductPage';
export default function Digitalbillboards() {
  return (
    <ProductPage
      title="Digital Billboards"
      image="/digital-billboards.jpg"
      description="Bright, dynamic, and built to impress — our LED billboards are ideal for promoting your brand or selling advertising space."
      features=[{'"High-resolution LED screens",\n        "Weatherproof outdoor-rated design",\n        "Content scheduling system included",\n        "Remote management portal",\n        "Long lifespan with low power consumption"'}]
      backLink="/#products"
    />
  );
}
