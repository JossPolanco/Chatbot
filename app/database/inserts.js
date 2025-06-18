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
        subtheme: "etica",
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
        subtheme: "existencialismo",
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
        subtheme: "nihilismo",
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
        subtheme: "filosofia_moral",
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
        subtheme: "estetica",
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
        subtheme: "realidad",
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
        subtheme: "metafisica",
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
        subtheme: "conceptos_basicos",
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
        subtheme: "condicionales",
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
        subtheme: "bucles",
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
        subtheme: "conceptos_backend",
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
        subtheme: "frontend",
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
        subtheme: "bases_datos",
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
        subtheme: "algoritmos",
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

const Astronomia = [
    {
        subtheme: "nebulosas",
        title: "Nebulosas",
        description: "Este subtema trata sobre las nebulosas, sus tipos, composición y el papel que juegan en la formación estelar.",
        questions: [
            {
                question: "¿Qué es una nebulosa?",
                answerd: "Una nebulosa es una gran nube de gas y polvo en el espacio, donde pueden formarse nuevas estrellas. Algunas nebulosas también son restos de estrellas que han explotado.",
                keywords: ["nebulosa", "gas", "polvo", "formación estelar", "explosión estelar"]
            },
            {
                question: "¿Qué tipos de nebulosas existen?",
                answerd: "Existen varios tipos: nebulosas de emisión (brillan por la energía de estrellas cercanas), de reflexión (reflejan la luz), oscuras (bloquean la luz) y planetarias (restos de estrellas moribundas).",
                keywords: ["tipos de nebulosas", "emisión", "reflexión", "planetarias", "oscuras"]
            },
            {
                question: "¿Dónde se encuentran las nebulosas?",
                answerd: "Las nebulosas se encuentran dispersas por toda la galaxia, principalmente en las regiones donde se están formando nuevas estrellas, como los brazos espirales de la Vía Láctea.",
                keywords: ["ubicación nebulosas", "vía láctea", "brazos espirales"]
            },
            {
                question: "¿Qué es la Nebulosa de Orión?",
                answerd: "La Nebulosa de Orión es una de las más brillantes y cercanas a la Tierra. Se encuentra en la constelación de Orión y es una región activa de formación estelar.",
                keywords: ["nebulosa de orión", "orión", "formación estelar"]
            },
            {
                question: "¿Cómo se observan las nebulosas?",
                answerd: "Las nebulosas se observan con telescopios que captan luz visible, infrarroja o incluso radioondas. Las imágenes procesadas revelan colores según su composición química.",
                keywords: ["observación", "telescopio", "infrarrojo", "radio", "color"]
            }
        ]
    },
    {
        subtheme: "galaxias",
        title: "Galaxias",
        description: "Este subtema explica qué son las galaxias, sus tipos, estructura y su importancia en el universo.",
        questions: [
            {
                question: "¿Qué es una galaxia?",
                answerd: "Una galaxia es un conjunto masivo de estrellas, gas, polvo y materia oscura unidos por gravedad. Pueden contener desde millones hasta billones de estrellas.",
                keywords: ["galaxia", "estrellas", "gravedad", "materia oscura"]
            },
            {
                question: "¿Cuáles son los tipos principales de galaxias?",
                answerd: "Las galaxias se clasifican principalmente en espirales, elípticas e irregulares. Las espirales tienen brazos, las elípticas tienen forma ovalada y las irregulares no tienen forma definida.",
                keywords: ["galaxias espirales", "elípticas", "irregulares", "clasificación"]
            },
            {
                question: "¿Qué es la Vía Láctea?",
                answerd: "La Vía Láctea es la galaxia en la que se encuentra el sistema solar. Es una galaxia espiral con un diámetro de aproximadamente 100,000 años luz.",
                keywords: ["vía láctea", "sistema solar", "galaxia espiral"]
            },
            {
                question: "¿Cómo se forman las galaxias?",
                answerd: "Las galaxias se formaron a partir de nubes de gas y materia oscura que colapsaron por gravedad tras el Big Bang. Con el tiempo, estas regiones formaron estrellas y estructuras galácticas.",
                keywords: ["formación galaxias", "big bang", "gravedad", "materia oscura"]
            },
            {
                question: "¿Qué son las colisiones galácticas?",
                answerd: "Son encuentros entre galaxias donde sus campos gravitacionales interactúan. Esto puede deformarlas y desencadenar formación de estrellas. La Vía Láctea colisionará con Andrómeda en unos 4 mil millones de años.",
                keywords: ["colisiones", "andrómeda", "interacción galáctica"]
            }
        ]
    },
    {
        subtheme: "planetas",
        title: "Planetas del Sistema Solar",
        description: "Este subtema aborda qué son los planetas, su clasificación, características principales y su papel en el sistema solar.",
        questions: [
            {
                question: "¿Qué es un planeta?",
                answerd: "Un planeta es un cuerpo celeste que orbita una estrella, tiene suficiente masa para tener forma esférica y ha limpiado su órbita de otros objetos.",
                keywords: ["planeta", "órbita", "forma esférica", "definición"]
            },
            {
                question: "¿Cuántos planetas hay en el sistema solar?",
                answerd: "El sistema solar tiene ocho planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Plutón fue reclasificado como planeta enano en 2006.",
                keywords: ["planetas", "sistema solar", "plutón", "clasificación"]
            },
            {
                question: "¿Cuál es la diferencia entre planetas terrestres y gaseosos?",
                answerd: "Los planetas terrestres (Mercurio a Marte) tienen superficie sólida y son más pequeños. Los gaseosos (Júpiter a Neptuno) son más grandes y están compuestos principalmente de gases.",
                keywords: ["terrestres", "gaseosos", "tipos de planetas"]
            },
            {
                question: "¿Qué características tiene la Tierra como planeta?",
                answerd: "La Tierra tiene agua en estado líquido, atmósfera con oxígeno, clima variado y vida. Su distancia del Sol permite condiciones habitables.",
                keywords: ["tierra", "planeta habitable", "agua", "vida"]
            },
            {
                question: "¿Qué es un planeta enano?",
                answerd: "Un planeta enano es un cuerpo celeste que orbita el Sol, tiene forma esférica, pero no ha limpiado su órbita. Ejemplos: Plutón, Ceres y Eris.",
                keywords: ["planeta enano", "plutón", "órbita", "definición"]
            }
        ]
    },
    {
        subtheme: "constelaciones",
        title: "Constelaciones",
        description: "Este subtema describe qué son las constelaciones, sus tipos, origen cultural y ejemplos destacados.",
        questions: [
            {
                question: "¿Qué es una constelación?",
                answerd: "Una constelación es un grupo de estrellas que forma una figura imaginaria en el cielo nocturno, muchas veces basada en mitología o animales.",
                keywords: ["constelación", "estrellas", "figuras", "mitología"]
            },
            {
                question: "¿Cuántas constelaciones hay oficialmente?",
                answerd: "La Unión Astronómica Internacional reconoce 88 constelaciones oficiales que cubren toda la esfera celeste.",
                keywords: ["88 constelaciones", "oficiales", "cielo"]
            },
            {
                question: "¿Qué constelaciones son visibles desde el hemisferio norte?",
                answerd: "Algunas visibles desde el hemisferio norte son Orión, Casiopea, Osa Mayor, Osa Menor y Draco.",
                keywords: ["hemisferio norte", "visibilidad", "orión", "osa mayor"]
            },
            {
                question: "¿Qué constelación contiene la Estrella Polar?",
                answerd: "La Estrella Polar se encuentra en la constelación de la Osa Menor y es utilizada para ubicar el norte celeste.",
                keywords: ["estrella polar", "osa menor", "norte", "navegación"]
            },
            {
                question: "¿Para qué se usaban las constelaciones en la antigüedad?",
                answerd: "Servían como herramientas para la navegación, la agricultura y la creación de calendarios basados en el movimiento estelar.",
                keywords: ["uso antiguo", "navegación", "calendario", "agricultura"]
            }
        ]
    },
    {
        subtheme: "cometas",
        title: "Cometas",
        description: "Este subtema explora los cometas, su composición, origen y comportamiento al acercarse al Sol.",
        questions: [
            {
                question: "¿Qué es un cometa?",
                answerd: "Un cometa es un pequeño cuerpo celeste compuesto principalmente de hielo, polvo y rocas. Al acercarse al Sol, libera gas y polvo, formando una coma y una cola brillante.",
                keywords: ["cometa", "hielo", "cola", "coma", "sol"]
            },
            {
                question: "¿De dónde vienen los cometas?",
                answerd: "La mayoría provienen del Cinturón de Kuiper y de la Nube de Oort, regiones distantes del sistema solar.",
                keywords: ["origen", "cinturón de kuiper", "nube de oort"]
            },
            {
                question: "¿Cuál es el cometa más famoso?",
                answerd: "El cometa Halley es el más conocido. Es periódico y visible desde la Tierra cada 76 años aproximadamente.",
                keywords: ["cometa halley", "famoso", "visible", "periódico"]
            },
            {
                question: "¿Qué es la coma de un cometa?",
                answerd: "La coma es una nube de gas y polvo que rodea el núcleo del cometa cuando se calienta por el Sol.",
                keywords: ["coma", "nube", "gas", "núcleo"]
            },
            {
                question: "¿Qué diferencia a un cometa de un asteroide?",
                answerd: "Los cometas tienen una composición más helada y desarrollan colas cuando se acercan al Sol. Los asteroides son más rocosos y no presentan colas.",
                keywords: ["cometa vs asteroide", "composición", "cola"]
            }
        ]
    },
]

