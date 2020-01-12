import React, {Component, Fragment} from 'react';
import {terms} from "../Data/Terms";
import {titleCase} from "../Utilities";
import {abilities} from "../Data/Abilities";
import {attackRolls, healing} from "../Parts";
import {ArrowBtn} from "./ArrowBtn";


export class CombatComponent extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>

                    {this.combatIntro()}
                    {this.surprise()}
                    {this.initiative()}
                    <ArrowBtn back={false} url={'/rolls/check'} text={titleCase(terms.rolls.ability.long.singular)} />
                    <ArrowBtn url={'/abilities'} back={false} text={titleCase(terms.ability.plural)}/>
                    {this.actions()}
                    {attackRolls()}
                    <ArrowBtn url={'/rolls/attack'} back={false} text={titleCase(terms.rolls.attack.plural)}/>
                    {this.damage()}
                    <ArrowBtn url={'/abilities'} back={false} text={titleCase(terms.ability.plural)}/>
                    {healing()}
                    <ArrowBtn url={'/rest'} back={false} text={titleCase(terms.rest.inf)}/>
                    <ArrowBtn url={'/hitpoints'} back={false} text={titleCase(terms.hit.points.plural)}/>
                    {this.crit()}
                    <ArrowBtn url={'/rolls/attack'} back={false} text={titleCase(terms.rolls.attack.plural)}/>
                    {this.cover()}
                    <ArrowBtn url={'/rolls/saving'} back={false} text={titleCase(terms.rolls.saving.plural)}/>
                </div>
            </div>
        );
    }

    combatIntro() {
        return(
            <Fragment>
                <div className={'header1 serif bold'}>
                    {titleCase(terms.combat.name)}
                </div>

                <div className={'description'}>
                    Un encuentro de combate típico es un choque entre dos bandos.
                    El juego organiza el caos del combate en un ciclo de rondas y turnos.
                    <br /><br />
                    Durante una ronda, cada participante en una
                    batalla toma un turno. El orden de los turnos se determina al comienzo
                    de un encuentro de combate, cuando todos lanzan {terms.combat.init}. Una vez que
                    todos han tomado su turno, la pelea continúa a la siguiente ronda si
                    ninguna de las partes ha vencido a la otra.
                </div>
            </Fragment>
        )
    }

    surprise() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.combat.surprise)}
                </div>

                <div className={'description'}>
                    En ciertas situaciones, un lado de la batalla toma por sorpresa al otro.
                    Si ninguna de las partes intenta ser sigilosa, usualmente se notan automáticamente.
                    <br /><br />
                    Una criatura sorprendida, no se puede mover ni realizar una acción en su primer turno del combate.
                    Un miembro de un grupo puede sorprenderse incluso si los otros miembros no lo están.
                </div>
            </Fragment>
        )
    }

    initiative() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.combat.init)}
                </div>

                <div className={'description'}>
                    La {terms.combat.init} determina el orden de turnos durante el combate.
                    Cuando comience el combate,
                    cada participante realiza un {terms.rolls.ability.short.singular} de {abilities[1].name}.
                    El {terms.GM} luego clasifica a los combatientes en orden de mayor a menor, y este
                    es el orden de {terms.combat.init}. Ese es el orden
                    en el que toman sus turnos. El orden no cambia durante el combate.

                    <div className={'header3 serif bold'}>
                        Resolviendo Empates
                    </div>
                    Si se produce un empate entre criaturas controladas por el {terms.gm},
                    el {terms.gm} decide el orden.
                    <br />
                    Si se produce un empate entre jugadores, los jugadores deciden entre ellos.
                    <br />
                    El {terms.gm} puede decidir el orden si el empate es entre un monstruo y un jugador.
                    Opcionalmente, el {terms.gm} puede resolver los empates con otro {terms.rolls.singular}.
                </div>
            </Fragment>
        )
    }

    actions() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    Acciones en Combate
                </div>

                <div className={'description'}>
                    Cuando realiza una acción en su turno, puede realizar una de las
                    siguientes acciones, una acción que obtuvo de su clase
                    o una característica especial, o una acción que improvisa.
                    <br /><br />
                    Cuando describe una acción improvisada,
                    el {terms.gm} le dice si esa acción es posible y qué tipo de {terms.rolls.singular} debe hacer,
                    si corresponde, para determinar el éxito o el fracaso.

                    <div className={'header3 serif bold'}>
                        Ataque
                    </div>
                    La acción más común para tomar en combate es atacar.


                    <div className={'header3 serif bold'}>
                        Usar un {terms.spell.singular}
                    </div>
                    Los lanzadores de {terms.spell.plural} tienen acceso a {terms.spell.plural} y pueden usarlos
                    con gran efecto en combate.


                    <div className={'header3 serif bold'}>
                        Defender
                    </div>
                    Al defender, se enfoca completamente en evitar ataques.
                    <br />
                    Hasta el comienzo de su próximo turno, cualquier {terms.rolls.attack.singular} recibido
                    tiene {terms.bonus.disadvantage.singular} si puedes ver al atacante, y
                    hace un {terms.rolls.saving.singular} de {abilities[1].name} con {terms.bonus.advantage.singular}.


                    <div className={'header3 serif bold'}>
                        Ayudar
                    </div>
                    Puede prestar su ayuda a otra criatura a completar una tarea.
                    <br />
                    Cuando realiza
                    la acción de ayuda, la criatura que recibe la ayuda gana {terms.bonus.advantage.singular} en
                    el próximo {terms.rolls.ability.long.singular} que
                    realice para realizar esa tarea, siempre
                    que haga el {terms.rolls.ability.short.singular} antes del comienzo de su próximo turno.


                    <div className={'header3 serif bold'}>
                        Preparar
                    </div>
                    A veces quiere esperar una circunstancia particular
                    antes de actuar.
                    <br />
                    Para hacerlo, puede prepararse en tu turno.
                    Primero, se decide la circunstancia perceptible que desencadenará su acción.
                    Luego, se elige la acción a tomar en respuesta.
                    <br /><br />
                    Cuando se produce la circunstancia, puede realizar su acción justo después de que
                    suceda o ignorarlo.
                    <br /><br />
                    Si prepara un hechizo, debe mantener la
                    magia del hechizo. Si su concentración se rompe, el
                    hechizo se disipa sin tener efecto.


                    <div className={'header3 serif bold'}>
                        Buscar
                    </div>
                    Cuando realiza la acción de búsqueda, dedica su atención a encontrar algo.
                    <br/>
                    Dependiendo de la naturaleza de su búsqueda, el {terms.gm} podría requerir
                    un {terms.rolls.ability.long.singular}. Al hacer esto,
                    está en {terms.bonus.disadvantage.singular} a cualquier ataque.


                    <div className={'header3 serif bold'}>
                        Usar un objeto
                    </div>
                    Cuando un objeto requiere su acción
                    para su uso, realiza la acción usar un objeto.
                    <br/>
                    Esta acción también es útil cuando
                    quiera interactuar con más de un objeto en su turno.
                </div>
            </Fragment>
        )
    }

    crit() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.crit.singular)}
                </div>

                <div className={'description'}>
                    Si el {terms.rolls.attack.singular} fue un 20, el ataque es un {terms.crit.singular}.

                    Cuando obtiene un {terms.rolls.attack.singular}, tire todos los dados de daño dos veces y súmalos.
                    Luego agregue los {terms.ability.modifier.short.plural} relevantes de la forma habitual.

                </div>
            </Fragment>
        )
    }

    damage() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    {titleCase(terms.rolls.damage.plural)}
                </div>

                <div className={'description'}>
                    Cada arma, hechizo y habilidad de monstruo dañino especifica el daño que causa.
                    Tire los dados involucrados con el ataque, agregue {terms.ability.modifier.short.plural} y
                    aplica el daño a su objetivo.
                    <br/><br/>
                    Muchos factores pueden otorgar una
                    bonificación o penalización al daño, es posible inflingir 0 daño, pero nunca
                    daño negativo.
                    <br/><br/>
                    Cuando ataca con un arma, agrega su {terms.ability.modifier.long.singular},
                    el mismo {terms.ability.modifier.short.singular} utilizado
                    para el {terms.rolls.attack.singular}, al daño.
                    Un {terms.spell.singular}  dice qué dados tirar para
                    el daño y si agregar algún {terms.ability.modifier.short.singular}.
                    <br/><br/>
                    Si un {terms.spell.singular} u otro efecto hace daño a más de un objetivo al mismo tiempo,
                    se realiza un solo {terms.rolls.damage.plural} para todos ellos.
                </div>
            </Fragment>
        )
    }

    cover() {
        return(
            <Fragment>
                <div className={'header2 serif bold'}>
                    Cubrirse
                </div>

                <div className={'description'}>
                    Las paredes, los árboles, las criaturas y otros obstáculos
                    pueden proporcionar cobertura durante el combate, haciendo
                    que un objetivo sea más difícil de dañar. Un objetivo puede
                    beneficiarse de la cobertura solo cuando un ataque u otro efecto
                    se origina en el lado opuesto de la cobertura.
                    <br/><br/>
                    Hay tres grados de cobertura. Si un objetivo está detrás de
                    múltiples fuentes de cobertura, solo se aplica el grado de
                    cobertura más protector; los grados no se suman.
                    <br/><br/>
                    Un objetivo con media cobertura tiene una bonificación de +2
                    a {terms.ac.short.singular} y {terms.rolls.saving.singular} de {abilities[1].name}.
                    <br/>
                    Un objetivo tiene media cobertura si un obstáculo bloquea
                    al menos la mitad de su cuerpo.
                    <br/><br/>
                    Un objetivo con media cobertura tiene una bonificación de +5
                    a {terms.ac.short.singular} y {terms.rolls.saving.singular} de {abilities[1].name}.
                    <br/>
                    Un objetivo tiene una cobertura de tres cuartos si alrededor de
                    tres cuartos está cubierto por un obstáculo.
                    <br/><br/>
                    Un objetivo con cobertura total no puede ser objetivo directo de un ataque o {terms.spell.singular},
                    los {terms.spell.singular} con área de efecto si pueden dañar al objetivo.
                    <br/>
                    Un objetivo tiene cobertura total si está completamente oculto por un obstáculo.
                </div>
            </Fragment>
        )
    }
}
