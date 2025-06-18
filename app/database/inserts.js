const Matematicas = [
    {
        subtheme: "fracciones",
        title: "Fracciones",
        description: "Operaciones y conceptos básicos de fracciones: suma, resta, multiplicación, división y simplificación",
        questions: [
            {
                question: "¿Qué es una fracción?",
                answerd: "Una fracción es un número que representa una parte de un todo. Está formada por dos números: el numerador (número de arriba) que indica cuántas partes tomamos, y el denominador (número de abajo) que indica en cuántas partes iguales se divide el todo. Por ejemplo, en 3/4, el 3 es el numerador y el 4 es el denominador, lo que significa que tomamos 3 partes de un total de 4 partes iguales.",
                keywords: ["fraccion", "numerador", "denominador", "parte", "todo", "numero", "division", "cociente", "quebrado", "racional"]
            },
            {
                question: "¿Cómo sumar fracciones con el mismo denominador?",
                answerd: "Para sumar fracciones con el mismo denominador, simplemente sumas los numeradores y mantienes el mismo denominador. Por ejemplo: 2/5 + 3/5 = (2+3)/5 = 5/5 = 1. El denominador permanece igual porque las partes del todo son del mismo tamaño.",
                keywords: ["sumar", "fracciones", "mismo", "denominador", "numerador", "igual", "mantener", "suma", "adicion"]
            },
            {
                question: "¿Cómo sumar fracciones con diferente denominador?",
                answerd: "Para sumar fracciones con diferentes denominadores, primero debes encontrar el mínimo común múltiplo (MCM) de los denominadores. Luego conviertes ambas fracciones para que tengan el mismo denominador y después sumas los numeradores. Por ejemplo: 1/3 + 1/4 = 4/12 + 3/12 = 7/12. El MCM de 3 y 4 es 12.",
                keywords: ["sumar", "fracciones", "diferente", "denominador", "mcm", "minimo", "comun", "multiplo", "convertir", "equivalente"]
            },
            {
                question: "¿Cómo restar fracciones?",
                answerd: "Para restar fracciones, el proceso es similar a la suma. Si tienen el mismo denominador, restas los numeradores. Si tienen denominadores diferentes, primero encuentras el MCM, conviertes las fracciones y luego restas los numeradores. Por ejemplo: 3/4 - 1/4 = 2/4 = 1/2. O con denominadores diferentes: 2/3 - 1/6 = 4/6 - 1/6 = 3/6 = 1/2.",
                keywords: ["restar", "fracciones", "resta", "sustraccion", "denominador", "numerador", "mcm", "diferencia", "quitar"]
            },
            {
                question: "¿Cómo multiplicar fracciones?",
                answerd: "Para multiplicar fracciones, multiplicas numerador por numerador y denominador por denominador. Es más fácil que sumar porque no necesitas encontrar denominadores comunes. Por ejemplo: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. Siempre simplifica el resultado al final.",
                keywords: ["multiplicar", "fracciones", "producto", "numerador", "denominador", "multiplicacion", "por", "simplificar", "resultado"]
            },
            {
                question: "¿Cómo dividir fracciones?",
                answerd: "Para dividir fracciones, multiplicas por el recíproco (inverso) de la segunda fracción. El recíproco se obtiene intercambiando numerador y denominador. Por ejemplo: 2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9. Recuerda: 'dividir es multiplicar por el recíproco'.",
                keywords: ["dividir", "fracciones", "division", "reciproco", "inverso", "intercambiar", "multiplicar", "cociente", "entre"]
            },
            {
                question: "¿Cómo simplificar fracciones?",
                answerd: "Para simplificar una fracción, divides tanto el numerador como el denominador por su máximo común divisor (MCD). Una fracción está en su forma más simple cuando el MCD del numerador y denominador es 1. Por ejemplo: 12/18 = 12÷6/18÷6 = 2/3, porque el MCD de 12 y 18 es 6.",
                keywords: ["simplificar", "fracciones", "mcd", "maximo", "comun", "divisor", "reducir", "minima", "expresion", "dividir", "forma", "simple"]
            },
            {
                question: "¿Qué son las fracciones equivalentes?",
                answerd: "Las fracciones equivalentes son fracciones que representan la misma cantidad o proporción, aunque tengan números diferentes. Se obtienen multiplicando o dividiendo tanto el numerador como el denominador por el mismo número. Por ejemplo: 1/2 = 2/4 = 3/6 = 4/8, todas representan la mitad.",
                keywords: ["equivalentes", "fracciones", "misma", "cantidad", "proporcion", "multiplicar", "dividir", "igual", "representa", "mitad"]
            }
        ]
    },
    {
        subtheme: "algebra",
        title: "Álgebra Básica",
        description: "Variables, ecuaciones, expresiones algebraicas y resolución de problemas algebraicos",
        questions: [
            {
                question: "¿Qué es una ecuación?",
                answerd: "Una ecuación es una igualdad matemática que contiene una o más variables. Tiene dos lados separados por un signo igual (=). El objetivo es encontrar el valor de la variable que hace que ambos lados sean iguales. Por ejemplo: 2x + 3 = 11 es una ecuación donde x = 4.",
                keywords: ["ecuacion", "igualdad", "variable", "igual", "dos", "lados", "resolver", "encontrar", "valor", "matematica"]
            },
            {
                question: "¿Cómo resolver ecuaciones lineales simples?",
                answerd: "Para resolver ecuaciones lineales, debes aislar la variable usando operaciones inversas. Las operaciones que hagas de un lado, debes hacerlas del otro lado también. Por ejemplo: x + 3 = 7, restas 3 de ambos lados: x = 7 - 3 = 4. Siempre verifica tu answerd sustituyendo el valor encontrado.",
                keywords: ["resolver", "ecuaciones", "lineales", "aislar", "variable", "operaciones", "inversas", "ambos", "lados", "verificar", "sustituir"]
            },
            {
                question: "¿Qué son los términos semejantes?",
                answerd: "Los términos semejantes son términos algebraicos que tienen exactamente las mismas variables con los mismos exponentes. Solo pueden diferir en el coeficiente (el número que multiplica a la variable). Por ejemplo: 3x, -5x, y 7x son términos semejantes porque todos tienen la variable x elevada a la primera potencia.",
                keywords: ["terminos", "semejantes", "mismas", "variables", "exponentes", "coeficiente", "multiplica", "parecidos", "iguales", "primera", "potencia"]
            },
            {
                question: "¿Cómo sumar y restar términos semejantes?",
                answerd: "Para sumar o restar términos semejantes, sumas o restas los coeficientes y mantienes la parte variable igual. Por ejemplo: 3x + 5x = 8x, o 7y - 3y = 4y. Si los términos no son semejantes, no se pueden combinar directamente.",
                keywords: ["sumar", "restar", "terminos", "semejantes", "coeficientes", "mantener", "variable", "combinar", "directamente"]
            },
            {
                question: "¿Qué es una expresión algebraica?",
                answerd: "Una expresión algebraica es una combinación de números, variables y operaciones matemáticas (suma, resta, multiplicación, división). A diferencia de una ecuación, no tiene signo igual. Por ejemplo: 2x + 3y - 5 es una expresión algebraica.",
                keywords: ["expresion", "algebraica", "combinacion", "numeros", "variables", "operaciones", "suma", "resta", "multiplicacion", "division", "signo", "igual"]
            },
            {
                question: "¿Cómo despejar una variable?",
                answerd: "Despejar una variable significa aislarla en uno de los lados de la ecuación. Usas operaciones inversas: si algo se suma, lo restas; si se multiplica, lo divides; si está elevado al cuadrado, sacas raíz cuadrada. Por ejemplo: 2x + 5 = 15, primero restas 5: 2x = 10, luego divides entre 2: x = 5.",
                keywords: ["despejar", "variable", "aislar", "operaciones", "inversas", "suma", "resta", "multiplica", "divide", "cuadrado", "raiz"]
            },
            {
                question: "¿Qué es la propiedad distributiva?",
                answerd: "La propiedad distributiva establece que a(b + c) = ab + ac. Significa que cuando multiplicas un número por una suma, puedes multiplicar ese número por cada término de la suma por separado. Por ejemplo: 3(x + 4) = 3x + 12. Es muy útil para resolver ecuaciones.",
                keywords: ["propiedad", "distributiva", "multiplicar", "suma", "separado", "termino", "resolver", "ecuaciones", "parentesis", "expandir"]
            }
        ]
    },
    {
        subtheme: "estadistica",
        title: "Estadística: Moda, Mediana y Media",
        description: "Medidas de tendencia central para analizar conjuntos de datos",
        questions: [
            {
                question: "¿Qué es la media aritmética?",
                answerd: "La media aritmética, también llamada promedio, es la suma de todos los valores dividida entre la cantidad de valores. Por ejemplo, la media de 2, 4, 6, 8 es (2+4+6+8)÷4 = 20÷4 = 5. La media nos dice cuál sería el valor si todos los datos fueran iguales.",
                keywords: ["media", "aritmetica", "promedio", "suma", "valores", "dividir", "cantidad", "todos", "iguales", "central"]
            },
            {
                question: "¿Qué es la moda?",
                answerd: "La moda es el valor que aparece con mayor frecuencia en un conjunto de datos. Puede haber una moda (unimodal), dos modas (bimodal), varias modas (multimodal) o no haber moda. Por ejemplo, en el conjunto 1, 2, 2, 3, 4, 2, 5, la moda es 2 porque aparece tres veces.",
                keywords: ["moda", "valor", "mayor", "frecuencia", "aparece", "mas", "veces", "unimodal", "bimodal", "multimodal", "conjunto", "datos"]
            },
            {
                question: "¿Qué es la mediana?",
                answerd: "La mediana es el valor central cuando los datos están ordenados de menor a mayor. Si hay un número impar de datos, la mediana es el valor del medio. Si hay un número par de datos, la mediana es el promedio de los dos valores centrales. Por ejemplo, en 1, 3, 5, 7, 9, la mediana es 5.",
                keywords: ["mediana", "valor", "central", "ordenados", "menor", "mayor", "impar", "par", "medio", "promedio", "centrales"]
            },
            {
                question: "¿Cuál es la diferencia entre media, mediana y moda?",
                answerd: "La media es el promedio de todos los valores, la mediana es el valor central de los datos ordenados, y la moda es el valor más frecuente. Cada una nos da información diferente: la media puede verse afectada por valores extremos, la mediana es más resistente a estos valores, y la moda nos dice qué valor es más común.",
                keywords: ["diferencia", "media", "mediana", "moda", "promedio", "central", "frecuente", "extremos", "resistente", "comun", "informacion"]
            },
            {
                question: "¿Cómo calcular la media de un conjunto de datos?",
                answerd: "Para calcular la media: 1) Suma todos los valores del conjunto, 2) Cuenta cuántos valores hay, 3) Divide la suma entre el número de valores. Fórmula: Media = Σx/n, donde Σx es la suma de todos los valores y n es el número de valores.",
                keywords: ["calcular", "media", "suma", "todos", "valores", "contar", "dividir", "numero", "formula", "conjunto", "datos"]
            },
            {
                question: "¿Cómo encontrar la mediana en un conjunto de datos?",
                answerd: "Para encontrar la mediana: 1) Ordena los datos de menor a mayor, 2) Si hay un número impar de datos, la mediana es el valor del medio, 3) Si hay un número par de datos, la mediana es el promedio de los dos valores centrales. Por ejemplo: 3, 5, 7, 9, 11 → mediana = 7.",
                keywords: ["encontrar", "mediana", "ordenar", "datos", "menor", "mayor", "impar", "par", "medio", "promedio", "centrales"]
            },
            {
                question: "¿Cuándo usar media, mediana o moda?",
                answerd: "Usa la media cuando los datos no tienen valores extremos y quieres el promedio general. Usa la mediana cuando hay valores extremos que pueden distorsionar la media. Usa la moda cuando quieres saber qué valor es más común o frecuente, especialmente útil con datos categóricos.",
                keywords: ["cuando", "usar", "media", "mediana", "moda", "extremos", "promedio", "distorsionar", "comun", "frecuente", "categoricos"]
            }
        ]
    },
    {
        subtheme: "geometria",
        title: "Geometría",
        description: "Figuras geométricas, propiedades, clasificación y características básicas",
        questions: [
            {
                question: "¿Qué es un polígono?",
                answerd: "Un polígono es una figura geométrica plana cerrada formada por líneas rectas llamadas lados. Los polígonos se clasifican según el número de lados: triángulo (3 lados), cuadrilátero (4 lados), pentágono (5 lados), hexágono (6 lados), etc. Los vértices son los puntos donde se unen los lados.",
                keywords: ["poligono", "figura", "geometrica", "plana", "cerrada", "lineas", "rectas", "lados", "triangulo", "cuadrilatero", "pentagono", "hexagono", "vertices"]
            },
            {
                question: "¿Qué tipos de triángulos existen?",
                answerd: "Los triángulos se clasifican de dos maneras: Por sus lados: equilátero (3 lados iguales), isósceles (2 lados iguales), escaleno (todos los lados diferentes). Por sus ángulos: rectángulo (un ángulo de 90°), obtusángulo (un ángulo mayor a 90°), acutángulo (todos los ángulos menores a 90°).",
                keywords: ["triangulos", "tipos", "clasificar", "lados", "equilatero", "isosceles", "escaleno", "angulos", "rectangulo", "obtusangulo", "acutangulo", "90", "grados"]
            },
            {
                question: "¿Qué son los ángulos y cómo se clasifican?",
                answerd: "Un ángulo es la abertura entre dos líneas que se encuentran en un punto llamado vértice. Se clasifican en: agudo (menor a 90°), recto (exactamente 90°), obtuso (entre 90° y 180°), llano (exactamente 180°), reflejo (entre 180° y 360°), y completo (360°).",
                keywords: ["angulos", "abertura", "lineas", "vertice", "clasifican", "agudo", "recto", "obtuso", "llano", "reflejo", "completo", "90", "180", "360", "grados"]
            },
            {
                question: "¿Qué es el perímetro de una figura?",
                answerd: "El perímetro es la distancia total alrededor del borde de una figura geométrica. Se calcula sumando todos los lados de la figura. Por ejemplo, el perímetro de un rectángulo es 2(largo + ancho), y el perímetro de un cuadrado es 4 × lado.",
                keywords: ["perimetro", "distancia", "total", "alrededor", "borde", "figura", "sumar", "lados", "rectangulo", "cuadrado", "largo", "ancho"]
            },
            {
                question: "¿Qué son las líneas paralelas y perpendiculares?",
                answerd: "Las líneas paralelas son líneas que nunca se cruzan, mantienen siempre la misma distancia entre ellas, como las vías del tren. Las líneas perpendiculares son líneas que se cruzan formando ángulos rectos (90°), como las esquinas de un cuadrado o rectángulo.",
                keywords: ["lineas", "paralelas", "perpendiculares", "nunca", "cruzan", "misma", "distancia", "vias", "tren", "angulos", "rectos", "90", "esquinas", "cuadrado"]
            },
            {
                question: "¿Qué es un círculo y sus partes?",
                answerd: "Un círculo es una figura formada por todos los puntos que están a la misma distancia de un punto central. Sus partes principales son: centro (punto central), radio (distancia del centro al borde), diámetro (línea que pasa por el centro y toca dos puntos del borde), y circunferencia (el borde del círculo).",
                keywords: ["circulo", "figura", "puntos", "misma", "distancia", "central", "centro", "radio", "diametro", "circunferencia", "borde", "pasa"]
            },
            {
                question: "¿Qué son los cuadriláteros?",
                answerd: "Los cuadriláteros son polígonos de cuatro lados. Incluyen: cuadrado (4 lados iguales, 4 ángulos rectos), rectángulo (lados opuestos iguales, 4 ángulos rectos), rombo (4 lados iguales, ángulos opuestos iguales), paralelogramo (lados opuestos paralelos e iguales), y trapecio (un par de lados paralelos).",
                keywords: ["cuadrilateros", "poligonos", "cuatro", "lados", "cuadrado", "rectangulo", "rombo", "paralelogramo", "trapecio", "iguales", "opuestos", "paralelos", "angulos", "rectos"]
            }
        ]
    },
    {
        subtheme: "trigonometria",
        title: "Trigonometría",
        description: "Funciones trigonométricas y sus aplicaciones en triángulos rectángulos",
        questions: [
            {
                question: "¿Qué es la trigonometría?",
                answerd: "La trigonometría es la rama de las matemáticas que estudia las relaciones entre los lados y ángulos de los triángulos. Se usa para calcular distancias, alturas, ángulos y resolver problemas en ingeniería, física, astronomía y navegación. Su nombre significa 'medida de triángulos'.",
                keywords: ["trigonometria", "matematicas", "relaciones", "lados", "angulos", "triangulos", "calcular", "distancias", "alturas", "ingenieria", "fisica", "astronomia", "navegacion", "medida"]
            },
            {
                question: "¿Qué es el seno de un ángulo?",
                answerd: "El seno de un ángulo en un triángulo rectángulo es la razón entre el cateto opuesto al ángulo y la hipotenusa. Se escribe como sen(θ) = cateto opuesto / hipotenusa. Por ejemplo, si el cateto opuesto mide 3 y la hipotenusa mide 5, entonces sen(θ) = 3/5 = 0.6.",
                keywords: ["seno", "angulo", "triangulo", "rectangulo", "razon", "cateto", "opuesto", "hipotenusa", "sen", "theta", "mide", "formula"]
            },
            {
                question: "¿Qué es el coseno de un ángulo?",
                answerd: "El coseno de un ángulo en un triángulo rectángulo es la razón entre el cateto adyacente al ángulo y la hipotenusa. Se escribe como cos(θ) = cateto adyacente / hipotenusa. El cateto adyacente es el lado que forma el ángulo junto con la hipotenusa.",
                keywords: ["coseno", "angulo", "triangulo", "rectangulo", "razon", "cateto", "adyacente", "hipotenusa", "cos", "theta", "lado", "forma", "junto"]
            },
            {
                question: "¿Qué es la tangente de un ángulo?",
                answerd: "La tangente de un ángulo en un triángulo rectángulo es la razón entre el cateto opuesto y el cateto adyacente al ángulo. Se escribe como tan(θ) = cateto opuesto / cateto adyacente. También se puede calcular como tan(θ) = sen(θ) / cos(θ).",
                keywords: ["tangente", "angulo", "triangulo", "rectangulo", "razon", "cateto", "opuesto", "adyacente", "tan", "theta", "calcular", "seno", "coseno"]
            },
            {
                question: "¿Cuáles son las partes de un triángulo rectángulo?",
                answerd: "Un triángulo rectángulo tiene: un ángulo recto (90°), dos catetos (los lados que forman el ángulo recto), y la hipotenusa (el lado más largo, opuesto al ángulo recto). Los otros dos ángulos son agudos y su suma es 90°.",
                keywords: ["triangulo", "rectangulo", "angulo", "recto", "90", "grados", "catetos", "hipotenusa", "lado", "largo", "opuesto", "agudos", "suma"]
            },
            {
                question: "¿Para qué sirven las funciones trigonométricas?",
                answerd: "Las funciones trigonométricas sirven para: calcular lados desconocidos de triángulos rectángulos, encontrar ángulos desconocidos, medir alturas de edificios o montañas, calcular distancias inaccesibles, navegación, análisis de ondas, y muchas aplicaciones en ciencias e ingeniería.",
                keywords: ["funciones", "trigonometricas", "calcular", "lados", "desconocidos", "angulos", "medir", "alturas", "edificios", "montañas", "distancias", "inaccesibles", "navegacion", "ondas", "ciencias", "ingenieria"]
            },
            {
                question: "¿Qué valores tienen seno, coseno y tangente para ángulos comunes?",
                answerd: "Para ángulos comunes: 30°: sen=1/2, cos=√3/2, tan=1/√3. 45°: sen=√2/2, cos=√2/2, tan=1. 60°: sen=√3/2, cos=1/2, tan=√3. 90°: sen=1, cos=0, tan=indefinida. Estos valores son fundamentales y se usan frecuentemente.",
                keywords: ["valores", "seno", "coseno", "tangente", "angulos", "comunes", "30", "45", "60", "90", "grados", "raiz", "indefinida", "fundamentales", "frecuentemente"]
            }
        ]
    },
    {
        subtheme: "numeros_primos",
        title: "Números Primos",
        description: "Definición, características y propiedades de los números primos",
        questions: [
            {
                question: "¿Qué es un número primo?",
                answerd: "Un número primo es un número natural mayor que 1 que solo tiene dos divisores: 1 y él mismo. Es decir, no se puede dividir exactamente por ningún otro número. Los primeros números primos son: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...",
                keywords: ["numero", "primo", "natural", "mayor", "dos", "divisores", "dividir", "exactamente", "2", "3", "5", "7", "11", "13", "17", "19", "23", "29"]
            },
            {
                question: "¿Cómo saber si un número es primo?",
                answerd: "Para verificar si un número es primo: 1) Verifica si es mayor que 1, 2) Prueba dividirlo entre todos los números desde 2 hasta la raíz cuadrada del número, 3) Si ninguna división es exacta, entonces es primo. Por ejemplo, para 17: √17 ≈ 4.1, así que pruebas 2, 3, 4. Como ninguno divide exactamente a 17, es primo.",
                keywords: ["saber", "numero", "primo", "verificar", "mayor", "dividir", "raiz", "cuadrada", "division", "exacta", "pruebas", "ninguno", "17"]
            },
            {
                question: "¿Por qué el número 1 no es primo?",
                answerd: "El número 1 no es primo porque solo tiene un divisor (él mismo), mientras que un número primo debe tener exactamente dos divisores: 1 y él mismo. Esta definición se estableció para que los teoremas matemáticos sobre números primos funcionen correctamente.",
                keywords: ["numero", "1", "primo", "divisor", "exactamente", "dos", "divisores", "definicion", "establecio", "teoremas", "matematicos", "funcionen", "correctamente"]
            },
            {
                question: "¿Qué son los números compuestos?",
                answerd: "Los números compuestos son números naturales mayores que 1 que no son primos. Tienen más de dos divisores, es decir, se pueden dividir exactamente por otros números además de 1 y ellos mismos. Por ejemplo: 4 (divisores: 1, 2, 4), 6 (divisores: 1, 2, 3, 6), 8 (divisores: 1, 2, 4, 8).",
                keywords: ["numeros", "compuestos", "naturales", "mayores", "primos", "mas", "dos", "divisores", "dividir", "exactamente", "otros", "4", "6", "8"]
            },
            {
                question: "¿Cuántos números primos hay?",
                answerd: "Hay infinitos números primos. Esto fue demostrado por Euclides hace más de 2000 años. Aunque los números primos se vuelven menos frecuentes a medida que los números crecen, nunca se agotan. Se han encontrado números primos con millones de dígitos.",
                keywords: ["cuantos", "numeros", "primos", "infinitos", "demostrado", "euclides", "2000", "años", "menos", "frecuentes", "crecen", "agotan", "millones", "digitos"]
            },
        ]
    }
]