const CulturaFriky = [
    {
        subtheme: "anime",
        title: "Anime",
        description: "Este subtema explora el anime como forma de animación japonesa, su historia, géneros y relevancia cultural.",
        questions: [
            {
                question: "¿Qué es el anime?",
                answerd: "El anime es un estilo de animación originado en Japón, caracterizado por sus tramas complejas, personajes expresivos y variedad de géneros. Se produce para público infantil, adolescente y adulto.",
                keywords: ["anime", "animación japonesa", "géneros", "historia"]
            },
            {
                question: "¿Cuál es la diferencia entre anime y caricatura?",
                answerd: "Aunque ambos son animaciones, el anime suele tener narrativas más profundas, estilos visuales detallados y una fuerte carga cultural japonesa, mientras que las caricaturas suelen ser más simples y humorísticas.",
                keywords: ["diferencias", "anime vs caricatura", "estilo", "cultura japonesa"]
            },
            {
                question: "¿Cuáles son los géneros más populares en el anime?",
                answerd: "Algunos géneros populares son shōnen (acción juvenil), shōjo (romance juvenil), seinen (adultos), mecha (robots), isekai (mundos paralelos) y slice of life (vida cotidiana).",
                keywords: ["géneros anime", "shonen", "shojo", "mecha", "isekai"]
            },
            {
                question: "¿Qué impacto ha tenido el anime a nivel global?",
                answerd: "El anime ha influido fuertemente en la cultura pop global, expandiendo el interés por el idioma japonés, el cosplay, el manga y la animación como forma artística y narrativa seria.",
                keywords: ["impacto global", "cultura pop", "idioma japonés", "influencia"]
            },
            {
                question: "¿Cuáles son algunos animes considerados clásicos?",
                answerd: "Series como 'Dragon Ball', 'Naruto', 'Neon Genesis Evangelion', 'Sailor Moon' y 'Akira' son clásicos que marcaron generaciones por su historia y estilo visual.",
                keywords: ["animes clásicos", "dragon ball", "naruto", "evangelion", "akira"]
            }
        ]
    },
    {
        subtheme: "mangas",
        title: "Mangas",
        description: "Este subtema trata sobre los mangas, su estructura, publicación y relación con el anime.",
        questions: [
            {
                question: "¿Qué es un manga?",
                answerd: "Un manga es un cómic japonés que se lee de derecha a izquierda. Puede abordar diversos géneros y públicos, desde niños hasta adultos, y suele ser en blanco y negro.",
                keywords: ["manga", "cómic japonés", "lectura", "géneros"]
            },
            {
                question: "¿Cuál es la diferencia entre manga y anime?",
                answerd: "El manga es la versión impresa (cómic), mientras que el anime es la versión animada. Muchas veces, el anime se basa directamente en un manga.",
                keywords: ["manga vs anime", "adaptación", "impreso", "animado"]
            },
            {
                question: "¿Cómo se publica un manga en Japón?",
                answerd: "Primero se publica por capítulos en revistas semanales o mensuales como 'Shonen Jump'. Si es exitoso, se recopilan en tomos llamados 'tankōbon'.",
                keywords: ["publicación", "revistas", "shonen jump", "tankobon"]
            },
            {
                question: "¿Qué géneros existen dentro del manga?",
                answerd: "Hay muchos géneros: shōnen, shōjo, seinen, josei, yaoi, yuri, horror, fantasía, ciencia ficción, entre otros.",
                keywords: ["géneros manga", "shonen", "seinen", "josei", "yaoi"]
            },
            {
                question: "¿Cuáles son algunos mangas populares?",
                answerd: "'One Piece', 'Attack on Titan', 'Death Note', 'Bleach' y 'My Hero Academia' son ejemplos de mangas populares tanto en Japón como internacionalmente.",
                keywords: ["mangas populares", "one piece", "attack on titan", "death note"]
            }
        ]
    },
    {
        subtheme: "videojuegos",
        title: "Videojuegos",
        description: "Este subtema aborda la historia, géneros, impacto social y evolución de los videojuegos.",
        questions: [
            {
                question: "¿Qué es un videojuego?",
                answerd: "Un videojuego es un software interactivo que permite al usuario controlar acciones en un entorno digital, con fines de entretenimiento, educación o competencia.",
                keywords: ["videojuego", "interactivo", "software", "entretenimiento"]
            },
            {
                question: "¿Cuáles son los principales géneros de videojuegos?",
                answerd: "Entre los géneros más comunes están: acción, aventura, estrategia, deportes, simulación, RPG (juegos de rol) y shooters.",
                keywords: ["géneros videojuegos", "acción", "aventura", "RPG", "shooter"]
            },
            {
                question: "¿Cómo han influido los videojuegos en la cultura moderna?",
                answerd: "Los videojuegos se han convertido en una forma de arte, narrativa y deporte electrónico. Han influido en la música, moda, redes sociales y comunidades en línea.",
                keywords: ["influencia cultural", "eSports", "comunidad gamer", "arte digital"]
            },
            {
                question: "¿Qué consolas marcaron historia en los videojuegos?",
                answerd: "Consolas como Nintendo Entertainment System (NES), PlayStation, Xbox, y Nintendo Switch marcaron generaciones con avances gráficos e innovación.",
                keywords: ["consolas históricas", "NES", "PlayStation", "Switch", "Xbox"]
            },
            {
                question: "¿Qué es un videojuego indie?",
                answerd: "Es un juego creado por desarrolladores independientes, usualmente con recursos limitados, pero con gran creatividad e innovación, como 'Undertale' o 'Hollow Knight'.",
                keywords: ["videojuego indie", "independiente", "undertale", "hollow knight"]
            }
        ]
    },
    {
        subtheme: "cosplays",
        title: "Cosplays",
        description: "Este subtema explica qué es el cosplay, cómo se realiza y su importancia en la cultura friki.",
        questions: [
            {
                question: "¿Qué es el cosplay?",
                answerd: "Cosplay es la práctica de disfrazarse e interpretar personajes de anime, manga, videojuegos, películas u otros medios, combinando arte, actuación y creatividad.",
                keywords: ["cosplay", "disfraz", "interpretación", "personaje"]
            },
            {
                question: "¿Qué materiales se usan para hacer un cosplay?",
                answerd: "Se usan telas, espumas EVA, termoplásticos como Worbla, maquillaje, pelucas, pintura y otros elementos hechos a mano o comprados.",
                keywords: ["materiales", "cosplay", "worbla", "espuma eva", "maquillaje"]
            },
            {
                question: "¿Qué tipos de eventos de cosplay existen?",
                answerd: "Existen concursos en convenciones, pasarelas, sesiones de fotos temáticas y competencias internacionales como el World Cosplay Summit.",
                keywords: ["eventos cosplay", "convenciones", "concursos", "world cosplay summit"]
            },
            {
                question: "¿Cuál es la historia del cosplay?",
                answerd: "Aunque tiene antecedentes en la ciencia ficción occidental, el término y práctica moderna se popularizó en Japón en los 70s con el auge del anime.",
                keywords: ["historia cosplay", "japón", "origen", "ciencia ficción"]
            },
            {
                question: "¿Es necesario parecerse físicamente al personaje para hacer cosplay?",
                answerd: "No. El cosplay celebra la creatividad y la pasión, sin importar género, complexión o raza. Cualquier persona puede interpretar al personaje que desee.",
                keywords: ["cosplay libre", "inclusividad", "personaje", "pasión"]
            }
        ]
    },
    {
        subtheme: "multiversos",
        title: "Multiversos",
        description: "Este subtema explora el concepto de multiverso dentro de la ciencia ficción, cómics y medios relacionados con la cultura friki.",
        questions: [
            {
                question: "¿Qué es un multiverso?",
                answerd: "El multiverso es una teoría que plantea la existencia de múltiples universos paralelos coexistiendo con el nuestro, cada uno con diferentes versiones de eventos, personajes o leyes físicas.",
                keywords: ["multiverso", "universos paralelos", "ficción", "realidades alternativas"]
            },
            {
                question: "¿Qué papel juegan los multiversos en los cómics?",
                answerd: "Los multiversos permiten a las editoriales crear líneas narrativas alternativas, reiniciar historias o combinar universos diferentes, como en DC Comics con 'Crisis en Tierras Infinitas'.",
                keywords: ["cómics", "DC", "Crisis en Tierras Infinitas", "realidades múltiples"]
            },
            {
                question: "¿Cómo se representan los multiversos en el cine?",
                answerd: "En películas como 'Doctor Strange en el Multiverso de la Locura' o 'Spider-Man: No Way Home', los multiversos sirven para conectar diferentes franquicias y explorar versiones alternativas de personajes.",
                keywords: ["cine", "Marvel", "Doctor Strange", "Spider-Man", "universos alternos"]
            },
            {
                question: "¿Cuál es la diferencia entre universo alterno y multiverso?",
                answerd: "Un universo alterno es solo una variación del universo principal, mientras que el multiverso es el conjunto total de todos esos universos alternos coexistiendo.",
                keywords: ["universo alterno", "multiverso", "diferencias", "dimensiones"]
            },
            {
                question: "¿Qué series o animes tratan sobre multiversos?",
                answerd: "Series como 'Steins;Gate', 'Rick and Morty' y 'Dragon Ball Super' tratan el concepto de líneas temporales múltiples y realidades alternas como parte central de su trama.",
                keywords: ["series multiverso", "Steins;Gate", "Rick and Morty", "Dragon Ball Super"]
            }
        ]
    },
    {
        subtheme: "comics",
        title: "Cómics",
        description: "Este subtema cubre la historia, tipos y evolución de los cómics en la cultura popular.",
        questions: [
            {
                question: "¿Qué es un cómic?",
                answerd: "Un cómic es una forma de arte secuencial que combina ilustraciones y texto para contar una historia. Puede publicarse en revistas, libros o en formato digital.",
                keywords: ["cómic", "historieta", "arte secuencial", "formato"]
            },
            {
                question: "¿Cuál es la diferencia entre cómic, manga y novela gráfica?",
                answerd: "El cómic generalmente se refiere a obras occidentales, el manga es de origen japonés y la novela gráfica suele tener un enfoque más literario, con historias largas y profundas.",
                keywords: ["diferencias", "cómic vs manga", "novela gráfica"]
            },
            {
                question: "¿Cuáles son las editoriales más importantes de cómics?",
                answerd: "Marvel y DC Comics son las editoriales más reconocidas, aunque también existen otras como Dark Horse, Image Comics y Valiant.",
                keywords: ["editoriales", "Marvel", "DC", "Dark Horse", "Image Comics"]
            },
            {
                question: "¿Qué superhéroes famosos surgieron de los cómics?",
                answerd: "Superhéroes como Spider-Man, Batman, Superman, Iron Man, Wonder Woman y los X-Men surgieron originalmente en cómics y luego se adaptaron a otros medios.",
                keywords: ["superhéroes", "Spider-Man", "Batman", "X-Men", "origen"]
            },
            {
                question: "¿Qué impacto han tenido los cómics en la cultura pop?",
                answerd: "Los cómics han influido en películas, series, videojuegos y moda. Además, han sido medios para explorar temas sociales, políticos y culturales a lo largo del tiempo.",
                keywords: ["cultura pop", "influencia", "impacto", "medios"]
            }
        ]
    }
]

