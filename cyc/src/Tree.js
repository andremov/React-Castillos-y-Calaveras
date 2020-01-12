import {AbilityComponent} from "./Components/Abilities/AbilityComponent";
import {RollComponent} from "./Components/Rolls/RollComponent";
import {GMComponent} from "./Components/GMComponent";
import {LevelComponent} from "./Components/LevelComponent";
import {AlignmentComponent} from "./Components/AlignmentComponent";
import {InspirationComponent} from "./Components/InspirationComponent";
import React from "react";
import {terms} from "./Terms";
import {titleCase} from "./Utilities";
import {HitPointComponent} from "./Components/HitPointComponent";
import {RestComponent} from "./Components/RestComponent";
import {CombatComponent} from "./Components/CombatComponent";

export var tree = [
    {
        path : "/abilities",
        comp : <AbilityComponent />,
        title : titleCase(terms.ability.plural),
        hidden : false
    },
    {
        path: "/combat",
        comp : <CombatComponent />,
        title : titleCase(terms.combat.name),
        hidden : false
    },
    {
        path: "/rolls",
        comp : <RollComponent />,
        title : titleCase(terms.rolls.plural),
        hidden : false
    },
    {
        path: "/gm",
        comp : <GMComponent />,
        title : terms.gm,
        hidden : true
    },
    {
        path: "/hitpoints",
        comp : <HitPointComponent />,
        title : terms.hit.points.plural,
        hidden : false
    },
    {
        path: "/rest",
        comp : <RestComponent />,
        title : titleCase(terms.rest.inf),
        hidden : false
    },
    {
        path: "/level",
        comp : <LevelComponent />,
        title : titleCase(terms.level.plural),
        hidden : false
    },
    {
        path: "/alignment",
        comp : <AlignmentComponent />,
        title : titleCase(terms.alignment.plural),
        hidden : false
    },
    {
        path: "/inspiration",
        comp : <InspirationComponent />,
        title : titleCase(terms.inspiration),
        hidden : false
    },

];