const Historia = [
    {
        subtheme: "segunda_guerra_mundial",
        title: "Segunda Guerra Mundial",
        description: "Conflicto bélico mundial de 1939-1945, causas, desarrollo, consecuencias y principales actores",
        questions: [
            {
                question: "¿Qué fue la Segunda Guerra Mundial?",
                answerd: "La Segunda Guerra Mundial fue el conflicto armado más grande y devastador de la historia humana, que se desarrolló entre 1939 y 1945. Involucró a la mayoría de las naciones del mundo, organizadas en dos alianzas militares opuestas: los Aliados (principalmente Reino Unido, Unión Soviética, Estados Unidos, China y Francia) y las Potencias del Eje (principalmente Alemania Nazi, Italia fascista y el Imperio de Japón). El conflicto resultó en la muerte de entre 70 y 85 millones de personas.",
                keywords: ["segunda", "guerra", "mundial", "conflicto", "1939", "1945", "aliados", "eje", "alemania", "hitler", "nazis", "devastador", "historia"]
            },
            {
                question: "¿Cuáles fueron las principales causas de la Segunda Guerra Mundial?",
                answerd: "Las principales causas incluyen: el Tratado de Versalles que impuso duras condiciones a Alemania tras la Primera Guerra Mundial, la crisis económica mundial de 1929, el ascenso de regímenes totalitarios como el nazismo en Alemania y el fascismo en Italia, la política expansionista de Hitler, la invasión de Polonia en 1939, y el fracaso de la Liga de Naciones para mantener la paz mundial.",
                keywords: ["causas", "versalles", "tratado", "crisis", "economica", "nazismo", "fascismo", "hitler", "expansion", "polonia", "invasion", "liga", "naciones"]
            },
            {
                question: "¿Cuándo y cómo terminó la Segunda Guerra Mundial?",
                answerd: "La Segunda Guerra Mundial terminó en dos etapas: primero en Europa el 8 de mayo de 1945 con la rendición incondicional de Alemania tras el suicidio de Hitler, y luego en el Pacífico el 2 de septiembre de 1945 con la rendición de Japón, después de que Estados Unidos lanzara bombas atómicas sobre Hiroshima y Nagasaki en agosto de 1945.",
                keywords: ["termino", "fin", "rendicion", "alemania", "japon", "mayo", "septiembre", "bomba", "atomica", "hiroshima", "nagasaki", "pacifico", "europa"]
            }
        ]
    },
    {
        subtheme: "guerra_fria",
        title: "Guerra Fría",
        description: "Período de tensión geopolítica entre Estados Unidos y la Unión Soviética de 1947-1991",
        questions: [
            {
                question: "¿Qué fue la Guerra Fría?",
                answerd: "La Guerra Fría fue un período de tensión geopolítica y rivalidad ideológica entre Estados Unidos y la Unión Soviética que duró aproximadamente desde 1947 hasta 1991. Se caracterizó por la ausencia de enfrentamiento militar directo entre las dos superpotencias, pero incluyó competencia en armamento nuclear, espionaje, propaganda, carreras espaciales y conflictos indirectos a través de países aliados.",
                keywords: ["guerra", "fria", "tension", "geopolitica", "estados", "unidos", "union", "sovietica", "rivalidad", "ideologica", "superpotencias", "nuclear", "espionaje"]
            },
            {
                question: "¿Cuáles fueron las principales características de la Guerra Fría?",
                answerd: "Las principales características incluyen: la división del mundo en dos bloques ideológicos (capitalista y comunista), la carrera armamentística nuclear, la construcción del Muro de Berlín, la creación de alianzas militares como la OTAN y el Pacto de Varsovia, conflictos indirectos como las guerras de Corea y Vietnam, la carrera espacial, y la política de contención mutua.",
                keywords: ["bloques", "ideologicos", "capitalista", "comunista", "carrera", "armamentistica", "muro", "berlin", "otan", "varsovia", "corea", "vietnam", "espacial", "contencion"]
            },
            {
                question: "¿Cómo y cuándo terminó la Guerra Fría?",
                answerd: "La Guerra Fría terminó gradualmente a finales de los años 80 y principios de los 90. Los factores clave fueron las reformas de la Perestroika y Glasnost de Mijaíl Gorbachov en la URSS, la caída del Muro de Berlín en 1989, las revoluciones pacíficas en Europa del Este, y finalmente la disolución de la Unión Soviética en 1991, dejando a Estados Unidos como única superpotencia mundial.",
                keywords: ["termino", "fin", "perestroika", "glasnost", "gorbachov", "muro", "berlin", "revoluciones", "europa", "este", "disolucion", "urss", "1991"]
            }
        ]
    },
    {
        subtheme: "inquisicion",
        title: "La Inquisición",
        description: "Tribunal eclesiástico establecido para combatir la herejía y mantener la ortodoxia católica",
        questions: [
            {
                question: "¿Qué fue la Inquisición?",
                answerd: "La Inquisición fue un tribunal eclesiástico establecido por la Iglesia Católica para detectar, juzgar y castigar la herejía y mantener la pureza de la fe católica. Existieron diferentes inquisiciones: la medieval (siglo XII), la española (1478), la portuguesa (1536) y la romana (1542). Utilizaba métodos como la tortura para obtener confesiones y tenía poder para condenar a muerte a los herejes.",
                keywords: ["inquisicion", "tribunal", "eclesiastico", "iglesia", "catolica", "herejia", "fe", "medieval", "española", "tortura", "confesiones", "muerte", "herejes"]
            },
            {
                question: "¿Cuáles fueron los objetivos principales de la Inquisición Española?",
                answerd: "Los objetivos principales de la Inquisición Española fueron: mantener la unidad religiosa en los territorios españoles, perseguir a los conversos (judíos y musulmanes convertidos al cristianismo) sospechosos de practicar secretamente su antigua fe, combatir la herejía y las prácticas consideradas contrarias a la doctrina católica, y servir como instrumento de control social y político de la monarquía española.",
                keywords: ["inquisicion", "española", "unidad", "religiosa", "conversos", "judios", "musulmanes", "cristianismo", "herejia", "doctrina", "catolica", "control", "social", "monarquia"]
            },
            {
                question: "¿Cuándo y cómo terminó la Inquisición?",
                answerd: "La Inquisición terminó en diferentes momentos según el país: la Inquisición Española fue oficialmente abolida en 1834 durante el reinado de Isabel II, la portuguesa terminó en 1821, y la romana se transformó en la Congregación para la Doctrina de la Fe en 1965. Su declive se debió a las ideas de la Ilustración, los cambios políticos liberales, y la pérdida de poder de la Iglesia en los asuntos civiles.",
                keywords: ["termino", "abolida", "1834", "isabel", "segunda", "portuguesa", "1821", "romana", "1965", "ilustracion", "liberales", "iglesia", "asuntos", "civiles"]
            }
        ]
    },
    {
        subtheme: "tenochtitlan",
        title: "Tenochtitlan",
        description: "Capital del Imperio Azteca, una de las ciudades más grandes del mundo prehispánico",
        questions: [
            {
                question: "¿Qué fue Tenochtitlan?",
                answerd: "Tenochtitlan fue la capital del Imperio Azteca (mexica), fundada en 1325 en una isla del lago Texcoco, en el actual Valle de México. Era una de las ciudades más grandes del mundo en su época, con una población estimada entre 200,000 y 300,000 habitantes. Se caracterizaba por su arquitectura monumental, sistema de canales, chinampas (jardines flotantes) y organización urbana avanzada.",
                keywords: ["tenochtitlan", "capital", "imperio", "azteca", "mexica", "1325", "isla", "lago", "texcoco", "valle", "mexico", "habitantes", "canales", "chinampas", "jardines", "flotantes"]
            },
            {
                question: "¿Cómo estaba organizada la ciudad de Tenochtitlan?",
                answerd: "Tenochtitlan estaba dividida en cuatro barrios principales llamados calpulli, con el Templo Mayor en el centro ceremonial. La ciudad tenía un sistema de canales que funcionaban como calles, mercados grandes como el de Tlatelolco, palacios, templos piramidales, y estaba conectada a tierra firme por calzadas. Las chinampas proporcionaban alimentos, y había un complejo sistema de diques para controlar las aguas del lago.",
                keywords: ["organizada", "barrios", "calpulli", "templo", "mayor", "ceremonial", "canales", "calles", "mercados", "tlatelolco", "palacios", "piramidales", "calzadas", "diques", "aguas"]
            },
            {
                question: "¿Qué pasó con Tenochtitlan durante la conquista española?",
                answerd: "Tenochtitlan fue conquistada por Hernán Cortés y sus aliados indígenas el 13 de agosto de 1521, después de un asedio que duró varios meses. La ciudad fue parcialmente destruida durante los combates, y posteriormente los españoles construyeron la Ciudad de México sobre sus ruinas, utilizando muchas de las piedras de los templos aztecas para edificar iglesias y construcciones coloniales.",
                keywords: ["conquista", "española", "hernan", "cortes", "aliados", "indigenas", "1521", "agosto", "asedio", "meses", "destruida", "combates", "ciudad", "mexico", "ruinas", "piedras", "templos", "iglesias", "coloniales"]
            }
        ]
    },
    {
        subtheme: "renacimiento",
        title: "Renacimiento",
        description: "Movimiento cultural, artístico y científico europeo de los siglos XV y XVI",
        questions: [
            {
                question: "¿Qué fue el Renacimiento?",
                answerd: "El Renacimiento fue un movimiento cultural, artístico, político y científico que surgió en Italia durante el siglo XIV y se extendió por Europa hasta el siglo XVI. Se caracterizó por el redescubrimiento de la cultura clásica grecorromana, el humanismo, el desarrollo de las artes, las ciencias y la filosofía, marcando la transición entre la Edad Media y la Edad Moderna.",
                keywords: ["renacimiento", "movimiento", "cultural", "artistico", "cientifico", "italia", "siglo", "XIV", "XVI", "europa", "clasica", "grecorromana", "humanismo", "artes", "ciencias", "filosofia", "edad", "media", "moderna"]
            },
            {
                question: "¿Cuáles fueron las principales características del Renacimiento?",
                answerd: "Las principales características incluyen: el humanismo que pone al ser humano en el centro, el redescubrimiento de textos clásicos, el desarrollo de la perspectiva en la pintura, el mecenazgo de familias poderosas como los Medici, el florecimiento de la ciencia con figuras como Galileo, la invención de la imprenta, y el surgimiento de genios universales como Leonardo da Vinci y Miguel Ángel.",
                keywords: ["caracteristicas", "humanismo", "ser", "humano", "centro", "textos", "clasicos", "perspectiva", "pintura", "mecenazgo", "medici", "ciencia", "galileo", "imprenta", "leonardo", "vinci", "miguel", "angel"]
            },
            {
                question: "¿Quiénes fueron los principales artistas del Renacimiento?",
                answerd: "Los principales artistas del Renacimiento incluyen: Leonardo da Vinci (La Mona Lisa, La Última Cena), Miguel Ángel (La Capilla Sixtina, El David), Rafael (La Escuela de Atenas), Sandro Botticelli (El Nacimiento de Venus), Donatello (esculturas en bronce), y Brunelleschi (arquitectura de la cúpula de Florencia). Estos artistas revolucionaron las técnicas artísticas y crearon obras maestras que perduran hasta hoy.",
                keywords: ["artistas", "leonardo", "vinci", "mona", "lisa", "ultima", "cena", "miguel", "angel", "capilla", "sixtina", "david", "rafael", "escuela", "atenas", "botticelli", "venus", "donatello", "brunelleschi", "florencia"]
            }
        ]
    },
    {
        subtheme: "porfiriato",
        title: "El Porfiriato",
        description: "Período de la historia de México bajo el gobierno de Porfirio Díaz (1876-1911)",
        questions: [
            {
                question: "¿Qué fue el Porfiriato?",
                answerd: "El Porfiriato fue el período de la historia de México durante el cual Porfirio Díaz ejerció el poder presidencial de manera casi ininterrumpida desde 1876 hasta 1911 (con un breve intermedio de 1880-1884). Se caracterizó por la modernización económica, la construcción de ferrocarriles, la atracción de inversión extranjera, pero también por la represión política, la concentración de tierras y la desigualdad social extrema.",
                keywords: ["porfiriato", "porfirio", "diaz", "presidente", "1876", "1911", "mexico", "modernizacion", "economica", "ferrocarriles", "inversion", "extranjera", "represion", "politica", "tierras", "desigualdad"]
            },
            {
                question: "¿Cuáles fueron los logros económicos del Porfiriato?",
                answerd: "Los principales logros económicos incluyeron: la construcción de más de 20,000 kilómetros de vías férreas que conectaron el país, la modernización de puertos, el desarrollo de la industria minera y petrolera, la atracción de capital extranjero principalmente estadounidense y europeo, la estabilización de la moneda, y el crecimiento de ciudades. Sin embargo, estos beneficios se concentraron en una élite y no llegaron a la mayoría de la población.",
                keywords: ["logros", "economicos", "ferrocarriles", "20000", "kilometros", "vias", "ferreas", "puertos", "minera", "petrolera", "capital", "extranjero", "estadounidense", "europeo", "moneda", "ciudades", "elite"]
            },
            {
                question: "¿Por qué terminó el Porfiriato?",
                answerd: "El Porfiriato terminó debido a varios factores: el descontento social por la extrema desigualdad, la represión política que impedía la participación democrática, la crisis económica de 1907-1908, el despojo de tierras a comunidades indígenas y campesinas, la falta de libertades políticas, y finalmente el estallido de la Revolución Mexicana en 1910 liderada inicialmente por Francisco I. Madero, que culminó con la renuncia de Díaz en mayo de 1911.",
                keywords: ["termino", "descontento", "social", "desigualdad", "represion", "politica", "crisis", "economica", "1907", "1908", "tierras", "indigenas", "campesinas", "libertades", "revolucion", "mexicana", "1910", "madero", "renuncia", "1911"]
            }
        ]
    }
]

