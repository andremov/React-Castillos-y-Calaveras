import {terms} from "./Data/Terms";
import React, {Fragment} from "react";
import {titleCase} from "./Utilities";
import {abilities} from "./Data/Abilities";

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
                Estos se basan en las seis {terms.ability.plural}.
                <br /><br />
                Los tres {terms.rolls.plural} funcionan de la siguiente forma:
                <ol>
                    <li> Tirar un d20 </li>
                    <li> Agregar un {terms.ability.modifier.long.singular} derivado de una de las seis {terms.ability.plural} </li>
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

export function groupChecks(subtitle = true) {
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

export function contests(subtitle = true) {
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

export function abilityChecks(subtitle = true) {
    return (
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
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
                de las seis {terms.ability.plural} es relevante para la tarea en cuestión
                y la dificultad de la tarea, representada por un {terms.dc.long.singular}.
                <br /><br />
                Cuanto más difícil es una tarea, mayor es su {terms.dc.short.singular}.

            </div>

        </Fragment>
    )
}

export function abilityIntro(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.ability.plural)}
            </div>

            <div className={'description'}>
                Las seis {terms.ability.plural} proporcionan una descripción rápida
                de las características físicas y mentales de cada criatura.
                <br /><br />
                Cada tarea que un personaje o monstruo podría intentar
                en el juego está cubierta por una de las seis {terms.ability.plural}.
                <br /><br />
                Esta sección explica con más detalle lo que significan
                esas {terms.ability.plural} y las formas en que se usan en el juego.

            </div>
        </Fragment>
    );
}

export function attackRolls(subtitle = true) {
    return (
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.rolls.attack.plural)}
            </div>

            <div className={'description'}>
                Un {terms.rolls.attack.singular} determina si un ataque
                golpea o falla.
                <br /><br />
                Para hacer un {terms.rolls.attack.singular}, tira un d20 y agrega
                los {terms.ability.modifier.short.plural} apropiados.
                <br /><br />
                Si el total del {terms.rolls.attack.singular} es igual o superior
                al {terms.ac.long.singular} del objetivo, el ataque golpea.
            </div>
        </Fragment>
    )
}

export function savingThrows(subtitle = true) {
    return (
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.rolls.saving.plural)}
            </div>

            <div className={'description'}>
                Un {terms.rolls.saving.singular} representa un intento
                de resistir una amenaza. Usualmente, estás obligado a
                hacer un {terms.rolls.saving.singular} porque tu personaje está en riesgo.
                <br /><br />
                Para hacer un {terms.rolls.saving.singular}, tira un d20 y
                agrega el {terms.ability.modifier.long.singular} apropiado.
                <br /><br />
                La {terms.dc.long.singular} para un {terms.rolls.saving.singular}
                está determinada por el efecto que lo causa.
                <br /><br />
                El resultado de un {terms.rolls.saving.singular} exitoso o
                fallido también se detalla en el efecto que lo permite.
                Por lo general, un exito significa que una criatura no sufre daño, o se reduce
                el daño.
            </div>
        </Fragment>
    )
}

export function alignment(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.alignment.plural)}
            </div>

            <div className={'description'}>
                Una criatura típica en el mundo del juego tiene un {terms.alignment.singular},
                que describe ampliamente sus actitudes morales y personales.
                <br /><br />
                El {terms.alignment.singular} es una combinación de dos factores: uno identifica la moralidad
                ({terms.alignment.good+", "+terms.alignment.neutral+", "+terms.alignment.evil}),
                y el otro describe las actitudes hacia la sociedad y el orden
                ({terms.alignment.law+", "+terms.alignment.neutral+", "+terms.alignment.chaos}).
                <br /><br />
                Los individuos pueden variar significativamente
                del comportamiento típico, y pocas personas son perfectas y consistentemente fieles a
                los preceptos de su {terms.alignment.singular}.

                {axis(terms.alignment.law+" "+terms.alignment.good+" (LG)",
                    "Hacen lo correcto como lo espera la sociedad.")}

                {axis(terms.alignment.neutral+" "+terms.alignment.good+" (NG)",
                    "Hacen lo mejor que pueden para ayudar a otros según sus necesidades.")}

                {axis(terms.alignment.chaos+" "+terms.alignment.good+" (CG)",
                    "Actúan como lo dirige su conciencia, con poca consideración por lo que otros esperan.")}

                {axis(terms.alignment.law+" "+terms.alignment.neutral+" (LN)",
                    "Actúan de acuerdo con la ley, la tradición o los códigos personales.")}

                {axis(terms.alignment.neutral+" (N)",
                    "Prefieren mantenerse alejados de las cuestiones morales y no tomar partido, haciendo lo que parece mejor en ese momento.")}

                {axis(terms.alignment.chaos+" "+terms.alignment.neutral+" (CN)",
                    "Siguen sus caprichos, manteniendo su libertad personal por encima de todo.")}

                {axis(terms.alignment.law+" "+terms.alignment.evil+" (LE)",
                    "Toman metódicamente lo que quieren, dentro de los límites de un código de tradición, lealtad u orden.")}

                {axis(terms.alignment.neutral+" "+terms.alignment.evil+" (NE)",
                    "Hacen lo que pueden, sin compasión ni reparos.")}

                {axis(terms.alignment.chaos+" "+terms.alignment.evil+" (CE)",
                    "Actúan con violencia arbitraria, impulsadas por su codicia, u odio.")}
            </div>
        </Fragment>
    )
}

