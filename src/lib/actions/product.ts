'use server';

export async function createProduct({ data }: any) {
  const { name, surname } = data;
  console.log(data);
}
