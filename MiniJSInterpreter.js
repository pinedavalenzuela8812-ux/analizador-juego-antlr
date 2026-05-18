import MiniJSVisitor from "./generated/MiniJSVisitor.js";

export default class MiniJSInterpreter extends MiniJSVisitor {
    constructor() {
        super();
        this.variables = {};
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitDeclaracion(ctx) {
        const nombre = ctx.ID().getText();
        const valor = this.visit(ctx.expresion());

        this.variables[nombre] = valor;
        return valor;
    }

    visitAsignacion(ctx) {
        const nombre = ctx.ID().getText();
        const valor = this.visit(ctx.expresion());

        this.variables[nombre] = valor;
        return valor;
    }

    visitExpresion(ctx) {
        if (ctx.NUMBER()) {
            return Number(ctx.NUMBER().getText());
        }

        if (ctx.ID()) {
            const nombre = ctx.ID().getText();

            if (!(nombre in this.variables)) {
                throw new Error(`Variable no declarada: ${nombre}`);
            }

            return this.variables[nombre];
        }

        if (ctx.getChild(0).getText() === "(") {
            return this.visit(ctx.expresion(0));
        }

        const izquierda = this.visit(ctx.expresion(0));
        const derecha = this.visit(ctx.expresion(1));
        const operador = ctx.getChild(1).getText();

        switch (operador) {
            case "+":
                return izquierda + derecha;
            case "-":
                return izquierda - derecha;
            case "*":
                return izquierda * derecha;
            case "/":
                return izquierda / derecha;
        }
    }
}