import React, {Component, Fragment} from 'react';
import {terms} from "../Data/Terms";
import {ArrowBtn} from "./ArrowBtn";
import {titleCase} from "../Utilities";

export class InspirationComponent extends Component {

    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {this.inspirationIntro()}
                    {this.inspirationGain()}
                    {this.inspirationUse()}
                    <ArrowBtn url={'/rolls'} back={false} text={titleCase(terms.rolls.plural)}/>
                </div>
            </div>
        );
    }

    inspirationIntro() {
        return(
            <Fragment>
                <div className={'header1 serif bold'}>
                    {terms.inspiration}
                </div>

                <div className={'description'}>
                    {terms.inspiration} es una regla que el {terms.gm} puede usar para recompensar
                    a un jugador por interpretar a su personaje de una manera fiel a sus rasgos de
                    personalidad, ideales, vínculos y fallas.
                </div>
            </Fragment>
        )
    }

    inspirationGain() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    Ganar {terms.inspiration}
                </div>

                <div className={'description'}>
                    El {terms.gm} puede elegir dar {terms.inspiration} por una variedad de razones.
                    Por lo general, los {terms.gm} lo otorgan cuando juegan de acuerdo a su
                    personalidad, cede ante los inconvenientes presentados por un defecto o
                    vínculo y, por consiguiente, retrata a su personaje de una manera convincente.
                    <br /><br />
                    La {terms.inspiration} se tiene o no se tiene, no se puede acumular, ademas se vence.
                </div>
            </Fragment>
        )
    }

    inspirationUse() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    Usar {terms.inspiration}
                </div>

                <div className={'description'}>
                    Si tiene {terms.inspiration}, se puede gastar con cualquier {terms.rolls.singular}.
                    Gastar {terms.inspiration} da {terms.bonus.advantage.singular}.
                    <br /><br />
                    Un jugador puede entregar su {terms.inspiration} a otro jugador por su
                    buen juego de rol, por su inteligencia o por hacer algo emocionante en
                    el juego, si el {terms.gm} lo permite.
                </div>
            </Fragment>
        )
    }
}