const Geografia = [
    {
        subtheme: "meridianos",
        title: "Meridianos",
        description: "Líneas imaginarias que van de polo a polo y se usan para medir la longitud geográfica",
        questions: [
            {
                question: "¿Qué son los meridianos?",
                answerd: "Los meridianos son líneas imaginarias semicirculares que van desde el Polo Norte hasta el Polo Sur, dividiendo la Tierra en gajos como si fuera una naranja. Todas las líneas meridianas tienen la misma longitud y se usan para medir la longitud geográfica. El meridiano principal o meridiano cero (0°) pasa por Greenwich, Inglaterra, y sirve como referencia mundial para medir las coordenadas geográficas.",
                keywords: ["meridianos", "lineas", "imaginarias", "polo", "norte", "sur", "longitud", "geografica", "greenwich", "meridiano", "cero", "semicirculares", "coordenadas"]
            },
            {
                question: "¿Cuál es la función de los meridianos en la geografía?",
                answerd: "Los meridianos tienen varias funciones importantes: establecer la longitud geográfica de cualquier punto en la Tierra, crear los husos horarios que determinan las zonas de tiempo mundial, servir como sistema de referencia para la navegación y cartografía, y junto con los paralelos formar el sistema de coordenadas geográficas que permite localizar exactamente cualquier lugar del planeta.",
                keywords: ["funcion", "longitud", "geografica", "husos", "horarios", "zonas", "tiempo", "navegacion", "cartografia", "coordenadas", "localizar", "planeta"]
            },
            {
                question: "¿Cómo se numeran y clasifican los meridianos?",
                answerd: "Los meridianos se numeran desde 0° hasta 180° tanto hacia el este como hacia el oeste del Meridiano de Greenwich. Hay 360 meridianos en total: 180 hacia el este (longitud este) y 180 hacia el oeste (longitud oeste). El antimeridiano (180°) es el meridiano opuesto al de Greenwich y pasa principalmente por el Océano Pacífico, sirviendo como base para la Línea Internacional de Cambio de Fecha.",
                keywords: ["numeran", "clasifican", "greenwich", "360", "meridianos", "este", "oeste", "antimeridiano", "180", "pacifico", "linea", "internacional", "fecha"]
            }
        ]
    },
    {
        subtheme: "paralelos",
        title: "Paralelos",
        description: "Líneas imaginarias horizontales que rodean la Tierra y se usan para medir la latitud geográfica",
        questions: [
            {
                question: "¿Qué son los paralelos?",
                answerd: "Los paralelos son líneas imaginarias horizontales que rodean completamente la Tierra de este a oeste, paralelas entre sí y perpendiculares a los meridianos. El paralelo principal es la línea del Ecuador (0°), que divide la Tierra en dos hemisferios: Norte y Sur. Los paralelos se usan para medir la latitud geográfica y van desde 0° en el Ecuador hasta 90° en ambos polos.",
                keywords: ["paralelos", "lineas", "imaginarias", "horizontales", "este", "oeste", "ecuador", "hemisferios", "norte", "sur", "latitud", "geografica", "polos", "perpendiculares"]
            },
            {
                question: "¿Cuáles son los paralelos más importantes?",
                answerd: "Los paralelos más importantes son: el Ecuador (0°) que divide la Tierra en hemisferios Norte y Sur; el Trópico de Cáncer (23°27' N) que marca el límite norte de la zona tropical; el Trópico de Capricornio (23°27' S) que marca el límite sur de la zona tropical; el Círculo Polar Ártico (66°33' N) y el Círculo Polar Antártico (66°33' S) que delimitan las zonas polares.",
                keywords: ["importantes", "ecuador", "tropico", "cancer", "capricornio", "zona", "tropical", "circulo", "polar", "artico", "antartico", "hemisferios", "limite", "polares"]
            },
            {
                question: "¿Cómo varían las características de los paralelos?",
                answerd: "Los paralelos varían en longitud según su distancia del Ecuador: el Ecuador es el paralelo más largo con aproximadamente 40,075 km de circunferencia, mientras que los paralelos se acortan progresivamente hacia los polos hasta convertirse en puntos en los polos Norte y Sur. Todos los puntos de un mismo paralelo tienen la misma latitud y experimentan el mismo tipo de clima y duración del día.",
                keywords: ["varian", "caracteristicas", "longitud", "distancia", "ecuador", "40075", "circunferencia", "acortan", "polos", "puntos", "latitud", "clima", "duracion", "dia"]
            }
        ]
    },
    {
        subtheme: "tropicos",
        title: "Trópicos",
        description: "Paralelos especiales que delimitan la zona tropical donde el Sol puede estar directamente sobre la cabeza",
        questions: [
            {
                question: "¿Qué son los trópicos?",
                answerd: "Los trópicos son dos paralelos especiales ubicados a 23°27' de latitud norte y sur del Ecuador. El Trópico de Cáncer está al norte y el Trópico de Capricornio al sur. Estos paralelos marcan los límites donde el Sol puede estar directamente sobre la cabeza (en el cenit) durante los solsticios. La zona entre ambos trópicos se llama zona tropical o zona tórrida.",
                keywords: ["tropicos", "paralelos", "especiales", "23", "27", "latitud", "cancer", "capricornio", "ecuador", "sol", "cenit", "solsticios", "zona", "tropical", "torrida"]
            },
            {
                question: "¿Qué características tiene la zona tropical?",
                answerd: "La zona tropical se caracteriza por: recibir los rayos solares de forma más directa durante todo el año, tener temperaturas cálidas y relativamente constantes, experimentar poca variación estacional en la duración del día y la noche, presentar alta humedad y precipitaciones abundantes en muchas regiones, y albergar la mayor biodiversidad del planeta con selvas tropicales como la Amazonia.",
                keywords: ["zona", "tropical", "rayos", "solares", "directa", "temperaturas", "calidas", "constantes", "variacion", "estacional", "humedad", "precipitaciones", "biodiversidad", "selvas", "amazonia"]
            },
            {
                question: "¿Qué importancia tienen los trópicos para el clima mundial?",
                answerd: "Los trópicos son fundamentales para el clima mundial porque: actúan como el motor térmico del planeta al recibir la mayor cantidad de energía solar, generan las corrientes de convección que distribuyen el calor hacia las zonas templadas y polares, son el origen de muchos fenómenos climáticos como huracanes y monzones, influyen en las corrientes oceánicas globales, y regulan el ciclo del agua mediante la evaporación intensa.",
                keywords: ["importancia", "clima", "mundial", "motor", "termico", "energia", "solar", "conveccion", "calor", "templadas", "polares", "huracanes", "monzones", "corrientes", "oceanicas", "ciclo", "agua", "evaporacion"]
            }
        ]
    },
    {
        subtheme: "latitud",
        title: "Latitud",
        description: "Coordenada geográfica que indica la distancia angular desde el Ecuador hacia los polos",
        questions: [
            {
                question: "¿Qué es la latitud?",
                answerd: "La latitud es la coordenada geográfica que indica la distancia angular de un punto cualquiera de la Tierra respecto al Ecuador, medida en grados. Se expresa desde 0° en el Ecuador hasta 90° en ambos polos (90° Norte y 90° Sur). La latitud determina la posición norte-sur de un lugar y se mide siguiendo los paralelos terrestres.",
                keywords: ["latitud", "coordenada", "geografica", "distancia", "angular", "ecuador", "grados", "90", "norte", "sur", "polos", "posicion", "paralelos", "terrestres"]
            },
            {
                question: "¿Cómo se clasifica la latitud?",
                answerd: "La latitud se clasifica en: latitud norte (N) para lugares ubicados al norte del Ecuador, desde 0° hasta 90°N; latitud sur (S) para lugares al sur del Ecuador, desde 0° hasta 90°S. También se divide en zonas climáticas: zona tropical (entre 0° y 23°27'), zona templada (entre 23°27' y 66°33'), y zona polar (entre 66°33' y 90°) tanto en el hemisferio norte como sur.",
                keywords: ["clasifica", "latitud", "norte", "sur", "ecuador", "zonas", "climaticas", "tropical", "templada", "polar", "hemisferio", "66", "33"]
            },
            {
                question: "¿Qué importancia tiene la latitud en el clima?",
                answerd: "La latitud es fundamental para determinar el clima porque: controla la cantidad de radiación solar que recibe un lugar (mayor en latitudes bajas, menor en latitudes altas), determina la duración del día y la noche a lo largo del año, influye en la temperatura media anual de una región, define las estaciones del año y su intensidad, y establece los patrones de vientos y precipitaciones globales.",
                keywords: ["importancia", "latitud", "clima", "radiacion", "solar", "bajas", "altas", "duracion", "dia", "noche", "temperatura", "media", "estaciones", "intensidad", "vientos", "precipitaciones"]
            }
        ]
    },
    {
        subtheme: "longitud",
        title: "Longitud",
        description: "Coordenada geográfica que indica la distancia angular desde el Meridiano de Greenwich hacia el este o el oeste",
        questions: [
            {
                question: "¿Qué es la longitud?",
                answerd: "La longitud es la coordenada geográfica que indica la distancia angular de un punto cualquiera de la Tierra respecto al Meridiano de Greenwich (0°), medida en grados hacia el este o hacia el oeste. Se expresa desde 0° hasta 180° tanto hacia el este (E) como hacia el oeste (W). La longitud determina la posición este-oeste de un lugar y se mide siguiendo los meridianos terrestres.",
                keywords: ["longitud", "coordenada", "geografica", "distancia", "angular", "meridiano", "greenwich", "grados", "este", "oeste", "180", "posicion", "meridianos", "terrestres"]
            },
            {
                question: "¿Cómo se relaciona la longitud con los husos horarios?",
                answerd: "La longitud está directamente relacionada con los husos horarios porque la Tierra gira 360° en 24 horas, lo que significa 15° por hora. Cada huso horario abarca aproximadamente 15° de longitud. El Meridiano de Greenwich (0°) marca el Tiempo Medio de Greenwich (GMT), y cada 15° hacia el este se suma una hora, mientras que cada 15° hacia el oeste se resta una hora al tiempo de referencia.",
                keywords: ["relaciona", "longitud", "husos", "horarios", "tierra", "gira", "360", "24", "horas", "15", "hora", "greenwich", "GMT", "tiempo", "suma", "resta", "referencia"]
            },
            {
                question: "¿Por qué es importante el sistema de longitud?",
                answerd: "El sistema de longitud es importante porque: permite establecer un sistema de tiempo mundial coordinado, facilita la navegación marítima y aérea mediante coordenadas precisas, es esencial para el funcionamiento del GPS y sistemas de localización, permite la cartografía precisa de cualquier punto del planeta, y facilita las comunicaciones internacionales al establecer zonas horarias estándar.",
                keywords: ["importante", "sistema", "longitud", "tiempo", "mundial", "coordinado", "navegacion", "maritima", "aerea", "coordenadas", "GPS", "localizacion", "cartografia", "planeta", "comunicaciones", "internacionales", "horarias"]
            }
        ]
    },
    {
        subtheme: "placas_tectonicas",
        title: "Placas Tectónicas",
        description: "Fragmentos de la litosfera terrestre que se mueven sobre el manto y explican la formación del relieve",
        questions: [
            {
                question: "¿Qué son las placas tectónicas?",
                answerd: "Las placas tectónicas son fragmentos o bloques rígidos de la litosfera terrestre (corteza y parte superior del manto) que se mueven lentamente sobre la astenosfera, una capa más fluida del manto. Existen aproximadamente 15 placas principales y varias menores que encajan como un rompecabezas gigante que cubre toda la superficie terrestre. Su movimiento explica la formación de montañas, volcanes, terremotos y la deriva continental.",
                keywords: ["placas", "tectonicas", "fragmentos", "bloques", "rigidos", "litosfera", "corteza", "manto", "astenosfera", "15", "principales", "rompecabezas", "montañas", "volcanes", "terremotos", "deriva", "continental"]
            },
            {
                question: "¿Cómo se mueven las placas tectónicas?",
                answerd: "Las placas tectónicas se mueven debido a las corrientes de convección en el manto terrestre, causadas por el calor interno de la Tierra. Se desplazan muy lentamente, entre 2 y 10 centímetros por año. Los tipos de movimiento incluyen: convergente (las placas chocan), divergente (las placas se separan), y transformante (las placas se deslizan lateralmente). Estos movimientos ocurren principalmente en los bordes de las placas.",
                keywords: ["mueven", "placas", "corrientes", "conveccion", "manto", "calor", "interno", "2", "10", "centimetros", "año", "convergente", "chocan", "divergente", "separan", "transformante", "deslizan", "bordes"]
            },
            {
                question: "¿Qué fenómenos geológicos causan las placas tectónicas?",
                answerd: "Las placas tectónicas causan diversos fenómenos geológicos: terremotos cuando las placas se deslizan bruscamente, erupciones volcánicas en zonas de subducción y dorsales oceánicas, formación de cordilleras montañosas cuando las placas colisionan, creación de fosas oceánicas profundas, expansión del fondo oceánico en las dorsales, y tsunamis cuando los movimientos tectónicos ocurren bajo el océano.",
                keywords: ["fenomenos", "geologicos", "terremotos", "deslizan", "bruscamente", "erupciones", "volcanicas", "subduccion", "dorsales", "oceanicas", "cordilleras", "montañosas", "colisionan", "fosas", "expansion", "fondo", "oceanico", "tsunamis"]
            }
        ]
    },
    {
        subtheme: "climas",
        title: "Climas",
        description: "Condiciones atmosféricas promedio de una región durante largos períodos de tiempo",
        questions: [
            {
                question: "¿Qué es el clima?",
                answerd: "El clima es el conjunto de condiciones atmosféricas promedio que caracterizan a una región durante un período prolongado de tiempo, generalmente 30 años o más. Incluye factores como temperatura, precipitación, humedad, viento y presión atmosférica. El clima se diferencia del tiempo meteorológico en que este último se refiere a las condiciones atmosféricas momentáneas, mientras que el clima representa patrones a largo plazo.",
                keywords: ["clima", "condiciones", "atmosfericas", "promedio", "region", "periodo", "prolongado", "30", "años", "temperatura", "precipitacion", "humedad", "viento", "presion", "tiempo", "meteorologico", "patrones"]
            },
            {
                question: "¿Cuáles son los principales tipos de clima?",
                answerd: "Los principales tipos de clima según la clasificación de Köppen son: tropical (cálido y húmedo todo el año), árido o desértico (muy seco con poca precipitación), templado (estaciones bien diferenciadas), continental (grandes variaciones de temperatura), polar (muy frío todo el año), y mediterráneo (veranos secos e inviernos suaves). Cada tipo se subdivide según características específicas de temperatura y precipitación.",
                keywords: ["tipos", "clima", "koppen", "tropical", "calido", "humedo", "arido", "desertico", "seco", "templado", "estaciones", "continental", "variaciones", "polar", "frio", "mediterraneo", "veranos", "inviernos"]
            },
            {
                question: "¿Qué factores influyen en el clima de una región?",
                answerd: "Los factores que influyen en el clima incluyen: la latitud (distancia del Ecuador), que determina la cantidad de radiación solar; la altitud, ya que la temperatura disminuye con la altura; la proximidad al mar (influencia oceánica vs continental); las corrientes marinas que pueden calentar o enfriar; el relieve que actúa como barrera; la orientación de las laderas; y los vientos dominantes que transportan masas de aire.",
                keywords: ["factores", "influyen", "clima", "latitud", "ecuador", "radiacion", "solar", "altitud", "temperatura", "altura", "proximidad", "mar", "oceanica", "continental", "corrientes", "marinas", "relieve", "barrera", "orientacion", "laderas", "vientos", "dominantes"]
            }
        ]
    },
    {
        subtheme: "continentes",
        title: "Continentes",
        description: "Grandes extensiones de tierra firme separadas por océanos que forman las principales divisiones geográficas del planeta",
        questions: [
            {
                question: "¿Qué son los continentes?",
                answerd: "Los continentes son grandes extensiones de tierra firme que emergen de los océanos y constituyen las principales divisiones geográficas del planeta. Tradicionalmente se reconocen siete continentes: Asia, África, América del Norte, América del Sur, Europa, Oceanía y la Antártida. Cada continente tiene características geográficas, climáticas, culturales y biológicas distintivas que los diferencian entre sí.",
                keywords: ["continentes", "extensiones", "tierra", "firme", "oceanos", "divisiones", "geograficas", "planeta", "siete", "asia", "africa", "america", "norte", "sur", "europa", "oceania", "antartida", "caracteristicas"]
            },
            {
                question: "¿Cuáles son las características principales de cada continente?",
                answerd: "Asia es el más grande en superficie y población, con gran diversidad climática; África es conocida por su fauna, desiertos y la cuna de la humanidad; América del Norte tiene gran desarrollo económico y variedad de climas; América del Sur alberga la selva amazónica y los Andes; Europa es pequeña pero densamente poblada con gran desarrollo; Oceanía incluye Australia y miles de islas del Pacífico; la Antártida es el continente helado y deshabitado del polo sur.",
                keywords: ["caracteristicas", "asia", "grande", "superficie", "poblacion", "diversidad", "africa", "fauna", "desiertos", "cuna", "humanidad", "america", "norte", "desarrollo", "economico", "sur", "amazonica", "andes", "europa", "densamente", "poblada", "oceania", "australia", "islas", "pacifico", "antartida", "helado", "deshabitado"]
            },
            {
                question: "¿Cómo se formaron los continentes actuales?",
                answerd: "Los continentes actuales se formaron a través de millones de años por el proceso de deriva continental y tectónica de placas. Inicialmente existía un supercontinente llamado Pangea que comenzó a fragmentarse hace unos 200 millones de años. Los fragmentos se fueron separando y moviendo lentamente hasta alcanzar sus posiciones actuales. Este proceso continúa, y los continentes siguen moviéndose aproximadamente 2-10 centímetros por año.",
                keywords: ["formaron", "continentes", "actuales", "millones", "años", "deriva", "continental", "tectonica", "placas", "supercontinente", "pangea", "fragmentarse", "200", "millones", "fragmentos", "separando", "moviendo", "posiciones", "continua", "centimetros"]
            }
        ]
    }
]

