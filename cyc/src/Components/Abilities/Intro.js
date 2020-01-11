import React, {Component, Fragment} from 'react';
import {AbilityModsTable} from "../AbilityModsTable";
import {terms} from "../../Terms";
import {fancyAbilities} from "../../Parts";
import {titleCase} from "../../Utilities";

export class Intro extends Component {

    render() {
        return (
            <div className={'ability-intro'}>

                <div className={'header1 serif bold'}>
                    {titleCase(terms.ability.plural)}
                </div>

                {this.introduction()}
                {this.modifierSection()}
                {this.checks()}

            </div>
        );
    }

    introduction() {
        return(
            <Fragment>
                <div className={'info-block'}>
                    <span className={'description'}>
                        {fancyAbilities()} proporcionan una descripción rápida
                        de las características físicas y mentales de cada criatura.
                        <br /><br />
                        Cada tarea que un personaje o monstruo podría intentar
                        en el juego está cubierta por una de {fancyAbilities()}.
                        <br /><br />
                        Esta sección explica con más detalle lo que significan
                        esas {terms.ability.plural} y las formas en que se usan en el juego.
                    </span>
                </div>
            </Fragment>
        );
    }

    modifierSection() {
        return(
            <Fragment>

                <div className={'info-block'}>
                    <div>
                        {this.modifiers()}
                        {this.skills()}
                    </div>

                    <AbilityModsTable />

                </div>

            </Fragment>
        )
    }

    checks() {
        return (
            <Fragment>

                <div className={'header2 serif bold'}>
                    {titleCase(terms.rolls.ability.short.plural)}
                </div>

                <div className={'description'}>
                    Un {terms.rolls.ability.long.singular} pone a prueba el talento innato y el
                    entrenamiento de un personaje o monstruo en un esfuerzo
                    por superar un desafío. El {terms.gm} pide un {terms.rolls.ability.long.singular} cuando
                    un personaje o monstruo intenta una acción
                    (que no sea un ataque) que tiene la posibilidad de fallar.
                    Cuando el resultado es incierto, los dados determinan los resultados.
                    <br/><br/>
                    Para cada {terms.rolls.ability.long.singular}, el {terms.gm} decide cuál
                    de {fancyAbilities()} es relevante para la tarea en cuestión
                    y la dificultad de la tarea, representada por un {terms.dc.long.singular}.
                    <br /><br />
                    Cuanto más difícil es una tarea, mayor es su {terms.dc.short.singular}.

                </div>

            </Fragment>
        )
    }

    modifiers() {
        return (
            <Fragment>

                <div className={'header2 serif bold'}>
                    {titleCase(terms.ability.modifier.short.plural)}
                </div>

                <div className={'description'}>
                    Cada una de las {terms.ability.plural} de una criatura tiene una puntuación
                    que define la magnitud de esa {terms.ability.singular}, un {terms.ability.score.long.singular}.
                    <br /> <br />
                    Un {terms.ability.score.long.singular} no es solo una medida de las {terms.ability.plural} innatas,
                    sino que también abarca el entrenamiento y la competencia de una criatura
                    en actividades relacionadas con esa {terms.ability.singular}.
                    <br /> <br />
                    Cada {terms.ability.singular} también tiene un {terms.ability.modifier.short.singular}, derivado de
                    su {terms.ability.score.short.singular} y que varía de −5 a +10.
                    <br /> <br />
                    Para determinar un {terms.ability.modifier.long.singular} sin consultar la tabla, resta
                    10 del {terms.ability.score.long.singular} y luego divide por 2, redondeando hacia abajo.
                    <br /> <br />
                    Debido a que los {terms.ability.modifier.long.plural} afectan a casi todos los tres
                    rolls principales, los {terms.ability.modifier.long.plural} son utilizados con más
                    frecuencia que sus {terms.ability.score.short.singular} asociados.
                    <br /> <br />
                </div>

            </Fragment>
        )
    }

    skills() {
        return (
            <Fragment>

                <div className={'header2 serif bold'}>
                    {titleCase(terms.skill.plural)}
                </div>

                <div className={'description'}>
                    Cada {terms.ability.singular} cubre una amplia gama de capacidades,
                    incluidas las {terms.skill.plural} en las que un personaje o
                    un monstruo pueden ser competentes. Una {terms.skill.singular} representa
                    un aspecto específico de un {terms.ability.score.long.singular},
                    y la habilidad de un individuo en una {terms.skill.plural}
                    demuestra un enfoque en ese aspecto.
                    <br /><br />
                    (Las habilidades iniciales de un personaje se determinan en la creación del personaje).
                </div>

            </Fragment>
        )
    }

}
