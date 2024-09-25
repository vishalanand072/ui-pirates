import ProductMedia from "./productMedia";
const ProductShowcase = () => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4">
        <div className="flex justify-between items-center my-12">
          <h1 className="text-black heading">Product Showcase</h1>
          <span className="text-gray-300 text-6xl font-light max-md:text-3xl">
            09
          </span>
        </div>
        <ProductMedia />
      </div>
    </>
  );
};

export default ProductShowcase;