const Deportes = [
    {
        subtheme: "futbol",
        title: "Fútbol",
        description: "El fútbol es uno de los deportes más populares del mundo, jugado entre dos equipos de once jugadores con un balón.",
        questions: [
            {
                question: "¿Qué es el fútbol?",
                answerd: "El fútbol es un deporte de equipo que se juega entre dos conjuntos de once jugadores cada uno. El objetivo es marcar más goles que el oponente en un campo rectangular con porterías en ambos extremos.",
                keywords: ["fútbol", "deporte", "balón", "equipo", "goles"]
            },
            {
                question: "¿Cuáles son las reglas básicas del fútbol?",
                answerd: "Las reglas básicas del fútbol incluyen que el balón no puede ser tocado con las manos (excepto el portero), se debe evitar el fuera de juego, y se debe respetar la duración del partido que consta de dos tiempos de 45 minutos.",
                keywords: ["reglas", "fútbol", "fuera de juego", "tiempo", "portero"]
            },
            {
                question: "¿Cuáles son las posiciones principales en un equipo de fútbol?",
                answerd: "Las posiciones incluyen portero, defensas, mediocampistas y delanteros. Cada posición tiene funciones específicas dentro del campo para contribuir al juego colectivo.",
                keywords: ["posiciones", "portero", "delantero", "mediocampista", "defensa"]
            },
            {
                question: "¿Cuál es la historia del fútbol?",
                answerd: "El fútbol moderno surgió en Inglaterra en el siglo XIX. Desde entonces, ha evolucionado hasta convertirse en un fenómeno global con competiciones como la Copa del Mundo y las ligas profesionales.",
                keywords: ["historia", "fútbol", "Inglaterra", "origen", "Copa del Mundo"]
            },
            {
                question: "¿Qué habilidades se necesitan para jugar fútbol?",
                answerd: "Se requieren habilidades como control del balón, pase, tiro, velocidad, resistencia física y trabajo en equipo para ser eficaz en el campo.",
                keywords: ["habilidades", "control del balón", "pase", "velocidad", "resistencia"]
            }
        ]
    },
    {
        subtheme: "basquetbol",
        title: "Básquetbol",
        description: "El básquetbol es un deporte de equipo en el que se intenta encestar el balón en una canasta elevada.",
        questions: [
            {
                question: "¿Qué es el básquetbol?",
                answerd: "El básquetbol es un deporte que se juega entre dos equipos de cinco jugadores, cuyo objetivo es encestar el balón en una canasta situada a 3.05 metros del suelo.",
                keywords: ["básquetbol", "canasta", "balón", "equipo", "deporte"]
            },
            {
                question: "¿Cuáles son las reglas básicas del básquetbol?",
                answerd: "Algunas reglas básicas incluyen no caminar sin botar el balón (pasos), no hacer contacto físico excesivo (falta) y respetar el reloj de posesión.",
                keywords: ["reglas", "básquetbol", "pasos", "faltas", "posesión"]
            },
            {
                question: "¿Cuáles son las posiciones en el básquetbol?",
                answerd: "Las posiciones principales son base, escolta, alero, ala-pívot y pívot, cada una con funciones ofensivas y defensivas específicas.",
                keywords: ["posiciones", "base", "pívot", "escolta", "alero"]
            },
            {
                question: "¿Quién inventó el básquetbol y cuándo?",
                answerd: "El básquetbol fue inventado por James Naismith en 1891 en Springfield, Massachusetts, como una actividad para mantener a sus alumnos activos durante el invierno.",
                keywords: ["James Naismith", "historia", "básquetbol", "origen", "1891"]
            },
            {
                question: "¿Qué habilidades se requieren en el básquetbol?",
                answerd: "Son necesarias habilidades como driblar, lanzar, pasar, saltar y tener buena visión de juego para destacar en este deporte.",
                keywords: ["habilidades", "driblar", "lanzar", "pasar", "básquetbol"]
            }
        ]
    },
    {
        subtheme: "basebol",
        title: "Béisbol",
        description: "El béisbol es un deporte de bate y pelota en el que dos equipos se enfrentan para anotar carreras.",
        questions: [
            {
                question: "¿Qué es el béisbol?",
                answerd: "El béisbol es un deporte en el que dos equipos de nueve jugadores se alternan entre batear y defender con el objetivo de anotar carreras.",
                keywords: ["béisbol", "carrera", "bateo", "equipo", "pelota"]
            },
            {
                question: "¿Cómo se anota en el béisbol?",
                answerd: "Se anota una carrera cuando un jugador batea y corre exitosamente por las cuatro bases sin ser eliminado por la defensa.",
                keywords: ["anotar", "carrera", "bases", "béisbol", "reglas"]
            },
            {
                question: "¿Cuáles son las posiciones en el béisbol?",
                answerd: "Las posiciones incluyen lanzador, receptor, jugadores de cuadro (primera, segunda, tercera base, campocorto) y jardineros (izquierdo, central y derecho).",
                keywords: ["posiciones", "lanzador", "receptor", "cuadro", "jardinero"]
            },
            {
                question: "¿Cuál es el origen del béisbol?",
                answerd: "El béisbol moderno tiene sus raíces en Estados Unidos en el siglo XIX, aunque deportes similares existieron anteriormente en Europa.",
                keywords: ["origen", "béisbol", "Estados Unidos", "historia", "siglo XIX"]
            },
            {
                question: "¿Qué habilidades se requieren para jugar béisbol?",
                answerd: "Se necesita coordinación, reflejos rápidos, fuerza para batear, precisión para lanzar y buena estrategia de equipo.",
                keywords: ["habilidades", "batear", "lanzar", "estrategia", "béisbol"]
            }
        ]
    },
    {
        subtheme: "americano",
        title: "Fútbol Americano",
        description: "El fútbol americano es un deporte de contacto en el que dos equipos intentan avanzar un balón ovalado hasta la zona de anotación.",
        questions: [
            {
                question: "¿Qué es el fútbol americano?",
                answerd: "Es un deporte de equipo que se juega con un balón ovalado, donde los equipos intentan avanzar territorialmente para anotar touchdowns en la zona de anotación del oponente.",
                keywords: ["fútbol americano", "touchdown", "balón ovalado", "deporte", "equipo"]
            },
            {
                question: "¿Cómo se puntúa en el fútbol americano?",
                answerd: "Se puede anotar un touchdown (6 puntos), un gol de campo (3 puntos), una conversión (1 o 2 puntos) o un safety (2 puntos).",
                keywords: ["puntuar", "touchdown", "gol de campo", "puntos", "safety"]
            },
            {
                question: "¿Cuáles son las posiciones clave en el fútbol americano?",
                answerd: "Incluyen mariscal de campo (quarterback), corredores (running backs), receptores (wide receivers), linieros ofensivos y defensivos, entre otros.",
                keywords: ["quarterback", "posiciones", "corredor", "receptor", "liniero"]
            },
            {
                question: "¿Cuál es la historia del fútbol americano?",
                answerd: "Se desarrolló en Estados Unidos a finales del siglo XIX, como una evolución del rugby y el fútbol europeo.",
                keywords: ["historia", "fútbol americano", "Estados Unidos", "origen", "rugby"]
            },
            {
                question: "¿Qué equipo ha sido históricamente exitoso en la NFL?",
                answerd: "Equipos como los New England Patriots, Pittsburgh Steelers y Dallas Cowboys han tenido múltiples campeonatos y gran impacto en la NFL.",
                keywords: ["NFL", "Patriots", "Steelers", "Cowboys", "campeonatos"]
            }
        ]
    },
    {
        subtheme: "triatlon",
        title: "Triatlón",
        description: "El triatlón es una competencia que combina natación, ciclismo y carrera en un mismo evento.",
        questions: [
            {
                question: "¿Qué es el triatlón?",
                answerd: "El triatlón es una disciplina deportiva que combina tres actividades físicas: natación, ciclismo y carrera a pie, realizadas en secuencia sin pausas.",
                keywords: ["triatlón", "natación", "ciclismo", "carrera", "deporte"]
            },
            {
                question: "¿Cuáles son las distancias comunes en un triatlón?",
                answerd: "Las distancias varían según el tipo de triatlón: sprint (750m natación, 20km ciclismo, 5km carrera), olímpico, medio Ironman y Ironman completo.",
                keywords: ["distancias", "sprint", "Ironman", "olímpico", "triatlón"]
            },
            {
                question: "¿Cómo se prepara un atleta para un triatlón?",
                answerd: "Se entrena resistencia cardiovascular, técnica en cada disciplina, nutrición específica y se practican transiciones rápidas entre segmentos.",
                keywords: ["entrenamiento", "resistencia", "transiciones", "nutrición", "triatlón"]
            },
            {
                question: "¿Cuál es el origen del triatlón?",
                answerd: "El triatlón moderno se originó en San Diego, California, en los años 70 como un entrenamiento cruzado entre disciplinas.",
                keywords: ["origen", "triatlón", "San Diego", "años 70", "historia"]
            },
            {
                question: "¿Qué equipo se necesita para competir en un triatlón?",
                answerd: "Se requiere traje de baño o neopreno, bicicleta con casco, calzado deportivo, gafas para natación y a veces reloj GPS.",
                keywords: ["equipo", "bicicleta", "traje", "neopreno", "casco", "calzado"]
            }
        ]
    }
]

const Artes = [
    {
        subtheme: "dibujo",
        title: "Dibujo",
        description: "El dibujo es una forma básica y expresiva de arte visual que utiliza líneas y trazos para representar ideas, objetos o emociones.",
        questions: [
            {
                question: "¿Qué es el dibujo?",
                answerd: "El dibujo es una disciplina artística que consiste en representar gráficamente objetos, figuras o ideas sobre una superficie mediante trazos, principalmente con lápiz, carbón, tinta u otros medios.",
                keywords: ["dibujo", "arte", "trazo", "representación", "lápiz"]
            },
            {
                question: "¿Cuáles son las técnicas comunes de dibujo?",
                answerd: "Entre las técnicas más comunes están el dibujo a lápiz, carbón, tinta, pastel y bolígrafo. Cada una ofrece distintos niveles de detalle, textura y expresión.",
                keywords: ["técnicas", "lápiz", "carbón", "pastel", "tinta"]
            },
            {
                question: "¿Qué materiales se utilizan para dibujar?",
                answerd: "Los materiales incluyen lápices de grafito, papel, borradores, reglas, compases, carboncillo, plumillas y papel especializado según la técnica utilizada.",
                keywords: ["materiales", "papel", "grafito", "carboncillo", "instrumentos"]
            },
            {
                question: "¿Cuál es la diferencia entre dibujo técnico y artístico?",
                answerd: "El dibujo técnico se centra en la precisión y se usa en ingeniería y arquitectura, mientras que el artístico busca la expresión personal y estética.",
                keywords: ["dibujo técnico", "dibujo artístico", "precisión", "expresión", "arquitectura"]
            },
            {
                question: "¿Cuál es la importancia del dibujo en otras disciplinas?",
                answerd: "El dibujo es fundamental en diseño gráfico, moda, arquitectura, animación y muchas otras áreas creativas y científicas como la anatomía y la botánica.",
                keywords: ["importancia", "interdisciplinario", "diseño", "arquitectura", "moda"]
            }
        ]
    },
    {
        subtheme: "escultura",
        title: "Escultura",
        description: "La escultura es una forma tridimensional del arte que consiste en modelar, tallar o ensamblar materiales para crear formas visuales.",
        questions: [
            {
                question: "¿Qué es la escultura?",
                answerd: "La escultura es una disciplina artística que consiste en crear formas tridimensionales a partir de materiales como piedra, madera, arcilla, metal o resina.",
                keywords: ["escultura", "arte tridimensional", "modelado", "materiales", "forma"]
            },
            {
                question: "¿Cuáles son los tipos de escultura?",
                answerd: "Existen esculturas de bulto redondo (libres de todos lados), relieves (alto y bajo relieve) y esculturas cinéticas o móviles que integran movimiento.",
                keywords: ["bulto redondo", "relieve", "alto relieve", "cinética", "tipos"]
            },
            {
                question: "¿Qué materiales se utilizan en escultura?",
                answerd: "Se emplean piedra (como mármol), madera, bronce, arcilla, hierro, resina y materiales reciclados o contemporáneos.",
                keywords: ["materiales", "mármol", "bronce", "madera", "arcilla"]
            },
            {
                question: "¿Qué diferencia hay entre escultura clásica y moderna?",
                answerd: "La escultura clásica busca proporción, armonía y realismo, mientras que la moderna experimenta con formas abstractas y materiales no tradicionales.",
                keywords: ["clásica", "moderna", "realismo", "abstracta", "diferencias"]
            },
            {
                question: "¿Cuál es la importancia cultural de la escultura?",
                answerd: "La escultura ha sido usada históricamente para expresar creencias religiosas, conmemorar eventos o representar figuras importantes en muchas culturas.",
                keywords: ["cultura", "monumentos", "religión", "historia", "expresión"]
            }
        ]
    },
    {
        subtheme: "musica",
        title: "Música",
        description: "La música es una manifestación artística basada en la combinación de sonidos y silencios con fines estéticos, expresivos y comunicativos.",
        questions: [
            {
                question: "¿Qué es la música?",
                answerd: "La música es el arte de organizar sonidos y silencios en el tiempo, mediante elementos como ritmo, melodía, armonía y timbre.",
                keywords: ["música", "arte", "sonido", "ritmo", "melodía"]
            },
            {
                question: "¿Cuáles son los elementos básicos de la música?",
                answerd: "Los elementos fundamentales son ritmo, melodía, armonía, timbre, dinámica y forma musical.",
                keywords: ["elementos", "ritmo", "armonía", "melodía", "timbre"]
            },
            {
                question: "¿Qué tipos de música existen?",
                answerd: "Existen múltiples géneros como música clásica, jazz, rock, pop, electrónica, folclórica, entre muchos otros.",
                keywords: ["géneros", "clásica", "jazz", "rock", "pop"]
            },
            {
                question: "¿Cómo influye la música en la sociedad?",
                answerd: "La música influye en la identidad cultural, expresión emocional, protesta social, entretenimiento y desarrollo cognitivo.",
                keywords: ["sociedad", "cultura", "emociones", "protesta", "cognición"]
            },
            {
                question: "¿Qué instrumentos se usan en la música?",
                answerd: "Los instrumentos se clasifican en cuerdas, viento, percusión y electrónicos. Ejemplos incluyen el piano, la guitarra, la flauta y la batería.",
                keywords: ["instrumentos", "cuerdas", "viento", "percusión", "electrónicos"]
            }
        ]
    },
    {
        subtheme: "expresionismo",
        title: "Expresionismo",
        description: "Movimiento artístico centrado en la expresión intensa de emociones subjetivas, a menudo con distorsión y colores vivos.",
        questions: [
            {
                question: "¿Qué es el expresionismo?",
                answerd: "El expresionismo es un movimiento artístico que busca representar emociones internas y subjetivas mediante formas distorsionadas, colores intensos y temas dramáticos.",
                keywords: ["expresionismo", "emoción", "subjetividad", "colores", "distorsión"]
            },
            {
                question: "¿Cuándo surgió el expresionismo?",
                answerd: "El expresionismo surgió a inicios del siglo XX, principalmente en Alemania, como respuesta a los cambios sociales y culturales de la época.",
                keywords: ["origen", "siglo XX", "Alemania", "movimiento", "arte"]
            },
            {
                question: "¿Qué artistas destacaron en el expresionismo?",
                answerd: "Destacan artistas como Edvard Munch, Egon Schiele, Wassily Kandinsky y Ernst Ludwig Kirchner.",
                keywords: ["artistas", "Munch", "Kandinsky", "Schiele", "Kirchner"]
            },
            {
                question: "¿Qué temas aborda el expresionismo?",
                answerd: "Aborda angustia existencial, miedo, alienación, crítica social y conflictos internos del ser humano.",
                keywords: ["temas", "miedo", "alienación", "existencial", "crítica"]
            },
            {
                question: "¿Qué lo diferencia de otros movimientos?",
                answerd: "A diferencia del impresionismo, el expresionismo no busca representar la realidad objetiva sino la emoción interna del artista.",
                keywords: ["comparación", "impresionismo", "realidad", "emocional", "subjetivo"]
            }
        ]
    },
    {
        subtheme: "surrealismo",
        title: "Surrealismo",
        description: "Movimiento artístico y literario que explora lo irracional, el inconsciente y los sueños a través de imágenes oníricas.",
        questions: [
            {
                question: "¿Qué es el surrealismo?",
                answerd: "El surrealismo es un movimiento artístico que busca liberar la mente de la lógica, explorando los sueños, lo irracional y lo inconsciente.",
                keywords: ["surrealismo", "inconsciente", "sueños", "arte", "irracional"]
            },
            {
                question: "¿Quién fundó el surrealismo?",
                answerd: "El surrealismo fue fundado por André Breton en 1924 con la publicación del 'Manifiesto Surrealista'.",
                keywords: ["André Breton", "fundador", "manifiesto", "1924", "historia"]
            },
            {
                question: "¿Qué artistas representan el surrealismo?",
                answerd: "Figuras clave incluyen Salvador Dalí, René Magritte, Max Ernst y Joan Miró.",
                keywords: ["Dalí", "Magritte", "Ernst", "Miró", "artistas"]
            },
            {
                question: "¿Qué técnicas se usan en el surrealismo?",
                answerd: "Se utilizan el automatismo, el collage, la yuxtaposición y la manipulación de imágenes oníricas.",
                keywords: ["técnicas", "automatismo", "collage", "onírico", "yuxtaposición"]
            },
            {
                question: "¿Cómo influenció el surrealismo a otras artes?",
                answerd: "Influyó en el cine, la literatura, la fotografía y el diseño, promoviendo la libertad creativa y la expresión subconsciente.",
                keywords: ["influencia", "cine", "literatura", "fotografía", "subconsciente"]
            }
        ]
    },
    {
        subtheme: "cubismo",
        title: "Cubismo",
        description: "Movimiento artístico revolucionario que fragmenta y reconfigura las formas para representar múltiples perspectivas en una sola imagen.",
        questions: [
            {
                question: "¿Qué es el cubismo?",
                answerd: "El cubismo es un movimiento artístico que surgió a comienzos del siglo XX y se caracteriza por la descomposición de las formas en figuras geométricas, mostrando varios puntos de vista simultáneamente.",
                keywords: ["cubismo", "formas geométricas", "fragmentación", "arte moderno", "vanguardia"]
            },
            {
                question: "¿Quiénes fueron los principales exponentes del cubismo?",
                answerd: "Pablo Picasso y Georges Braque son considerados los padres del cubismo, quienes desarrollaron este estilo entre 1907 y 1914.",
                keywords: ["Picasso", "Braque", "cubismo analítico", "cubismo sintético", "artistas"]
            },
            {
                question: "¿Cuáles son las fases del cubismo?",
                answerd: "El cubismo se divide en dos fases principales: el cubismo analítico (más abstracto y monocromático) y el cubismo sintético (más colorido y decorativo, con elementos de collage).",
                keywords: ["cubismo analítico", "cubismo sintético", "fases", "estilos", "evolución"]
            },
            {
                question: "¿Qué características definen al cubismo?",
                answerd: "Se caracteriza por la fragmentación de figuras, el uso de formas geométricas, la ausencia de perspectiva tradicional y la representación de múltiples puntos de vista.",
                keywords: ["características", "fragmentación", "geometría", "perspectiva", "multiplicidad"]
            },
            {
                question: "¿Cómo influyó el cubismo en otros movimientos?",
                answerd: "El cubismo influyó en el futurismo, el arte abstracto, el constructivismo y abrió el camino hacia el modernismo en diversas disciplinas.",
                keywords: ["influencia", "modernismo", "futurismo", "constructivismo", "abstracto"]
            }
        ]
    },
    {
        subtheme: "oleo",
        title: "Óleo",
        description: "Técnica pictórica que utiliza pigmentos mezclados con aceites para lograr colores intensos, textura y durabilidad.",
        questions: [
            {
                question: "¿Qué es la pintura al óleo?",
                answerd: "Es una técnica artística que consiste en mezclar pigmentos con aceites secantes como el de linaza para crear una pintura espesa, duradera y con acabado brillante.",
                keywords: ["óleo", "pintura", "técnica", "aceites", "pigmentos"]
            },
            {
                question: "¿Cuáles son las ventajas del óleo frente a otras técnicas?",
                answerd: "Ofrece gran intensidad de color, posibilidad de trabajar con capas, correcciones, mezclas suaves y una alta durabilidad.",
                keywords: ["ventajas", "color", "durabilidad", "corrección", "capas"]
            },
            {
                question: "¿Qué materiales se necesitan para pintar al óleo?",
                answerd: "Se requiere óleo (tubos de pigmento), pinceles, espátulas, lienzos, disolventes (como trementina), barniz y paleta.",
                keywords: ["materiales", "pinceles", "lienzo", "disolvente", "barniz"]
            },
            {
                question: "¿Cómo se aplica la técnica de veladura en óleo?",
                answerd: "La veladura consiste en aplicar capas finas y transparentes de color para modificar el tono y crear profundidad visual.",
                keywords: ["veladura", "capas", "transparencia", "profundidad", "óptica"]
            },
            {
                question: "¿Qué artistas destacaron en el uso del óleo?",
                answerd: "Grandes maestros como Leonardo da Vinci, Rembrandt, Van Gogh y Velázquez utilizaron esta técnica magistralmente.",
                keywords: ["Leonardo", "Rembrandt", "Van Gogh", "Velázquez", "clásicos"]
            }
        ]
    },
    {
        subtheme: "muralismo",
        title: "Muralismo",
        description: "Movimiento artístico centrado en la creación de murales con contenido social y político, generalmente en espacios públicos.",
        questions: [
            {
                question: "¿Qué es el muralismo?",
                answerd: "El muralismo es una corriente artística que utiliza los muros y paredes como lienzo para representar temas sociales, políticos o históricos, con el fin de educar e impactar al público.",
                keywords: ["muralismo", "murales", "arte público", "temas sociales", "educación"]
            },
            {
                question: "¿Dónde y cuándo surgió el muralismo?",
                answerd: "El muralismo moderno surgió en México tras la Revolución Mexicana, entre los años 1920 y 1930, como una forma de educación popular.",
                keywords: ["México", "Revolución", "1920", "origen", "arte público"]
            },
            {
                question: "¿Qué artistas representan el muralismo mexicano?",
                answerd: "Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros son los principales exponentes del muralismo mexicano.",
                keywords: ["Rivera", "Orozco", "Siqueiros", "muralistas", "mexicanos"]
            },
            {
                question: "¿Cuál es la función del mural en la sociedad?",
                answerd: "El mural busca transmitir mensajes accesibles al pueblo, promoviendo la conciencia social, la identidad cultural y el cambio político.",
                keywords: ["función", "conciencia", "educación", "pueblo", "mensaje"]
            },
            {
                question: "¿Cómo influenció el muralismo en el arte contemporáneo?",
                answerd: "Inspiró movimientos como el arte urbano y el grafiti, y reforzó el uso del arte como herramienta de activismo visual.",
                keywords: ["influencia", "grafiti", "arte urbano", "activismo", "visual"]
            }
        ]
    },
    {
        subtheme: "brutalismo",
        title: "Brutalismo",
        description: "Estilo arquitectónico caracterizado por el uso de concreto expuesto, formas monumentales y una estética funcionalista y austera.",
        questions: [
            {
                question: "¿Qué es el brutalismo?",
                answerd: "El brutalismo es un estilo arquitectónico surgido en la década de 1950 que se caracteriza por el uso de hormigón visto, estructuras masivas y un enfoque funcional sin ornamentos.",
                keywords: ["brutalismo", "arquitectura", "concreto", "funcionalismo", "estructura"]
            },
            {
                question: "¿Por qué se llama brutalismo?",
                answerd: "El término proviene del francés 'béton brut' (hormigón crudo), utilizado por Le Corbusier, uno de sus principales impulsores.",
                keywords: ["nombre", "béton brut", "Le Corbusier", "concreto", "origen"]
            },
            {
                question: "¿Cuáles son las características del brutalismo?",
                answerd: "Se caracteriza por el uso de materiales crudos, formas geométricas pesadas, repetición modular y ausencia de decoración.",
                keywords: ["características", "materiales", "pesadez", "modular", "austeridad"]
            },
            {
                question: "¿Dónde se encuentran ejemplos notables de brutalismo?",
                answerd: "Se encuentran en edificios gubernamentales, universidades y complejos habitacionales en Europa, América y Asia.",
                keywords: ["edificios", "ejemplos", "universidades", "gobierno", "internacional"]
            },
            {
                question: "¿Cómo es percibido el brutalismo hoy en día?",
                answerd: "Es admirado por su autenticidad y monumentalidad, aunque también criticado por su apariencia fría y deshumanizada.",
                keywords: ["percepción", "crítica", "admiración", "controversia", "monumental"]
            }
        ]
    }
]

