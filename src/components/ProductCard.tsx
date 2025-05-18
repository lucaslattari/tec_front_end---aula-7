// src/components/ProductCard.tsx

// 1. Modelo de dados do produto (o que um produto realmente é)
export interface ProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    isFeatured?: boolean;
}

// 2. Props do componente (o que o componente recebe)
export interface ProductCardProps {
    product: ProductData;
}

// 3. Componente agora recebe 'id' via props (embora não usado visualmente ainda)
function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="col-md-4 mb-4">
            {/* Card com estilo uniforme para todos os produtos */}
            <div className="card h-100 border">
                {/* Badge para produtos destacados */}
                {product.isFeatured && (
                    <div className="position-absolute top-0 end-0 p-2">
                        <span className="badge bg-primary">Destaque</span>
                    </div>
                )}

                <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text mb-3">{product.description}</p>
                    <p className="card-text fw-bold fs-5 mb-3">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <a href="#" className="btn btn-primary">
                        Ver Detalhes
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;