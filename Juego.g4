grammar Juego;


programa
    : juego EOF
    ;


juego
    : 'juego' ID '{' escenas '}'
    ;


escenas
    : escena+
    ;


escena
    : 'escena' ID '{' acciones '}'
    ;


acciones
    : accion+
    ;


accion
    : imprimir
    | leer
    | condicion
    | saltar
    ;


imprimir
    : 'mostrar' STRING ';'
    ;


leer
    : 'leer' ID ';'
    ;


condicion
    : 'si' comparacion 'saltar' ID ';'
    ;


comparacion
    : ID '==' valor
    ;


saltar
    : 'saltar' ID ';'
    ;


valor
    : NUMBER
    | STRING
    ;


ID      : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMBER  : [0-9]+ ;
STRING  : '"' .*? '"' ;


WS : [ \t\r\n]+ -> skip ;