const Anatomia = [
    {
        subtheme: "sistema_nervioso_central",
        title: "Sistema Nervioso Central",
        description: "Comprende el cerebro y la médula espinal, y se encarga de procesar la información y coordinar la actividad del cuerpo.",
        questions: [
            {
                question: "¿Qué es el sistema nervioso central?",
                answerd: "Es la parte del sistema nervioso compuesta por el cerebro y la médula espinal. Se encarga de recibir, procesar y enviar información a todo el cuerpo para regular sus funciones.",
                keywords: ["sistema nervioso central", "cerebro", "médula espinal", "funciones"]
            },
            {
                question: "¿Cuáles son las funciones principales del cerebro?",
                answerd: "El cerebro controla funciones como el pensamiento, el aprendizaje, las emociones, la memoria y el movimiento voluntario.",
                keywords: ["funciones del cerebro", "pensamiento", "memoria", "movimiento"]
            },
            {
                question: "¿Qué papel juega la médula espinal en el cuerpo?",
                answerd: "La médula espinal transmite señales entre el cerebro y el resto del cuerpo, y también controla algunos reflejos.",
                keywords: ["médula espinal", "transmisión de señales", "reflejos"]
            },
            {
                question: "¿Cómo se protege el sistema nervioso central?",
                answerd: "Está protegido por los huesos del cráneo y la columna vertebral, además de las meninges y el líquido cefalorraquídeo.",
                keywords: ["protección SNC", "meninges", "líquido cefalorraquídeo", "cráneo"]
            },
            {
                question: "¿Qué enfermedades pueden afectar al sistema nervioso central?",
                answerd: "Algunas enfermedades incluyen la esclerosis múltiple, el Alzheimer, el Parkinson y los accidentes cerebrovasculares.",
                keywords: ["enfermedades del SNC", "Alzheimer", "Parkinson", "esclerosis"]
            }
        ]
    },
    {
        subtheme: "sistema_nervioso_periferico",
        title: "Sistema Nervioso Periférico",
        description: "Conecta el sistema nervioso central con el resto del cuerpo mediante nervios que envían y reciben señales.",
        questions: [
            {
                question: "¿Qué es el sistema nervioso periférico?",
                answerd: "Es la parte del sistema nervioso que se encuentra fuera del cerebro y la médula espinal, y conecta al SNC con el resto del cuerpo.",
                keywords: ["sistema nervioso periférico", "SNP", "nervios", "conexión"]
            },
            {
                question: "¿Qué funciones tiene el sistema nervioso periférico?",
                answerd: "Transmite señales motoras y sensoriales, permite la percepción del entorno y controla funciones automáticas del cuerpo.",
                keywords: ["funciones SNP", "señales motoras", "sensorial", "percepción"]
            },
            {
                question: "¿Cómo se divide el sistema nervioso periférico?",
                answerd: "Se divide en sistema nervioso somático (control voluntario) y autónomo (control involuntario).",
                keywords: ["divisiones SNP", "somático", "autónomo", "voluntario", "involuntario"]
            },
            {
                question: "¿Qué son los nervios craneales y espinales?",
                answerd: "Los nervios craneales emergen del cerebro y los espinales de la médula espinal; ambos llevan señales sensoriales y motoras.",
                keywords: ["nervios craneales", "nervios espinales", "sensorial", "motora"]
            },
            {
                question: "¿Qué enfermedades afectan al sistema nervioso periférico?",
                answerd: "Incluyen neuropatías periféricas, síndrome de Guillain-Barré y daños por diabetes o infecciones.",
                keywords: ["neuropatías", "síndrome Guillain-Barré", "daño nervioso", "diabetes"]
            }
        ]
    },
    {
        subtheme: "adn",
        title: "ADN (Ácido Desoxirribonucleico)",
        description: "Molécula que contiene la información genética usada en el desarrollo y funcionamiento de todos los seres vivos.",
        questions: [
            {
                question: "¿Qué es el ADN?",
                answerd: "El ADN es una molécula que contiene el material genético necesario para el desarrollo, funcionamiento y reproducción de los seres vivos.",
                keywords: ["ADN", "material genético", "molécula", "información genética"]
            },
            {
                question: "¿Cuál es la estructura del ADN?",
                answerd: "Está formado por dos cadenas enrolladas en forma de doble hélice, compuestas por nucleótidos con bases nitrogenadas (A, T, C, G).",
                keywords: ["estructura ADN", "doble hélice", "bases nitrogenadas", "nucleótidos"]
            },
            {
                question: "¿Qué función tiene el ADN?",
                answerd: "Codifica las instrucciones para fabricar proteínas y regula la actividad celular.",
                keywords: ["función ADN", "proteínas", "instrucciones genéticas", "regulación celular"]
            },
            {
                question: "¿Dónde se encuentra el ADN en las células?",
                answerd: "En células eucariotas, se encuentra en el núcleo; en procariotas, en el citoplasma.",
                keywords: ["ubicación ADN", "núcleo", "células eucariotas", "procariotas"]
            },
            {
                question: "¿Qué es una mutación del ADN?",
                answerd: "Es un cambio en la secuencia de bases del ADN, que puede provocar enfermedades o variaciones genéticas.",
                keywords: ["mutación", "variación genética", "secuencia ADN", "enfermedades"]
            }
        ]
    },
    {
        subtheme: "hormonas",
        title: "Hormonas",
        description: "Sustancias químicas que regulan diversas funciones del cuerpo, producidas por glándulas del sistema endocrino.",
        questions: [
            {
                question: "¿Qué son las hormonas?",
                answerd: "Son mensajeros químicos producidos por glándulas que regulan funciones como el crecimiento, el metabolismo y el estado de ánimo.",
                keywords: ["hormonas", "mensajeros químicos", "sistema endocrino", "funciones corporales"]
            },
            {
                question: "¿Cuáles son las principales glándulas endocrinas?",
                answerd: "Incluyen la hipófisis, tiroides, páncreas, glándulas suprarrenales, ovarios y testículos.",
                keywords: ["glándulas endocrinas", "hipófisis", "tiroides", "páncreas", "suprarrenales"]
            },
            {
                question: "¿Qué tipos de hormonas existen?",
                answerd: "Existen hormonas esteroides, peptídicas y derivadas de aminoácidos, según su estructura química.",
                keywords: ["tipos de hormonas", "esteroides", "peptídicas", "aminoácidos"]
            },
            {
                question: "¿Qué desequilibrios hormonales existen?",
                answerd: "Pueden causar enfermedades como hipotiroidismo, diabetes, síndrome de Cushing o infertilidad.",
                keywords: ["desequilibrio hormonal", "hipotiroidismo", "diabetes", "enfermedades hormonales"]
            },
            {
                question: "¿Cómo actúan las hormonas en el cuerpo?",
                answerd: "Se liberan en la sangre y actúan sobre órganos o tejidos específicos que tienen receptores adecuados.",
                keywords: ["acción hormonal", "receptores", "órganos blanco", "sistema endocrino"]
            }
        ]
    },
    {
        subtheme: "neurotransmisores",
        title: "Neurotransmisores",
        description: "Moléculas químicas que transmiten señales entre las neuronas a través de las sinapsis.",
        questions: [
            {
                question: "¿Qué son los neurotransmisores?",
                answerd: "Son sustancias químicas que permiten la comunicación entre las neuronas en el sistema nervioso.",
                keywords: ["neurotransmisores", "comunicación neuronal", "sistema nervioso", "sinapsis"]
            },
            {
                question: "¿Cuáles son los principales tipos de neurotransmisores?",
                answerd: "Algunos ejemplos son la dopamina, serotonina, acetilcolina, glutamato y GABA.",
                keywords: ["tipos de neurotransmisores", "dopamina", "serotonina", "GABA", "glutamato"]
            },
            {
                question: "¿Qué función tiene la dopamina?",
                answerd: "Está relacionada con el placer, la motivación, el aprendizaje y el movimiento.",
                keywords: ["dopamina", "motivación", "placer", "movimiento"]
            },
            {
                question: "¿Qué causa un desequilibrio en neurotransmisores?",
                answerd: "Puede causar trastornos como depresión, ansiedad, esquizofrenia o Parkinson.",
                keywords: ["desequilibrio neurotransmisores", "depresión", "ansiedad", "trastornos"]
            },
            {
                question: "¿Cómo se eliminan los neurotransmisores después de su acción?",
                answerd: "Se eliminan por recaptación en la neurona emisora, degradación enzimática o difusión fuera de la sinapsis.",
                keywords: ["recaptación", "enzimas", "eliminación neurotransmisores", "sinapsis"]
            }
        ]
    },
    {
        subtheme: "sistema_circulatorio",
        title: "Sistema Circulatorio",
        description: "Sistema encargado de transportar sangre, nutrientes, oxígeno y desechos a través del cuerpo humano.",
        questions: [
            {
                question: "¿Qué es el sistema circulatorio?",
                answerd: "Es el sistema encargado de transportar la sangre por todo el cuerpo, distribuyendo oxígeno y nutrientes, y recogiendo desechos.",
                keywords: ["sistema circulatorio", "sangre", "nutrientes", "desechos", "oxígeno"]
            },
            {
                question: "¿Qué órganos componen el sistema circulatorio?",
                answerd: "Los principales son el corazón, las arterias, venas y capilares.",
                keywords: ["órganos del sistema circulatorio", "corazón", "arterias", "venas", "capilares"]
            },
            {
                question: "¿Cuál es la función del corazón?",
                answerd: "El corazón actúa como una bomba que impulsa la sangre por todo el cuerpo a través del sistema circulatorio.",
                keywords: ["función del corazón", "bomba cardíaca", "circulación sanguínea"]
            },
            {
                question: "¿Qué tipos de circulación existen?",
                answerd: "Circulación pulmonar (entre el corazón y pulmones) y circulación sistémica (entre el corazón y el resto del cuerpo).",
                keywords: ["circulación pulmonar", "circulación sistémica", "tipos de circulación"]
            },
            {
                question: "¿Qué enfermedades afectan el sistema circulatorio?",
                answerd: "Entre ellas están la hipertensión, arteriosclerosis, infartos y enfermedades cardíacas congénitas.",
                keywords: ["enfermedades circulatorias", "hipertensión", "infarto", "arteriosclerosis"]
            }
        ]
    },
    {
        subtheme: "sistema_digestivo",
        title: "Sistema Digestivo",
        description: "Sistema responsable de procesar los alimentos, absorber nutrientes y eliminar desechos sólidos del cuerpo.",
        questions: [
            {
                question: "¿Qué es el sistema digestivo?",
                answerd: "Es el conjunto de órganos encargados de transformar los alimentos en nutrientes que el cuerpo puede absorber y utilizar.",
                keywords: ["sistema digestivo", "digestión", "nutrientes", "procesamiento de alimentos"]
            },
            {
                question: "¿Cuáles son los órganos principales del sistema digestivo?",
                answerd: "Incluye la boca, esófago, estómago, intestino delgado, intestino grueso, hígado, páncreas y vesícula biliar.",
                keywords: ["órganos digestivos", "estómago", "intestino", "hígado", "páncreas"]
            },
            {
                question: "¿Cómo se lleva a cabo la digestión?",
                answerd: "La digestión es un proceso mecánico y químico que descompone los alimentos en moléculas simples para su absorción.",
                keywords: ["proceso digestivo", "digestión mecánica", "digestión química", "absorción"]
            },
            {
                question: "¿Qué función cumple el intestino delgado?",
                answerd: "Es el principal sitio de absorción de nutrientes, ya que posee una gran superficie gracias a las vellosidades intestinales.",
                keywords: ["intestino delgado", "absorción de nutrientes", "vellosidades"]
            },
            {
                question: "¿Qué trastornos pueden afectar al sistema digestivo?",
                answerd: "Algunos incluyen gastritis, reflujo ácido, síndrome del intestino irritable y enfermedad celíaca.",
                keywords: ["trastornos digestivos", "gastritis", "reflujo", "celíaca", "intestino irritable"]
            }
        ]
    },
    {
        subtheme: "sistema_respiratorio",
        title: "Sistema Respiratorio",
        description: "Sistema encargado del intercambio de gases, permitiendo la entrada de oxígeno y la expulsión de dióxido de carbono.",
        questions: [
            {
                question: "¿Qué es el sistema respiratorio?",
                answerd: "Es el sistema que permite el intercambio de gases entre el cuerpo y el ambiente, esencial para la respiración celular.",
                keywords: ["sistema respiratorio", "intercambio de gases", "oxígeno", "dióxido de carbono"]
            },
            {
                question: "¿Qué órganos lo componen?",
                answerd: "Incluye la nariz, faringe, laringe, tráquea, bronquios, pulmones y diafragma.",
                keywords: ["órganos respiratorios", "nariz", "pulmones", "tráquea", "bronquios"]
            },
            {
                question: "¿Cómo se realiza la respiración?",
                answerd: "La respiración incluye la inhalación de oxígeno y la exhalación de dióxido de carbono mediante contracciones musculares.",
                keywords: ["respiración", "inhalación", "exhalación", "contracción diafragma"]
            },
            {
                question: "¿Qué función tienen los alvéolos pulmonares?",
                answerd: "Los alvéolos permiten el intercambio gaseoso entre el aire inhalado y la sangre, gracias a su delgada membrana y gran superficie.",
                keywords: ["alvéolos", "intercambio gaseoso", "oxígeno", "sangre"]
            },
            {
                question: "¿Qué enfermedades afectan el sistema respiratorio?",
                answerd: "Algunas son el asma, bronquitis, neumonía, EPOC y COVID-19.",
                keywords: ["enfermedades respiratorias", "asma", "bronquitis", "neumonía", "EPOC", "COVID"]
            }
        ]
    }
]

