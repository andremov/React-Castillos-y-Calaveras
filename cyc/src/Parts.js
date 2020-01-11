import {terms} from "./Terms";
import React, {Fragment} from "react";
import {titleCase} from "./Utilities";


export function fancyAbilities() {
    return(
        <span className={'serif'}>{terms.ability.title}</span>
    )
}

export function diceRolls(subtitle = true) {
    return (
        <Fragment>

            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.rolls.plural)}
            </div>

            <div className={'description'}>
                El juego tiene tres {terms.rolls.plural} principales:
                <ul>
                    <li> {titleCase(terms.rolls.ability.long.plural)} </li>
                    <li> {titleCase(terms.rolls.saving.plural)} </li>
                    <li> {titleCase(terms.rolls.attack.plural)} </li>
                </ul>
                Estos se basan en {fancyAbilities()}.
                <br /><br />
                Los tres {terms.rolls.plural} funcionan de la siguiente forma:
                <ol>
                    <li> Tirar un d20 </li>
                    <li> Agregar un {terms.ability.modifier.long.singular} derivado de una de {fancyAbilities()} </li>
                    <li> Comparar el total con un número objetivo </li>
                </ol>
            </div>

        </Fragment>
    )
}

export function passive(subtitle = true) {
    return (
        <Fragment>

            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.rolls.passive.plural)}
            </div>

            <div className={'description'}>
                Un {terms.rolls.passive.singular} es un tipo especial
                de {terms.rolls.ability.long.singular} que no
                involucra {terms.rolls.plural}.
                <br /><br />
                Tal {terms.rolls.ability.short.singular} puede representar
                el resultado promedio de una tarea realizada repetidamente,
                como buscar puertas secretas una y otra vez, o puede usarse
                cuando el {terms.gm} quiere determinar en secreto si los personajes
                tienen éxito en algo sin tirar dados, como notar un monstruo escondido.
                <br /><br />
                Aquí se explica cómo determinar el total de un personaje para
                un {terms.rolls.passive.singular}:
                <br />
                10 + todos los {terms.ability.modifier.short.plural} que normalmente se aplican
                al {terms.rolls.ability.short.singular}.
                <br /><br />
                Si el personaje tiene {terms.bonus.advantage.singular} en el {terms.rolls.ability.short.singular},
                suma 5.<br />
                Para {terms.bonus.disadvantage.singular}, resta 5.<br />

            </div>

        </Fragment>
    )
}

export function group(subtitle = true) {
    return (
        <Fragment>

            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.rolls.group.plural)}
            </div>

            <div className={'description'}>
                Cuando la {terms.party.short} intenta lograr algo en conjunto,
                el {terms.gm} puede solicitar un {terms.rolls.group.singular}.

                <div className={'header3 serif'}>
                    {titleCase(terms.rolls.group.majority.plural)}
                </div>

                En un {terms.rolls.group.majority.singular}, todos los miembros de
                la {terms.party.short} hacen un {terms.rolls.ability.long.singular}.
                <br /><br />
                Si al menos la mitad de la {terms.party.short} tiene éxito,
                la {terms.party.short} tiene éxito, de lo contrario, la {terms.party.short} falla.

                <div className={'header3 serif'}>
                    {titleCase(terms.rolls.group.objective.plural)}
                </div>

                En un {terms.rolls.group.objective.singular}, todos los miembros de
                la {terms.party.short} hacen un {terms.rolls.ability.long.singular}.
                <br /><br />
                Si la suma de los {terms.rolls.ability.long.plural} de
                la {terms.party.short} sobrepasa un objetivo, la {terms.party.short} tiene
                éxito, de lo contrario, la {terms.party.short} falla.
            </div>
        </Fragment>
    )
}

export function contest(subtitle = true) {
    return (
        <Fragment>

            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.rolls.contest.plural)}
            </div>

            <div className={'description'}>
                Una {terms.rolls.contest.singular} sucede cuando los
                esfuerzos de un personaje o monstruo se oponen directamente
                a los de otro. Esto puede ocurrir cuando ambos intentan hacer
                lo mismo y solo uno puede tener éxito, o cuando uno de ellos
                está tratando de evitar que el otro logre un objetivo.
                <br /><br />
                Ambos participantes de una {terms.rolls.contest.singular} hacen
                un {terms.rolls.ability.long.singular}, pero
                en lugar de comparar el total con un {terms.dc.short.singular}, comparan los totales
                de sus dos {terms.rolls.ability.short.singular}.
                <br /><br />
                El participante con el {terms.rolls.ability.short.singular}
                más alto gana el concurso.

                Si la {terms.rolls.contest.singular} resulta en un empate, la situación sigue siendo
                la misma que antes de la {terms.rolls.contest.singular}.
                Por lo tanto, un concursante podría ganar
                la {terms.rolls.contest.singular} por defecto.
            </div>

        </Fragment>
    )
}
