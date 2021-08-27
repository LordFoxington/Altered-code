/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called the "Artificer" and its 2 subclasses.
	Code by:	Honiahaka1
	Date:		2019-03-07 (sheet v12.999)
*/

var iFileName = "UA: Artificer [WoTC 2019].js";
RequiredSheetVersion(12.999);

SourceList["UA:AR2"] = {
    name: "UA: Artificer [WoTC 2019]",
    abbreviation: "UA:AR2",
    url: "https://media.wizards.com/2019/dnd/downloads/UA-Artificer-2019.pdf",
    date: "2019/02/28"
};

[
    // Cantrips
    "acid splash", "dancing lights", "fire bolt", "guidance", "light", "mage hand", "mending", "message", "poison spray", "prestidigitation", "ray of frost", "resistance", "shocking grasp", "spare the dying", "thorn whip",

    // 1st Level
    "alarm", "arcane weapon", "cure wounds", "detect magic", "disguise self", "expeditious retreat", "false life", "grease", "identify", "jump", "longstrider", "sanctuary", "shield of faith",

    // 2nd Level
    "aid", "alter self", "arcane lock", "blur", "continual flame", "darkvision", "enhance ability", "enlarge/reduce", "heat metal", "invisibility", "lesser restoration", "levitate", "magic mouth", "magic weapon", "protection from poison", "rope trick", "see invisibilty", "spider climb",

    // 3rd Level
    "blink", "dispel magic", "elemental weapon", "fly", "gaseous form", "glyph of warding", "haste", "protection from energy", "revivify", "water breathing", "water walking",

    // 4th Level
    "arcane eye", "fabricate", "freedom of movement", "leomund's secret chest", "mordenkainen's faithful hound", "mordenkainen's private sanctum", "otiluke's resilient sphere", "stone shape", "stoneskin",

    // 5th Level
    "animate objects", "bigby's hand", "creation", "greater restoration", "wall of stone"
].forEach(function (n) {
    if (SpellsList[n] && SpellsList[n].classes.indexOf("artificer") === -1) SpellsList[n].classes.push("artificer");
});

