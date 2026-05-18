// Generated from c:/Users/user/ssl-antlr-calculator/MiniJS.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiniJSParser}.
 */
public interface MiniJSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(MiniJSParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(MiniJSParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(MiniJSParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(MiniJSParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(MiniJSParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(MiniJSParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(MiniJSParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(MiniJSParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#tipo}.
	 * @param ctx the parse tree
	 */
	void enterTipo(MiniJSParser.TipoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#tipo}.
	 * @param ctx the parse tree
	 */
	void exitTipo(MiniJSParser.TipoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(MiniJSParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(MiniJSParser.ExpresionContext ctx);
}