function axis(name, description) {
    return (
        <div>
            <div className={'header3 serif'}>
                {name}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}

export function level(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {titleCase(terms.level.plural)}
            </div>

            <div className={'description'}>
                A medida que un personaje avanza en aventuras y supera desafíos,
                este realizará impresionantes hazañas y vencerá enemigos formidables.
                Al hacer esto, un personaje puede {terms.level.up.inf.singular}.
                <br /><br />
                Cuando un personaje {terms.level.up.person.singular}, su clase a menudo otorga
                características adicionales, como se detalla en la descripción
                de la clase.
                <br /><br />
                Ademas, cada cuatro {terms.level.plural}, puede aumentar
                sus {terms.ability.score.long.plural}, ya sea aumentando
                dos {terms.ability.score.short.plural} en 1 cada
                uno o aumentando un {terms.ability.score.short.singular} en 2.
                No puede aumentar un {terms.ability.score.long.singular} por encima de 20.
                <br /><br />
                Cada vez que {terms.level.up.person.singular}, ganas 1 {terms.hit.die.singular} adicional.
            </div>
        </Fragment>
    )
}

export function hitDice(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {terms.hit.die.plural}
            </div>

            <div className={'description'}>
                Un personaje puede gastar uno o más {terms.hit.die.plural} al final de un {terms.rest.short},
                hasta el número de {terms.hit.die.plural} que tenga restantes. El numero maximo
                de {terms.hit.die.plural} de un personaje es igual al {terms.level.singular} del personaje.
                <br /><br />
                Por cada {terms.hit.die.singular} gastado de esta manera,
                el jugador tira el {terms.hit.die.singular} y le agrega
                el {terms.ability.modifier.short.singular} de {abilities[3].name} del personaje.
                El personaje recupera {terms.hit.points.plural} igual al total.
                <br /><br />
                Un personaje recupera algunos {terms.hit.die.plural} gastados al terminar
                un {terms.rest.long}.
                <br /><br />
                Cada vez que {terms.level.up.person.singular},
                incrementa su numero maximo de {terms.hit.die.singular} por 1.
            </div>
        </Fragment>
    )
}

export function maxHitPoints(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {terms.hit.points.max}
            </div>

            <div className={'description'}>
                Unos personajes son mas fuertes que otros, y pueden soportar
                una mayor cantidad de daño que otros. Esto se ve reflejado
                en los {terms.hit.points.max}.
                <br /><br />
                Los {terms.hit.points.plural} actuales no sobrepasan los {terms.hit.points.max}.
            </div>
            {gainMaxHP()}
        </Fragment>
    )
}

function gainMaxHP(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                Aumentar los {terms.hit.points.max}
            </div>

            <div className={'description'}>
                Al {terms.level.up.inf.singular}, tire un {terms.hit.die.singular},
                agregue su {terms.ability.modifier.short.singular} de {abilities[2].name} al {terms.rolls.singular} y
                agregue el total a sus {terms.hit.points.max}.
                <br /><br />
                Ademas, cuando su {terms.ability.modifier.short.singular} de {abilities[2].name} aumenta en 1,
                sus {terms.hit.points.max} aumentan en 1 por cada nivel que ha alcanzado.
            </div>
        </Fragment>
    )
}

