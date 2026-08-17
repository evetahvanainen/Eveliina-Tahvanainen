export const dynamic = 'force-dynamic';
// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { shopifyFetch } from '@/lib/shopify';
import { PRODUCTS_QUERY } from '@/lib/shopify.queries';

type ShopifyProductsResponse = {
  products: {
    edges: Array<{
      node: {
        id: string;
        handle: string;
        title: string;
        description: string;
        featuredImage: { url: string; altText: string | null } | null;
        images: { nodes: Array<{ url: string; altText: string | null }> } | null;
        priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
      };
    }>;
  };
};

export async function GET() {
  try {
    const data = await shopifyFetch<ShopifyProductsResponse, { first: number }>({
      query: PRODUCTS_QUERY,
      variables: { first: 50 },
    });

    const products = data.products.edges.map(({ node }) => node);

    return NextResponse.json({ ok: true, products });
  } catch (err: any) {
    console.error('PRODUCTS API ERROR:', err);
    return NextResponse.json({ ok: false, error: err?.message ?? String(err) }, { status: 500 });
  }
}