ClassList["artificer"] = {
    regExpSearch: /artificer/i,
    name: "Artificer",
    primaryAbility: "\n \u2022 Artificer: Intelligence;",
    abilitySave: 4,
	prereqs: "\n \u2022 Artificer: Intelligence 13;",
	improvements: levels.map(function (n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
	}),
	die: 8,
	saves: ["Con", "Int"],
    skills: ["\n\n" + toUni("Artificer") + ": Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand."],
    toolProfs: { primary: [["Thieves' Tools", "Dex"], ["Tinker's Tools", "Dex"], ["Artisan's Tools", 1]] },
    armor: [
        [true, true, false, true],
        [true, true, false, true]
    ],
    weapons: [
		[true, false, ["hand crossbow", "heavy crossbow"]],
	],
    equipment: "Artificer starting equipment:\n \u2022 A light crossbow and 20 bolts -or- any two simple weapons;\n \u2022 Scale mail -or- leather armor;\n \u2022 Thieves' tools and a dungeoneer's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses: ["Artificer Specialisation", ["artificer-alchemist", "artificer-artillerist"]],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor: "2",
    spellcastingKnown: {
        cantrips: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
        spells: "list",
        prepared: true,
    },
    spellcastingList: {
        // 0 - 5th level spells from Artificer spell list.
        class: "artificer",
        level : [0, 5]
    },
    features: {
        "magical tinkering": {
            name: "Magical Tinkering",
            source: ["UA:AR2"],
            minlevel: 1,
            description: desc([
                "Using thieves’ tools, tinker’s tools or other artisan’s tools in hand, I can touch a Tiny nonmagical object as an action and give it one of the following magical properties of my choice:",
                "- Shedding bright light"+"\n    "+"- Emitting a pre-recorded message when tapped"+"\n    "+"- Continuously emitting a noise or odour"+"\n    "+"- A static visual effect on one of its surfaces."
            ])
        },
        "spellcasting": {
            name: "Spellcasting",
            source: ["UA:AR2"],
            minlevel: 1,
            description: desc([
                "I can cast prepared Artificer spells, using Intelligence as my spellcasting ability.",
                "I can use thieves’ tools, artisan’s tools or an item bearing one of my infusions as a spellcasting focus.",
                "I can cast my prepared artificer spells as rituals if they have the ritual tag."
            ])
            },
        "infuse item": {
            name: "Infuse Item",
            source: ["UA:AR2"],
            minlevel: 2,
            description: desc([
                "Use the \"Choose Feature\" button to add Artificer Infusions to the third page.",
                "When I finish a long rest, I can touch a nonmagical object and imbue it with one of my Artificer Infusions, turning it into a magic item.",
                "I can attune to the item as soon as I infuse it or I can forgo attunement so someone else can do it. The infusion remains until a number of days equal to my intelligence modifier after I die or if I give up my knowledge of the infusion for another one. If I attempt to exceed my maximum of infusions, my oldest infusion immediately ends, and then the new one applies.",
                "I can infuse 2 items at Artificer level  2, 3 at level 6, 4 at level 11 and 5 at level 16.",
                "Whenever I gain an artificer level, I can replace an infusion I know with another.",
            ]),
            additional: ["", "3 infusions known", "3 infusions known", "4 infusions known", "4 infusions known", "4 infusions known", "5 infusions known", "5 infusions known", "5 infusions known", "5 infusions known", "6 infusions known", "6 infusions known", "6 infusions known", "6 infusions known", "7 infusions known", "7 infusions known", "7 infusions known", "7 infusions known", "8 infusions known", "8 infusions known"],
            extraname: "Artificer Infusions",
            extrachoices: ["Boots of the Winding Path (prereq: level 4 artificer)", "Enhanced Defense", "Enhanced Weapon", "Many-Handed Pouch (prereq: level 4 artificer)", "Radiant Weapon (prereq: level 8 artificer)", "Replicate Magic Item", "Resistant Armor (prereq: level 8 artificer)", "Returning Weapon"],
            "boots of the winding path (prereq: level 4 artificer)": {
                name: "Boots of the Winding Path",
                description: desc([
                    "Item: A pair of boots (requires attunement)",
                    "While wearing these boots, a creature can teleport up to 15ft as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
                ]),
                source: "UA:AR2",
                prereqeval: function(v) { return classes.known.artificer.level >= 4; }
            },
            "enhanced defense": {
                name: "Enhanced Defense",
                description: desc([
                    "Item: A suit of armor or a shield",
                    "A creature gains a +1 bonus to AC while using the infused item.",
                    "The bonus increases to +2 when you reach artificer level 12."
                ]),
                source: ["UA:AR2"]
            },
            "enhanced weapon": {
                name: "Enhanced Weapon",
                description: desc([
                    "Item: A simple or martial weapon",
                    "This magic weapon grants a +1 bonus to attack and damage rolls made with it.",
                    "The bonus increases to +2 when you reach artificer level 12."
                ]),
                source: ["UA:AR2"]
            },
            "many-handed pouch (prereq: level 4 artificer)": {
                name: "Many-Handed Pouch",
                description: desc([
                    "Item: 2-5 pouches",
                    "These pouches all share one interdimensional space of the same capacity as a single pouch.",
                    "Reaching into any of the pouches accesses the same storage space.",
                    "A pouch operates so long as it is within 100 miles of another pouch.",
                    "If this infusion ends, any items in the shared space are shunted to one of the pouches, determined at random. The rest of the pouches become empty.",
                ]),
                source: ["UA:AR2"],
                prereqeval: function(v) { return classes.known.artificer.level >= 4; }
            },
            "radiant weapon (prereq: level 8 artificer)": {
                name: "Radiant Weapon",
                description: desc([
                    "Item: A simple or martial weapon (requires attunement)",
                    "This magic weapon grants a +1 bonus to attack and damage rolls made with it.",
                    "While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30ft radius and dim light for an additional 30ft. The wielder can extinguish the light as a bonus action.",
                    "As a reaction immediately after being hit in melee, the wielder can force the attacker to make a constitution saving throw equal to your spell save DC or be blinded until the end of its next turn. Once used, this reaction cannot be used again until after a short or long rest.",
                ]),
                source: ["UA:AR2"],
                prereqeval: function(v) { return classes.known.artificer.level >= 8; },
            },
            "replicate magic item": {
                name: "Replicate Magic Item",
                source: ["UA:AR2", ["D", 150]],
                description: desc([
                    "Item: Depends on selection.",
                    "See the \"Notes\" page for the table",
                    "Using this infusion, you replicate a particular magic item.",
                    "You can select this infusion multiple times but must select different items when you do.",
                ]),
                toNotesPage : [{
                    name: "Artificer - Replicable Magic Items",
                    source: ["UA:AR2", ["D", 150]],
                    popupName: "Artificer's Replicable Magic Items - part 1",
                    additional: "",
                    note: [
                        "\n",
                        "Alchemy Jug - DMG p150",                      
                        "Bag of Holding - DMG p153",
                        "Cap of Water Breathing - DMG p157",
                        "Cloak of The Manta Ray - DMG p159",
                        "Goggles of Night - DMG p172",
                        "Lantern of Revealing - DMG p179",
                        "Rope of Climbing - DMG p197",
                        "Sending Stones - DMG p199",
                        "Wand of Magic Detection - DMG p211",
                        "Wand of Secrets - DMG p211",
                        "\n",
                        "Replicable Magic Items (12th Level Artificer)",
                        "\n",
                        "Boots of Elvenkind - DMG p155",
                        "Boots of Striding and Springing (requires attunement) - DMG p156",
                        "Boots of the Winterlands (requires attunement) - DMG p156",
                        "Bracers of Archery (requires attunement) - DMG p156",
                        "Brooch of Shielding (requires attunement) - DMG p156",
                        "Cloak of Elvenkind (requires attunement) - DMG p158",
                        "Cloak of Protection (requires attunement) - DMG p159",
                        "Eyes of Charming (requires attunement) - DMG p168",
                        "Eyes of the Eagle (requires attunement) - DMG p168",
                        "Gauntlets of Ogre Power (requires attunement) - DMG p171",
                        "Gloves of Missile Snaring (requires attunement) - DMG p172",
                        "Gloves of Swimming and Climbing (requires attunement) - DMG p172",
                        "Gloves of Thievery - DMG p172",
                        "Hat of Disguise (requires attunement) - DMG p173",
                        "Headband of Intellect (requires attunement) - DMG p173",
                        "Helm of Telepathy (requires attunement) - DMG p174",
                        "Medallion of Thoughts (requires attunement) - DMG p181",
                        "Periapt of Wound Closure (requires attunement) - DMG p184",
                        "Pipes of Haunting - DMG p185",
                        "Pipes of the Sewers (requires attunement) - DMG p185",
                        "Quiver of Ehlonna - DMG p189",
                        "Ring of Jumping (requires attunement) - DMG p191",
                        "Ring of Mind Shielding (requires attunement) - DMG p191",
                        "Ring of Water Walking - DMG p193",
                        "Slippers of Spider Climbing (requires attunement) - DMG p200",
                        "Winged Boots (requires attunement) - DMG p214",
                        "\n",
                        "Replicable Magic Items (16th Level Artificer)",
                        "\n",
                        "Amulet of health (requires attunement) - DMG p150",
                        "Belt of hill giant strength (requires attunement) - DMG p155",
                        "Boots of levitation (requires attunement) - DMG p155",
                        "Boots of speed (requires attunement) - DMG p155",
                        "Bracers of defense (requires attunement) - DMG p156",
                        "Cloak of the bat (requires attunement) - DMG p159",
                        "Dimensional shackles - DMG p165", 
                        "Gem of seeing (requires attunement) - DMG p172",
                        "Horn of blasting - DMG p174", 
                        "Ring of free action (requires attunement) - DMG p191",
                        "Ring of protection (requires attunement) - DMG p191",
                        "Ring of the ram (requires attunement) - DMG p193"
                    ]
                }]
            },
            "resistant armor (prereq: level 8 artificer)": {
                name: "Resistant Armor",
                description: desc([
                    "Item: A suit of armor",
                    "While wearing this armor, a creature has resistance to one of the following damage types that you choose when you infuse it;",
                    "Acid, Cold, Fire, Force, Lightning, Necrotic, Poison, Psychic, Radiant or Thunder."
                ]),
                source: ["UA:AR2"],
                prereqeval: function(v) { return classes.known.artificer.level >= 8; },
            },
            "returning weapon": {
                name: "Returning Weapon",
                description: desc([
                    "Item: A simple or martial weapon with thrown property",
                    "This magic weapon grants a +1 bonus to attack and damage rolls made with it.",
                    "It also returns to your hand immediately after it is used to make a ranged attack."
                ]),
                source: ["UA:AR2"]
            }

        },
        "subclassfeature3": {
            name: "Artificer Specialisation",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "Choose a Specialisation and put it in the \"Class\" field."+"\n   "+"Choose either the Alchemist or Artillerist Specialisation."
            ])
        },
        "tool expertise": {
            name: "Tool Expertise",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "My proficiency bonus is doubled for any ability check I make that uses my proficiency with a tool."
            ])
        },
        "the right cantrip for the job":{
            name: "The Right Cantrip for the Job",
            source: ["UA:AR2"],
            minlevel: 10,
            description: desc([
                "When I finish a short or long rest I can replace one of my artificer cantrips with another cantrip from the artificer spell list."
            ])
        },
        "spell-storing item": {
            name: "Spell-Storing Item",
            source: ["UA:AR2"],
            minlevel: 18,
            description: desc([
                "When I finish a long rest, I can touch one weapon or an item that I can use as a spellcasting focus and store any spell of 1st or 2nd level from the artificer spell list that requires 1 action to cast.",
                "Whilst holding the object, a creature can use an action to produce the spell's effect using my spellcasting modifier and spell save DC.",
                "The spell stays in the object until it has been used a number of times equal to twice my Intelligence modifier (minimum of twice) or until I use this feature again."
            ])
        },
        "soul of artifice": {
            name: "Soul of Artifice",
            source: ["UA:AR2"],
            minlevel: 20,
            description: desc([
                "My understanding of magic items is unmatched, allowing me to mingle my soul with items linked to me. I can attune to up to six magic items at once and gain a +1 bonus to all saving throws per magic item I am currently attuned to."
            ])
        }
    }
};
// Forge Adept //

