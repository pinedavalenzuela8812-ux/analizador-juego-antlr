// Generated from c:/Users/user/ssl-antlr-calculator/MiniJS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJSListener from './MiniJSListener.js';
import MiniJSVisitor from './MiniJSVisitor.js';

const serializedATN = [4,1,13,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,3,1,23,8,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,45,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,53,8,5,10,5,12,5,56,9,5,1,5,0,1,
10,6,0,2,4,6,8,10,0,3,1,0,9,10,1,0,3,4,1,0,5,6,57,0,15,1,0,0,0,2,22,1,0,
0,0,4,24,1,0,0,0,6,30,1,0,0,0,8,35,1,0,0,0,10,44,1,0,0,0,12,14,3,2,1,0,13,
12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,15,
1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,23,3,4,2,0,21,23,3,6,3,0,22,20,1,0,
0,0,22,21,1,0,0,0,23,3,1,0,0,0,24,25,3,8,4,0,25,26,5,11,0,0,26,27,5,1,0,
0,27,28,3,10,5,0,28,29,5,2,0,0,29,5,1,0,0,0,30,31,5,11,0,0,31,32,5,1,0,0,
32,33,3,10,5,0,33,34,5,2,0,0,34,7,1,0,0,0,35,36,7,0,0,0,36,9,1,0,0,0,37,
38,6,5,-1,0,38,39,5,7,0,0,39,40,3,10,5,0,40,41,5,8,0,0,41,45,1,0,0,0,42,
45,5,12,0,0,43,45,5,11,0,0,44,37,1,0,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,
54,1,0,0,0,46,47,10,5,0,0,47,48,7,1,0,0,48,53,3,10,5,6,49,50,10,4,0,0,50,
51,7,2,0,0,51,53,3,10,5,5,52,46,1,0,0,0,52,49,1,0,0,0,53,56,1,0,0,0,54,52,
1,0,0,0,54,55,1,0,0,0,55,11,1,0,0,0,56,54,1,0,0,0,5,15,22,44,52,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJSParser extends antlr4.Parser {

    static grammarFileName = "MiniJS.g4";
    static literalNames = [ null, "'='", "';'", "'*'", "'/'", "'+'", "'-'", 
                            "'('", "')'", "'let'", "'var'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "LET", "VAR", "ID", "NUMBER", "WS" ];
    static ruleNames = [ "programa", "sentencia", "declaracion", "asignacion", 
                         "tipo", "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJSParser.ruleNames;
        this.literalNames = MiniJSParser.literalNames;
        this.symbolicNames = MiniJSParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJSParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0)) {
	            this.state = 12;
	            this.sentencia();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(MiniJSParser.EOF);
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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJSParser.RULE_sentencia);
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.declaracion();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.asignacion();
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



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJSParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.tipo();
	        this.state = 25;
	        this.match(MiniJSParser.ID);
	        this.state = 26;
	        this.match(MiniJSParser.T__0);
	        this.state = 27;
	        this.expresion(0);
	        this.state = 28;
	        this.match(MiniJSParser.T__1);
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



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJSParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(MiniJSParser.ID);
	        this.state = 31;
	        this.match(MiniJSParser.T__0);
	        this.state = 32;
	        this.expresion(0);
	        this.state = 33;
	        this.match(MiniJSParser.T__1);
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



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJSParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
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


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, MiniJSParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 38;
	            this.match(MiniJSParser.T__6);
	            this.state = 39;
	            this.expresion(0);
	            this.state = 40;
	            this.match(MiniJSParser.T__7);
	            break;
	        case 12:
	            this.state = 42;
	            this.match(MiniJSParser.NUMBER);
	            break;
	        case 11:
	            this.state = 43;
	            this.match(MiniJSParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 52;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MiniJSParser.RULE_expresion);
	                    this.state = 46;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 47;
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 48;
	                    this.expresion(6);
	                    break;

	                case 2:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MiniJSParser.RULE_expresion);
	                    this.state = 49;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 50;
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 51;
	                    this.expresion(5);
	                    break;

	                } 
	            }
	            this.state = 56;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

MiniJSParser.EOF = antlr4.Token.EOF;
MiniJSParser.T__0 = 1;
MiniJSParser.T__1 = 2;
MiniJSParser.T__2 = 3;
MiniJSParser.T__3 = 4;
MiniJSParser.T__4 = 5;
MiniJSParser.T__5 = 6;
MiniJSParser.T__6 = 7;
MiniJSParser.T__7 = 8;
MiniJSParser.LET = 9;
MiniJSParser.VAR = 10;
MiniJSParser.ID = 11;
MiniJSParser.NUMBER = 12;
MiniJSParser.WS = 13;

MiniJSParser.RULE_programa = 0;
MiniJSParser.RULE_sentencia = 1;
MiniJSParser.RULE_declaracion = 2;
MiniJSParser.RULE_asignacion = 3;
MiniJSParser.RULE_tipo = 4;
MiniJSParser.RULE_expresion = 5;

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
        this.ruleIndex = MiniJSParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MiniJSParser.EOF, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_sentencia;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID() {
	    return this.getToken(MiniJSParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(MiniJSParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_tipo;
    }

	LET() {
	    return this.getToken(MiniJSParser.LET, 0);
	};

	VAR() {
	    return this.getToken(MiniJSParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_expresion;
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	NUMBER() {
	    return this.getToken(MiniJSParser.NUMBER, 0);
	};

	ID() {
	    return this.getToken(MiniJSParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJSVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniJSParser.ProgramaContext = ProgramaContext; 
MiniJSParser.SentenciaContext = SentenciaContext; 
MiniJSParser.DeclaracionContext = DeclaracionContext; 
MiniJSParser.AsignacionContext = AsignacionContext; 
MiniJSParser.TipoContext = TipoContext; 
MiniJSParser.ExpresionContext = ExpresionContext; 
