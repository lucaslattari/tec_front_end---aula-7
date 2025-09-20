// src/services/api.ts
import type { ProductData } from '../components/ProductCard'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

async function handle<T>(resp: Response): Promise<T> {
    if (!resp.ok) {
        const msg = await resp.text().catch(() => '')
        throw new Error(`HTTP ${resp.status} - ${msg || resp.statusText}`)
    }
    return resp.json() as Promise<T>
}

export async function fetchProducts(): Promise<ProductData[]> {
    const resp = await fetch(`${BASE_URL}/api/products`)
    return handle<ProductData[]>(resp)
}

export async function fetchProductById(id: number): Promise<ProductData> {
    const resp = await fetch(`${BASE_URL}/api/products/${id}`)
    return handle<ProductData>(resp)
}