ClassSubList["artificer-Forge Adept"] = {
    regExpSearch: /forge adept/i,
    subname: "Forge Adept",
    features: {
        "tools proficiency": {
            name: "Tools Proficiency",
            source: ["HB"],
            minlevel: 3,
            description: desc([
                "When you adopt this specialization at 3rd level, you gain proficiency with smith’s tools.",
                "If you already have this proficiency, you gain proficiency with one other type of artisan’s tools of your choice.",
              
            ]),
            toolProfs: [["Smith's Tools", "Str"]]
        },
        "forge adept spells": {
            name: "Forge adept Spells",
            source: ["HB"],
            minlevel: 3,
            description: desc([
                "I always have certain spells prepared after reaching particular levels.",
                "These spells count as artificer spells and don't count against the number of artificer spells I can prepare."
            ]),
            spellcastingExtra: ["armor of agathys", "shield of faith", "spiritual weapon", "warding bond", "beacon of hope", "remove curse", "death ward", "fire shield", "banishing smite", "wall of force"]
        },
        "battle ready": {
            name: "Battle Ready",
            source: ["HB"],
            minlevel: 3,
            description: desc([
                "Beginning at 3rd level, you’re skilled in fighting side-by-side with your companions on the field of battle.",
		"You gain proficiency with martial weapons.",
		"Additionally, when you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
            ]),    
         
         "Legendary Weapon": {
            name: "Legendary Weapon",
            source: ["HB"],
            minlevel: 3,
            description: desc([
            	"At 3rd level, you learn to imbue a weapon with a fraction of your spirit.",
		"When you finish a long rest, you can touch a magic or nonmagical simple or martial melee weapon, which becomes your Legendary Weapon.",
                "Once imbued, your Legendary Weapon is a magic weapon that grants a +1 bonus to attack and damage rolls, unless the base weapon you imbued already grants a higher bonus. This bonus increases when you reach certain levels in this class, increasing to +2 at 8th level and +3 at 13th level. If the weapon you imbued has the thrown property, it returns to your hand immediately after it is used to make a ranged attack.",
                "Your Legendary Weapon’s benefits remain until the weapon is destroyed or until you use this ability to imbue a new item with this power. Other creatures can’t benefit from your Legendary Weapon's powers, and to them, it functions as the unimbued weapon did."
            ]), 
        },
        "extra attack": {
            name: "Extra Attack",
            source: ["HB"],
            minlevel: 5,
            description: desc([
                "Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.",
            ]),
        },
        "Runes of War": {
            name: "Runes of War",
            source: ["HB"],
            minlevel: 9,
            description: desc([
            	"At 9th level, you gain the ability to enhance the weapons of your squad, targeting the damage to the weakness of your enemies. As an action, you can activate an aura that extends from you in a 30-foot radius.",
	        "The aura moves with you, centered on you, and lasts for 1 minute or until your concentration ends (as if you were casting a spell).",
                "When you activate this aura, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Each creature of your choice in the aura deals an extra 1d4 damage of the chosen type when it hits with a weapon attack.",
                "You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses after a long rest."
            ]),
        },    
        "Perfect Weapon": {
            name: "Perfect Weapon",
            source: ["HB"],
            minlevel: 15,
            description: desc([
                "At 15th level, you learn how to imbue your Legendary Weapon with additional power, and how to draw on it in time of need. The first time you attack with your Legendary Weapon on your turn, you can transfer some or all of its bonus to your armor class, instead of using the bonus on any attacks that turn. For every 1 you reduce your attack and damage rolls by, you gain +1 to your AC. As long as you continue holding your Legendary Weapon, the AC bonus remains in effect until the start of your next turn.",
                "Additionally, when you finish a long rest, you can select one of the following benefits. Until you finish your next long rest, you gain the selected benefit whenever you’re holding your Legendary Weapon.",
                "You have resistance to psychic damage, and you can’t be charmed or frightened.",
                "You use your Legendary Weapon to channel the elements. When you select this ability, select one of the following damage types: acid, cold, fire, lightning, or thunder. When you hit with your Legendary Weapon, the target takes an extra 1d6 damage of the chosen type." 
	    ])
        }      
    }
};

// Alchemist //

ClassSubList["artificer-alchemist"] = {
    regExpSearch: /alchemist/i,
    subname: "Alchemist",
    features: {
        "tools of the trade": {
            name: "Tools of the Trade",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "I gain proficiency with alchemist's supplies and the herbalism kit.",
                "I also gain a free alchemist's supplies and herbalism kit.",
                "If I craft a magic item in the potion category it takes a 1/4 of the normal time and half as much gold."
            ]),
            toolProfs: [["Alchemist's Supplies", "Int"],["Herbalism Kit", "Wis"]]
        },
        "alchemist spells": {
            name: "Alchemist Spells",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "I always have certain spells prepared after reaching particular levels.",
                "These spells count as artificer spells and don't count against the number of artificer spells I can prepare."
            ]),
            spellcastingExtra: ["purify food and drink", "ray of sickness", "melf's acid arrow", "web", "create food and water", "stinking cloud", "blight", "death ward", "cloudkill", "raise dead"]
        },
        "alchemical homunculus": {
            name: "Alchemical Homunculus",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "I have learned the ancient methods for magically creating a special homunculus that is formed by alchemical substances.",
                "When I finish a long rest, using my alchemist supplies, I can form this homunculus in an unoccupied space within 5ft of me.",
                "If I already have a homunculus from this feature, the first dies. The homunculus is friendly to my companions and I, and obeys my commands.",
            ]),
            action: ["bonus action", ": (Command)"]
        },
        "alchemical mastery": {
            name: "Alchemical Mastery",
            source: ["UA:AR2"],
            minlevel: 6,
            description: desc([
                "My command of magical chemicals has become masterful. When I cast a spell using my alchemist's supplies, I gain a bonus to one roll of the spell.",
                "The roll must restore HP or be a damage roll that deals acid or poison damage, and the bonus equals my Intelligence modifier (minimum of +1).",
                "I can also cast 'lesser restoration' without expending a spellslot, provided I use my alchemist's supplies as the spellcasting focus a number of times per day equal to my Intelligence modifier."
            ]),
            usages: ["Int mod"],
            usagescalc: "event.value = Math.max(1m What('Int Mod'));",
            recovery: "dawn"
        },
        "chemical savant": {
            name: "Chemical Savant",
            source: ["UA:AR2"],
            minlevel: 14,
            description: desc([
                "I have been exposed to so many chemicals that they now pose little risk to me and I can use them to quickly end certain ailments.",
                "I gain resistance to acid and poison damage, and am now immune to the poisoned condition",
                "Once per long rest I can cast 'greater restoration' without expending a spell slot and without providing the material component so long as I use my alchemist's supplies as the spellcasting focus."
            ]),
            dmgres: ["Acid", "Poison"],
            usages: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            recovery: ["long rest"]
        }
    }
};

