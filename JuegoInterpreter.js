import JuegoVisitor from './generated/JuegoVisitor.js';

export default class JuegoInterpreter extends JuegoVisitor {

    visitImprimir(ctx) {

        const texto = ctx.STRING().getText();

        return `console.log(${texto});`;
    }

    visitAccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitAcciones(ctx) {

        let resultado = "";

        for (let accion of ctx.children) {

            const traduccion = this.visit(accion);

            if (traduccion) {
                resultado += traduccion + "\n";
            }
        }

        return resultado;
    }

    visitEscena(ctx) {

        return this.visit(ctx.acciones());
    }

    visitEscenas(ctx) {

        let resultado = "";

        for (let escena of ctx.children) {

            const traduccion = this.visit(escena);

            if (traduccion) {
                resultado += traduccion;
            }
        }

        return resultado;
    }

    visitJuego(ctx) {

        return this.visit(ctx.escenas());
    }

    visitPrograma(ctx) {

        return this.visit(ctx.juego());
    }
}