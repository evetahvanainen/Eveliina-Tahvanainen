export const ALL_PRODUCTS_HANDLE = 'all-products';

export const ALL_PRODUCTS_TILE = {
  id: 'code:all-products',
  handle: ALL_PRODUCTS_HANDLE,
  title: 'All products',
  image: { url: '/ceramics.jpeg', altText: 'All products' },
};

export function withAllProductsCategory<T extends { handle: string }>(collections: T[]): T[] {
  const exists = collections.some((c) => c.handle.toLowerCase() === ALL_PRODUCTS_HANDLE);
  if (exists) return collections;
  return [ALL_PRODUCTS_TILE as unknown as T, ...collections];
}

export const DEFAULT_CATEGORY_SUBTEXT = 'See more';

export const CATEGORY_SUBTEXT: Record<string, string> = {
  'all-products': 'See more',
  mugs: 'See more',
  bowls: 'See more',
  tableware: 'See more',
  vases: 'See more',
  glass: 'See more',
  sculptures: 'See more',
  workshops: 'See more',
};

export function getCategorySubtext(handle: string) {
  return CATEGORY_SUBTEXT[handle.toLowerCase()] ?? DEFAULT_CATEGORY_SUBTEXT;
}
