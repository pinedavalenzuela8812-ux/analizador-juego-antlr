// Generated from Juego.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JuegoListener from './JuegoListener.js';
import JuegoVisitor from './JuegoVisitor.js';

const serializedATN = [4,1,14,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,1,1,2,4,2,35,8,2,11,2,12,2,36,1,3,1,3,1,3,1,3,1,3,
1,3,1,4,4,4,46,8,4,11,4,12,4,47,1,5,1,5,1,5,1,5,3,5,54,8,5,1,6,1,6,1,6,1,
6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,12,13,
72,0,24,1,0,0,0,2,27,1,0,0,0,4,34,1,0,0,0,6,38,1,0,0,0,8,45,1,0,0,0,10,53,
1,0,0,0,12,55,1,0,0,0,14,59,1,0,0,0,16,63,1,0,0,0,18,69,1,0,0,0,20,73,1,
0,0,0,22,77,1,0,0,0,24,25,3,2,1,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,5,1,0,
0,28,29,5,11,0,0,29,30,5,2,0,0,30,31,3,4,2,0,31,32,5,3,0,0,32,3,1,0,0,0,
33,35,3,6,3,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,
5,1,0,0,0,38,39,5,4,0,0,39,40,5,11,0,0,40,41,5,2,0,0,41,42,3,8,4,0,42,43,
5,3,0,0,43,7,1,0,0,0,44,46,3,10,5,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,
0,0,0,47,48,1,0,0,0,48,9,1,0,0,0,49,54,3,12,6,0,50,54,3,14,7,0,51,54,3,16,
8,0,52,54,3,20,10,0,53,49,1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,
0,0,54,11,1,0,0,0,55,56,5,5,0,0,56,57,5,13,0,0,57,58,5,6,0,0,58,13,1,0,0,
0,59,60,5,7,0,0,60,61,5,11,0,0,61,62,5,6,0,0,62,15,1,0,0,0,63,64,5,8,0,0,
64,65,3,18,9,0,65,66,5,9,0,0,66,67,5,11,0,0,67,68,5,6,0,0,68,17,1,0,0,0,
69,70,5,11,0,0,70,71,5,10,0,0,71,72,3,22,11,0,72,19,1,0,0,0,73,74,5,9,0,
0,74,75,5,11,0,0,75,76,5,6,0,0,76,21,1,0,0,0,77,78,7,0,0,0,78,23,1,0,0,0,
3,36,47,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JuegoParser extends antlr4.Parser {

    static grammarFileName = "Juego.g4";
    static literalNames = [ null, "'juego'", "'{'", "'}'", "'escena'", "'mostrar'", 
                            "';'", "'leer'", "'si'", "'saltar'", "'=='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "ID", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "programa", "juego", "escenas", "escena", "acciones", 
                         "accion", "imprimir", "leer", "condicion", "comparacion", 
                         "saltar", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JuegoParser.ruleNames;
        this.literalNames = JuegoParser.literalNames;
        this.symbolicNames = JuegoParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JuegoParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.juego();
	        this.state = 25;
	        this.match(JuegoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	juego() {
	    let localctx = new JuegoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JuegoParser.RULE_juego);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(JuegoParser.T__0);
	        this.state = 28;
	        this.match(JuegoParser.ID);
	        this.state = 29;
	        this.match(JuegoParser.T__1);
	        this.state = 30;
	        this.escenas();
	        this.state = 31;
	        this.match(JuegoParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escenas() {
	    let localctx = new EscenasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JuegoParser.RULE_escenas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 33;
	            this.escena();
	            this.state = 36; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escena() {
	    let localctx = new EscenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JuegoParser.RULE_escena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(JuegoParser.T__3);
	        this.state = 39;
	        this.match(JuegoParser.ID);
	        this.state = 40;
	        this.match(JuegoParser.T__1);
	        this.state = 41;
	        this.acciones();
	        this.state = 42;
	        this.match(JuegoParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acciones() {
	    let localctx = new AccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JuegoParser.RULE_acciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this.accion();
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 928) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JuegoParser.RULE_accion);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.imprimir();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.leer();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.condicion();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.saltar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JuegoParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(JuegoParser.T__4);
	        this.state = 56;
	        this.match(JuegoParser.STRING);
	        this.state = 57;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JuegoParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(JuegoParser.T__6);
	        this.state = 60;
	        this.match(JuegoParser.ID);
	        this.state = 61;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JuegoParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(JuegoParser.T__7);
	        this.state = 64;
	        this.comparacion();
	        this.state = 65;
	        this.match(JuegoParser.T__8);
	        this.state = 66;
	        this.match(JuegoParser.ID);
	        this.state = 67;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparacion() {
	    let localctx = new ComparacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JuegoParser.RULE_comparacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(JuegoParser.ID);
	        this.state = 70;
	        this.match(JuegoParser.T__9);
	        this.state = 71;
	        this.valor();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saltar() {
	    let localctx = new SaltarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JuegoParser.RULE_saltar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(JuegoParser.T__8);
	        this.state = 74;
	        this.match(JuegoParser.ID);
	        this.state = 75;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JuegoParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JuegoParser.EOF = antlr4.Token.EOF;
JuegoParser.T__0 = 1;
JuegoParser.T__1 = 2;
JuegoParser.T__2 = 3;
JuegoParser.T__3 = 4;
JuegoParser.T__4 = 5;
JuegoParser.T__5 = 6;
JuegoParser.T__6 = 7;
JuegoParser.T__7 = 8;
JuegoParser.T__8 = 9;
JuegoParser.T__9 = 10;
JuegoParser.ID = 11;
JuegoParser.NUMBER = 12;
JuegoParser.STRING = 13;
JuegoParser.WS = 14;

JuegoParser.RULE_programa = 0;
JuegoParser.RULE_juego = 1;
JuegoParser.RULE_escenas = 2;
JuegoParser.RULE_escena = 3;
JuegoParser.RULE_acciones = 4;
JuegoParser.RULE_accion = 5;
JuegoParser.RULE_imprimir = 6;
JuegoParser.RULE_leer = 7;
JuegoParser.RULE_condicion = 8;
JuegoParser.RULE_comparacion = 9;
JuegoParser.RULE_saltar = 10;
JuegoParser.RULE_valor = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_programa;
    }

	juego() {
	    return this.getTypedRuleContext(JuegoContext,0);
	};

	EOF() {
	    return this.getToken(JuegoParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JuegoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_juego;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	escenas() {
	    return this.getTypedRuleContext(EscenasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterJuego(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitJuego(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitJuego(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escenas;
    }

	escena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscenaContext);
	    } else {
	        return this.getTypedRuleContext(EscenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscenas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscenas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escena;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	acciones() {
	    return this.getTypedRuleContext(AccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_acciones;
    }

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAcciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAcciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAcciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_accion;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	saltar() {
	    return this.getTypedRuleContext(SaltarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_imprimir;
    }

	STRING() {
	    return this.getToken(JuegoParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_leer;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_condicion;
    }

	comparacion() {
	    return this.getTypedRuleContext(ComparacionContext,0);
	};

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_comparacion;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterComparacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitComparacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaltarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_saltar;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterSaltar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitSaltar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitSaltar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_valor;
    }

	NUMBER() {
	    return this.getToken(JuegoParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(JuegoParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JuegoParser.ProgramaContext = ProgramaContext; 
JuegoParser.JuegoContext = JuegoContext; 
JuegoParser.EscenasContext = EscenasContext; 
JuegoParser.EscenaContext = EscenaContext; 
JuegoParser.AccionesContext = AccionesContext; 
JuegoParser.AccionContext = AccionContext; 
JuegoParser.ImprimirContext = ImprimirContext; 
JuegoParser.LeerContext = LeerContext; 
JuegoParser.CondicionContext = CondicionContext; 
JuegoParser.ComparacionContext = ComparacionContext; 
JuegoParser.SaltarContext = SaltarContext; 
JuegoParser.ValorContext = ValorContext; 
