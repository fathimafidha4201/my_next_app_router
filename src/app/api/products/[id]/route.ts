import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            cache: "force-cache",
            next: { revalidate: 86400 }
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({
            error: "Failed to fetch product"
        }, { status: 500 });
    }
}