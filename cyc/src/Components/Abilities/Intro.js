import React, {Component, Fragment} from 'react';
import {AbilityModsTable} from "../AbilityModsTable";
import {terms} from "../../Data/Terms";
import {abilityChecks, abilityIntro, level} from "../../Parts";
import {titleCase} from "../../Utilities";
import {ArrowBtn} from "../ArrowBtn";

export class Intro extends Component {

    render() {
        return (
            <Fragment>
                {abilityIntro(false)}
                {this.modifierSection()}
                {abilityChecks()}
                <ArrowBtn url={'/rolls/check'} back={false} text={titleCase(terms.rolls.ability.long.plural)}/>
                {level()}
                <ArrowBtn url={'/level'} back={false} text={titleCase(terms.level.plural)}/>
            </Fragment>
        );
    }

    modifierSection() {
        return(
            <Fragment>

                <div className={'ability-info'}>
                    <div>
                        {this.modifiers()}
                        {this.skills()}
                    </div>

                    <AbilityModsTable />

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
                    y la habilidad de un individuo en
                    una {terms.skill.plural} demuestra un enfoque en ese aspecto.
                </div>

            </Fragment>
        )
    }

}