const Filosofia = [
    {
        subthemes: "etica",
        title: "Ética - Estudio de la Moral y el Comportamiento",
        description: "La ética es la rama de la filosofía que estudia los principios morales, el bien y el mal, y cómo debemos comportarnos en sociedad",
        questions: [
            {
                question: "¿Qué es la ética y cuál es su objeto de estudio principal?",
                answerd: "La ética es la disciplina filosófica que se ocupa del estudio de la moral, los valores, la virtud, el deber y el comportamiento humano. Su objeto principal es determinar qué acciones son correctas o incorrectas, qué constituye una vida buena y cómo debemos actuar para vivir de manera virtuosa. La ética busca establecer principios universales que guíen la conducta humana, diferenciándose de la moral en que esta última se refiere a las costumbres y normas específicas de una sociedad, mientras que la ética busca fundamentos racionales y universales para el comportamiento moral.",
                keywords: ["ética", "moral", "valores", "virtud", "comportamiento", "bien", "mal", "principios morales", "conducta"]
            },
            {
                question: "¿Cuáles son las principales corrientes éticas y sus diferencias?",
                answerd: "Las principales corrientes éticas incluyen: El Utilitarismo, que sostiene que una acción es correcta si produce la mayor felicidad para el mayor número de personas; la Ética Deontológica de Kant, que se basa en el deber y sostiene que ciertas acciones son intrínsecamente correctas o incorrectas independientemente de sus consecuencias; la Ética de la Virtud aristotélica, que se enfoca en el carácter y las virtudes del agente moral; el Relativismo Ético, que afirma que no existen verdades morales absolutas; y la Ética del Cuidado, que enfatiza las relaciones interpersonales y la responsabilidad hacia otros. Cada corriente ofrece diferentes criterios para evaluar la moralidad de las acciones humanas.",
                keywords: ["utilitarismo", "deontología", "Kant", "ética de la virtud", "Aristóteles", "relativismo ético", "ética del cuidado", "corrientes éticas"]
            },
            {
                question: "¿Cómo se aplica la ética en la vida cotidiana y en contextos profesionales?",
                answerd: "La ética se aplica en la vida cotidiana a través de decisiones diarias como la honestidad en las relaciones, el respeto hacia otros, la justicia en el trato con las personas y la responsabilidad personal. En contextos profesionales, se manifiesta en códigos de ética específicos: en medicina a través de la bioética y el juramento hipocrático, en los negocios mediante la responsabilidad social corporativa y el comercio justo, en el periodismo a través de la veracidad y objetividad, y en la investigación científica mediante la integridad académica. La ética aplicada también aborda dilemas contemporáneos como la inteligencia artificial, el medio ambiente, los derechos humanos y la biotecnología, proporcionando marcos para tomar decisiones moralmente fundamentadas.",
                keywords: ["ética aplicada", "bioética", "ética profesional", "responsabilidad social", "códigos de ética", "dilemas morales", "toma de decisiones"]
            }
        ]
    },
    {
        subthemes: "existencialismo",
        title: "Existencialismo - La Existencia Precede a la Esencia",
        description: "Corriente filosófica que enfatiza la existencia individual, la libertad de elección y la responsabilidad personal en la creación del significado de la vida",
        questions: [
            {
                question: "¿Qué es el existencialismo y cuáles son sus principios fundamentales?",
                answerd: "El existencialismo es una corriente filosófica que sostiene que la existencia precede a la esencia, lo que significa que los seres humanos primero existen y luego, a través de sus decisiones y acciones, definen quiénes son. Sus principios fundamentales incluyen: la radical libertad humana y la responsabilidad que conlleva, la idea de que no existe una naturaleza humana predeterminada, la importancia de la elección auténtica, la angustia existencial como consecuencia de la libertad, y la creación individual del significado en un universo aparentemente sin propósito. Los existencialistas rechazan los sistemas filosóficos totalizadores y enfatizan la experiencia subjetiva, la autenticidad y la responsabilidad personal en la construcción de la identidad.",
                keywords: ["existencialismo", "existencia", "esencia", "libertad", "responsabilidad", "autenticidad", "angustia existencial", "elección"]
            },
            {
                question: "¿Quiénes son los principales filósofos existencialistas y sus contribuciones?",
                answerd: "Los principales filósofos existencialistas incluyen: Søren Kierkegaard, considerado precursor del movimiento, quien exploró la angustia, la fe y la elección individual; Jean-Paul Sartre, quien desarrolló la famosa frase 'la existencia precede a la esencia' y exploró conceptos como la mala fe y el proyecto de vida; Simone de Beauvoir, quien aplicó el existencialismo al feminismo y escribió 'El Segundo Sexo'; Martin Heidegger, quien aunque no se consideraba existencialista, influyó enormemente con su análisis del 'ser-en-el-mundo' y la autenticidad; Albert Camus, quien exploró el absurdo de la existencia humana; y Karl Jaspers, quien desarrolló conceptos sobre las situaciones límite. Cada uno contribuyó con perspectivas únicas sobre la condición humana, la libertad y la responsabilidad.",
                keywords: ["Kierkegaard", "Sartre", "Simone de Beauvoir", "Heidegger", "Camus", "Jaspers", "filósofos existencialistas", "mala fe", "absurdo"]
            },
            {
                question: "¿Cómo aborda el existencialismo temas como la muerte, la libertad y la angustia?",
                answerd: "Para el existencialismo, la muerte es fundamental porque da urgencia y significado a nuestras elecciones; la conciencia de la mortalidad nos confronta con la finitud y nos obliga a vivir auténticamente. La libertad es vista como radical y aterradora: somos 'condenados a ser libres' según Sartre, lo que significa que no podemos escapar de la responsabilidad de elegir. Esta libertad genera angustia existencial porque nos enfrenta con la ausencia de guías preestablecidas para vivir. La angustia no es miedo a algo específico, sino la confrontación con nuestra propia libertad y responsabilidad. Heidegger habla del 'ser-para-la-muerte' como una forma auténtica de existir, mientras que Camus explora cómo enfrentar el absurdo de la existencia sin recurrir al suicidio o la esperanza ilusoria, proponiendo la rebelión creativa como respuesta.",
                keywords: ["muerte", "libertad radical", "angustia", "finitud", "ser-para-la-muerte", "absurdo", "responsabilidad", "autenticidad"]
            }
        ]
    },
    {
        subthemes: "nihilismo",
        title: "Nihilismo - La Negación del Significado y los Valores",
        description: "Doctrina filosófica que sostiene que la vida carece de significado objetivo, propósito o valores intrínsecos fundamentales",
        questions: [
            {
                question: "¿Qué es el nihilismo y cuáles son sus características principales?",
                answerd: "El nihilismo es una posición filosófica que sostiene que la vida carece de significado objetivo, propósito o valor intrínseco. Características principales incluyen: la negación de valores morales absolutos o universales, el escepticismo hacia las verdades tradicionales y las instituciones, la creencia de que no existe un propósito inherente en la existencia humana, y la idea de que todos los valores son construcciones humanas sin fundamento objetivo. El nihilismo puede manifestarse como nihilismo metafísico (nada existe realmente), nihilismo epistemológico (no podemos conocer la verdad), o nihilismo moral (no existen valores morales objetivos). Esta corriente a menudo surge como respuesta a la crisis de las creencias tradicionales, especialmente religiosas, y puede llevar tanto al desprecio por la vida como a la liberación de las limitaciones impuestas por sistemas de valores tradicionales.",
                keywords: ["nihilismo", "significado", "valores", "propósito", "escepticismo", "verdad", "existencia", "crisis de valores"]
            },
            {
                question: "¿Cómo se relaciona Nietzsche con el nihilismo y su superación?",
                answerd: "Friedrich Nietzsche no fue un nihilista, sino un diagnosticador y crítico del nihilismo. Él identificó el nihilismo como una crisis cultural inevitable en Occidente, resultado de la 'muerte de Dios' y el colapso de los valores tradicionales cristianos. Nietzsche vio el nihilismo como una etapa necesaria pero peligrosa en el desarrollo cultural: necesaria porque limpia los valores falsos, pero peligrosa porque puede llevar a la desesperación. Su propuesta para superar el nihilismo incluía: la creación de nuevos valores a través del 'superhombre' (Übermensch), la 'voluntad de poder' como impulso creativo fundamental, el 'eterno retorno' como test de afirmación de la vida, y la 'transvaloración de todos los valores'. Para Nietzsche, debemos convertir el nihilismo pasivo (negación desesperada) en nihilismo activo (destrucción creativa que permite nuevos valores).",
                keywords: ["Nietzsche", "muerte de Dios", "superhombre", "voluntad de poder", "eterno retorno", "transvaloración", "nihilismo activo", "nuevos valores"]
            },
            {
                question: "¿Cuáles son las implicaciones y respuestas contemporáneas al nihilismo?",
                answerd: "Las implicaciones del nihilismo incluyen el relativismo moral extremo, la pérdida de propósito existencial, la posible alienación social y la crisis de sentido en las sociedades modernas. Sin embargo, han surgido diversas respuestas: el existencialismo propone que podemos crear nuestro propio significado a través de elecciones auténticas; el absurdismo de Camus sugiere abrazar la falta de sentido mientras vivimos plenamente; el postmodernismo a veces abraza el relativismo nihilista pero también busca nuevas formas de significado; las corrientes neohumanistas intentan reconstruir valores humanos sin fundamentos absolutos; y algunos filósofos como Thomas Nagel argumentan que el nihilismo se basa en expectativas incorrectas sobre lo que debería ser el significado. En la práctica, muchas personas encuentran significado en relaciones, creatividad, contribución social o experiencias estéticas, sugiriendo que el significado puede ser local y personal sin ser universal.",
                keywords: ["relativismo moral", "crisis de sentido", "absurdismo", "postmodernismo", "neohumanismo", "significado personal", "respuestas al nihilismo"]
            }
        ]
    },
    {
        subthemes: "filosofia_moral",
        title: "Filosofía Moral - Fundamentos del Bien y la Justicia",
        description: "Rama de la filosofía que examina los principios fundamentales de la moralidad, la justicia y el comportamiento ético correcto",
        questions: [
            {
                question: "¿Qué es la filosofía moral y cómo se diferencia de otras disciplinas éticas?",
                answerd: "La filosofía moral es la rama de la filosofía que se ocupa de los fundamentos teóricos de la moralidad, examinando qué hace que una acción sea correcta o incorrecta, qué constituye una vida buena y cuáles son los principios fundamentales de la justicia. Se diferencia de la ética aplicada en que esta última se enfoca en problemas específicos (bioética, ética empresarial), mientras que la filosofía moral busca los principios universales subyacentes. También se distingue de la psicología moral, que estudia cómo las personas desarrollan y aplican juicios morales, y de la sociología de la moral, que examina cómo las normas morales funcionan en la sociedad. La filosofía moral es más abstracta y fundamental, preguntándose no solo cómo actuamos moralmente, sino por qué deberíamos hacerlo y qué justifica nuestros juicios morales.",
                keywords: ["filosofía moral", "moralidad", "principios éticos", "justicia", "ética aplicada", "juicios morales", "fundamentos teóricos"]
            },
            {
                question: "¿Cuáles son los principales problemas y debates en filosofía moral contemporánea?",
                answerd: "Los principales debates en filosofía moral contemporánea incluyen: el problema del relativismo versus universalismo moral (¿existen verdades morales universales?); el debate entre consecuencialismo y deontología (¿importan solo las consecuencias o también las intenciones?); la cuestión de la motivación moral (¿por qué deberíamos ser morales?); el problema de la responsabilidad moral en un mundo determinista; los dilemas del trolley y otros experimentos mentales que exploran nuestras intuiciones morales; la ética de la parcialidad versus imparcialidad (¿podemos favorecer a nuestra familia?); los derechos de los animales y la ética ambiental; la justicia intergeneracional y nuestras obligaciones hacia las futuras generaciones; y la intersección entre neurociencia y moralidad. Estos debates reflejan tensiones fundamentales sobre la naturaleza humana, la razón, las emociones y nuestras obligaciones mutuas.",
                keywords: ["relativismo moral", "universalismo", "consecuencialismo", "deontología", "motivación moral", "dilemas éticos", "responsabilidad", "justicia"]
            },
            {
                question: "¿Cómo abordan diferentes tradiciones culturales los principios de la filosofía moral?",
                answerd: "Las diferentes tradiciones culturales aportan perspectivas diversas a la filosofía moral: La tradición occidental, influenciada por el cristianismo y la filosofía griega, enfatiza la razón, los derechos individuales y principios universales; la filosofía confuciana se centra en las virtudes, las relaciones jerárquicas armoniosas y el deber social; el budismo enfatiza la compasión universal, la interdependencia y la reducción del sufrimiento; la filosofía islámica integra la revelación divina con la razón en la ética; las tradiciones indígenas a menudo enfatizan la reciprocidad, la conexión con la naturaleza y la responsabilidad comunitaria; la filosofía africana ubuntu destaca la humanidad compartida y la interdependencia social. Estas tradiciones no son incompatibles pero ofrecen diferentes énfasis: individualismo versus comunitarismo, razón versus intuición, derechos versus deberes, y diferentes concepciones de la naturaleza humana y la sociedad ideal. La filosofía moral contemporánea busca cada vez más incorporar estas diversas perspectivas.",
                keywords: ["tradiciones culturales", "filosofía occidental", "confucianismo", "budismo", "filosofía islámica", "ubuntu", "comunitarismo", "diversidad moral"]
            }
        ]
    },
    {
        subthemes: "estetica",
        title: "Estética - La Filosofía del Arte y la Belleza",
        description: "Rama de la filosofía que estudia la naturaleza de la belleza, el arte, la experiencia estética y los juicios de gusto",
        questions: [
            {
                question: "¿Qué es la estética y cuáles son sus principales áreas de investigación?",
                answerd: "La estética es la rama de la filosofía que estudia la naturaleza de la belleza, el arte, la experiencia estética y los juicios de gusto. Sus principales áreas incluyen: la filosofía del arte, que examina qué define al arte y su función en la sociedad; la teoría de la belleza, que investiga si la belleza es objetiva o subjetiva; la experiencia estética, que analiza cómo percibimos y respondemos a los objetos estéticos; la crítica de arte, que establece criterios para evaluar obras artísticas; y la estética de lo cotidiano, que estudia experiencias estéticas fuera del arte formal. La estética también aborda preguntas sobre la creatividad, la interpretación, el significado artístico, la relación entre forma y contenido, y el papel del contexto cultural. Desde Platón y Aristóteles hasta pensadores contemporáneos, la estética ha evolucionado desde preocupaciones sobre la mimesis y la catarsis hasta cuestiones sobre el arte conceptual, la digitalización y la globalización cultural.",
                keywords: ["estética", "belleza", "arte", "experiencia estética", "juicios de gusto", "filosofía del arte", "creatividad", "crítica de arte"]
            },
            {
                question: "¿Cómo han evolucionado las teorías de la belleza desde la antigüedad hasta la contemporaneidad?",
                answerd: "Las teorías de la belleza han evolucionado significativamente: En la antigüedad, Platón veía la belleza como reflejo imperfecto de las Ideas perfectas, mientras Aristóteles la relacionaba con la proporción y la armonía. Durante el Renacimiento, se enfatizó la proporción matemática y la perspectiva. En el siglo XVIII, Kant revolucionó la estética con su 'Crítica del Juicio', argumentando que los juicios estéticos son universales pero subjetivos, basados en un 'sentimiento' de belleza que surge del juego libre de nuestras facultades cognitivas. El Romanticismo del siglo XIX introdujo conceptos como lo sublime y enfatizó la originalidad y la expresión emocional. El siglo XX trajo la crisis de la belleza tradicional con vanguardias que cuestionaron los cánones establecidos. La estética contemporánea aborda la pluralidad cultural, la desmaterialización del arte, la estética digital, y debates sobre si la belleza sigue siendo relevante en el arte contemporáneo. Teorías actuales incluyen la neuroestética y estudios sobre la estética evolutiva.",
                keywords: ["teorías de la belleza", "Platón", "Aristóteles", "Kant", "sublime", "Romanticismo", "vanguardias", "arte contemporáneo", "neuroestética"]
            },
            {
                question: "¿Cuál es la relación entre estética, cultura y sociedad en la experiencia artística?",
                answerd: "La estética está profundamente entrelazada con la cultura y la sociedad. La experiencia artística no es puramente individual sino que está mediada por contextos culturales que determinan qué se considera arte, bello o valioso. Las diferentes culturas desarrollan distintos cánones estéticos, técnicas artísticas y significados simbólicos. La sociología del arte muestra cómo las obras reflejan y moldean las estructuras sociales, mientras que la crítica cultural analiza cómo el arte puede tanto reproducir como desafiar ideologías dominantes. El concepto de 'campo artístico' de Bourdieu explica cómo el valor estético se construye socialmente a través de instituciones como museos, críticos y mercados. La globalización ha llevado a hibridaciones culturales y debates sobre apropiación cultural versus intercambio creativo. El arte contemporáneo frecuentemente aborda temas sociales y políticos, cuestionando la separación entre estética y compromiso social. La democratización digital ha transformado tanto la producción como el consumo estético, planteando nuevas preguntas sobre autoría, originalidad y acceso cultural.",
                keywords: ["estética y cultura", "sociología del arte", "cánones estéticos", "Bourdieu", "campo artístico", "globalización cultural", "arte y política", "democratización digital"]
            }
        ]
    },
    {
        subthemes: "realidad",
        title: "Realidad - La Naturaleza de lo que Existe",
        description: "Investigación filosófica sobre la naturaleza fundamental de la realidad, lo que existe y cómo podemos conocerlo",
        questions: [
            {
                question: "¿Qué es la realidad y cuáles son las principales teorías sobre su naturaleza?",
                answerd: "La realidad se refiere a todo lo que existe independientemente de nuestras creencias, percepciones o deseos sobre ello. Las principales teorías incluyen: el Realismo, que sostiene que existe una realidad objetiva independiente de la mente; el Idealismo, que afirma que la realidad es fundamentalmente mental o espiritual (como en Berkeley o Hegel); el Materialismo o Fisicalismo, que considera que solo existe la materia y la energía física; el Dualismo, que propone la existencia de sustancias mentales y físicas separadas; el Fenomenalismo, que reduce la realidad a fenómenos o experiencias; y el Pragmatismo, que define la realidad en términos de sus efectos prácticos. Teorías contemporáneas incluyen el realismo científico, que identifica la realidad con lo que describen nuestras mejores teorías científicas, y enfoques cuánticos que cuestionan la separación sujeto-objeto. Cada teoría tiene implicaciones diferentes para preguntas sobre la conciencia, la causalidad y el conocimiento.",
                keywords: ["realidad", "realismo", "idealismo", "materialismo", "dualismo", "fenomenalismo", "pragmatismo", "realismo científico"]
            },
            {
                question: "¿Cómo plantea la filosofía el problema de la relación entre apariencia y realidad?",
                answerd: "El problema de la relación entre apariencia y realidad es central en filosofía desde los presocráticos. Platón estableció una distinción radical entre el mundo sensible (apariencias) y el mundo de las Ideas (realidad verdadera), donde las percepciones son meras sombras de la realidad auténtica. Kant revolucionó este debate distinguiendo entre fenómenos (cómo las cosas nos aparecen) y noúmenos (cómo son en sí mismas), argumentando que solo podemos conocer los fenómenos. El empirismo moderno cuestiona si podemos ir más allá de las apariencias, mientras que el realismo directo sostiene que percibimos la realidad directamente. La fenomenología de Husserl propuso suspender la pregunta sobre la realidad 'en sí' y concentrarse en cómo se nos aparecen las cosas. Las ciencias cognitivas contemporáneas muestran cómo nuestros cerebros construyen activamente la percepción, mientras que la física cuántica sugiere que la observación puede afectar la realidad observada. Este debate tiene implicaciones profundas para el conocimiento, la ciencia y nuestra comprensión de la conciencia.",
                keywords: ["apariencia y realidad", "Platón", "mundo de las Ideas", "Kant", "fenómenos", "noúmenos", "empirismo", "fenomenología"]
            },
            {
                question: "¿Qué aportes hace la ciencia moderna a nuestra comprensión de la realidad?",
                answerd: "La ciencia moderna ha transformado radicalmente nuestra comprensión de la realidad. La física ha revelado que la realidad a nivel fundamental es muy diferente de nuestras percepciones: la mecánica cuántica muestra que las partículas pueden estar en superposición y que la observación afecta los sistemas cuánticos; la relatividad demuestra que el espacio y el tiempo son relativos y pueden curvarse; la cosmología revela un universo en expansión con materia y energía oscuras. La biología evolutiva sitúa a los humanos como parte de un proceso natural continuo, cuestionando nuestra posición especial. Las neurociencias muestran cómo el cerebro construye nuestra experiencia de la realidad, incluyendo la conciencia y el libre albedrío. La informática y la inteligencia artificial plantean preguntas sobre la naturaleza de la mente y la posibilidad de realidades simuladas. Sin embargo, persisten debates sobre si la ciencia nos acerca a la 'realidad en sí' o solo mejora nuestros modelos predictivos. El realismo científico compete con el instrumentalismo y el construccionismo social en la interpretación del significado de los descubrimientos científicos.",
                keywords: ["ciencia y realidad", "mecánica cuántica", "relatividad", "neurociencias", "evolución", "realismo científico", "instrumentalismo", "realidades simuladas"]
            }
        ]
    },
    {
        subthemes: "metafisica",
        title: "Metafísica - El Estudio del Ser y la Realidad Fundamental",
        description: "Rama de la filosofía que investiga la naturaleza fundamental de la realidad, incluyendo la relación entre mente y materia, sustancia y atributo, causa y efecto",
        questions: [
            {
                question: "¿Qué es la metafísica y cuáles son sus principales áreas de investigación?",
                answerd: "La metafísica es la rama de la filosofía que estudia la naturaleza fundamental de la realidad y la existencia. Etimológicamente significa 'más allá de la física', refiriéndose a principios que trascienden el mundo físico observable. Sus principales áreas incluyen: la ontología, que estudia qué existe y las categorías básicas del ser; la cosmología filosófica, que examina la naturaleza del universo como totalidad; el problema mente-cuerpo, que investiga la relación entre lo mental y lo físico; la causalidad, que analiza las relaciones causa-efecto; la identidad personal y la persistencia a través del tiempo; las propiedades universales versus particulares; la modalidad (posibilidad y necesidad); y el tiempo y el espacio. La metafísica hace preguntas como: ¿Qué hace que algo exista? ¿Son los números reales? ¿Existe el libre albedrío? ¿Qué es la conciencia? ¿Es el tiempo real o ilusorio? Estas investigaciones proporcionan fundamentos conceptuales para otras disciplinas filosóficas y científicas.",
                keywords: ["metafísica", "ontología", "ser", "existencia", "problema mente-cuerpo", "causalidad", "identidad personal", "universales", "modalidad"]
            },
            {
                question: "¿Cómo han evolucionado las concepciones metafísicas desde los griegos hasta la filosofía contemporánea?",
                answerd: "Las concepciones metafísicas han evolucionado dramáticamente: Los presocráticos buscaron principios fundamentales (agua, fuego, átomos) para explicar la realidad. Platón desarrolló la teoría de las Formas, postulando un reino de entidades perfectas e inmutables. Aristóteles creó un sistema comprehensivo distinguiendo sustancia de accidentes y desarrollando conceptos de potencia y acto. La filosofía medieval integró metafísica griega con teología, destacando figuras como Tomás de Aquino. El racionalismo moderno (Descartes, Spinoza, Leibniz) construyó sistemas metafísicos basados en la razón, mientras el empirismo (Locke, Hume) los cuestionó. Kant intentó una síntesis crítica, limitando la metafísica a las condiciones de posibilidad de la experiencia. El siglo XIX vio sistemas grandiosos (Hegel) y reacciones contra ellos (positivismo). El siglo XX trajo el giro lingüístico y el rechazo de la metafísica tradicional, pero luego su resurgimiento con nueva sofisticación técnica, incorporando lógica modal, teoría de conjuntos y descubrimientos científicos. La metafísica contemporánea es más precisa pero también más especializada.",
                keywords: ["historia de la metafísica", "presocráticos", "Platón", "Aristóteles", "filosofía medieval", "racionalismo", "empirismo", "Kant", "metafísica contemporánea"]
            },
            {
                question: "¿Cuáles son los principales debates contemporáneos en metafísica y sus implicaciones?",
                answerd: "Los principales debates metafísicos contemporáneos incluyen: El problema de los universales (¿existen propiedades abstractas compartidas por múltiples objetos?); el debate sobre la composición material (¿cuándo partes forman un todo?); la persistencia temporal (¿somos la misma persona a través del tiempo?); el determinismo versus libertarianismo sobre el libre albedrío; la naturaleza de la conciencia y si es reducible a procesos físicos; el problema de los futuros contingentes y el fatalismo; la existencia de objetos posibles y mundos posibles; la naturaleza del tiempo (¿es real el paso del tiempo?); y el debate sobre el realismo científico. Las implicaciones son profundas: afectan nuestra comprensión de la responsabilidad moral, la identidad personal, la naturaleza de la ciencia, y conceptos legales como la propiedad y los derechos. Por ejemplo, si el determinismo es verdadero, ¿podemos ser verdaderamente responsables de nuestras acciones? Si la identidad personal es ilusoria, ¿qué significa el castigo o la recompensa? Estos debates también influyen en campos aplicados como la inteligencia artificial, la bioética y la filosofía de la mente.",
                keywords: ["debates metafísicos", "universales", "composición material", "persistencia temporal", "libre albedrío", "conciencia", "mundos posibles", "tiempo", "responsabilidad moral"]
            }
        ]
    }
]

