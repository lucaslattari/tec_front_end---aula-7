import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-primary">
        Hello, React 19 + Vite + Bootstrap 5!
      </h1>

      <p className="lead">Você clicou <strong>{count}</strong> vezes.</p>

      <Button
        variant="success"
        onClick={() => setCount(prev => prev + 1)}
      >
        Clique aqui
      </Button>
    </div>
  );
}
