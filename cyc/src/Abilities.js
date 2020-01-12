import {terms} from "./Terms";
import str from './assets/str.svg';
import dex from './assets/dex.svg';
import con from './assets/con.svg';
import wis from './assets/wis.svg';
import int from './assets/int.svg';
import cha from './assets/cha.svg';

export var abilities = [
    {
        name : "Fuerza",
        code : "STR",
        url : "/abilities/str",
        icon : str,
        description_short : "Mide poder fisico.",
        description_long : "La fuerza mide el poder corporal, el entrenamiento atlético y " +
            "la medida en que puede ejercer fuerza física bruta.",
        description_checks : "Un " + terms.rolls.ability.short.singular + "de fuerza puede modelar cualquier intento de levantar, " +
            "empujar, tirar o romper algo, forzar su cuerpo a atravesar un espacio o aplicar fuerza " +
            "bruta a una situación.",
        checks : [
            "Forzar una puerta atascada, bloqueada o enrejada",
            "Libérarse de esposas",
            "Empujarse a través de un túnel que es demasiado pequeño",
            "Aferrarse a un carruaje mientras es arrastrado detrás de él",
            "Voltear una estatua",
            "Evitar que una roca ruede"
        ],
        skills : [
            "Atletismo"
        ]
    },
    {
        name : "Destreza",
        code : "DEX",
        url : "/abilities/dex",
        icon : dex,
        description_short : "Mide la agilidad.",
        description_long : "La destreza mide la agilidad, los reflejos y el equilibrio.",
        description_checks : "Un " + terms.rolls.ability.short.singular + "de destreza puede modelar cualquier intento de " +
            "moverse ágil, rápida o silenciosamente, o evitar caerse sobre una base difícil.",
        checks : [
            "Forzar una puerta atascada, bloqueada o enrejada",
            "Libérarse de esposas",
            "Empujarse a través de un túnel que es demasiado pequeño",
            "Aferrarse a un carruaje mientras es arrastrado detrás de él",
            "Voltear una estatua",
            "Evitar que una roca ruede"
        ],
        skills : [
            "Acrobacias",
            "Sigilo",
            "Juego de manos"
        ]
    },
    {
        name : "Complexión",
        code : "CON",
        url : "/abilities/con",
        icon : con,
        description_short : "Mide la resistencia.",
        description_long : "La complexión mide la salud, la resistencia y la fuerza vital.",
        description_checks : "Los " + terms.rolls.ability.short.singular + "de complexión son poco comunes, y no se aplican" +
            " habilidades a los controles de constitución, porque la resistencia que representa" +
            " esta habilidad es en gran medida pasiva en lugar de implicar un esfuerzo específico" +
            " por parte de un personaje o monstruo.",
        checks : [
            "Contener la respiración",
            "Marchar o trabajar durante horas sin descanso",
            "Pasar de largo",
            "Sobrevivir sin comida ni agua",
            "Fondo blanco de un solo"
        ],
        skills : [
            ""
        ]
    },
    {
        name : "Inteligencia",
        code : "INT",
        url : "/abilities/int",
        icon : int,
        description_short : "Mide el razonamiento y la memoria.",
        description_long : "La inteligencia mide la agudeza mental, la precisión de los recuerdos" +
            " y la capacidad de razonar.",
        description_checks : "Un " + terms.rolls.ability.short.singular + "de inteligencia entra en juego cuando se necesita recurrir " +
            "a la lógica, la educación, la memoria o el razonamiento deductivo.",
        checks : [
            "Comunicarse con una criatura sin usar palabras.",
            "Estimar el valor de un objeto precioso",
            "Armar un disfraz para hacerse pasar como guardia de la ciudad",
            "Falsificar un documento",
            "Recordar la historia de una artesanía o comercio",
            "Ganar un juego de habilidad."
        ],
        skills : [
            "Arcana",
            "Historia",
            "Investigación",
            "Naturaleza",
            "Religión"
        ]
    },
    {
        name : "Sabiduría",
        code : "WIS",
        url : "/abilities/wis",
        icon : wis,
        description_short : "Mide la percepción y perspicacia.",
        description_long : "La sabiduría refleja cuán sintonizado estás con el mundo que " +
            "te rodea y representa la percepción y la intuición.",
        description_checks : "Un " + terms.rolls.ability.short.singular + "de sabiduría podría reflejar un esfuerzo por" +
            " leer el lenguaje corporal, comprender los sentimientos de alguien, notar cosas " +
            "sobre el medio ambiente o cuidar a una persona lesionada.",
        checks : [
            "Tener una intuición sobre qué curso de acción seguir",
            "Discernir si una criatura aparentemente muerta o viva es muerto viviente"
        ],
        skills : [
            "Manejo de animales",
            "Percepción",
            "Perspicacia",
            "Medicina",
            "Supervivencia"
        ]
    },
    {
        name : "Carisma",
        code : "CHA",
        url : "/abilities/cha",
        icon : cha,
        description_short : "Mide la fuerza de personalidad.",
        description_long : "La carisma mide tu habilidad para interactuar efectivamente con " +
            "otros. Incluye factores como la confianza y la elocuencia, y puede representar" +
            " una personalidad encantadora o dominante.",
        description_checks : "Puede surgir un " + terms.rolls.ability.short.singular + "de carisma cuando intentas influir o " +
            "entretener a otros, cuando tratas de causar una impresión o decir una mentira " +
            "convincente, o cuando estás navegando por una situación social difícil.",
        checks : [
            "Encontrar a la mejor persona para hablar sobre noticias, rumores y chismes.",
            "Mezclarse en una multitud para entender los temas clave de conversación"
        ],
        skills : [
            "Engaño",
            "Intimidación",
            "Actuación",
            "Persuasión"
        ]
    },
];