export function hitPoints(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                {terms.hit.points.plural}
            </div>

            <div className={'description'}>
                Los {terms.hit.points.plural} representan una combinación de durabilidad física y mental,
                la voluntad de vivir y la suerte. Las criaturas con más puntos de vida son más
                difíciles de matar. Aquellos con menos puntos de vida son más frágiles.
                <br /><br />
                Los {terms.hit.points.plural} actuales de una criatura (generalmente llamados {terms.hit.points.plural})
                puede ser cualquier número desde los {terms.hit.points.max} hasta 0.
                Este número cambia con frecuencia a medida que recibe daño o curación.
                <br /><br />
                Cada vez que una criatura recibe daño, ese daño se resta de sus {terms.hit.points.plural}. La
                pérdida de {terms.hit.points.plural} no tiene efecto en las capacidades de una criatura hasta
                que la criatura caiga a 0 {terms.hit.points.plural}.
            </div>
        </Fragment>
    )
}

export function healing(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                Curar
            </div>

            <div className={'description'}>
                A menos que resulte en muerte, el daño no es permanente.
                <br />
                Incluso la muerte es reversible a través de poderosa magia.
                <br />
                El {terms.rest.name} puede restaurar los {terms.hit.points.plural} de una criatura,
                y {terms.spell.plural} o {terms.item.plural} pueden eliminar el daño en un instante.
                <br /><br />
                Cuando una criatura recibe curación de cualquier tipo,
                los {terms.hit.points.plural} recuperados se agregan a sus {terms.hit.points.plural} actuales.
                Los {terms.hit.points.plural} de una criatura no pueden exceder sus {terms.hit.points.max},
                por lo que se pierden los {terms.hit.points.plural}  recuperados
                en exceso de este número.
                <br /><br />
                Una criatura que ha muerto no puede recuperar {terms.hit.points.plural}  hasta
                que la magia le haya devuelto la vida.
            </div>
        </Fragment>
    )
}

export function noHitPoints(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                Caer a 0 {terms.hit.points.plural}
            </div>

            <div className={'description'}>
                Cuando cae a 0 {terms.hit.points.plural},
                muere directamente o queda inconsciente.
            </div>
        </Fragment>
    )
}

export function knockedOut(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                Inconsciencia Inestable
            </div>

            <div className={'description'}>
                Si el daño lo reduce a 0 {terms.hit.points.plural} y no lo mata,
                cae inconsciente. Esta inconsciencia
                termina si recupera cualquier {terms.hit.points.singular}.
            </div>
        </Fragment>
    )
}

export function death(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                Muerte Directa
            </div>

            <div className={'description'}>
                El daño masivo puede matar al instante.
                Cuando un daño te reduce a 0 {terms.hit.points.plural} y queda daño restante,
                muere si el daño restante es igual o superior a su {terms.hit.points.max}.
            </div>
        </Fragment>
    )
}

export function stableDeath(subtitle = true) {
    return(
        <Fragment>
            <div className={(subtitle? 'header2' : 'header1') +' serif bold'}>
                Estabilización
            </div>

            <div className={'description'}>
                Siempre que comience un turno con 0 {terms.hit.points.plural}, debe hacer
                un {terms.rolls.saving.singular} especial, llamado {terms.rolls.saving.death.singular},
                para determinar si se acerca más a la muerte o se aferras a la vida.
                <br /><br />
                A diferencia de otros {terms.rolls.saving.plural}, este no está vinculado a
                ningún {terms.ability.score.long.singular}.

                <ul>
                    <li> Si el {terms.rolls.saving.death.singular} es 10 o más, es un éxito. De lo contrario, una falla.
                    </li>
                    <li> Si saca un 1, cuenta como dos fallas.
                    </li>
                    <li> Si saca un 20, recuperas 1 {terms.hit.points.singular}.
                    </li>
                    <li> Si recibe algún daño en este estado, sufre una falla.
                    </li>
                    <li> Si el daño es un {terms.crit.singular}, sufre dos fallas.
                    </li>
                    <li> Si el daño es igual o superior a sus {terms.hit.points.max}, muere.
                    </li>
                </ul>

                En su tercer éxito, se vuelvs estable.<br />
                En su tercer fracaso, muere.<br />
                <br />
                Los éxitos o fracasos no necesitan ser consecutivos. El número de ambos se restablece a cero
                cuando recupera cualquier punto de vida o se estabiliza.
                <br /><br />
            </div>
        </Fragment>
    )
}
