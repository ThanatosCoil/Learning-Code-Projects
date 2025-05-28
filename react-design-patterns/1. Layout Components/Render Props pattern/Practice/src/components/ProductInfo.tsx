interface ProductInfoProps {
  product: {
    name: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;
  };
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, description, price, rating, imageUrl } = product;

  function getStarRating(rating: number) {
    const maxStars = 5;
    const fullStars = Math.floor(rating);

    let stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    // Add empty stars
    const emptyStars = maxStars - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    return stars;
  }

  return (
    <div className="flex items-center w-[30rem] m-[2rem] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-80 h-60 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mt-4  px-4">
          {name}
        </h2>

        <p className="text-sm text-gray-600 mt-2 px-4">{description}</p>

        <p className="text-lg font-bold text-gray-900 mt-3  px-4">{price}</p>

        <div className="flex mt-2  px-4">{getStarRating(rating)}</div>
      </div>
    </div>
  );
};
export default ProductInfo;
