"use client";

// Component to inject styles
const ShopStyles = () => (
  <style>
    {`
    /* =MAIN SHOP PAGE SECTION (Dark) */
    .shopSection {
      width: 100%;
      padding: 4rem 0;
      background-color: #111827; /* Darkest */
      color: #ffffff;
    }
    @media (min-width: 768px) {
      .shopSection {
        padding: 6rem 0;
      }
    }
    .shopContainer {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    /* --- Page Header --- */
    .shopHeader {
      text-align: center;
      max-width: 56rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
    }
    @media (min-width: 768px) {
      .shopHeader {
        margin-bottom: 4rem;
      }
    }
    .shopHeader h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #facc15; /* Yellow */
    }
    @media (min-width: 768px) {
      .shopHeader h1 {
        font-size: 3rem;
      }
    }
    .shopHeader p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: #9ca3af;
    }

    /* --- Product Grid --- */
    .productGrid {
      display: grid;
      /* Responsive grid: 1-2 columns on mobile, up to 4 on large screens */
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    /* --- Product Card --- */
    .productCard {
      background-color: #1f2937; /* Lighter */
      border: 1px solid #374151;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      overflow: hidden; /* To contain the image */
    }
    .productCard:hover {
      transform: scale(1.05);
      border-color: #facc15;
    }
    
    .productImage {
      width: 100%;
      height: 240px;
      background-color: #374151; /* Placeholder bg */
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      font-weight: 600;
    }
    .productInfo {
      padding: 1.5rem;
    }
    .productTitle {
      font-size: 1.25rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
    .productPrice {
      font-size: 1.125rem;
      font-weight: 500;
      color: #facc15; /* Yellow */
      margin-bottom: 1rem;
    }
    .productButton {
      display: inline-block;
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 0.375rem;
      font-weight: 600;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.2s ease, color 0.2s ease;
      border: 1px solid #facc15;
      color: #facc15;
      background-color: transparent;
      cursor: pointer;
    }
    .productButton:hover {
      background-color: #facc15;
      color: #111827;
    }
    `}
  </style>
);

export default function ShopPage() {
  // Dummy product data
  const products = [
    { id: 1, name: "FYTRR Performance Tee", price: "$29.99" },
    { id: 2, name: "FYTRR Endurance Shorts", price: "$34.99" },
    { id: 3, name: "FYTRR 'Conquer' Hoodie", price: "$59.99" },
    { id: 4, name: "FYTRR Water Bottle", price: "$19.99" },
  ];

  return (
    <>
      <ShopStyles />
      <section className="shopSection">
        <div className="shopContainer">
          <div className="shopHeader">
            <h1>Shop FYTRR Gear</h1>
            <p>Official apparel and gear to fuel your fight.</p>
          </div>

          <div className="productGrid">
            {products.map((product) => (
              <div key={product.id} className="productCard">
                <div className="productImage">
                  <span>[Image Placeholder]</span>
                </div>
                <div className="productInfo">
                  <h3 className="productTitle">{product.name}</h3>
                  <p className="productPrice">{product.price}</p>
                  <a href="#" className="productButton">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
