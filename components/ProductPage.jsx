export default function ProductPage({ title, image, description, features, backLink }) {
  return (
    <div className="bg-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <p className="text-lg leading-relaxed mb-6">{description}</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button className="bg-gold-400 text-black px-6 py-3 rounded text-lg">Apply for Financing</button>
          <a href={backLink} className="border border-gold-400 text-gold-400 px-6 py-3 rounded text-lg">Back to Products</a>
        </div>
      </div>
    </div>
  );
}
