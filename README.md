# Autor
Ginno Pineda Valenzuela
UTN - Sintaxis y Semántica de los Lenguajes

# analizador-juego-antlr
Proyecto de compiladores utilizando ANTLR4 y Node.js

## Descripción
Proyecto realizado con ANTLR4 y Node.js que implementa un analizador léxico y sintáctico para un lenguaje de juegos.

El analizador:
- Reconoce tokens y lexemas
- Genera árbol sintáctico
- Traduce instrucciones a JavaScript
- Ejecuta interpretación básica

---

# Requisitos

- Node.js
- Java JDK 17
- ANTLR4

---

# Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/pinedavalenzuela8812-ux/analizador-juego-antlr.git
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Generar parser y lexer

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor Juego.g4 -o generated
```

---

## 4. Ejecutar el proyecto

```bash
node index.js
```

---

# Ejemplo de entrada

```txt
juego Aventura {

    escena Intro {
        mostrar "Bienvenido a la aventura";
    }

}
```

---

# Resultado esperado

```js
console.log("Bienvenido a la aventura");
```

---

# Archivos principales

- `Juego.g4` → gramática ANTLR4
- `JuegoInterpreter.js` → intérprete
- `index.js` → ejecución principal
- `generated/` → lexer y parser generados
- `input.txt` → archivo de entrada

---

# Autor

Proyecto realizado para Sintaxis y Semántica de los Lenguajes.
