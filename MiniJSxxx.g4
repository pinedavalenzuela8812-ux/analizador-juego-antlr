grammar MiniJS;

// 🔹 Regla inicial
programa
    : sentencia* EOF
    ;

// 🔹 Sentencias
sentencia
    : declaracion
    | asignacion
    ;

// 🔹 Declaración (let / var)
declaracion
    : tipo ID '=' expresion ';'
    ;

// 🔹 Asignación
asignacion
    : ID '=' expresion ';'
    ;

// 🔹 Tipo de declaración
tipo
    : LET
    | VAR
    ;

// 🔹 Expresiones aritméticas
expresion
    : expresion ('*' | '/') expresion
    | expresion ('+' | '-') expresion
    | '(' expresion ')'
    | NUMBER
    | ID
    ;

// 🔹 TOKENS (MUY IMPORTANTE)
LET : 'let';
VAR : 'var';

ID : [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER : [0-9]+;

// 🔹 Ignorar espacios
WS : [ \t\r\n]+ -> skip;