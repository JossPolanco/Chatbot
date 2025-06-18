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
        _id: ObjectId("64a1b2c3d4e5f6789012345f"),
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
        subthemes: "segunda_guerra_mundial",
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
        subthemes: "guerra_fria",
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
        subthemes: "inquisicion",
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
        subthemes: "tenochtitlan",
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
        subthemes: "renacimiento",
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
        subthemes: "porfiriato",
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

const Geografia = {

}

const Filosofia = {

}

const programacion = {

}

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

const Astrologia = {

}