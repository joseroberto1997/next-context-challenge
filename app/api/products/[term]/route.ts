import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  const productTerm = params.term;

  const response = await fetch(
    `sualoja/api/catalog_system/pub/products/search/${productTerm}`
  );

  const data = await response.json();

  return NextResponse.json({ data });
}
