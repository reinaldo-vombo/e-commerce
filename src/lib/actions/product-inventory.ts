'use server';

export const createProduct = async (data: FormData) => {
  const name = data.get('name')?.toString();
  const description = data.get('description')?.toString();
  const details = data.get('details')?.toString();
  const price = data.get('price')?.toString();
  const priceDiscount = data.get('priceDiscount')?.toString();
  const pricePercentage = data.get('pricePercentage')?.toString();
  const brand = data.get('brand')?.toString();
  const category = data.get('category')?.toString();
  const gender = data.get('gender')?.toString();
  const sizes = data.getAll('sizes[]') as string[];

  console.log({
    name,
    description,
    details,
    price,
    priceDiscount,
    pricePercentage,
    brand,
    category,
    gender,
    sizes,
  });
};
