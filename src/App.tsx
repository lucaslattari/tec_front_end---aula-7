// src/App.tsx
import { Routes, Route } from 'react-router-dom';  // NOVOS IMPORTS!
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header';
import { CartProvider } from './contexts/CartContext';

function App() {
    const appTitle: string = "Catálogo de Produtos Interativo";
    const subTitle: string = "Produtos carregados da nossa API (Express + Prisma + Postgres)!";

    return (
        <CartProvider>
            <div className="container-fluid bg-light min-vh-100">
                {/* Header global com contexto do carrinho */}
                <Header title={appTitle} subtitle={subTitle} />

                <main className="container">
                    {/* AGORA TEMOS ROTAS! */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:productId" element={<ProductDetailPage />} />
                        <Route path="*" element={<div>404...</div>} />
                    </Routes>
                </main>

                <p className="text-center text-muted">
                    © {new Date().getFullYear()} Catálogo Interativo — Back-end próprio em Node/Express
                </p>
            </div>
        </CartProvider>
    );
}

export default App;