// Artillerist //

ClassSubList["artificer-artillerist"] = {
    regExpSearch: /artillerist/i,
    subname: "Artillerist",
    features: {
        "tools of the trade": {
            name: "Tools of the Trade",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "I gain proficiency with smith’s tools and woodcarver’s tools.",
                "I also gain a free smith’s tools, woodcarver’s tools and one non-magical wooden wand.",
                "I can now use rods, staves, and wands as a spellcasting focus for my artificer spells.",
                "If I craft a magic item in the wand category it takes a 1/4 of the normal time and half as much gold."
            ]),
            toolProfs: [["Smith's Tools", "Str"],["Woodcarver's Tools", "Dex"]]
        },
        "artillerist spells": {
            name: "Artillerist Spells",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "I always have certain spells prepared after reaching particular levels.",
                "These spells count as artificer spells and don't count against the number of artificer spells I can prepare."
            ]),
            spellcastingExtra: ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
        },
        "arcane turret": {
            name: "Arcane Turret",
            source: ["UA:AR2"],
            minlevel: 3,
            description: desc([
                "I have learned how to create a magical turret. With my smith’s tools I can take an action to magically summon one of three types of turret (Flamethrower, Force Ballista or Defender) on a horizontal surface within 5ft of me.",
                "The turret is a magical object that occupies its space and has crablike legs.",
                "The turret disappears if it’s reduced to 0hp or after 10 minutes, I can also dismiss it early as an action.",
                "On each of my turns, I can take a bonus action to cause the turret to activate if I am within 60ft of it, as part of the same action I can direct the turret to walk or climb 15ft to an unoccupied space.",
                "I can summon the turret once for free per long rest and afterwards by expending a spell slot of 1st level or higher.",
                "If I attempt to summon a second turret, the first turret disappears. As an action, if I am within 60ft of it, I can command the turret to detonate."
            ]),
            action: ["action", "Arcane Turret: Summon"],
            usages: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
            recovery: ["long rest"],
            eval: "AddAction('action', 'Arcane Turret: Detonate', 'Artificer (Artillerist)');"+"AddAction('bonus action', 'Arcane Turret: Command', 'Artificer (Artillerist)');",
            removeeval: "AddAction('action', 'Arcane Turret: Detonate', 'Artificer (Artillerist)');"+"AddAction('bonus action', 'Arcane Turret: Command', 'Artificer (Artillerist)');"
        },
        "wand prototype": {
            name: "Wand Prototype",
            source: ["UA:AR2"],
            minlevel: 6,
            description: desc([
                "I regularly experiment with channelling different magics through wands.",
                "When I finish a long rest and my woodcarver’s tools are with me, I can touch a nonmagical, wooden wand and turn it into a magic item. When I do so, I infuse it with one artificer cantrip - even one I don't know - that has a casting time of 1 action.",
                "As an action, I can cause the wand to produce the cantrip, using my spellcasting modifier (only I can use the wand’s magic). Any damage roll I make for a cantrip in the wand gains a bonus equal to my Intelligence modifier (minimum of +1).",
                "The wand loses this magic when I finish my next long rest.",
                "When I reach 14th level in this class, I can invest the wand with two cantrips at the end of a long rest."
            ])
        },
        "fortified position": {
            name: "Fortified Position",
            source: ["UA:AR2"],
            minlevel: 14,
            description: desc([
                "I am now a master at conjuring a well-defended emplacement. My allies and I have ½ cover while within 10ft of a turret I create with Arcane Turret.",
                "I can now summon a second turret for free and must finish a long rest before doing so again.",
                "If I summon a second turret while the first is still present, the first doesn’t disappear and each turret can be of a different type (if I summon a third, the first one vanishes).",
                "I can use one bonus action to activate both turrets."
            ])
        }      
    }
};

