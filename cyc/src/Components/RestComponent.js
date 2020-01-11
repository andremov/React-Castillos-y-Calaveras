import React, {Component, Fragment} from 'react';
import {terms} from "../Terms";
import {titleCase} from "../Utilities";
import {hitDice} from "../Parts";

export class RestComponent extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {this.restIntro()}
                    {this.short()}
                    {this.long()}
                    {hitDice()}
                </div>
            </div>
        );
    }

    restIntro() {
        return(
            <Fragment>
                <div className={'header1 serif bold'}>
                    {titleCase(terms.rest.inf)}
                </div>

                <div className={'description'}>
                    Por heroicos que puedan ser, los aventureros no pueden pasar cada
                    hora del día en medio de la exploración, la interacción social y
                    el combate. Necesitan descansar: tiempo para dormir y comer, atender
                    sus heridas, refrescar sus mentes y espíritus para lanzar hechizos,
                    y prepararse para una nueva aventura.

                    Los aventureros pueden tomar descansos cortos en medio de un día de
                    aventuras y un largo descanso para terminar el día.
                </div>
            </Fragment>
        )
    }

    short() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.rest.short)}
                </div>

                <div className={'description'}>
                    Un {terms.rest.short} es un período de inactividad, de al menos 1 hora de duración,
                    durante el cual un personaje no hace nada más extenuante que comer, beber, leer
                    o atender a heridas.
                </div>
            </Fragment>
        )
    }

    long() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.rest.long)}
                </div>

                <div className={'description'}>
                    Un {terms.rest.long} es un período de tiempo de inactividad prolongado, de al
                    menos 8 horas, durante el cual un personaje duerme o realiza una actividad ligera:
                    leer, hablar o comer.
                    <br /><br />
                    Si se ve
                    interrumpido por un período de actividad extenuante (al menos 1 hora de caminar,
                    pelear, lanzar hechizos o una actividad de aventura similar), los personajes deben
                    comenzar el descanso nuevamente para obtener algún beneficio.
                    <br /><br />
                    Al final de un {terms.rest.long}, un personaje recupera todos los {terms.hit.points.plural} perdidos.
                    El personaje también recupera todos los {terms.hit.die.plural} gastados, hasta la mitad del
                    número maximo de ellos (mínimo de un dado).
                    <br /><br />
                    Un personaje no puede beneficiarse de más de un {terms.rest.long} en un período de
                    24 horas, y un personaje debe tener al menos 1 {terms.hit.points.singular} al comienzo
                    del {terms.rest.name}
                    para obtener sus beneficios.
                </div>
            </Fragment>
        )
    }
}
