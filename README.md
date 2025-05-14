# Paradigma Estructural
Es un paradigma de la programación que enfatiza el uso de construcciones de flujo estructurado, por ejemplo, secuencias, bucles, condicionales, para organizar y administrar el código. 

## Características del paradigma estructural en JavaScript:



**Diseño de arriba hacia abajo**


  -  Inicia con una visión general del programa.
  -  Divide el problema en módulos y submódulos más pequeños.


**Modularidad**


  -  Cada módulo tiene una función específica.
  -  Comunicación clara entre módulos mediante interfaces definidas.


**Flujo de control estructurado**


  -  Usa secuencias, decisiones (if, switch) y bucles (for, while).
  -  Evita estructuras de salto desordenadas.


**Entrada única, salida única (SESE)**


  -  Cada módulo o función tiene un solo punto de entrada y uno de salida.


**Evite las declaraciones GOTO**


  -  Se evita el uso de goto para mantener un flujo de código legible y predecible.


**Abstracción de datos**


  -  Encapsula datos en estructuras y accede a ellos mediante interfaces claras.
  -  Minimiza el uso de variables globales.


**Refinamiento escalonado**


  -  Detalla gradualmente cada módulo desde una visión general hacia aspectos específicos.


**Comentarios y documentación**


  -  Explica el propósito de funciones y estructuras.
  -  Documenta entradas, salidas y lógica general.


**Pruebas y depuración**


  -  Prueba cada módulo por separado antes de integrarlo.
  -  Depurar errores de forma localizada.


**Reutilización del código**


  -  Escribe módulos reutilizables para reducir redundancia y mejorar el mantenimiento.


**Lenguajes de programación estructurados**


  -  Lenguajes como JavaScript, Python, C o Java permiten aplicar este paradigma fácilmente.


**Diagramas de flujo y pseudocódigo**


  -  Usa diagramas de flujo o pseudocódigo antes de codificar.


**Legibilidad y estilo**


  -  Sigue convenciones claras y consistentes.
  -  Prioriza que el código sea fácil de entender.


**Refactorización**


  -  Mejora el código con revisiones periódicas.
  -  Elimina redundancias y mejora la claridad.

**Ejemplo - Programación Estructural**

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado);



**Ejercicio - Programación Estructural**


Verificar número par o impar
Escribe un programa en JavaScript que:
Pida al usuario un número entero.


Determine si el número es par o impar.


Muestre el resultado en consola.




