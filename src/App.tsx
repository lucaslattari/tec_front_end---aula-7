// src/App.tsx
import { useState } from 'react';
import ProductCard, { ProductData } from './components/ProductCard';

function App() {
    const appTitle: string = "Minha Aplicação com React, TS e Bootstrap!";
    const subTitle: string = "Construindo interfaces incríveis, passo a passo.";

    // Dados iniciais convertidos em state
    const [products, setProducts] = useState<ProductData[]>([
        {
            id: 1, // ID único e estável
            title: "Notebook Gamer",
            description: "Performance extrema para jogos e tarefas pesadas.",
            price: 7499.90,
            imageUrl: "images/notebook.png", // Mantido como imageUrl
            isFeatured: true,
        },
        {
            id: 2, // ID único e estável
            title: "Mouse Ergonômico",
            description: "Conforto e precisão para longas horas de uso.",
            price: 189.50,
            imageUrl: "images/mouse.png", // Mantido como imageUrl
        },
        {
            id: 3, // ID único e estável
            title: "Teclado Mecânico",
            description: "Switches responsivos e iluminação customizável.",
            price: 349.00,
            imageUrl: "images/teclado.png", // Mantido como imageUrl
        },
        // Adicione mais produtos aqui facilmente e eles serão renderizados!
        // {
        //     id: 4,
        //     title: "Monitor Ultrawide",
        //     description: "Imersão total e mais espaço para produtividade.",
        //     price: 2199.00,
        //     imageUrl: "images/monitor.png", // Supondo que a imagem exista
        // }
    ]);

    // Novo estado para armazenar o termo de busca
    const [searchTerm, setSearchTerm] = useState<string>('');

    const addNewProduct = () => {
        // Criamos o novo produto
        const newProduct: ProductData = {
            id: products.length + 1,
            title: 'Novo Produto',
            description: 'Descrição do novo produto',
            price: 199.99,
            imageUrl: '/images/generic.png'
        };

        // IMPORTANTE: Criamos um novo array (imutabilidade)
        // Espalhamos (...) os produtos existentes e adicionamos o novo
        setProducts([...products, newProduct]);
    };

    // Função para lidar com mudanças no campo de busca
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Filtragem dos produtos com base no termo de busca
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid">
            <header
                className="py-4 px-3 m-3 text-white text-center"
                style={{ backgroundColor: '#563d7c' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">{appTitle}</h1>
                    <p className="lead col-lg-8 mx-auto">{subTitle}</p>
                </div>
            </header>

            <main className="container">

                {/* BARRA DE BUSCA - NOVA SEÇÃO */}
                <section className="my-4">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar produtos..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>🔍
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO DE PRODUTOS */}
                <section className="my-5">
                    <h2 className="text-center mb-4">Nossos Produtos</h2>
                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p className="lead">Nenhum produto encontrado com esse termo.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Seção de Adição */}
                <div className="row mb-4">
                    <div className="col-md-4 mx-auto">
                        <button
                            className="btn btn-success w-100"
                            onClick={addNewProduct}
                        >
                            Adicionar Produto
                        </button>
                    </div>
                </div>

            </main>

            <footer className="mt-5 py-4 border-top">
                <p className="text-center text-muted">© {new Date().getFullYear()} Seu Nome/Empresa. Aula de React.</p>
            </footer>
        </div >
    );
}

export default App;