const Tecnologia = [
    {
        subtheme: "blockchain",
        title: "Blockchain",
        description: "Tecnología de registro distribuido que permite almacenar datos de forma segura, transparente y descentralizada.",
        questions: [
            {
                question: "¿Qué es Blockchain?",
                answerd: "Blockchain es una tecnología que permite almacenar información en bloques encadenados de forma segura, transparente y descentralizada. Se usa principalmente en criptomonedas como Bitcoin.",
                keywords: ["blockchain", "tecnología descentralizada", "registro digital", "bitcoin", "cadena de bloques"]
            },
            {
                question: "¿Cómo funciona la tecnología Blockchain?",
                answerd: "Cada bloque contiene información y un código único llamado hash. Cuando un bloque se llena, se enlaza al anterior, creando una cadena inalterable. Toda la red verifica los datos mediante consenso.",
                keywords: ["hash", "bloques", "consenso", "registro", "funcionamiento blockchain"]
            },
            {
                question: "¿Cuáles son las ventajas del Blockchain?",
                answerd: "Transparencia, seguridad, resistencia a la manipulación y eliminación de intermediarios son sus principales ventajas.",
                keywords: ["ventajas blockchain", "seguridad", "transparencia", "intermediarios"]
            },
            {
                question: "¿Dónde se utiliza Blockchain actualmente?",
                answerd: "Se usa en criptomonedas, contratos inteligentes, trazabilidad en cadenas de suministro, identidad digital y votaciones electrónicas.",
                keywords: ["aplicaciones blockchain", "criptomonedas", "contratos inteligentes", "votaciones", "trazabilidad"]
            },
            {
                question: "¿Qué desafíos enfrenta el uso de Blockchain?",
                answerd: "Escalabilidad, consumo energético, regulación legal y falta de adopción masiva son algunos de los desafíos.",
                keywords: ["desafíos blockchain", "escalabilidad", "energía", "regulación", "adopción"]
            }
        ]
    },
    {
        subtheme: "ia",
        title: "Inteligencia Artificial",
        description: "Rama de la informática que desarrolla sistemas capaces de realizar tareas que requieren inteligencia humana.",
        questions: [
            {
                question: "¿Qué es la Inteligencia Artificial?",
                answerd: "La Inteligencia Artificial (IA) es la capacidad de una máquina para imitar procesos de inteligencia humana como el aprendizaje, razonamiento y autocorrección.",
                keywords: ["inteligencia artificial", "IA", "aprendizaje automático", "razonamiento", "algoritmos"]
            },
            {
                question: "¿Qué tipos de IA existen?",
                answerd: "IA débil (realiza tareas específicas), IA fuerte (capaz de razonar como un humano) y superinteligencia artificial (aún teórica).",
                keywords: ["tipos de IA", "IA débil", "IA fuerte", "superinteligencia"]
            },
            {
                question: "¿Dónde se aplica la Inteligencia Artificial?",
                answerd: "En asistentes virtuales, recomendaciones, vehículos autónomos, diagnósticos médicos, seguridad y más.",
                keywords: ["aplicaciones IA", "asistentes virtuales", "vehículos autónomos", "diagnóstico médico"]
            },
            {
                question: "¿Qué es el aprendizaje automático?",
                answerd: "Es una subrama de la IA que permite a las máquinas aprender a partir de datos sin ser programadas explícitamente.",
                keywords: ["aprendizaje automático", "machine learning", "datos", "IA"]
            },
            {
                question: "¿Cuáles son los riesgos de la Inteligencia Artificial?",
                answerd: "Desempleo, sesgos en algoritmos, uso militar, invasión de privacidad y dependencia tecnológica.",
                keywords: ["riesgos IA", "privacidad", "desempleo", "sesgo", "automatización"]
            }
        ]
    },
    {
        subtheme: "ciberseguridad",
        title: "Ciberseguridad",
        description: "Conjunto de prácticas y tecnologías para proteger sistemas, redes y datos frente a ataques digitales.",
        questions: [
            {
                question: "¿Qué es la ciberseguridad?",
                answerd: "La ciberseguridad es la disciplina que protege la información digital y los sistemas informáticos contra accesos no autorizados, daños o robos.",
                keywords: ["ciberseguridad", "seguridad informática", "protección digital", "ataques cibernéticos"]
            },
            {
                question: "¿Qué tipos de amenazas existen en ciberseguridad?",
                answerd: "Malware, phishing, ransomware, ataques DDoS, ingeniería social y robo de identidad.",
                keywords: ["amenazas", "malware", "phishing", "ransomware", "ataques cibernéticos"]
            },
            {
                question: "¿Qué son los antivirus y los firewalls?",
                answerd: "Los antivirus detectan y eliminan malware, mientras que los firewalls controlan el tráfico de red para prevenir accesos no autorizados.",
                keywords: ["antivirus", "firewall", "protección", "malware", "tráfico de red"]
            },
            {
                question: "¿Qué es la autenticación de dos factores?",
                answerd: "Es un método de seguridad que requiere dos formas de verificación para acceder a una cuenta o sistema.",
                keywords: ["autenticación", "2FA", "verificación", "seguridad de acceso"]
            },
            {
                question: "¿Cómo prevenir ataques cibernéticos?",
                answerd: "Actualizando software, usando contraseñas seguras, haciendo copias de seguridad y educando a los usuarios.",
                keywords: ["prevención", "actualización", "contraseñas", "copias de seguridad", "educación"]
            }
        ]
    },
    {
        subtheme: "iot",
        title: "Internet de las Cosas (IoT)",
        description: "Conexión de objetos físicos a internet para recolectar y compartir datos, automatizando procesos y mejorando la eficiencia.",
        questions: [
            {
                question: "¿Qué es el Internet de las Cosas (IoT)?",
                answerd: "Es una red de objetos físicos conectados a internet que pueden recopilar e intercambiar datos para tomar decisiones automáticas o informadas.",
                keywords: ["IoT", "Internet de las cosas", "objetos conectados", "automatización"]
            },
            {
                question: "¿Cómo funciona el IoT?",
                answerd: "Los dispositivos tienen sensores y software que recolectan datos, los envían a la nube y pueden actuar según análisis en tiempo real.",
                keywords: ["funcionamiento IoT", "sensores", "datos", "nube", "automatización"]
            },
            {
                question: "¿Cuáles son algunos ejemplos de IoT?",
                answerd: "Termostatos inteligentes, relojes inteligentes, sistemas de riego automatizados, autos conectados y electrodomésticos inteligentes.",
                keywords: ["ejemplos IoT", "relojes inteligentes", "casa inteligente", "automóviles"]
            },
            {
                question: "¿Qué beneficios ofrece el IoT?",
                answerd: "Mayor eficiencia, ahorro energético, mejor toma de decisiones y comodidad.",
                keywords: ["beneficios IoT", "eficiencia", "comodidad", "ahorro"]
            },
            {
                question: "¿Cuáles son los desafíos del IoT?",
                answerd: "Privacidad, seguridad, interoperabilidad entre dispositivos y gran volumen de datos.",
                keywords: ["desafíos IoT", "privacidad", "seguridad", "datos", "compatibilidad"]
            }
        ]
    },
    {
        subtheme: "software",
        title: "Software",
        description: "Conjunto de instrucciones y datos que permiten el funcionamiento de computadoras y dispositivos electrónicos.",
        questions: [
            {
                question: "¿Qué es el software?",
                answerd: "El software es un conjunto de programas y rutinas que permiten a un sistema informático ejecutar tareas específicas, desde sistemas operativos hasta aplicaciones de usuario.",
                keywords: ["software", "programas", "sistemas operativos", "aplicaciones", "informática"]
            },
            {
                question: "¿Qué tipos de software existen?",
                answerd: "Los principales tipos son: software de sistema (como Windows o Linux), software de aplicación (como Word o Photoshop) y software de programación (como editores de código).",
                keywords: ["tipos de software", "software de sistema", "software de aplicación", "programación"]
            },
            {
                question: "¿Qué es el software libre?",
                answerd: "Es el software que puede ser utilizado, modificado y distribuido libremente por cualquier persona, como Linux o LibreOffice.",
                keywords: ["software libre", "licencias abiertas", "GNU", "Linux"]
            },
            {
                question: "¿Qué es el ciclo de vida del software?",
                answerd: "Es el proceso completo que sigue un software desde su concepción hasta su retiro, incluyendo análisis, diseño, codificación, pruebas y mantenimiento.",
                keywords: ["ciclo de vida del software", "desarrollo", "mantenimiento", "pruebas", "SDLC"]
            },
            {
                question: "¿Qué lenguajes se usan para desarrollar software?",
                answerd: "Algunos lenguajes comunes son Python, Java, C++, JavaScript y C#, dependiendo del tipo de software a crear.",
                keywords: ["lenguajes de programación", "desarrollo software", "Python", "Java", "JavaScript"]
            }
        ]
    },
    {
        subtheme: "hardware",
        title: "Hardware",
        description: "Componentes físicos que conforman un sistema informático, necesarios para ejecutar software y realizar tareas.",
        questions: [
            {
                question: "¿Qué es el hardware?",
                answerd: "El hardware es el conjunto de componentes físicos de una computadora o dispositivo electrónico, como el procesador, memoria, disco duro y periféricos.",
                keywords: ["hardware", "componentes físicos", "computadora", "procesador", "memoria"]
            },
            {
                question: "¿Cuáles son los tipos de hardware?",
                answerd: "Se divide en hardware de procesamiento (CPU), almacenamiento (disco duro, SSD), entrada (teclado, ratón) y salida (monitor, impresora).",
                keywords: ["tipos de hardware", "entrada", "salida", "almacenamiento", "procesamiento"]
            },
            {
                question: "¿Qué función cumple la CPU?",
                answerd: "La Unidad Central de Procesamiento (CPU) ejecuta las instrucciones de los programas y coordina las operaciones del sistema.",
                keywords: ["CPU", "procesador", "función CPU", "unidad central de procesamiento"]
            },
            {
                question: "¿Qué diferencias hay entre HDD y SSD?",
                answerd: "Los HDD son discos mecánicos más baratos pero lentos, mientras que los SSD son unidades electrónicas más rápidas y silenciosas.",
                keywords: ["HDD", "SSD", "disco duro", "almacenamiento", "velocidad"]
            },
            {
                question: "¿Qué es una placa base (motherboard)?",
                answerd: "Es el componente principal que conecta todos los elementos del hardware, permitiendo la comunicación entre ellos.",
                keywords: ["placa base", "motherboard", "tarjeta madre", "hardware", "conexiones"]
            }
        ]
    },
    {
        subtheme: "realidad_aumentada",
        title: "Realidad Aumentada",
        description: "Tecnología que superpone elementos digitales en el mundo real mediante dispositivos como smartphones o lentes especiales.",
        questions: [
            {
                question: "¿Qué es la realidad aumentada?",
                answerd: "La realidad aumentada (RA) es una tecnología que combina elementos virtuales con el entorno físico en tiempo real, mejorando la percepción del usuario.",
                keywords: ["realidad aumentada", "RA", "elementos virtuales", "tecnología inmersiva"]
            },
            {
                question: "¿En qué se diferencia de la realidad virtual?",
                answerd: "La RA añade información digital al mundo real, mientras que la realidad virtual crea un entorno completamente simulado e inmersivo.",
                keywords: ["realidad aumentada", "realidad virtual", "diferencias", "simulación", "entorno"]
            },
            {
                question: "¿Qué dispositivos se usan con RA?",
                answerd: "Se puede usar con smartphones, tablets, lentes como HoloLens o Magic Leap, y cámaras con software especializado.",
                keywords: ["dispositivos RA", "smartphones", "lentes", "HoloLens", "Magic Leap"]
            },
            {
                question: "¿Qué aplicaciones tiene la RA?",
                answerd: "Educación interactiva, videojuegos, medicina, arquitectura, marketing y mantenimiento técnico, entre otros.",
                keywords: ["aplicaciones RA", "educación", "videojuegos", "marketing", "medicina"]
            },
            {
                question: "¿Cuáles son los retos de implementar RA?",
                answerd: "Incluyen el costo de dispositivos, desarrollo complejo, precisión de sensores y aceptación del usuario.",
                keywords: ["retos RA", "costo", "precisión", "aceptación", "tecnología emergente"]
            }
        ]
    }
]

