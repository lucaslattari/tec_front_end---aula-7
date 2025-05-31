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
    onAddToCart: (productId: number) => void;
}

// 3. Componente agora recebe 'id' via props (embora não usado visualmente ainda)
function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Previne comportamentos padrão
        onAddToCart(product.id); // Chama a função passada pelo pai
    };

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
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text mb-2 flex-grow-1">{product.description}</p>
                    <p className="card-text fw-bold fs-5 mb-3">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="mt-auto"> {/* Empurra botões para baixo */}
                        <a href="#" className="btn btn-outline-primary btn-sm me-2 mb-3">
                            Ver Detalhes
                        </a>
                        <button
                            className="btn btn-success btn-sm"
                            onClick={handleCartClick}
                        >
                            <i className="bi bi-cart-plus"></i> Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;