//  Creatures //

CreatureList["alchemical homunculus"] = {
    name: "Alchemical Homunculus",
    source: ["UA:AR2"],
    size: 5, //Tiny
    type: "Construct",
    subtype: "",
    alignment: "Neutral",
    ac: 13,
    hp: 15,
    hd: "",
    speed: "20ft, fly 30ft",
    scores: [4, 15, 11, 10, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
    saves: ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
    skills: {
        "perception" : 4,
        "stealth" : 4
    },
    senses: "Darkvision 60ft",
    passivePerception: 10,
    languages: "Understands your languages",
    challengeRating: "1",
    proficiencyBonus: 2,
    attacksAction: 1,
    attacks: [{
        name: "Acidic Spittle",
        ability: 2,
        damage: [1, 6, "acid"],
        range: "30ft",
        description: "",
        modifiers: ["", "", false]
    }],
    traits: [{
        name: "Alchemical Salve (3/Day",
        description: desc([
            "The homunculus produces a salve and touches one creature I designate;",
            "- Buoyancy. The target gains a flying speed of 10ft for 10 minutes",
            "- Inspiration. The target gains adv. on certain ability checks in the next hour. The target chooses the checks before or after rolling. The magic runs out after the target has used it on a number of checks equal to my Intelligence modifier (minimum of 1)",
            "- Resilience. The target gains temp HP equal to 2d6 + my intelligence modifier"
        ])
    }, {
        name: "Mending",
        description: desc([
            "If the mending spell is cast on it, it regains 2d6hp. If it has died within the last our, I can use my alchemist supplies and expend a spell slot of 1st level or higher if I am within 5ft of it to restore it to life with all its hit points restored."
        ])
    }],
    features: [{
        name: "Homunculus Rules",
        description: desc([
            "I determine the homunculus's appearance, which include wings and alchemical equipment.",
            "In combat, it shares my initiative but takes its turn after me. The only action it can take on its turn is the dodge action, unless I take a bonus action to command it to use one of the special actions in its statblock or to take the Dash, Disengage, or Help action",
            "The Homunculus's hitpoints are equal to 5x my artificer level + my Intelligence modifier."
        ])
    }, {
        name: "Might of the Master",
        description: desc([
            "The following numbers increase by 1 when my proficiency bonus increases by 1;",
            "- the homunculus's skill bonuses",
            "- the homunculus's bonus to hit and damage of its Acidic Spittle",
        ])
    }]
};

CreatureList["flamethrower turret"]={
    name: "Flamethrower Turret",
    source: ["UA:AR2"],
    size: 3, //Medium
    type: "Construct",
    subtype: "",
    alignment: "Neutral",
    ac: 18,
    hp: 15,
    hd: "",
    speed: "15ft, climb 15ft",
    scores: [10, 10, 10, 10, 10, 10], //[Str, Dex, Con, Int, Wis, Cha]
    saves: ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
    damage_immunities : "poison, psychic",
    condition_immunities: "all conditions",
    passivePerception: 10,
    senses: "",
    languages: "",
    challengeRating: "1",
    proficiencyBonus: "0",
    attacksAction: 1,
    attacks: [{
        name: "Flamethrower",
        ability: 4,
        damage: [1, 8, "fire"],
        range: "15ft Cone",
        description: "Creatures in area must make a Dex saving throw against your spell DC, half damage on success.",
        dc: true,
        modifiers: ["", "", false],
        tooltip: "The turret exhales fire in an adjacent 15-foot cone that you designate. Each creature in that area must make a Dexterity saving throw against your spell save DC, taking 1d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried."
    }, {
        name: "Detonate",
        ability: 4,
        damage: [3, 6, "force"],
        range: "10ft Radius",
        description: "Destroys turret. Creatures within 10ft makes a Dex saving throw against your spell DC, half damage on success.",
        dc: true,
        modifiers: ["", "", false],
        tooltip: "Detonate destroys the turret and forces each creature within 10 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d6 force damage on a failed save or half as much damage on a successful one."
    }
],
    traits: [{
        name: "Mending",
        description: desc([
            "If the mending spell is cast on the turret, it regains 2d6 hit points.",
        ])
    }],
    features: [{
        name: "Turret Rules",
        description: desc([
            "All attacks and saves caused by the Turret, use my artificer spell attack modifier or spell save DC as appropriate.",
            "If forced to make an ability check or a saving throw, treat all the turret's ability scores as 10 (+0).",
            "The Turret's hit points are equal to 5x my artificer level."
        ])
    }]
};

CreatureList["force ballista turret"]={
    name: "Force Ballista Turret",
    source: ["UA:AR2"],
    size: 3, //Medium
    type: "Construct",
    subtype: "",
    alignment: "Neutral",
    ac: 18,
    hp: 15,
    hd: "",
    speed: "15ft, climb 15ft",
    scores: [10, 10, 10, 10, 10, 10], //[Str, Dex, Con, Int, Wis, Cha]
    saves: ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
    damage_immunities : "poison, psychic",
    condition_immunities: "all conditions",
    senses: "",
    passivePerception: 10,
    languages: "",
    challengeRating: "1",
    proficiencyBonus: "0",
    attacksAction: 1,
    attacks: [{
        name: "Force Ballista",
        ability: 4,
        damage: [2, 8, "force"],
        range: "120ft",
        description: "On hit, if target is a creature, target is pushed 5ft away from turret.",
        modifiers: ["", "", false],
        tooltip: "Make a ranged spell attack, originating from the turret, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the turret."
    }, {
        name: "Detonate",
        ability: 4,
        damage: [3, 6, "force"],
        range: "10ft Radius",
        description: "Destroys turret. Creatures within 10ft makes a Dex saving throw against your spell DC, half damage on success.",
        dc: true,
        modifiers: ["", "", false],
        tooltip: "Detonate destroys the turret and forces each creature within 10 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d6 force damage on a failed save or half as much damage on a successful one."
    }
],
    traits: [{
        name: "Mending",
        description: desc([
            "If the mending spell is cast on the turret, it regains 2d6 hit points.",
        ])
    }],
    features: [{
        name: "Turret Rules",
        description: desc([
            "All attacks and saves caused by the Turret, use my artificer spell attack modifier or spell save DC as appropriate.",
            "If forced to make an ability check or a saving throw, treat all the turret's ability scores as 10 (+0).",
            "The Turret's hit points are equal to 5x my artificer level."
        ])
    }]
};

CreatureList["defender turret"]={
    name: "Defender Turret",
    source: ["UA:AR2"],
    type: "Construct",
    subtype: "",
    alignment: "Neutral",
    ac: 18,
    hp: 15,
    hd: "",
    speed: "15ft, climb 15ft",
    scores: [10, 10, 10, 10, 10, 10], //[Str, Dex, Con, Int, Wis, Cha]
    saves: ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
    damage_immunities : "poison, psychic",
    condition_immunities: "all conditions",
    passivePerception: 10,
    senses: "",
    languages: "",
    challengeRating: "1",
    proficiencyBonus: "0",
    attacksAction: 1,
    attacks: [{
        name: "Detonate",
        ability: 4,
        damage: [3, 6, "force"],
        range: "10ft Radius",
        description: "Destroys turret. Creatures within 10ft makes a Dex saving throw against your spell DC, half damage on success.",
        dc: true,
        modifiers: ["", "", false],
        tooltip: "Detonate destroys the turret and forces each creature within 10 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d6 force damage on a failed save or half as much damage on a successful one."
    }
],
    traits: [{
        name: "Defender",
        description: desc([
            "The turret emits a burst of positive energy that grants itself and each creature of my choice within 10 feet of it a number of temporary hit points equal to 1d8 + my Intelligence modifier (minimum of +1)."
        ])
    }, {
        name: "Mending",
        description: desc([
            "If the mending spell is cast on the turret, it regains 2d6 hit points.",
        ])
    }],
    features: [{
        name: "Turret Rules",
        description: desc([
            "All attacks and saves caused by the Turret, use my artificer spell attack modifier or spell save DC as appropriate.",
            "If forced to make an ability check or a saving throw, treat all the turret's ability scores as 10 (+0).",
            "The Turret's hit points are equal to 5x my artificer level."
        ])
    }]  
};

// Spells //

SpellsList["arcane weapon"] = { 
	name : "Arcane Weapon",
	classes : ["artificer"],
	source : ["UA:AR2"],
	ritual : false,
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 h",
	save : "Con",
	description : "Wea +1d6 acid/cold/fire/lightning/poison/thunder dmg; bns a change damage; SL3: Conc, 8h",
	descriptionFull : "You channel energy into one simple or martial weapon you’re holding and choose one damage type; acid, cold, fire, lightning, poison, or thunder. Until the spell ends, you deal 1d6 damage of the chosen type to any target you hit with the weapon. If the weapon isn’t magical, it becomes a magic weapon for the spell’s duration. As a bonus action, you can change the damage type choosing from the options above." + AtHigherLevels + "When you cast this spell using a spellslot of 3rd level or higher, you can maintain your concentration on the spell for up to 8 hours.",
};