const Automoviles = [
    {
        subtheme: "motores",
        title: "Motores",
        description: "Unidad mecánica que convierte energía en movimiento para propulsar un vehículo.",
        questions: [
            {
                question: "¿Qué es un motor de automóvil?",
                answerd: "Es un dispositivo mecánico que transforma energía (generalmente de combustibles fósiles o electricidad) en energía mecánica para mover el vehículo.",
                keywords: ["motor", "automóvil", "energía mecánica", "combustión", "eléctrico"]
            },
            {
                question: "¿Cuáles son los tipos de motores más comunes?",
                answerd: "Motor de combustión interna (gasolina y diésel), motor eléctrico e híbrido (combina ambos tipos).",
                keywords: ["motor de combustión", "motor eléctrico", "híbrido", "gasolina", "diésel"]
            },
            {
                question: "¿Cómo funciona un motor de combustión interna?",
                answerd: "Quema combustible dentro de un cilindro para crear una explosión que empuja un pistón, generando movimiento.",
                keywords: ["combustión interna", "cilindros", "pistón", "explosión", "funcionamiento"]
            },
            {
                question: "¿Qué es el torque y por qué es importante?",
                answerd: "El torque es la fuerza que hace girar el motor; es esencial para la aceleración y la capacidad de carga del vehículo.",
                keywords: ["torque", "fuerza", "aceleración", "motor", "rendimiento"]
            },
            {
                question: "¿Cómo se mantiene un motor en buen estado?",
                answerd: "Mediante cambios de aceite, filtros, revisión de bujías, refrigerante y mantenimiento regular.",
                keywords: ["mantenimiento de motor", "aceite", "filtros", "bujías", "refrigerante"]
            }
        ]
    },
    {
        subtheme: "cilindros",
        title: "Cilindros del Motor",
        description: "Cámaras dentro del motor donde ocurre la combustión que impulsa los pistones.",
        questions: [
            {
                question: "¿Qué es un cilindro en un motor?",
                answerd: "Es la cámara donde el combustible se quema y genera la energía que empuja el pistón.",
                keywords: ["cilindro", "motor", "combustión", "pistón", "energía"]
            },
            {
                question: "¿Qué significa que un motor tenga 4, 6 u 8 cilindros?",
                answerd: "Indica el número de cámaras de combustión; a más cilindros, mayor potencia y consumo.",
                keywords: ["motor 4 cilindros", "motor 6 cilindros", "motor 8 cilindros", "potencia", "eficiencia"]
            },
            {
                question: "¿Cómo influye la cantidad de cilindros en el rendimiento del vehículo?",
                answerd: "Más cilindros proporcionan mayor potencia y suavidad, pero consumen más combustible.",
                keywords: ["rendimiento", "potencia", "cilindros", "consumo", "eficiencia"]
            },
            {
                question: "¿Qué es la configuración de los cilindros?",
                answerd: "Es la forma en que están dispuestos los cilindros: en línea, en V o bóxer.",
                keywords: ["configuración de cilindros", "en línea", "en V", "bóxer"]
            },
            {
                question: "¿Puede fallar un cilindro? ¿Qué lo causa?",
                answerd: "Sí, por problemas en bujías, válvulas, inyectores o anillos del pistón, lo que causa pérdida de potencia.",
                keywords: ["falla de cilindro", "bujías", "válvulas", "inyectores", "pérdida de potencia"]
            }
        ]
    },
    {
        subtheme: "kilometrajes",
        title: "Kilometraje del Vehículo",
        description: "Distancia total recorrida por un vehículo, indicador clave para evaluar desgaste y valor.",
        questions: [
            {
                question: "¿Qué es el kilometraje de un auto?",
                answerd: "Es la cantidad total de kilómetros que ha recorrido el vehículo desde su fabricación.",
                keywords: ["kilometraje", "odómetro", "distancia recorrida", "vehículo"]
            },
            {
                question: "¿Por qué es importante el kilometraje?",
                answerd: "Ayuda a estimar el desgaste del vehículo y su necesidad de mantenimiento o reemplazo de partes.",
                keywords: ["importancia kilometraje", "desgaste", "mantenimiento", "vida útil"]
            },
            {
                question: "¿Cuánto kilometraje se considera alto para un auto usado?",
                answerd: "Generalmente más de 150,000 km, aunque depende del mantenimiento y tipo de uso.",
                keywords: ["kilometraje alto", "auto usado", "mantenimiento", "vida útil"]
            },
            {
                question: "¿Se puede modificar el kilometraje de un auto?",
                answerd: "Sí, aunque es ilegal en muchos países y considerado fraude si no se informa.",
                keywords: ["modificar kilometraje", "fraude", "odómetro", "legalidad"]
            },
            {
                question: "¿Cómo mantener un buen kilometraje promedio?",
                answerd: "Conduciendo eficientemente, evitando aceleraciones bruscas y manteniendo el vehículo al día.",
                keywords: ["kilometraje eficiente", "conducción", "mantenimiento", "ahorro de combustible"]
            }
        ]
    },
    {
        subtheme: "carroceria",
        title: "Carrocería",
        description: "Estructura externa del vehículo que le da forma, protege a los ocupantes y determina su aerodinámica.",
        questions: [
            {
                question: "¿Qué es la carrocería de un vehículo?",
                answerd: "Es la estructura externa visible del vehículo, que le da su forma y protege a los pasajeros.",
                keywords: ["carrocería", "estructura", "protección", "forma", "vehículo"]
            },
            {
                question: "¿Qué tipos de carrocería existen?",
                answerd: "Sedán, coupé, hatchback, SUV, camioneta, convertible, entre otros.",
                keywords: ["tipos de carrocería", "sedán", "SUV", "camioneta", "hatchback"]
            },
            {
                question: "¿Qué función tiene la carrocería en la seguridad del auto?",
                answerd: "Absorbe impactos, protege a los ocupantes y ayuda en la distribución de la energía en colisiones.",
                keywords: ["carrocería", "seguridad", "impactos", "protección", "estructura"]
            },
            {
                question: "¿Qué materiales se usan en la carrocería?",
                answerd: "Acero, aluminio, fibra de carbono y plásticos reforzados, según el modelo y uso.",
                keywords: ["materiales carrocería", "acero", "aluminio", "fibra de carbono"]
            },
            {
                question: "¿Qué es la aerodinámica en la carrocería?",
                answerd: "Es la capacidad del diseño para reducir la resistencia al viento, mejorando la eficiencia y estabilidad.",
                keywords: ["aerodinámica", "resistencia", "forma", "eficiencia", "velocidad"]
            }
        ]
    },
    {
        subtheme: "traccion",
        title: "Tracción del Vehículo",
        description: "Sistema que transfiere la potencia del motor a las ruedas, determinando el comportamiento del auto en diferentes terrenos.",
        questions: [
            {
                question: "¿Qué es la tracción en un automóvil?",
                answerd: "Es la forma en que la potencia del motor se distribuye a las ruedas para mover el vehículo.",
                keywords: ["tracción", "potencia", "ruedas", "vehículo", "motor"]
            },
            {
                question: "¿Qué tipos de tracción existen?",
                answerd: "Tracción delantera (FWD), trasera (RWD), total (AWD) y 4x4 (4WD), cada una con ventajas y usos específicos.",
                keywords: ["tipos de tracción", "FWD", "RWD", "AWD", "4x4"]
            },
            {
                question: "¿Cuál es la diferencia entre tracción AWD y 4x4?",
                answerd: "AWD es permanente y automática, ideal para carretera; 4x4 es manual y se usa para terrenos difíciles.",
                keywords: ["AWD", "4x4", "diferencias", "terrenos", "vehículo"]
            },
            {
                question: "¿Qué ventajas tiene la tracción total?",
                answerd: "Mejora la estabilidad, agarre en curvas y desempeño en condiciones climáticas adversas.",
                keywords: ["ventajas tracción total", "estabilidad", "agarre", "lluvia", "nieve"]
            },
            {
                question: "¿Influye la tracción en el consumo de combustible?",
                answerd: "Sí, los sistemas con tracción total o 4x4 suelen consumir más debido a su peso y complejidad mecánica.",
                keywords: ["consumo combustible", "tracción", "eficiencia", "AWD", "peso"]
            }
        ]
    }
]

