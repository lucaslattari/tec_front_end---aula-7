// src/App.tsx
import ProductCard from './components/ProductCard';

function App() {
    const appTitle: string = "Minha Aplicação com React, TS e Bootstrap!";
    const subTitle: string = "Construindo interfaces incríveis, passo a passo.";
    const isUserLoggedIn: boolean = true;

    // Dados para nossos ProductCards
    const products = [
        {
            id: 1,
            title: "Notebook Gamer",
            description: "Performance extrema para jogos e tarefas pesadas.",
            price: 7499.90,
            imageUrl: "images/notebook.png",
            isFeatured: true, // Este terá um badge de destaque
        },
        {
            id: 2,
            title: "Mouse Ergonômico",
            description: "Conforto e precisão para longas horas de uso.",
            price: 189.50,
            imageUrl: "images/mouse.png",
        },
        {
            id: 3,
            title: "Teclado Mecânico",
            description: "Switches responsivos e iluminação customizável.",
            price: 349.00,
            imageUrl: "images/teclado.png",
        }
    ];

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

            <div className="container">
                <main>
                    <p className="lead">
                        Bem-vindo à nossa exploração de React, TypeScript e Bootstrap.
                        Vamos aprender a construir componentes incríveis!
                    </p>

                    {/* Status da aplicação */}
                    <div className="my-4 p-3 bg-light rounded shadow-sm">
                        <h5 className="mb-3">Status da Aplicação</h5>
                        <p>Data de hoje: {new Date().toLocaleDateString()}</p>
                        {isUserLoggedIn ? (
                            <div className="alert alert-success" role="alert">
                                Usuário está logado! Aproveite o conteúdo.
                            </div>
                        ) : (
                            <div className="alert alert-warning" role="alert">
                                Usuário não está logado. <a href="#" className="alert-link">Faça login</a> para continuar.
                            </div>
                        )}
                    </div>

                    {/* SEÇÃO DE PRODUTOS */}
                    <section className="my-5">
                        <h2 className="text-center mb-4">Nossos Produtos</h2>
                        <div className="row">
                            {/* Produtos apresentados individualmente */}
                            <ProductCard
                                title={products[0].title}
                                description={products[0].description}
                                price={products[0].price}
                                imageUrl={products[0].imageUrl}
                                isFeatured={products[0].isFeatured}
                            />
                            <ProductCard
                                title={products[1].title}
                                description={products[1].description}
                                price={products[1].price}
                                imageUrl={products[1].imageUrl}
                            />
                            <ProductCard
                                title={products[2].title}
                                description={products[2].description}
                                price={products[2].price}
                                imageUrl={products[2].imageUrl}
                                isFeatured={false}
                            />
                        </div>
                    </section>

                </main>

                <footer className="mt-5 py-4 border-top">
                    <p className="text-center text-muted">© {new Date().getFullYear()} Seu Nome/Empresa. Aula de React.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;