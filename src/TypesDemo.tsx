/* TypesDemo.tsx */
export function TypesDemo(): JSX.Element {
    // -------- EXEMPLO COM STRING --------
    const courseName: string = "React com TypeScript e Bootstrap";
    const instructorName: string = "Lucas Lattari";

    // Demonstrando métodos de string no console
    //console.log(courseName.toUpperCase());       // "REACT COM TYPESCRIPT E BOOTSTRAP"
    //console.log(instructorName.toLocaleLowerCase()); // "lucas lattari"

    // -------- EXEMPLO COM NUMBER --------
    const currentWeek: number = 2;
    const coursePrice: number = 499.90;

    // Demonstrando métodos de number no console
    //console.log("currentWeek × 10 =", currentWeek * 10); // multiplicação simples
    //console.log("coursePrice.toFixed(1) =", coursePrice.toFixed(1)); // "499.9"
    //console.log("coursePrice.toLocaleString() =", coursePrice.toLocaleString()); // exibe com separador de milhar

    // -------- EXEMPLO COM BOOLEAN --------
    const isLive: boolean = true;
    const hasFinished: boolean = false;

    // Demonstrando operações lógicas no console
    /*console.log("isLive:", isLive);                // true
    console.log("hasFinished:", hasFinished);      // false
    console.log("!isLive (não isLive):", !isLive); // false
    console.log("isLive && hasFinished:", isLive && hasFinished); // false
    console.log("isLive || hasFinished:", isLive || hasFinished); // true*/

    // -------- EXEMPLO COM ARRAY --------
    // Array de strings
    const studentNames: string[] = ["Alice", "Bob", "Charlie"];
    // Array de números
    const grades: number[] = [10, 8.5, 9.2];

    // Demonstrando métodos de array no console
    /*
    console.log("studentNames:", studentNames);                // ["Alice", "Bob", "Charlie"]
    console.log("Quantidade de alunos:", studentNames.length); // 3
    console.log("Lista:", studentNames.join(" • "));          // "Alice • Bob • Charlie"

    console.log("notas originais:", grades);                  // [10, 8.5, 9.2]
    // Exemplo de map: adiciona 1 ponto a cada nota
    console.log("notas +1:", grades.map(g => g + 1));         // [11, 9.5, 10.2]
    // Exemplo de filter: notas >= 9
    console.log("notas ≥ 9:", grades.filter(g => g >= 9));     // [10, 9.2]*/

    // -------- EXEMPLO COM ANY --------
    let something: any = "Posso ser texto...";
    //console.log("String:", something.toUpperCase());

    something = 42;
    //console.log("Number:", something.toFixed(2));

    something = { id: 1, name: "Objeto" };
    //console.log("Objeto:", something.name);

    //console.log("Erro runtime:", something.nonExistentMethod());

    // -------- EXEMPLO COM VOID --------
    function logMessage(message: string): void {
        console.log("📢 LOG:", message);
        // sem 'return' ou com 'return;' vazio — nada é retornado
    }

    // Chamando a função
    logMessage("Este é um exemplo de função void!");

    // -------- EXEMPLO COM RETORNO --------
    function somar(a: number, b: number): number {
        // devolve a soma de dois números
        return a + b;
    }
    const resultado = somar(7, 5);
    console.log("➕ somar(7, 5) =", resultado); // 12

    return (
        <section>
            <div className="alert alert-info my-3">
                <h5 className="mb-2">Teste de Strings ✅</h5>
                <p>
                    <strong>courseName:</strong> {courseName}
                    <br />
                    <strong>instructorName:</strong> {instructorName}
                    <br />
                    <em>(Abra o DevTools&nbsp;→ Console para ver os métodos em ação!)</em>
                </p>
            </div>

            <div className="alert alert-warning my-3">
                <h5 className="mb-2">Teste de Numbers 🔢</h5>
                <p>
                    <strong>currentWeek:</strong> {currentWeek}
                    <br />
                    <strong>coursePrice:</strong> R$ {coursePrice.toFixed(2)}
                    <br />
                    <em>(Confira o Console do DevTools para ver as transformações!)</em>
                </p>
            </div>

            <div className="alert alert-success my-3">
                <h5 className="mb-2">Teste de Booleans 🔘</h5>
                <p>
                    <strong>isLive:</strong> {isLive.toString()}
                    <br />
                    <strong>hasFinished:</strong> {hasFinished.toString()}
                    <br />
                    <em>(Abra o DevTools → Console para ver as operações lógicas!)</em>
                </p>
            </div>

            <div className="alert alert-primary my-3">
                <h5 className="mb-2">Teste de Arrays 📚</h5>
                <p>
                    <strong>studentNames:</strong> {studentNames.join(", ")}
                    <br />
                    <strong>grades (com 2 casas decimais):</strong>{" "}
                    {grades.map(g => g.toFixed(2)).join(" / ")}
                    <br />
                    <em>(Abra o DevTools → Console para ver mais métodos em ação!)</em>
                </p>
            </div>

            <div className="alert alert-secondary my-3">
                <h5 className="mb-2">Void vs. Função com Retorno 🔄</h5>
                <p>
                    <strong>logMessage()</strong> → imprime no console e retorna <code>void</code>.
                    <br />
                    <strong>somar(7, 5)</strong> → retorna um <code>number</code>: {resultado}
                    <br />
                    <em>(Abra o DevTools → Console para ver os dois logs!)</em>
                </p>
            </div>
        </section>
    );
}