const Biologia = [
    {
        subtheme: "fotosintesis",
        title: "Fotosíntesis en Plantas",
        description: "Proceso bioquímico mediante el cual las plantas transforman la energía lumínica en energía química",
        questions: [
            {
                question: "¿Qué es la fotosíntesis?",
                answerd: "La fotosíntesis es el proceso mediante el cual las plantas, algas y algunas bacterias convierten la energía de la luz solar en energía química almacenada en moléculas orgánicas como la glucosa. Este proceso ocurre en los cloroplastos y requiere dióxido de carbono, agua y luz, liberando oxígeno como subproducto.",
                keywords: ["proceso", "plantas", "cloroplastos", "luz solar", "glucosa", "oxígeno"]
            },
            {
                question: "¿Cuáles son las fases principales de la fotosíntesis?",
                answerd: "La fotosíntesis consta de dos fases principales: 1) La fase luminosa o dependiente de la luz, donde se captura energía solar y se produce ATP y NADPH, y 2) La fase oscura o ciclo de Calvin, donde se utiliza la energía almacenada para fijar el CO2 y sintetizar glucosa.",
                keywords: ["fase luminosa", "fase oscura", "ciclo de Calvin", "ATP", "NADPH"]
            },
            {
                question: "¿Qué pigmentos participan en la fotosíntesis?",
                answerd: "El principal pigmento fotosintético es la clorofila, que existe en formas a y b. Además existen pigmentos accesorios como los carotenoides (carotenos y xantofilas) y las ficobilinas en ciertas algas, que amplían el espectro de luz aprovechable.",
                keywords: ["clorofila", "pigmentos", "carotenoides", "luz visible", "absorción"]
            },
            {
                question: "¿Qué factores afectan la tasa fotosintética?",
                answerd: "Los principales factores son: intensidad luminosa, concentración de CO2, temperatura, disponibilidad de agua y nutrientes minerales. Cada factor tiene un rango óptimo y puede limitar el proceso si está en defecto o exceso.",
                keywords: ["factores limitantes", "intensidad lumínica", "temperatura", "agua", "nutrientes"]
            },
            {
                question: "¿Qué importancia ecológica tiene la fotosíntesis?",
                answerd: "La fotosíntesis es fundamental para la vida en la Tierra porque: 1) Produce el oxígeno atmosférico, 2) Fija el CO2 reduciendo el efecto invernadero, 3) Genera la materia orgánica que sustenta las cadenas tróficas, y 4) Mantiene el equilibrio de los ecosistemas.",
                keywords: ["importancia", "oxígeno", "cadena alimenticia", "ecosistemas", "ciclo del carbono"]
            }
        ]
    },
    {
        subtheme: "enzimas",
        title: "Enzimas y Catálisis Biológica",
        description: "Proteínas especializadas que aceleran reacciones químicas en los organismos vivos",
        questions: [
            {
                question: "¿Qué son las enzimas y cómo funcionan?",
                answerd: "Las enzimas son proteínas catalizadoras que aceleran las reacciones bioquímicas sin consumirse. Funcionan reduciendo la energía de activación necesaria para que ocurra la reacción, gracias a su sitio activo donde se une específicamente el sustrato. Son altamente específicas y su actividad depende de condiciones óptimas de pH y temperatura.",
                keywords: ["proteínas", "catalizadores", "sitio activo", "energía de activación", "especificidad"]
            },
            {
                question: "¿Qué diferencia a las enzimas de otros catalizadores?",
                answerd: "Las enzimas se distinguen por: 1) Ser biológicas y generalmente proteicas, 2) Mayor especificidad por su sustrato, 3) Mayor eficiencia catalítica (pueden acelerar reacciones hasta 10^17 veces), 4) Operar en condiciones suaves de temperatura y pH, y 5) Ser regulables por inhibidores o moduladores.",
                keywords: ["comparación", "catalizadores químicos", "eficiencia", "regulación", "condiciones suaves"]
            },
            {
                question: "¿Cómo se clasifican las enzimas?",
                answerd: "Las enzimas se clasifican en 6 clases principales según la reacción que catalizan: 1) Oxidorreductasas (transferencia de electrones), 2) Transferasas (transferencia de grupos funcionales), 3) Hidrolasas (rotura por agua), 4) Liasas (adición a dobles enlaces), 5) Isomerasas (reordenamientos intramoleculares), y 6) Ligasas (formación de enlaces con ATP).",
                keywords: ["clasificación", "EC numbers", "tipos de reacciones", "nomenclatura"]
            },
            {
                question: "¿Qué factores afectan la actividad enzimática?",
                answerd: "Los principales factores son: 1) Temperatura (aumenta actividad hasta punto óptimo), 2) pH (cada enzima tiene pH óptimo), 3) Concentración de sustrato (hasta saturación), 4) Presencia de cofactores o coenzimas, y 5) Inhibidores competitivos o alostéricos que reducen la actividad.",
                keywords: ["temperatura", "pH", "saturación", "inhibidores", "coenzimas"]
            },
            {
                question: "¿Qué aplicaciones tienen las enzimas en la industria?",
                answerd: "Las enzimas tienen múltiples aplicaciones: 1) Alimentaria (quesos, pan, jugos), 2) Detergentes (lipasas, proteasas), 3) Medicina (diagnóstico, terapéutica), 4) Biotecnología (PCR con Taq polimerasa), y 5) Bioenergía (producción de biocombustibles). Son preferidas por ser biodegradables y trabajar en condiciones suaves.",
                keywords: ["aplicaciones", "industria alimentaria", "detergentes", "biotecnología", "medicina"]
            }
        ]
    },
    {
        subtheme: "animales",
        title: "Reino Animal y su Diversidad",
        description: "Características, clasificación y adaptaciones de los organismos del reino Animalia",
        questions: [
            {
                question: "¿Qué características definen a los animales?",
                answerd: "Los animales son organismos eucariotas, multicelulares, heterótrofos (ingestión), con tejidos diferenciados (excepto poríferos), capacidad de movimiento en algún estadio vital, reproducción generalmente sexual, desarrollo embrionario con blastulación y gastrulación, y presencia de colágeno como proteína estructural característica.",
                keywords: ["eucariotas", "heterótrofos", "movimiento", "tejidos", "reproducción sexual"]
            },
            {
                question: "¿Cómo se clasifican los principales grupos animales?",
                answerd: "Los animales se clasifican según: 1) Presencia/ausencia de columna vertebral (vertebrados/invertebrados), 2) Simetría corporal (radial/bilateral), 3) Capas germinales (diploblásticos/triploblásticos), 4) Desarrollo embrionario (protóstomos/deuteróstomos), y 5) Plan corporal (segmentación, cavidades corporales). Los filos principales incluyen artrópodos, moluscos, anélidos, cordados, etc.",
                keywords: ["vertebrados", "invertebrados", "simetría", "filos", "clasificación"]
            },
            {
                question: "¿Qué adaptaciones permitieron a los animales colonizar tierra firme?",
                answerd: "Las adaptaciones clave fueron: 1) Sistemas de soporte esquelético, 2) Mecanismos para prevenir la desecación (piel queratinizada), 3) Sistemas respiratorios eficientes (pulmones), 4) Reproducción independiente del agua (huevos amnióticos o viviparidad), 5) Sistemas excretores conservadores de agua, y 6) Termorregulación.",
                keywords: ["adaptaciones", "transición agua-tierra", "evolución", "amniotas", "termorregulación"]
            },
            {
                question: "¿Qué son los patrones de desarrollo embrionario en animales?",
                answerd: "El desarrollo embrionario sigue etapas como segmentación (cleavage), gastrulación (formación de capas germinales), y organogénesis. Los patrones difieren en protóstomos (blastóporo forma boca, cleavage espiral) vs deuteróstomos (blastóporo forma ano, cleavage radial). La celoma formación puede ser esquizocélica o enterocélica.",
                keywords: ["embriología", "protóstomos", "deuteróstomos", "capas germinales", "celoma"]
            },
            {
                question: "¿Qué importancia ecológica tienen los animales?",
                answerd: "Los animales cumplen roles cruciales como: 1) Consumidores en cadenas tróficas, 2) Polinizadores y dispersores de semillas, 3) Recicladores de nutrientes (descomponedores), 4) Ingenieros de ecosistemas (constructores de hábitats), 5) Indicadores de salud ambiental, y 6) Fuente de recursos para humanos (alimento, materiales).",
                keywords: ["roles ecológicos", "cadenas alimenticias", "biodiversidad", "servicios ecosistémicos", "conservación"]
            }
        ]
    },
    {
        subtheme: "temas_evolutivos",
        title: "Teorías y Mecanismos de la Evolución",
        description: "Procesos que explican la diversificación y adaptación de las especies a través del tiempo",
        questions: [
            {
                question: "¿Qué evidencia apoya la teoría de la evolución?",
                answerd: "La evolución está respaldada por: 1) Registro fósil que muestra cambios graduales, 2) Anatomía comparada (estructuras homólogas), 3) Embriología comparada (etapas similares), 4) Distribución biogeográfica, 5) Bioquímica comparada (ADN y proteínas similares), y 6) Observaciones directas (resistencia a antibióticos, especiación).",
                keywords: ["evidencia", "fósiles", "anatomía comparada", "ADN", "biogeografía"]
            },
            {
                question: "¿Cómo actúa la selección natural según Darwin?",
                answerd: "La selección natural opera cuando: 1) Existe variación heredable en una población, 2) Los organismos producen más descendencia de la que puede sobrevivir, 3) Los individuos con rasgos ventajosos tienen mayor fitness (éxito reproductivo), lo que lleva a que esos rasgos aumenten en frecuencia en generaciones posteriores. No es aleatoria sino dirigida por el ambiente.",
                keywords: ["Darwin", "mecanismo", "variación", "fitness", "adaptación"]
            },
            {
                question: "¿Qué otros mecanismos evolutivos existen además de la selección natural?",
                answerd: "Otros mecanismos incluyen: 1) Deriva genética (cambios aleatorios en pequeñas poblaciones), 2) Flujo génico (intercambio de genes entre poblaciones), 3) Mutaciones (fuente de nueva variación), 4) Apareamiento no aleatorio (selección sexual), y 5) Especiación (formación de nuevas especies por aislamiento reproductivo).",
                keywords: ["deriva genética", "flujo génico", "mutaciones", "selección sexual", "especiación"]
            },
            {
                question: "¿Qué es la especiación y cómo ocurre?",
                answerd: "La especiación es el proceso de formación de nuevas especies. Ocurre cuando poblaciones se aíslan reproductivamente por: 1) Barreras geográficas (especiación alopátrica), 2) Barreras ecológicas o conductuales (especiación simpátrica), o 3) Barreras genéticas (polipoidía en plantas). El aislamiento reproductivo puede ser precigótico (evita apareamiento) o postcigótico (híbridos inviables).",
                keywords: ["nuevas especies", "aislamiento reproductivo", "alopátrica", "simpátrica", "barreras"]
            },
            {
                question: "¿Qué son los patrones macroevolutivos?",
                answerd: "La macroevolución estudia cambios a gran escala como: 1) Radiación adaptativa (diversificación rápida), 2) Extinciones masivas y eventos de especiación, 3) Coevolución (interacciones especies), 4) Evolución convergente (rasgos similares en linajes no relacionados), y 5) Tasas evolutivas (equilibrio puntuado vs gradualismo). Estos patrones emergen de procesos microevolutivos actuando a largo plazo.",
                keywords: ["macroevolución", "radiación adaptativa", "extinciones", "convergencia", "tasas evolutivas"]
            }
        ]
    },
    {
        subtheme: "reinos_existentes",
        title: "Clasificación de los Seres Vivos en Reinos",
        description: "Sistemas de clasificación biológica y características distintivas de los principales reinos",
        questions: [
            {
                question: "¿Cuáles son los reinos biológicos principales?",
                answerd: "En el sistema de 5 reinos (Whittaker) son: 1) Animalia (organismos móviles heterótrofos), 2) Plantae (autótrofos fotosintéticos), 3) Fungi (heterótrofos con absorción, pared de quitina), 4) Protista (eucariotas diversos, parafilético), y 5) Monera (procariotas, ahora divididos en Bacteria y Archaea). Actualmente se usan sistemas más modernos como los 3 dominios (Bacteria, Archaea, Eukarya).",
                keywords: ["5 reinos", "Whittaker", "Animalia", "Plantae", "Fungi", "Protista", "Monera"]
            },
            {
                question: "¿Qué características distinguen a los reinos Bacteria y Archaea?",
                answerd: "Bacteria y Archaea son procariotas pero difieren en: 1) Composición de pared celular (peptidoglicano en bacterias), 2) Membranas lipídicas (enlaces éter en Archaea), 3) Genética (Archaea tiene procesos más similares a eucariotas), 4) Hábitats (Archaea en extremos), y 5) Sensibilidad a antibióticos. Archaea está más relacionada evolutivamente a eucariotas.",
                keywords: ["procariotas", "diferencias", "extremófilos", "pared celular", "filogenia"]
            },
            {
                question: "¿Por qué el reino Protista se considera parafilético?",
                answerd: "Protista es parafilético porque incluye organismos eucariotas diversos que no son animales, plantas ni hongos, pero no incluye todos los descendientes de su ancestro común (pues animales, plantas y hongos evolucionaron de protistas). Contiene grupos no relacionados como algas, protozoos y mohos mucilaginosos, por lo que los sistemas modernos los dividen en supergrupos eucarióticos.",
                keywords: ["parafilético", "eucariotas", "algas", "protozoos", "clasificación moderna"]
            },
            {
                question: "¿Qué adaptaciones permitieron a las plantas colonizar tierra firme?",
                answerd: "Las adaptaciones clave fueron: 1) Cutícula cerosa para prevenir desecación, 2) Estomas para intercambio gaseoso, 3) Tejidos vasculares (xilema/floema) para transporte, 4) Raíces para absorción y anclaje, 5) Estructuras reproductivas protegidas (semillas), y 6) Pigmentos accesorios para protección UV. Las briofitas carecen de algunas pero las traqueofitas las tienen todas.",
                keywords: ["transición a tierra", "adaptaciones vegetales", "tejidos vasculares", "cutícula", "estomas"]
            },
            {
                question: "¿Qué características únicas tienen los hongos?",
                answerd: "Los hongos se caracterizan por: 1) Nutrición por absorción (secretan enzimas), 2) Pared celular de quitina, 3) Cuerpo filamentoso (hifas que forman micelio), 4) Reproducción por esporas, 5) Almacenamiento de glucógeno (como animales), y 6) Formar relaciones simbióticas (micorrizas, líquenes). Son más cercanos evolutivamente a animales que a plantas.",
                keywords: ["quitina", "hifas", "micelio", "esporas", "relaciones simbióticas"]
            }
        ]
    },
    {
        subtheme: "virus",
        title: "Virus: Estructura y Replicación",
        description: "Características de los virus y su interacción con los organismos hospedadores",
        questions: [
            {
                question: "¿Los virus son seres vivos? ¿Por qué?",
                answerd: "Los virus se consideran en la frontera entre lo vivo y lo inerte porque: 1) Tienen material genético (ADN o ARN) pero no metabolismo propio, 2) Pueden evolucionar pero no crecer o reproducirse independientemente, 3) No tienen organización celular ni realizan funciones vitales fuera de un huésped. La mayoría de científicos los considera entidades biológicas pero no organismos vivos.",
                keywords: ["definición de vida", "características", "parasitos obligados", "discusión científica"]
            },
            {
                question: "¿Cómo se clasifican los virus?",
                answerd: "Los virus se clasifican principalmente por: 1) Tipo de ácido nucleico (ADN/ARN, cadena simple/doble), 2) Presencia de envoltura lipídica, 3) Simetría de la cápside (icosaédrica, helicoidal, compleja), 4) Mecanismo de replicación, y 5) Organismo huésped (animales, plantas, bacterias - bacteriófagos). El sistema ICTV usa taxonomía con órdenes, familias, géneros y especies virales.",
                keywords: ["clasificación", "ADN viral", "ARN viral", "cápside", "bacteriófagos"]
            },
            {
                question: "¿Qué ciclos de replicación viral existen?",
                answerd: "Los virus tienen dos ciclos principales: 1) Ciclo lítico (virus se replica rápidamente, lisando la célula para liberar progenie), y 2) Ciclo lisogénico (material genético viral se integra al huésped y replica pasivamente hasta que se induce el ciclo lítico). Algunos virus tienen ciclos persistentes (liberación continua sin lisis) o transforman células (como oncovirus).",
                keywords: ["ciclo lítico", "ciclo lisogénico", "lisogenia", "replicación", "liberación viral"]
            },
            {
                question: "¿Qué son los retrovirus y cómo funcionan?",
                answerd: "Los retrovirus son virus ARN que usan la transcriptasa inversa para convertir su ARN en ADN que se integra al genoma huésped (provirus). Ejemplo paradigmático es el VIH. Su replicación implica: 1) Conversión de ARN→ADN, 2) Integración al ADN huésped, 3) Transcripción de genes virales por maquinaria celular, y 4) Ensamblaje de nuevas partículas virales que brotan de la célula.",
                keywords: ["retrovirus", "VIH", "transcriptasa inversa", "provirus", "ciclo replicativo"]
            },
            {
                question: "¿Qué papel ecológico y evolutivo tienen los virus?",
                answerd: "Los virus son importantes porque: 1) Controlan poblaciones microbianas (regulación ecológica), 2) Facilitan transferencia horizontal de genes entre especies (contribución evolutiva), 3) Afectan ciclos biogeoquímicos (como en océanos), 4) Han moldeado sistemas inmunes, y 5) Endovirus pueden conferir beneficios a huéspedes. Se estima que son la entidad biológica más abundante en la Tierra.",
                keywords: ["rol ecológico", "transferencia genética", "evolución", "abundancia", "simbiosis virales"]
            }
        ]
    },
    {
        subtheme: "celulas",
        title: "Estructura y Función Celular",
        description: "Organización de los sistemas celulares en procariotas y eucariotas",
        questions: [
            {
                question: "¿Cuáles son las diferencias entre células procariotas y eucariotas?",
                answerd: "Las principales diferencias son: 1) Presencia de núcleo definido (eucariotas) vs nucleoide (procariotas), 2) Tamaño (eucariotas 10-100μm, procariotas 1-5μm), 3) Organelas membranosas (eucariotas tienen mitocondrias, RE, Golgi), 4) Citoplasma organizado (citoesqueleto en eucariotas), 5) División celular (mitosis/meiosis vs fisión binaria), y 6) Ribosomas (80S vs 70S).",
                keywords: ["comparación", "núcleo", "organelas", "tamaño", "ribosomas"]
            },
            {
                question: "¿Qué funciones cumplen las principales organelas celulares?",
                answerd: "Las organelas clave y sus funciones son: 1) Núcleo (almacena ADN, control celular), 2) Mitocondrias (respiración celular, ATP), 3) Retículo endoplasmático (síntesis proteica -RER- y lípidos -REL-), 4) Aparato de Golgi (modificación, empaquetado moléculas), 5) Lisosomas (digestión intracelular), 6) Cloroplastos (fotosíntesis en plantas), y 7) Vacuolas (almacenamiento, presión de turgencia).",
                keywords: ["funciones", "mitocondrias", "Golgi", "retículo", "lisosomas"]
            },
            {
                question: "¿Cómo se organiza el citoesqueleto y qué funciones tiene?",
                answerd: "El citoesqueleto consta de: 1) Microfilamentos (actina, 7nm, movimiento y forma), 2) Microtúbulos (tubulina, 25nm, 'vías' celulares, huso mitótico), y 3) Filamentos intermedios (variados, 8-12nm, soporte mecánico). Funciones incluyen: soporte estructural, movimiento celular (cilios, flagelos), transporte intracelular, división celular, y mantenimiento de la forma.",
                keywords: ["microfilamentos", "microtúbulos", "actina", "tubulina", "movimiento celular"]
            },
            {
                question: "¿Qué es el ciclo celular y cómo se regula?",
                answerd: "El ciclo celular es el proceso ordenado de crecimiento y división con fases: G1 (crecimiento), S (replicación ADN), G2 (preparación), M (mitosis), y G0 (reposo). Se regula por: 1) Ciclinas y quinasas dependientes (CDKs) que forman complejos activadores, 2) Puntos de control (checkpoints) que verifican condiciones, y 3) Señales externas/internas (factores de crecimiento, daño al ADN). Fallas en regulación llevan a cáncer.",
                keywords: ["fases", "mitosis", "ciclinas", "puntos de control", "regulación"]
            },
            {
                question: "¿Qué diferencias hay entre células vegetales y animales?",
                answerd: "Las células vegetales tienen: 1) Pared celular de celulosa, 2) Cloroplastos, 3) Gran vacuola central, 4) Plasmodesmos (vs uniones en animales), y carecen de: 1) Centriolos (en la mayoría), 2) Lisosomas típicos, y 3) Matriz extracelular como en animales. Ambas tienen mitocondrias pero plantas usan principalmente para funciones no fotosintéticas.",
                keywords: ["pared celular", "cloroplastos", "vacuola", "plasmodesmos", "diferencias estructurales"]
            }
        ]
    }
];