const programacion = [
    {
        subthemes: "conceptos_basicos",
        title: "Conceptos Básicos de Programación",
        description: "Fundamentos esenciales de la programación incluyendo variables, tipos de datos, funciones y paradigmas de programación",
        questions: [
            {
                question: "¿Qué es la programación y para qué sirve?",
                answerd: "La programación es el proceso de crear instrucciones que una computadora puede ejecutar para realizar tareas específicas. Consiste en escribir código usando lenguajes de programación para resolver problemas, automatizar procesos y crear aplicaciones. La programación sirve para desarrollar software, sitios web, aplicaciones móviles, videojuegos, sistemas operativos y prácticamente cualquier tecnología digital que usamos diariamente. Es fundamental en campos como la inteligencia artificial, robótica, análisis de datos y automatización industrial.",
                keywords: ["programación", "código", "software", "aplicaciones", "lenguajes de programación", "automatización", "tecnología"]
            },
            {
                question: "¿Qué son las variables en programación y cómo se utilizan?",
                answerd: "Las variables son espacios de memoria que almacenan datos temporalmente durante la ejecución de un programa. Funcionan como contenedores con nombres que pueden guardar diferentes tipos de información como números, texto, fechas, etc. Para utilizar una variable, primero se declara (se le da un nombre), luego se le asigna un valor y finalmente se puede usar ese valor en operaciones. Por ejemplo, 'edad = 25' crea una variable llamada 'edad' que almacena el número 25. Las variables son fundamentales porque permiten que los programas manejen información dinámica y reutilicen valores en diferentes partes del código.",
                keywords: ["variables", "memoria", "datos", "declaración", "asignación", "tipos de datos", "almacenamiento"]
            },
            {
                question: "¿Cuáles son los principales tipos de datos en programación?",
                answerd: "Los principales tipos de datos en programación incluyen: 1) Números enteros (int) como 1, 5, -10; 2) Números decimales (float/double) como 3.14, -2.5; 3) Texto o cadenas (string) como 'Hola mundo'; 4) Booleanos (bool) que solo pueden ser verdadero o falso; 5) Arreglos o listas que almacenan múltiples valores; 6) Objetos que agrupan datos y funciones relacionadas. Cada tipo de dato ocupa diferente espacio en memoria y permite diferentes operaciones. Por ejemplo, con números puedes hacer operaciones matemáticas, con strings puedes concatenar texto, y con booleanos puedes hacer evaluaciones lógicas.",
                keywords: ["tipos de datos", "enteros", "decimales", "strings", "booleanos", "arreglos", "objetos", "int", "float", "bool"]
            },
            {
                question: "¿Qué son las funciones y por qué son importantes?",
                answerd: "Las funciones son bloques de código reutilizable que realizan tareas específicas. Se definen una vez y pueden ejecutarse múltiples veces desde diferentes partes del programa. Una función típicamente recibe datos de entrada (parámetros), procesa esa información y puede devolver un resultado. Son importantes porque: 1) Evitan repetir código; 2) Hacen el programa más organizado y legible; 3) Facilitan el mantenimiento y corrección de errores; 4) Permiten dividir problemas complejos en partes más pequeñas; 5) Facilitan el trabajo en equipo al modularizar el código. Por ejemplo, una función 'calcularArea(largo, ancho)' puede usarse cada vez que necesites calcular el área de un rectángulo.",
                keywords: ["funciones", "reutilización", "parámetros", "modularidad", "organización", "código limpio", "procedimientos", "métodos"]
            },
            {
                question: "¿Qué son los algoritmos y cómo se relacionan con la programación?",
                answerd: "Un algoritmo es una secuencia paso a paso de instrucciones para resolver un problema específico. Es como una receta de cocina que describe exactamente qué hacer en cada momento. En programación, los algoritmos son la base conceptual antes de escribir código: primero diseñas el algoritmo (los pasos lógicos) y luego lo traduces a un lenguaje de programación. Los algoritmos deben ser: 1) Precisos (sin ambigüedad); 2) Finitos (deben terminar); 3) Efectivos (cada paso debe ser realizable). Ejemplos incluyen algoritmos de ordenamiento, búsqueda, cálculos matemáticos, etc. Un buen algoritmo es eficiente en tiempo y recursos, y puede implementarse en cualquier lenguaje de programación.",
                keywords: ["algoritmos", "lógica", "pasos", "instrucciones", "resolución de problemas", "eficiencia", "diseño", "pseudocódigo"]
            },
            {
                question: "¿Cuáles son los principales paradigmas de programación?",
                answerd: "Los principales paradigmas de programación son enfoques diferentes para estructurar y organizar el código: 1) Programación Imperativa: se enfoca en cómo hacer las cosas, usando secuencias de comandos (ej: C, Pascal); 2) Programación Orientada a Objetos: organiza el código en objetos que contienen datos y métodos (ej: Java, C++, Python); 3) Programación Funcional: trata la computación como evaluación de funciones matemáticas (ej: Haskell, Lisp); 4) Programación Declarativa: describe qué resultado se quiere, no cómo obtenerlo (ej: SQL, HTML). Muchos lenguajes modernos son multi-paradigma, permitiendo usar diferentes enfoques según sea más apropiado para cada situación.",
                keywords: ["paradigmas", "imperativa", "orientada a objetos", "funcional", "declarativa", "enfoques", "metodologías", "estilos de programación"]
            }
        ]
    },
    {
        subthemes: "condicionales",
        title: "Estructuras Condicionales",
        description: "Control de flujo mediante condiciones, incluyendo if, else, switch y operadores lógicos para toma de decisiones en programas",
        questions: [
            {
                question: "¿Qué son las estructuras condicionales y para qué sirven?",
                answerd: "Las estructuras condicionales son construcciones de programación que permiten que un programa tome decisiones basadas en condiciones específicas. Funcionan evaluando expresiones booleanas (verdadero o falso) y ejecutando diferentes bloques de código según el resultado. Sirven para: 1) Crear programas que respondan a diferentes situaciones; 2) Validar datos de entrada; 3) Controlar el flujo de ejecución; 4) Implementar lógica de negocio compleja. Por ejemplo, un programa puede verificar si un usuario es mayor de edad antes de permitir ciertas acciones, o decidir qué mensaje mostrar según el resultado de una operación. Sin condicionales, los programas solo podrían ejecutar las mismas instrucciones en el mismo orden siempre.",
                keywords: ["condicionales", "decisiones", "flujo de control", "if", "else", "condiciones", "lógica", "booleanas"]
            },
            {
                question: "¿Cómo funciona la estructura if-else y cuáles son sus variantes?",
                answerd: "La estructura if-else evalúa una condición y ejecuta diferentes bloques de código según el resultado. Funciona así: 'if (condición)' ejecuta un bloque si la condición es verdadera, 'else' ejecuta otro bloque si es falsa. Las variantes incluyen: 1) if simple: solo ejecuta código si la condición es verdadera; 2) if-else: dos opciones mutuamente excluyentes; 3) if-else if-else: múltiples condiciones en cascada; 4) if anidados: condicionales dentro de otros condicionales. Ejemplo: 'if (edad >= 18) { permitirAcceso(); } else { denegarAcceso(); }'. Esta estructura es fundamental para crear programas interactivos que respondan apropiadamente a diferentes situaciones y datos de entrada.",
                keywords: ["if", "else", "if-else", "condición", "verdadero", "falso", "anidados", "cascada", "evaluación"]
            },
            {
                question: "¿Qué son los operadores lógicos y cómo se usan en condicionales?",
                answerd: "Los operadores lógicos son símbolos que permiten combinar o modificar condiciones booleanas en estructuras condicionales. Los principales son: 1) AND (&&): ambas condiciones deben ser verdaderas; 2) OR (||): al menos una condición debe ser verdadera; 3) NOT (!): invierte el valor de verdad. Se usan para crear condiciones más complejas y específicas. Ejemplo: 'if (edad >= 18 && tienePermiso)' verifica que la persona sea mayor de edad Y tenga permiso. 'if (esFinDeSemana || esFeriado)' ejecuta si es fin de semana O feriado. Los operadores lógicos permiten expresar lógica de negocio compleja de manera clara y eficiente, evitando múltiples condicionales anidados.",
                keywords: ["operadores lógicos", "AND", "OR", "NOT", "&&", "||", "!", "combinación", "condiciones complejas", "booleanos"]
            },
            {
                question: "¿Qué es la estructura switch y cuándo es mejor usarla que if-else?",
                answerd: "La estructura switch es una forma de control de flujo que compara una variable con múltiples valores posibles y ejecuta código específico para cada caso. Es especialmente útil cuando tienes una variable que puede tener muchos valores discretos diferentes. Se usa con 'case' para cada valor posible y 'default' para casos no contemplados. Es mejor que if-else cuando: 1) Comparas una sola variable contra múltiples valores exactos; 2) Tienes más de 3-4 opciones; 3) Los valores son constantes conocidas; 4) Quieres código más legible y organizado. Ejemplo: switch para días de la semana, menús de opciones, códigos de estado, etc. Sin embargo, if-else es mejor para rangos de valores, condiciones complejas con operadores lógicos, o cuando necesitas más flexibilidad en las comparaciones.",
                keywords: ["switch", "case", "default", "múltiples opciones", "valores discretos", "comparación", "legibilidad", "organización"]
            },
            {
                question: "¿Cómo se evalúan las condiciones y qué son los operadores de comparación?",
                answerd: "Las condiciones se evalúan comparando valores usando operadores de comparación, que devuelven verdadero o falso. Los operadores principales son: 1) Igualdad (==): verifica si dos valores son iguales; 2) Desigualdad (!=): verifica si son diferentes; 3) Mayor que (>), menor que (<): comparaciones numéricas; 4) Mayor o igual (>=), menor o igual (<=): incluyen la igualdad; 5) Igualdad estricta (===): compara valor y tipo de dato. La evaluación sigue reglas específicas: primero se calculan las expresiones, luego se comparan los resultados. Es importante entender la precedencia de operadores y el comportamiento con diferentes tipos de datos. Por ejemplo, '5 > 3' es verdadero, pero '\"10\" > 2' puede comportarse diferente según el lenguaje debido a conversiones de tipo.",
                keywords: ["evaluación", "operadores de comparación", "==", "!=", ">", "<", ">=", "<=", "===", "precedencia", "tipos de datos"]
            },
            {
                question: "¿Qué son los condicionales ternarios y cómo simplifican el código?",
                answerd: "Los condicionales ternarios son una forma compacta de escribir estructuras if-else simples en una sola línea. Siguen la sintaxis: 'condición ? valorSiVerdadero : valorSiFalso'. Por ejemplo, 'edad >= 18 ? \"adulto\" : \"menor\"' asigna \"adulto\" si la edad es 18 o más, caso contrario \"menor\". Simplifican el código porque: 1) Reducen múltiples líneas a una; 2) Son útiles para asignaciones condicionales; 3) Mejoran la legibilidad en casos simples; 4) Son expresiones (devuelven valores) no solo declaraciones. Sin embargo, deben usarse con moderación: son ideales para lógica simple pero pueden hacer el código menos legible si se anidan o usan para lógica compleja. Son perfectos para valores por defecto, asignaciones condicionales rápidas y inicializaciones.",
                keywords: ["ternario", "operador ternario", "?", ":", "condición inline", "asignación condicional", "expresión", "compacto"]
            }
        ]
    },
    {
        subthemes: "bucles",
        title: "Estructuras de Repetición (Bucles)",
        description: "Ciclos y loops para repetir código incluyendo for, while, do-while y control de iteraciones",
        questions: [
            {
                question: "¿Qué son los bucles y por qué son fundamentales en programación?",
                answerd: "Los bucles o ciclos son estructuras de control que permiten repetir un bloque de código múltiples veces de manera automática. Son fundamentales porque: 1) Evitan escribir código repetitivo; 2) Permiten procesar grandes cantidades de datos; 3) Automatizan tareas repetitivas; 4) Hacen posible crear programas que trabajen con listas, arrays y colecciones; 5) Son esenciales para algoritmos de búsqueda, ordenamiento y cálculos matemáticos. Sin bucles, tendríamos que escribir las mismas instrucciones cientos o miles de veces. Por ejemplo, para mostrar números del 1 al 100, sin bucles necesitaríamos 100 líneas de código, pero con un bucle solo necesitamos 3-4 líneas. Los bucles hacen que la programación sea práctica y eficiente.",
                keywords: ["bucles", "ciclos", "repetición", "iteración", "automatización", "eficiencia", "loops", "código repetitivo"]
            },
            {
                question: "¿Cómo funciona el bucle for y cuándo es mejor utilizarlo?",
                answerd: "El bucle for es una estructura que repite código un número específico de veces. Su sintaxis típica es: 'for (inicialización; condición; incremento) { código }'. Tiene tres partes: 1) Inicialización: establece el valor inicial de la variable de control; 2) Condición: se evalúa antes de cada iteración, si es falsa el bucle termina; 3) Incremento: modifica la variable de control después de cada iteración. Es mejor usarlo cuando: 1) Sabes exactamente cuántas veces quieres repetir el código; 2) Necesitas un contador o índice; 3) Recorres arrays o listas; 4) Realizas operaciones matemáticas con secuencias. Ejemplo: 'for (i = 0; i < 10; i++)' repite el código 10 veces. Es muy eficiente y legible para iteraciones con número conocido de repeticiones.",
                keywords: ["for", "contador", "inicialización", "condición", "incremento", "iteraciones", "arrays", "índice", "repeticiones"]
            },
            {
                question: "¿Cuál es la diferencia entre while y do-while?",
                answerd: "La diferencia principal entre while y do-while está en cuándo evalúan la condición: 1) while: evalúa la condición ANTES de ejecutar el código, por lo que es posible que nunca se ejecute si la condición inicial es falsa; 2) do-while: ejecuta el código PRIMERO y evalúa la condición DESPUÉS, garantizando que el código se ejecute al menos una vez. While se usa cuando: la ejecución depende completamente de una condición inicial, como leer archivos o validar entrada. Do-while se usa cuando: necesitas que el código se ejecute al menos una vez, como menús de usuario, juegos que preguntan 'jugar otra vez', o validaciones donde necesitas pedir datos al menos una vez. Ejemplo: un menú siempre debe mostrarse al menos una vez (do-while), pero leer un archivo solo si existe (while).",
                keywords: ["while", "do-while", "condición", "evaluación", "antes", "después", "al menos una vez", "menús", "validación"]
            },
            {
                question: "¿Qué son break y continue y cómo controlan la ejecución de bucles?",
                answerd: "Break y continue son palabras clave que controlan el flujo de ejecución dentro de bucles: 1) break: termina completamente el bucle y transfiere el control a la siguiente instrucción después del bucle. Es útil para salir cuando se cumple una condición específica, como encontrar un elemento en una búsqueda; 2) continue: omite el resto de la iteración actual y salta directamente a la siguiente iteración del bucle. Es útil para saltar elementos que no cumplen cierta condición sin terminar todo el bucle. Ejemplo con break: buscar un número en una lista y salir cuando lo encuentres. Ejemplo con continue: procesar solo números pares, saltando los impares. Ambos mejoran la eficiencia al evitar procesamiento innecesario y hacen el código más claro al expresar la lógica de control de manera explícita.",
                keywords: ["break", "continue", "control de flujo", "terminar bucle", "saltar iteración", "eficiencia", "búsqueda", "condiciones de salida"]
            },
            {
                question: "¿Qué son los bucles anidados y cuándo se utilizan?",
                answerd: "Los bucles anidados son bucles dentro de otros bucles, donde el bucle interno se ejecuta completamente por cada iteración del bucle externo. Si el bucle externo tiene n iteraciones y el interno tiene m, el código interno se ejecutará n×m veces. Se utilizan para: 1) Trabajar con estructuras de datos bidimensionales como matrices o tablas; 2) Generar todas las combinaciones posibles entre dos o más conjuntos; 3) Comparar cada elemento de una lista con todos los demás; 4) Crear patrones gráficos o de texto; 5) Algoritmos de ordenamiento como bubble sort. Ejemplo: para imprimir una tabla de multiplicar del 1 al 10, necesitas un bucle para las filas y otro para las columnas. Es importante tener cuidado con la complejidad computacional, ya que bucles anidados pueden hacer que el programa sea muy lento con grandes cantidades de datos.",
                keywords: ["bucles anidados", "bidimensional", "matrices", "combinaciones", "complejidad", "tablas", "patrones", "algoritmos"]
            },
            {
                question: "¿Cómo evitar bucles infinitos y qué hacer si ocurren?",
                answerd: "Los bucles infinitos ocurren cuando la condición de salida nunca se vuelve falsa, haciendo que el programa se ejecute indefinidamente. Para evitarlos: 1) Asegúrate de que la variable de control se modifique dentro del bucle; 2) Verifica que la condición eventualmente se vuelva falsa; 3) Ten cuidado con condiciones de punto flotante (usa rangos en lugar de igualdad exacta); 4) Inicializa correctamente las variables; 5) Revisa la lógica de las condiciones complejas. Si ocurre un bucle infinito: 1) Usa Ctrl+C o el botón de detener en tu editor; 2) Revisa la condición del bucle; 3) Agrega declaraciones de depuración para rastrear valores; 4) Considera agregar contadores de seguridad que limiten las iteraciones máximas. Los bucles infinitos pueden bloquear el programa y consumir todos los recursos del sistema, por lo que es crucial prevenirlos mediante pruebas cuidadosas.",
                keywords: ["bucles infinitos", "condición de salida", "Ctrl+C", "depuración", "contadores de seguridad", "recursos del sistema", "prevención"]
            }
        ]
    },
    {
        subthemes: "conceptos_backend",
        title: "Conceptos de Backend",
        description: "Desarrollo del lado del servidor incluyendo APIs, bases de datos, autenticación, servidores y arquitecturas backend",
        questions: [
            {
                question: "¿Qué es el desarrollo backend y cuáles son sus responsabilidades principales?",
                answerd: "El desarrollo backend se refiere a la programación del lado del servidor de una aplicación, es decir, todo lo que sucede 'detrás de escena' que los usuarios no ven directamente. Sus responsabilidades principales incluyen: 1) Gestión de bases de datos y almacenamiento de información; 2) Lógica de negocio y procesamiento de datos; 3) Autenticación y autorización de usuarios; 4) APIs y comunicación con el frontend; 5) Seguridad y protección de datos; 6) Rendimiento y escalabilidad del sistema; 7) Integración con servicios externos; 8) Manejo de archivos y recursos del servidor. El backend es como el 'cerebro' de una aplicación: recibe solicitudes del frontend, las procesa, interactúa con bases de datos, aplica reglas de negocio y devuelve respuestas. Es fundamental para cualquier aplicación que maneje datos, usuarios o lógica compleja.",
                keywords: ["backend", "servidor", "lógica de negocio", "bases de datos", "APIs", "autenticación", "seguridad", "escalabilidad"]
            },
            {
                question: "¿Qué son las APIs y cómo funcionan en el backend?",
                answerd: "Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. En el backend, las APIs funcionan como 'meseros' que toman pedidos del frontend y devuelven respuestas. Funcionan así: 1) El frontend hace una solicitud HTTP (GET, POST, PUT, DELETE) a un endpoint específico; 2) El backend recibe la solicitud y la procesa; 3) Se ejecuta la lógica correspondiente (consultar base de datos, validar datos, etc.); 4) Se devuelve una respuesta, generalmente en formato JSON. Las APIs permiten: separar frontend y backend, reutilizar funcionalidad, integrar servicios externos, crear aplicaciones móviles, y facilitar el trabajo en equipo. Tipos comunes incluyen REST APIs (más populares), GraphQL, y SOAP. Una buena API es intuitiva, bien documentada, segura y eficiente.",
                keywords: ["API", "endpoints", "HTTP", "GET", "POST", "PUT", "DELETE", "JSON", "REST", "GraphQL", "comunicación", "solicitudes"]
            },
            {
                question: "¿Cuáles son los principales lenguajes y frameworks para backend?",
                answerd: "Los principales lenguajes y frameworks para backend incluyen: 1) JavaScript: Node.js con Express.js, Nest.js; popular por usar el mismo lenguaje que frontend; 2) Python: Django, Flask, FastAPI; excelente para ciencia de datos y desarrollo rápido; 3) Java: Spring Boot, Spring Framework; muy usado en empresas grandes por su robustez; 4) C#: .NET Core, ASP.NET; fuerte ecosistema de Microsoft; 5) PHP: Laravel, Symfony; tradicional para desarrollo web; 6) Ruby: Ruby on Rails; conocido por su productividad; 7) Go: Gin, Echo; excelente rendimiento para servicios de alta concurrencia; 8) Rust: Actix, Rocket; seguridad y rendimiento extremo. La elección depende de factores como: rendimiento requerido, ecosistema de librerías, experiencia del equipo, escalabilidad necesaria, y tipo de proyecto. Cada lenguaje tiene sus fortalezas específicas.",
                keywords: ["Node.js", "Python", "Django", "Java", "Spring", "C#", ".NET", "PHP", "Laravel", "Ruby", "Rails", "Go", "Rust", "frameworks"]
            },
            {
                question: "¿Qué es la autenticación y autorización en aplicaciones backend?",
                answerd: "La autenticación y autorización son dos conceptos fundamentales de seguridad en backend: 1) Autenticación: verifica QUIÉN es el usuario (validar identidad). Métodos incluyen contraseñas, tokens, biometría, autenticación de dos factores. 2) Autorización: determina QUÉ puede hacer ese usuario (permisos). Define acceso a recursos, operaciones permitidas, niveles de privilegios. Flujo típico: usuario se autentica → recibe token → cada solicitud incluye token → backend verifica token y permisos → permite o deniega acción. Implementaciones comunes: JWT (JSON Web Tokens) para aplicaciones stateless, sesiones con cookies para aplicaciones tradicionales, OAuth para integración con redes sociales, RBAC (Role-Based Access Control) para gestión de permisos. La seguridad es crítica: datos mal protegidos pueden llevar a violaciones de privacidad, pérdidas económicas y problemas legales.",
                keywords: ["autenticación", "autorización", "JWT", "tokens", "sesiones", "OAuth", "RBAC", "permisos", "seguridad", "identidad"]
            },
            {
                question: "¿Qué son los servidores web y cómo manejan las solicitudes?",
                answerd: "Los servidores web son programas que reciben, procesan y responden solicitudes HTTP de clientes (navegadores, aplicaciones móviles, etc.). Funcionan así: 1) Escuchan en un puerto específico (ej: 80 para HTTP, 443 para HTTPS); 2) Reciben solicitudes HTTP con método, URL, headers y datos; 3) Procesan la solicitud según la lógica de la aplicación; 4) Generan y envían respuesta HTTP con código de estado, headers y contenido. Tipos principales: 1) Servidores estáticos: sirven archivos sin procesamiento (Apache, Nginx); 2) Servidores de aplicación: ejecutan código dinámico (Node.js, Gunicorn, IIS). Conceptos importantes: concurrencia (manejar múltiples solicitudes simultáneas), balanceo de carga (distribuir solicitudes entre varios servidores), caché (almacenar respuestas frecuentes), y reverse proxy (intermediario entre cliente y servidor). El rendimiento depende de arquitectura, recursos hardware y optimizaciones.",
                keywords: ["servidores web", "HTTP", "HTTPS", "puertos", "Apache", "Nginx", "concurrencia", "balanceo de carga", "reverse proxy", "caché"]
            },
            {
                question: "¿Qué son las arquitecturas de microservicios y cuándo usarlas?",
                answerd: "Los microservicios son una arquitectura donde una aplicación se divide en múltiples servicios pequeños e independientes que se comunican a través de APIs. Cada microservicio: 1) Maneja una funcionalidad específica del negocio; 2) Tiene su propia base de datos; 3) Se puede desarrollar y desplegar independientemente; 4) Se comunica con otros servicios via HTTP/REST o mensajería. Ventajas: escalabilidad independiente, tecnologías diversas por servicio, equipos autónomos, fallos aislados, despliegues independientes. Desventajas: complejidad de red, gestión de datos distribuidos, debugging complejo, latencia entre servicios. Usar cuando: aplicación grande y compleja, equipos múltiples, necesidad de escalar partes específicas, diferentes tecnologías por área. No usar para: aplicaciones pequeñas, equipos pequeños, baja complejidad, cuando la consistencia de datos es crítica. Requiere expertise en DevOps, monitoreo y orquestación de servicios.",
                keywords: ["microservicios", "arquitectura distribuida", "APIs", "escalabilidad", "independencia", "DevOps", "monitoreo", "orquestación", "servicios"]
            }
        ]
    },
    {
        subthemes: "frontend",
        title: "Desarrollo FrontEnd",
        description: "Este subtema abarca los aspectos esenciales del desarrollo del lado del cliente, como HTML, CSS, JavaScript y frameworks relacionados.",
        questions: [
            {
                question: "¿Qué es el desarrollo FrontEnd?",
                answerd: "El desarrollo FrontEnd se refiere a la creación de la parte visual de una aplicación web, es decir, lo que los usuarios ven e interactúan. Incluye el uso de tecnologías como HTML, CSS y JavaScript para construir interfaces de usuario.",
                keywords: ["frontend", "desarrollo web", "html", "css", "javascript"]
            },
            {
                question: "¿Cuál es la función de HTML en el desarrollo FrontEnd?",
                answerd: "HTML (HyperText Markup Language) es el lenguaje de marcado que estructura el contenido de las páginas web. Define elementos como encabezados, párrafos, listas, enlaces, imágenes, entre otros.",
                keywords: ["html", "estructura", "contenido web", "etiquetas"]
            },
            {
                question: "¿Para qué sirve CSS en el FrontEnd?",
                answerd: "CSS (Cascading Style Sheets) se utiliza para definir el estilo y la presentación de los elementos HTML, como colores, fuentes, márgenes y disposición en la pantalla.",
                keywords: ["css", "estilos", "presentación", "diseño web"]
            },
            {
                question: "¿Qué papel juega JavaScript en el FrontEnd?",
                answerd: "JavaScript permite añadir interactividad a las páginas web, como animaciones, respuestas a eventos del usuario (clics, teclas, etc.), validación de formularios y manipulación del DOM.",
                keywords: ["javascript", "interactividad", "eventos", "dom"]
            },
            {
                question: "¿Qué frameworks se utilizan comúnmente en FrontEnd?",
                answerd: "Algunos frameworks y bibliotecas populares en FrontEnd incluyen React, Angular y Vue.js. Estos ayudan a construir interfaces dinámicas de manera más estructurada y eficiente.",
                keywords: ["react", "angular", "vue", "frameworks frontend", "bibliotecas"]
            }
        ]
    },
    {
        subthemes: "bases_datos",
        title: "Bases de Datos",
        description: "Este subtema cubre los conceptos fundamentales sobre bases de datos, sus tipos y cómo se utilizan para almacenar y gestionar información.",
        questions: [
            {
                question: "¿Qué es una base de datos?",
                answerd: "Una base de datos es un sistema organizado para almacenar, gestionar y recuperar datos de forma eficiente. Se utiliza en diversas aplicaciones para manejar grandes volúmenes de información.",
                keywords: ["base de datos", "almacenamiento", "datos", "gestión de información"]
            },
            {
                question: "¿Cuál es la diferencia entre bases de datos SQL y NoSQL?",
                answerd: "Las bases de datos SQL son relacionales y usan un lenguaje estructurado (SQL) para realizar consultas. Las NoSQL son no relacionales y están diseñadas para datos más flexibles, como documentos o pares clave-valor.",
                keywords: ["sql", "nosql", "relacional", "documentos", "clave-valor"]
            },
            {
                question: "¿Qué es MongoDB?",
                answerd: "MongoDB es una base de datos NoSQL orientada a documentos. Utiliza una estructura basada en colecciones y documentos (formato BSON/JSON), lo que permite almacenar datos de manera flexible y escalable.",
                keywords: ["mongodb", "nosql", "documentos", "colecciones", "json"]
            },
            {
                question: "¿Qué es una consulta en una base de datos?",
                answerd: "Una consulta es una instrucción utilizada para obtener o manipular datos dentro de una base de datos. En SQL, por ejemplo, una consulta SELECT recupera datos de una tabla.",
                keywords: ["consulta", "select", "sql", "recuperar datos"]
            },
            {
                question: "¿Qué es una base de datos relacional?",
                answerd: "Es un tipo de base de datos que organiza los datos en tablas relacionadas entre sí mediante claves primarias y foráneas. Ejemplos incluyen MySQL, PostgreSQL y Oracle.",
                keywords: ["relacional", "tablas", "claves primarias", "mysql", "postgresql"]
            }
        ]
    },
    {
        subthemes: "algoritmos",
        title: "Algoritmos en Programación",
        description: "Este subtema aborda el concepto de algoritmos, su utilidad en la resolución de problemas y ejemplos comunes.",
        questions: [
            {
                question: "¿Qué es un algoritmo?",
                answerd: "Un algoritmo es un conjunto de pasos ordenados y finitos que se utilizan para resolver un problema o realizar una tarea específica.",
                keywords: ["algoritmo", "pasos", "problemas", "programación"]
            },
            {
                question: "¿Cuál es la importancia de los algoritmos en la programación?",
                answerd: "Los algoritmos son fundamentales en la programación porque permiten estructurar la lógica necesaria para resolver problemas, optimizar recursos y garantizar la eficiencia del software.",
                keywords: ["importancia", "eficiencia", "problemas", "lógica"]
            },
            {
                question: "¿Qué es la complejidad algorítmica?",
                answerd: "La complejidad algorítmica mide los recursos que requiere un algoritmo (como tiempo y memoria) en función del tamaño de la entrada. Se expresa comúnmente usando notación Big O.",
                keywords: ["complejidad", "big o", "rendimiento", "eficiencia"]
            },
            {
                question: "¿Qué es un algoritmo de ordenamiento?",
                answerd: "Es un algoritmo diseñado para organizar una colección de elementos en un cierto orden (ascendente o descendente). Ejemplos incluyen Bubble Sort, Quick Sort y Merge Sort.",
                keywords: ["ordenamiento", "bubble sort", "quick sort", "merge sort"]
            },
            {
                question: "¿Qué es la recursividad en algoritmos?",
                answerd: "La recursividad es una técnica donde una función se llama a sí misma para resolver subproblemas más pequeños de un problema general. Es común en algoritmos como factorial o Fibonacci.",
                keywords: ["recursividad", "función recursiva", "factorial", "fibonacci"]
            }
        ]
    }
]

const Astronomia = {

}

const Cultura_friky = {

}

const Deportes = {

}

const Artes = {

}

const Anatomia = {

}

const Tecnologia = {

}

const Automoviles = {

}

const Biologia = {

}

const Cultura_mexicana = {

}