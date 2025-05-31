// src/App.tsx
import { useState, useEffect } from 'react';
import ProductCard, { ProductData } from './components/ProductCard';
import ProductForm, { ProductFormData } from './components/ProductForm'; // 1. Importar ProductForm e ProductFormData

const initialProductsData: ProductData[] = [
    {
        id: 1,
        title: "Notebook Gamer Pro",
        description: "Performance extrema para jogos e tarefas pesadas, com RTX 4090.",
        price: 7499.90,
        imageUrl: "images/notebook.png",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Mouse Ergonômico X200",
        description: "Conforto e precisão para longas horas de uso, sensor óptico de 16000 DPI.",
        price: 189.50,
        imageUrl: "images/mouse.png",
    },
    {
        id: 3,
        title: "Teclado Mecânico RGB",
        description: "Switches responsivos (Blue), ABNT2 e iluminação customizável por tecla.",
        price: 349.00,
        imageUrl: "images/teclado.png",
    },
];

function App() {
    const appTitle: string = "Catálogo de Produtos Interativo"; // Título atualizado
    const subTitle: string = "Adicione, filtre e explore nossos produtos!"; // Subtítulo atualizado 

    const [products, setProducts] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Efeito para carregar dados iniciais (simulado)
    useEffect(() => {
        console.log("useEffect (Dados Iniciais): Montagem do App - Buscando dados...");
        setTimeout(() => {
            setProducts(initialProductsData);
            setIsLoading(false);
            console.log("useEffect (Dados Iniciais): Dados carregados!");
        }, 5000);
    }, []); // Array de dependências VAZIO: executa SÓ UMA VEZ após a montagem inicial

    useEffect(() => {
        if (searchTerm) {
            document.title = `Buscando: ${searchTerm} - Catálogo`;
        } else {
            document.title = 'Catálogo de Produtos Interativo';
        }
        console.log(`useEffect (Título): Título atualizado para: '${searchTerm}'`);

        // Função de Limpeza (Cleanup)
        return () => {
            console.log(`useEffect (Título) - Cleanup: searchTerm ANTERIOR era: '${searchTerm}'`);
        };
    }, [searchTerm]); // ← ESTA É A GRANDE DIFERENÇA!

    // 2. Criar a função handleAddProduct
    const handleAddProduct = (newProductData: ProductFormData) => {
        const newProductWithId: ProductData = {
            ...newProductData,
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1, // Gerar ID único
            // isFeatured já vem de newProductData, com default false se não estiver no form
        };
        setProducts(prevProducts => [...prevProducts, newProductWithId]);
    };

    const handleAddToCart = (productId: number) => {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd) {
            console.log(`Adicionado ao carrinho (simulado): ${productToAdd.title} (ID: ${productId})`);
            // Lógica real do carrinho virá em aulas futuras!
        } else {
            console.warn(`Tentativa de adicionar produto com ID inexistente: ${productId}`);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="container text-center mt-5">
                <h2 className="mb-3">⏳ Carregando produtos...</h2>
                <p className="text-muted">Aguarde um momento, estamos buscando os dados!</p>
            </div>
        );
    }

    return (
        <div className="container-fluid bg-light min-vh-100">
            <header
                className="py-4 px-3 mb-4 text-white text-center shadow-sm"
                style={{ backgroundColor: '#563d7c' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">{appTitle}</h1>
                    <p className="lead col-lg-8 mx-auto">{subTitle}</p>
                </div>
            </header>

            <main className="container">
                <div className="row">
                    {/* Coluna para o formulário (à esquerda em telas médias e grandes) */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <section>
                            <ProductForm onAddProduct={handleAddProduct} />
                        </section>
                    </div>

                    {/* Coluna para a busca e listagem de produtos (à direita) */}
                    <div className="col-lg-8">
                        <section className="mb-4 p-3 card shadow-sm"> {/* Barra de busca dentro de um card */}
                            <h3 className="mb-3 text-center">Buscar Produtos</h3>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o nome do produto..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>
                        </section>

                        <section className="my-4">
                            <h2 className="text-center mb-4">Nossos Produtos ({filteredProducts.length})</h2>
                            <div className="row">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onAddToCart={handleAddToCart}
                                        />
                                    ))
                                ) : (
                                    <div className="col-12 text-center">
                                        <div className="alert alert-info" role="alert">
                                            <p className="lead mb-0">
                                                {searchTerm
                                                    ? "Nenhum produto encontrado com esse termo."
                                                    : "Nenhum produto cadastrado ainda."}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-5 py-4 border-top bg-white">
                <p className="text-center text-muted">© {new Date().getFullYear()} Catálogo Interativo. Semana 5.</p>
            </footer>
        </div>
    );
}

export default App;
