import React, {Component, Fragment} from 'react';
import {diceRolls} from "../../Parts";
import {ArrowBtn} from "../ArrowBtn";
import {titleCase} from "../../Utilities";
import {terms} from "../../Data/Terms";

export class Intro extends Component {
    render() {
        return (
            <Fragment>

                {diceRolls(false)}



                <ArrowBtn back={false} url={'/rolls/check'} text={titleCase(terms.rolls.ability.long.singular)} />
                <ArrowBtn back={false} url={'/rolls/saving'} text={titleCase(terms.rolls.saving.singular)} />
                <ArrowBtn back={false} url={'/rolls/attack'} text={titleCase(terms.rolls.attack.singular)} />

                {this.advantage()}
            </Fragment>
        );
    }

    advantage() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.bonus.advantage.singular) + " y " +titleCase(terms.bonus.disadvantage.singular)}
                </div>

                <div className={'description'}>
                    Al tener {terms.bonus.advantage.singular} o {terms.bonus.disadvantage.plural}, se lanza
                    un segundo d20 al hacer el {terms.rolls.singular}.
                    Para {terms.bonus.advantage.singular}, se usa el mayor de
                    los dos {terms.rolls.plural}, y para {terms.bonus.disadvantage.plural} se usa
                    el {terms.rolls.singular} más bajo.
                    <br /><br />
                    Si varias situaciones afectan un {terms.rolls.singular} y cada una le
                    otorga {terms.bonus.advantage.singular} o le impone {terms.bonus.disadvantage.singular},
                    no se tira más de un d20 adicional.
                    <br /><br />
                    Si las circunstancias hacen que
                    un {terms.rolls.singular} tenga {terms.bonus.advantage.singular} y {terms.bonus.disadvantage.plural},
                    se considera que no tiene ninguna de ellas.
                    <br /><br />
                    La {terms.bonus.advantage.singular} o {terms.bonus.disadvantage.plural} se obtiene
                    con {terms.spell.plural} o {terms.traits.plural}. La {terms.inspiration.singular} también
                    puede causar estos efectos.
                    <br /><br />
                    El {terms.gm} también puede decidir que las circunstancias influyen en
                    un {terms.rolls.singular} en una dirección u otra y, como resultado,
                    otorgan {terms.bonus.advantage.singular} o {terms.bonus.disadvantage.plural}.
                </div>
            </Fragment>
        )
    }
}
