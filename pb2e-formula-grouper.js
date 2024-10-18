// ==UserScript==
// @name         Pathbuilder2e Formulas by Level
// @version      2024-10-11
// @description  Change Formulas to be by level.
// @author       Payden K. Pringle (PaydenKP - payden.pringle@gmail.com)
// @match        https://pathbuilder2e.com/app.html*
// ==/UserScript==

console.log('Script loaded');

const equipmentArray = [
        {
            "Absolute Solvent (Greater)": {
                "name": "Absolute Solvent (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 18
            },
            "Absolute Solvent (Lesser)": {
                "name": "Absolute Solvent (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 5
            },
            "Absolute Solvent (Moderate)": {
                "name": "Absolute Solvent (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 12
            },
            "Abysium Powder": {
                "name": "Abysium Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 9
            },
            "Achaekek's Kiss": {
                "name": "Achaekek's Kiss",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 20
            },
            "Acid Flask (Greater)": {
                "name": "Acid Flask (Greater)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Acid Flask (Lesser)": {
                "name": "Acid Flask (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Acid Flask (Major)": {
                "name": "Acid Flask (Major)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Acid Flask (Moderate)": {
                "name": "Acid Flask (Moderate)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Addiction Suppressant (Greater)": {
                "name": "Addiction Suppressant (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Addiction Suppressant (Lesser)": {
                "name": "Addiction Suppressant (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Addiction Suppressant (Major)": {
                "name": "Addiction Suppressant (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 14
            },
            "Addiction Suppressant (Moderate)": {
                "name": "Addiction Suppressant (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Addlebrain": {
                "name": "Addlebrain",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Aged Assassin Vine Wine": {
                "name": "Aged Assassin Vine Wine",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Alchemical Atomizer": {
                "name": "Alchemical Atomizer",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 10
            },
            "Alchemical Chart (Greater)": {
                "name": "Alchemical Chart (Greater)",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 18
            },
            "Alchemical Chart (Lesser)": {
                "name": "Alchemical Chart (Lesser)",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 4
            },
            "Alchemical Chart (Moderate)": {
                "name": "Alchemical Chart (Moderate)",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 12
            },
            "Alchemical Crossbow": {
                "name": "Alchemical Crossbow",
                "traits": [
                    "alchemical"
                ],
                "category": "simple",
                "type": "weapon",
                "level": 0
            },
            "Alchemical Fuse": {
                "name": "Alchemical Fuse",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Alchemical Gauntlet": {
                "name": "Alchemical Gauntlet",
                "traits": [
                    "agile",
                    "alchemical",
                    "free-hand"
                ],
                "category": "simple",
                "type": "weapon",
                "level": 1
            },
            "Alchemist's Fire (Greater)": {
                "name": "Alchemist's Fire (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Alchemist's Fire (Lesser)": {
                "name": "Alchemist's Fire (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Alchemist's Fire (Major)": {
                "name": "Alchemist's Fire (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Alchemist's Fire (Moderate)": {
                "name": "Alchemist's Fire (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Alchemist's Flamethrower": {
                "name": "Alchemist's Flamethrower",
                "traits": [
                    "alchemical",
                    "fire"
                ],
                "category": null,
                "type": "equipment",
                "level": 2
            },
            "Alchemist's Lab (Expanded)": {
                "name": "Alchemist's Lab (Expanded)",
                "traits": [],
                "category": null,
                "type": "equipment",
                "level": 3
            },
            "Alcohol": {
                "name": "Alcohol",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 0
            },
            "Alkenstar Ice Wine": {
                "name": "Alkenstar Ice Wine",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison",
                    "vitality"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Ambrosia of Undying Hope": {
                "name": "Ambrosia of Undying Hope",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 19
            },
            "Animal Nip (Lesser)": {
                "name": "Animal Nip (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory",
                    "plant",
                    "wood"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Animal Nip (Major)": {
                "name": "Animal Nip (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory",
                    "plant",
                    "wood"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Animal Nip (Moderate)": {
                "name": "Animal Nip (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory",
                    "plant",
                    "wood"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Animal Pheromones (Greater)": {
                "name": "Animal Pheromones (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 17
            },
            "Animal Pheromones (Lesser)": {
                "name": "Animal Pheromones (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Animal Pheromones (Moderate)": {
                "name": "Animal Pheromones (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Animal Repellent (Greater)": {
                "name": "Animal Repellent (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Animal Repellent (Lesser)": {
                "name": "Animal Repellent (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Animal Repellent (Major)": {
                "name": "Animal Repellent (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 16
            },
            "Animal Repellent (Minor)": {
                "name": "Animal Repellent (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Animal Repellent (Moderate)": {
                "name": "Animal Repellent (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Antidote (Greater)": {
                "name": "Antidote (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Antidote (Lesser)": {
                "name": "Antidote (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Antidote (Major)": {
                "name": "Antidote (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 14
            },
            "Antidote (Moderate)": {
                "name": "Antidote (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Antiplague (Greater)": {
                "name": "Antiplague (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Antiplague (Lesser)": {
                "name": "Antiplague (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Antiplague (Major)": {
                "name": "Antiplague (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 14
            },
            "Antiplague (Moderate)": {
                "name": "Antiplague (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Antipode Oil": {
                "name": "Antipode Oil",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 6
            },
            "Applereed Mutagen (Greater)": {
                "name": "Applereed Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 18
            },
            "Applereed Mutagen (Lesser)": {
                "name": "Applereed Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 4
            },
            "Applereed Mutagen (Moderate)": {
                "name": "Applereed Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 12
            },
            "Apricot of Bestial Might": {
                "name": "Apricot of Bestial Might",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 16
            },
            "Armor Polishing Kit": {
                "name": "Armor Polishing Kit",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Aroma Concealer": {
                "name": "Aroma Concealer",
                "traits": [
                    "alchemical",
                    "consumable",
                    "oil"
                ],
                "category": "oil",
                "type": "consumable",
                "level": 1
            },
            "Aromatic Ammunition": {
                "name": "Aromatic Ammunition",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 2
            },
            "Arsenic": {
                "name": "Arsenic",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 1
            },
            "Artevil Suspension": {
                "name": "Artevil Suspension",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Assassin Vine Wine": {
                "name": "Assassin Vine Wine",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Astringent Venom": {
                "name": "Astringent Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 12
            },
            "Auric Noodles": {
                "name": "Auric Noodles",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Aurifying Salts": {
                "name": "Aurifying Salts",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Awakened Adamantine Shot": {
                "name": "Awakened Adamantine Shot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 18
            },
            "Awakened Cold Iron Shot": {
                "name": "Awakened Cold Iron Shot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 17
            },
            "Awakened Silver Shot": {
                "name": "Awakened Silver Shot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 17
            },
            "Azure Lily Pollen": {
                "name": "Azure Lily Pollen",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 10
            },
            "Azure Worm Repellent": {
                "name": "Azure Worm Repellent",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 15
            },
            "Baleblood Draft": {
                "name": "Baleblood Draft",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Bane Ammunition (Greater)": {
                "name": "Bane Ammunition (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 11
            },
            "Bane Ammunition (Lesser)": {
                "name": "Bane Ammunition (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 1
            },
            "Bane Ammunition (Moderate)": {
                "name": "Bane Ammunition (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 5
            },
            "Belladonna": {
                "name": "Belladonna",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Bestial Mutagen (Greater)": {
                "name": "Bestial Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Bestial Mutagen (Lesser)": {
                "name": "Bestial Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Bestial Mutagen (Major)": {
                "name": "Bestial Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Bestial Mutagen (Moderate)": {
                "name": "Bestial Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Bioluminescence Bomb": {
                "name": "Bioluminescence Bomb",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "light"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Black Adder Venom": {
                "name": "Black Adder Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Blackfinger Blight": {
                "name": "Blackfinger Blight",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 12
            },
            "Black Lotus Extract": {
                "name": "Black Lotus Extract",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 19
            },
            "Black Powder (Dose or Round)": {
                "name": "Black Powder (Dose or Round)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 0
            },
            "Black Powder (Horn)": {
                "name": "Black Powder (Horn)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Black Powder (Keg)": {
                "name": "Black Powder (Keg)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Black Smear Poison": {
                "name": "Black Smear Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Blasting Stone (Greater)": {
                "name": "Blasting Stone (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "sonic",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Blasting Stone (Lesser)": {
                "name": "Blasting Stone (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "sonic",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Blasting Stone (Major)": {
                "name": "Blasting Stone (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "sonic",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Blasting Stone (Moderate)": {
                "name": "Blasting Stone (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "sonic",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Blaze": {
                "name": "Blaze",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 2
            },
            "Blight Bomb (Greater)": {
                "name": "Blight Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Blight Bomb (Lesser)": {
                "name": "Blight Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Blight Bomb (Major)": {
                "name": "Blight Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Blight Bomb (Moderate)": {
                "name": "Blight Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Blightburn Bomb (Greater)": {
                "name": "Blightburn Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "disease",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 20
            },
            "Blightburn Bomb": {
                "name": "Blightburn Bomb",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "disease",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 15
            },
            "Blightburn Resin": {
                "name": "Blightburn Resin",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 11
            },
            "Blindpepper Bomb": {
                "name": "Blindpepper Bomb",
                "traits": [
                    "alchemical",
                    "consumable",
                    "visual"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Blindpepper Tube": {
                "name": "Blindpepper Tube",
                "traits": [
                    "alchemical",
                    "consumable",
                    "visual"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Blister Ammunition (Greater)": {
                "name": "Blister Ammunition (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 16
            },
            "Blister Ammunition (Lesser)": {
                "name": "Blister Ammunition (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 5
            },
            "Blister Ammunition (Moderate)": {
                "name": "Blister Ammunition (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 11
            },
            "Blood Bomb (Greater)": {
                "name": "Blood Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Blood Bomb (Lesser)": {
                "name": "Blood Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Blood Bomb (Major)": {
                "name": "Blood Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Blood Bomb (Moderate)": {
                "name": "Blood Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Blood Booster (Greater)": {
                "name": "Blood Booster (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 18
            },
            "Blood Booster (Lesser)": {
                "name": "Blood Booster (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Blood Booster (Moderate)": {
                "name": "Blood Booster (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Bloodeye Coffee": {
                "name": "Bloodeye Coffee",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 0
            },
            "Bloodhound Mask (Greater)": {
                "name": "Bloodhound Mask (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 11
            },
            "Bloodhound Mask (Lesser)": {
                "name": "Bloodhound Mask (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 2
            },
            "Bloodhound Mask (Moderate)": {
                "name": "Bloodhound Mask (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 6
            },
            "Blood Sap": {
                "name": "Blood Sap",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 1
            },
            "Blood Sight Elixir (Greater)": {
                "name": "Blood Sight Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Blood Sight Elixir (Lesser)": {
                "name": "Blood Sight Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Blood Sight Elixir (Major)": {
                "name": "Blood Sight Elixir (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Blood Sight Elixir (Moderate)": {
                "name": "Blood Sight Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Blue Dragonfly Poison": {
                "name": "Blue Dragonfly Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 3
            },
            "Body Recovery Kit": {
                "name": "Body Recovery Kit",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Bogeyman Breath": {
                "name": "Bogeyman Breath",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fear",
                    "inhaled",
                    "mental",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 11
            },
            "Bomb Coagulant Alembic": {
                "name": "Bomb Coagulant Alembic",
                "traits": [
                    "additive0",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 5
            },
            "Bomber's Eye Elixir (Greater)": {
                "name": "Bomber's Eye Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 14
            },
            "Bomber's Eye Elixir (Lesser)": {
                "name": "Bomber's Eye Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Bone Dreadnought Plate": {
                "name": "Bone Dreadnought Plate",
                "traits": [
                    "alchemical",
                    "bulwark",
                    "entrench-ranged",
                    "ponderous"
                ],
                "category": "heavy",
                "type": "armor",
                "level": 10
            },
            "Bottled Catharsis (Greater)": {
                "name": "Bottled Catharsis (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Bottled Catharsis (Lesser)": {
                "name": "Bottled Catharsis (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Bottled Catharsis (Major)": {
                "name": "Bottled Catharsis (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 18
            },
            "Bottled Catharsis (Minor)": {
                "name": "Bottled Catharsis (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Bottled Catharsis (Moderate)": {
                "name": "Bottled Catharsis (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 8
            },
            "Bottled Lightning (Greater)": {
                "name": "Bottled Lightning (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "electricity",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Bottled Lightning (Lesser)": {
                "name": "Bottled Lightning (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "electricity",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Bottled Lightning (Major)": {
                "name": "Bottled Lightning (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "electricity",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Bottled Lightning (Moderate)": {
                "name": "Bottled Lightning (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "electricity",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Bottled Night": {
                "name": "Bottled Night",
                "traits": [
                    "alchemical",
                    "consumable",
                    "darkness"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Bottled Roc": {
                "name": "Bottled Roc",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Bottled Sunlight (Greater)": {
                "name": "Bottled Sunlight (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "light",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Bottled Sunlight (Lesser)": {
                "name": "Bottled Sunlight (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "light",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 2
            },
            "Bottled Sunlight (Major)": {
                "name": "Bottled Sunlight (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "light",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Bottled Sunlight (Moderate)": {
                "name": "Bottled Sunlight (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "light",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 4
            },
            "Boulderhead Bock": {
                "name": "Boulderhead Bock",
                "traits": [
                    "alchemical",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Boulder Seed (Greater)": {
                "name": "Boulder Seed (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Boulder Seed": {
                "name": "Boulder Seed",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Bravo's Brew (Greater)": {
                "name": "Bravo's Brew (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mental"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 15
            },
            "Bravo's Brew (Lesser)": {
                "name": "Bravo's Brew (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mental"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Bravo's Brew (Moderate)": {
                "name": "Bravo's Brew (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mental"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Breath of the Mantis God": {
                "name": "Breath of the Mantis God",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 10
            },
            "Breathtaking Vapor": {
                "name": "Breathtaking Vapor",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 17
            },
            "Brewer's Regret (Greater)": {
                "name": "Brewer's Regret (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 14
            },
            "Brewer's Regret": {
                "name": "Brewer's Regret",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Brightshade": {
                "name": "Brightshade",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison",
                    "vitality"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 4
            },
            "Brimstone Fumes": {
                "name": "Brimstone Fumes",
                "traits": [
                    "alchemical",
                    "consumable",
                    "evil",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 16
            },
            "Camouflage Dye (Greater)": {
                "name": "Camouflage Dye (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Camouflage Dye (Lesser)": {
                "name": "Camouflage Dye (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Capsaicin Tonic": {
                "name": "Capsaicin Tonic",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Careless Delight": {
                "name": "Careless Delight",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "mental",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 9
            },
            "Cat's Eye Elixir": {
                "name": "Cat's Eye Elixir",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Cave Worm Venom": {
                "name": "Cave Worm Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 12
            },
            "Cerulean Scourge": {
                "name": "Cerulean Scourge",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 16
            },
            "Cheetah's Elixir (Greater)": {
                "name": "Cheetah's Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Cheetah's Elixir (Lesser)": {
                "name": "Cheetah's Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Cheetah's Elixir (Moderate)": {
                "name": "Cheetah's Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Choker-Arm Mutagen (Greater)": {
                "name": "Choker-Arm Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Choker-Arm Mutagen (Lesser)": {
                "name": "Choker-Arm Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Choker-Arm Mutagen (Major)": {
                "name": "Choker-Arm Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Choker-Arm Mutagen (Moderate)": {
                "name": "Choker-Arm Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Choleric Contagion": {
                "name": "Choleric Contagion",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 18
            },
            "Chromatic Jellyfish Oil (Greater)": {
                "name": "Chromatic Jellyfish Oil (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 19
            },
            "Chromatic Jellyfish Oil (Lesser)": {
                "name": "Chromatic Jellyfish Oil (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Chromatic Jellyfish Oil (Moderate)": {
                "name": "Chromatic Jellyfish Oil (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Cinnamon Seers": {
                "name": "Cinnamon Seers",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Clown Monarch": {
                "name": "Clown Monarch",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 5
            },
            "Clubhead Poison": {
                "name": "Clubhead Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 12
            },
            "Cognitive Mutagen (Greater)": {
                "name": "Cognitive Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Cognitive Mutagen (Lesser)": {
                "name": "Cognitive Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Cognitive Mutagen (Major)": {
                "name": "Cognitive Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Cognitive Mutagen (Moderate)": {
                "name": "Cognitive Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Cold Comfort (Greater)": {
                "name": "Cold Comfort (Greater)",
                "traits": [
                    "alchemical",
                    "cold",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 15
            },
            "Cold Comfort (Lesser)": {
                "name": "Cold Comfort (Lesser)",
                "traits": [
                    "alchemical",
                    "cold",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Cold Iron Blanch (Greater)": {
                "name": "Cold Iron Blanch (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "precious"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 16
            },
            "Cold Iron Blanch (Lesser)": {
                "name": "Cold Iron Blanch (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "precious"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 3
            },
            "Cold Iron Blanch (Moderate)": {
                "name": "Cold Iron Blanch (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "precious"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 9
            },
            "Collar of the Shifting Spider": {
                "name": "Collar of the Shifting Spider",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 5
            },
            "Colorful Coating (Blue)": {
                "name": "Colorful Coating (Blue)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Colorful Coating (Green)": {
                "name": "Colorful Coating (Green)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Colorful Coating (Indigo)": {
                "name": "Colorful Coating (Indigo)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Colorful Coating (Orange)": {
                "name": "Colorful Coating (Orange)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Colorful Coating (Red)": {
                "name": "Colorful Coating (Red)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Colorful Coating (Violet)": {
                "name": "Colorful Coating (Violet)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Colorful Coating (Yellow)": {
                "name": "Colorful Coating (Yellow)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Comprehension Elixir (Greater)": {
                "name": "Comprehension Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mental"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 7
            },
            "Comprehension Elixir (Lesser)": {
                "name": "Comprehension Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mental"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Condensed Mana": {
                "name": "Condensed Mana",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Contagion Metabolizer (Greater)": {
                "name": "Contagion Metabolizer (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 19
            },
            "Contagion Metabolizer (Lesser)": {
                "name": "Contagion Metabolizer (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Contagion Metabolizer (Moderate)": {
                "name": "Contagion Metabolizer (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Cooling Elixir (Greater)": {
                "name": "Cooling Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 16
            },
            "Cooling Elixir (Lesser)": {
                "name": "Cooling Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Cooling Elixir (Moderate)": {
                "name": "Cooling Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Cooperative Waffles (Greater)": {
                "name": "Cooperative Waffles (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Cooperative Waffles": {
                "name": "Cooperative Waffles",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Crackling Bubble Gum (Greater)": {
                "name": "Crackling Bubble Gum (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 13
            },
            "Crackling Bubble Gum (Lesser)": {
                "name": "Crackling Bubble Gum (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Crackling Bubble Gum (Major)": {
                "name": "Crackling Bubble Gum (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 15
            },
            "Crackling Bubble Gum (Moderate)": {
                "name": "Crackling Bubble Gum (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Creeping Death": {
                "name": "Creeping Death",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 6
            },
            "Crimson Worm Repellent": {
                "name": "Crimson Worm Repellent",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 18
            },
            "Crystal Shards (Greater)": {
                "name": "Crystal Shards (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Crystal Shards (Major)": {
                "name": "Crystal Shards (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Crystal Shards (Moderate)": {
                "name": "Crystal Shards (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 4
            },
            "Curare": {
                "name": "Curare",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 8
            },
            "Curled Cure Gel": {
                "name": "Curled Cure Gel",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Cytillesh": {
                "name": "Cytillesh",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 5
            },
            "Cytillesh Oil": {
                "name": "Cytillesh Oil",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 3
            },
            "Dancing Lamentation": {
                "name": "Dancing Lamentation",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 11
            },
            "Dark Pepper Powder": {
                "name": "Dark Pepper Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Darkvision Elixir (Greater)": {
                "name": "Darkvision Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 8
            },
            "Darkvision Elixir (Lesser)": {
                "name": "Darkvision Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Darkvision Elixir (Moderate)": {
                "name": "Darkvision Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Deadweight Mutagen (Greater)": {
                "name": "Deadweight Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Deadweight Mutagen (Lesser)": {
                "name": "Deadweight Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Deadweight Mutagen (Major)": {
                "name": "Deadweight Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Deadweight Mutagen (Moderate)": {
                "name": "Deadweight Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Deathcap Powder": {
                "name": "Deathcap Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 13
            },
            "Death Knell Powder": {
                "name": "Death Knell Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "divine",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 14
            },
            "Defoliation Bomb (Greater)": {
                "name": "Defoliation Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Defoliation Bomb (Lesser)": {
                "name": "Defoliation Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 2
            },
            "Defoliation Bomb (Major)": {
                "name": "Defoliation Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Defoliation Bomb (Moderate)": {
                "name": "Defoliation Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 4
            },
            "Delve Scale": {
                "name": "Delve Scale",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Demon Dust": {
                "name": "Demon Dust",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "inhaled",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 6
            },
            "Diluted Hype": {
                "name": "Diluted Hype",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 5
            },
            "Diplomat's Charcuterie": {
                "name": "Diplomat's Charcuterie",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Dragon Bile": {
                "name": "Dragon Bile",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 15
            },
            "Dragon Pearl": {
                "name": "Dragon Pearl",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Dragon's Blood Pudding (Greater)": {
                "name": "Dragon's Blood Pudding (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 13
            },
            "Dragon's Blood Pudding": {
                "name": "Dragon's Blood Pudding",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Dragon's Blood Pudding (Major)": {
                "name": "Dragon's Blood Pudding (Major)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 19
            },
            "Dragon's Blood Pudding (Moderate)": {
                "name": "Dragon's Blood Pudding (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Drakeheart Mutagen (Greater)": {
                "name": "Drakeheart Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Drakeheart Mutagen (Lesser)": {
                "name": "Drakeheart Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Drakeheart Mutagen (Major)": {
                "name": "Drakeheart Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Drakeheart Mutagen (Moderate)": {
                "name": "Drakeheart Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Dread Ampoule (Greater)": {
                "name": "Dread Ampoule (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "emotion",
                    "fear",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Dread Ampoule (Lesser)": {
                "name": "Dread Ampoule (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "emotion",
                    "fear",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Dread Ampoule (Major)": {
                "name": "Dread Ampoule (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "emotion",
                    "fear",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Dread Ampoule (Moderate)": {
                "name": "Dread Ampoule (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "emotion",
                    "fear",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Dread Helm": {
                "name": "Dread Helm",
                "traits": [
                    "alchemical",
                    "aura",
                    "emotion",
                    "fear",
                    "mental"
                ],
                "category": null,
                "type": "equipment",
                "level": 4
            },
            "Dreaming Round": {
                "name": "Dreaming Round",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation",
                    "magical",
                    "mental",
                    "sleep"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 14
            },
            "Dreamtime Tea": {
                "name": "Dreamtime Tea",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 4
            },
            "Drowsy Sun Eye Drops": {
                "name": "Drowsy Sun Eye Drops",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Durian Bomb (Greater)": {
                "name": "Durian Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Durian Bomb (Lesser)": {
                "name": "Durian Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Durian Bomb (Major)": {
                "name": "Durian Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Durian Bomb (Moderate)": {
                "name": "Durian Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Dwarven Daisy (Lesser)": {
                "name": "Dwarven Daisy (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Dwarven Daisy (Moderate)": {
                "name": "Dwarven Daisy (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Eagle Eye Elixir (Greater)": {
                "name": "Eagle Eye Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Eagle Eye Elixir (Lesser)": {
                "name": "Eagle Eye Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Eagle Eye Elixir (Major)": {
                "name": "Eagle Eye Elixir (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 16
            },
            "Eagle Eye Elixir (Moderate)": {
                "name": "Eagle Eye Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Ectoplasmic Tracer": {
                "name": "Ectoplasmic Tracer",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Egg Cream Fizz": {
                "name": "Egg Cream Fizz",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Eldritch Flare": {
                "name": "Eldritch Flare",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 15
            },
            "Elemental Ammunition (Greater)": {
                "name": "Elemental Ammunition (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 11
            },
            "Elemental Ammunition (Lesser)": {
                "name": "Elemental Ammunition (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 1
            },
            "Elemental Ammunition (Moderate)": {
                "name": "Elemental Ammunition (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 5
            },
            "Elixir of Life (Greater)": {
                "name": "Elixir of Life (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 13
            },
            "Elixir of Life (Lesser)": {
                "name": "Elixir of Life (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Elixir of Life (Major)": {
                "name": "Elixir of Life (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 15
            },
            "Elixir of Life (Minor)": {
                "name": "Elixir of Life (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Elixir of Life (Moderate)": {
                "name": "Elixir of Life (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Elixir of Life (True)": {
                "name": "Elixir of Life (True)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 19
            },
            "Elixir of Rejuvenation": {
                "name": "Elixir of Rejuvenation",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 20
            },
            "Elsie's Excellent Bottled Vim": {
                "name": "Elsie's Excellent Bottled Vim",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Elven Absinthe": {
                "name": "Elven Absinthe",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 5
            },
            "Emetic Paste (Greater)": {
                "name": "Emetic Paste (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 14
            },
            "Emetic Paste (Lesser)": {
                "name": "Emetic Paste (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Emetic Paste (Moderate)": {
                "name": "Emetic Paste (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Energizing Pill": {
                "name": "Energizing Pill",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Energy Mutagen (Greater)": {
                "name": "Energy Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Energy Mutagen (Lesser)": {
                "name": "Energy Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Energy Mutagen (Major)": {
                "name": "Energy Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Energy Mutagen (Moderate)": {
                "name": "Energy Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Enervating Powder": {
                "name": "Enervating Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 9
            },
            "Eroding Bullet": {
                "name": "Eroding Bullet",
                "traits": [
                    "acid",
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 5
            },
            "Essence of Mandragora": {
                "name": "Essence of Mandragora",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Euphorium": {
                "name": "Euphorium",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Everlasting Adhesive": {
                "name": "Everlasting Adhesive",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 7
            },
            "Exsanguinating Ammunition (Greater)": {
                "name": "Exsanguinating Ammunition (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 8
            },
            "Exsanguinating Ammunition": {
                "name": "Exsanguinating Ammunition",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 4
            },
            "Exsanguinating Ammunition (Major)": {
                "name": "Exsanguinating Ammunition (Major)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 12
            },
            "Exuviae Powder": {
                "name": "Exuviae Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "earth"
                ],
                "category": "other",
                "type": "consumable",
                "level": 14
            },
            "Fairy Bullet": {
                "name": "Fairy Bullet",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fey",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 7
            },
            "False Death": {
                "name": "False Death",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 5
            },
            "False Hope": {
                "name": "False Hope",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 17
            },
            "Fearflower Nectar": {
                "name": "Fearflower Nectar",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 4
            },
            "Feyfoul (Greater)": {
                "name": "Feyfoul (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 14
            },
            "Feyfoul (Lesser)": {
                "name": "Feyfoul (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Feyfoul (Moderate)": {
                "name": "Feyfoul (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Fire and Iceberg (Greater)": {
                "name": "Fire and Iceberg (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Fire and Iceberg": {
                "name": "Fire and Iceberg",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Fire and Iceberg (Major)": {
                "name": "Fire and Iceberg (Major)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 17
            },
            "Firefoot Popcorn": {
                "name": "Firefoot Popcorn",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Flayleaf": {
                "name": "Flayleaf",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "inhaled",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 0
            },
            "Forensic Dye": {
                "name": "Forensic Dye",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Forgetful Drops": {
                "name": "Forgetful Drops",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 3
            },
            "Forgetful Ink": {
                "name": "Forgetful Ink",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 6
            },
            "Freeze Ammunition": {
                "name": "Freeze Ammunition",
                "traits": [
                    "alchemical",
                    "consumable",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 5
            },
            "Frenzy Oil": {
                "name": "Frenzy Oil",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 16
            },
            "Frogskin Tincture": {
                "name": "Frogskin Tincture",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "poison"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Frost Vial (Greater)": {
                "name": "Frost Vial (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "cold",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Frost Vial (Lesser)": {
                "name": "Frost Vial (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "cold",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Frost Vial (Major)": {
                "name": "Frost Vial (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "cold",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Frost Vial (Moderate)": {
                "name": "Frost Vial (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "cold",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Fungal Walk Musk": {
                "name": "Fungal Walk Musk",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Fury Cocktail (Greater)": {
                "name": "Fury Cocktail (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 18
            },
            "Fury Cocktail (Lesser)": {
                "name": "Fury Cocktail (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 4
            },
            "Fury Cocktail (Moderate)": {
                "name": "Fury Cocktail (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 12
            },
            "Galvanic Chew": {
                "name": "Galvanic Chew",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Gearbinder Oil (Greater)": {
                "name": "Gearbinder Oil (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation"
                ],
                "category": "other",
                "type": "consumable",
                "level": 18
            },
            "Gearbinder Oil (Lesser)": {
                "name": "Gearbinder Oil (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Gearbinder Oil (Moderate)": {
                "name": "Gearbinder Oil (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Ghost Ampoule": {
                "name": "Ghost Ampoule",
                "traits": [
                    "alchemical",
                    "auditory",
                    "consumable",
                    "divine",
                    "emotion",
                    "expandable",
                    "fear",
                    "mental"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Ghost Charge (Greater)": {
                "name": "Ghost Charge (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Ghost Charge (Lesser)": {
                "name": "Ghost Charge (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Ghost Charge (Major)": {
                "name": "Ghost Charge (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Ghost Charge (Moderate)": {
                "name": "Ghost Charge (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "vitality"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Ghost Ink": {
                "name": "Ghost Ink",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Giant Centipede Venom": {
                "name": "Giant Centipede Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 1
            },
            "Giant Scorpion Venom": {
                "name": "Giant Scorpion Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 6
            },
            "Giant Wasp Venom": {
                "name": "Giant Wasp Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Ginger Chew": {
                "name": "Ginger Chew",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Glow Rod": {
                "name": "Glow Rod",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Glue Bomb (Greater)": {
                "name": "Glue Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Glue Bomb (Lesser)": {
                "name": "Glue Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Glue Bomb (Major)": {
                "name": "Glue Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Glue Bomb (Moderate)": {
                "name": "Glue Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Glue Bullet": {
                "name": "Glue Bullet",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 4
            },
            "Goo Grenade (Greater)": {
                "name": "Goo Grenade (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Goo Grenade (Lesser)": {
                "name": "Goo Grenade (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Goo Grenade (Major)": {
                "name": "Goo Grenade (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Goo Grenade (Moderate)": {
                "name": "Goo Grenade (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Gorgon's Breath": {
                "name": "Gorgon's Breath",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 13
            },
            "Graveroot": {
                "name": "Graveroot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 3
            },
            "Greengut": {
                "name": "Greengut",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 17
            },
            "Grindlegrub Steak": {
                "name": "Grindlegrub Steak",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Grit": {
                "name": "Grit",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 1
            },
            "Grolna": {
                "name": "Grolna",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 1
            },
            "Healing Vapor (Greater)": {
                "name": "Healing Vapor (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Healing Vapor (Lesser)": {
                "name": "Healing Vapor (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Healing Vapor (Major)": {
                "name": "Healing Vapor (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 17
            },
            "Healing Vapor (Moderate)": {
                "name": "Healing Vapor (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Hemlock": {
                "name": "Hemlock",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 17
            },
            "Hippogriff in a Jar": {
                "name": "Hippogriff in a Jar",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Hive Mother Bottle": {
                "name": "Hive Mother Bottle",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Honeyscent": {
                "name": "Honeyscent",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 10
            },
            "Hunger Oil": {
                "name": "Hunger Oil",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "divine",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 11
            },
            "Hydra Mutagen": {
                "name": "Hydra Mutagen",
                "traits": [
                    "alchemical",
                    "consumable",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 13
            },
            "Hype": {
                "name": "Hype",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 8
            },
            "Ichthyosis Mutagen": {
                "name": "Ichthyosis Mutagen",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 5
            },
            "Implosion Dust (Greater)": {
                "name": "Implosion Dust (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 18
            },
            "Implosion Dust (Lesser)": {
                "name": "Implosion Dust (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Implosion Dust (Moderate)": {
                "name": "Implosion Dust (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Impossible Cake (Greater)": {
                "name": "Impossible Cake (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Impossible Cake": {
                "name": "Impossible Cake",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Impossible Cake (Major)": {
                "name": "Impossible Cake (Major)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 17
            },
            "Infiltrator's Elixir": {
                "name": "Infiltrator's Elixir",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Inflammation Flask (Greater)": {
                "name": "Inflammation Flask (Greater)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "disease",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Inflammation Flask (Lesser)": {
                "name": "Inflammation Flask (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "disease",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 2
            },
            "Inflammation Flask (Major)": {
                "name": "Inflammation Flask (Major)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "disease",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Inflammation Flask (Moderate)": {
                "name": "Inflammation Flask (Moderate)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "disease",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 4
            },
            "Injection Reservoir": {
                "name": "Injection Reservoir",
                "traits": [
                    "adjustment",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 1
            },
            "Insight Coffee (Greater)": {
                "name": "Insight Coffee (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "other",
                "type": "consumable",
                "level": 19
            },
            "Insight Coffee (Lesser)": {
                "name": "Insight Coffee (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Insight Coffee (Moderate)": {
                "name": "Insight Coffee (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Invigorating Soap": {
                "name": "Invigorating Soap",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Iron Wine": {
                "name": "Iron Wine",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Isolation Draught": {
                "name": "Isolation Draught",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Journeybread": {
                "name": "Journeybread",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Journeybread (Power)": {
                "name": "Journeybread (Power)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Juggernaut Mutagen (Greater)": {
                "name": "Juggernaut Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Juggernaut Mutagen (Lesser)": {
                "name": "Juggernaut Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Juggernaut Mutagen (Major)": {
                "name": "Juggernaut Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Juggernaut Mutagen (Moderate)": {
                "name": "Juggernaut Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Junk Bomb (Greater)": {
                "name": "Junk Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Junk Bomb (Lesser)": {
                "name": "Junk Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Junk Bomb (Major)": {
                "name": "Junk Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Junk Bomb (Moderate)": {
                "name": "Junk Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "King's Sleep": {
                "name": "King's Sleep",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 18
            },
            "Knockout Dram": {
                "name": "Knockout Dram",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Kraken Bottle": {
                "name": "Kraken Bottle",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 18
            },
            "Lady's Blessing Oil": {
                "name": "Lady's Blessing Oil",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "oil",
                "type": "consumable",
                "level": 1
            },
            "Lastwall Soup (Greater)": {
                "name": "Lastwall Soup (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 18
            },
            "Lastwall Soup (Improved)": {
                "name": "Lastwall Soup (Improved)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Lastwall Soup": {
                "name": "Lastwall Soup",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Leadenleg": {
                "name": "Leadenleg",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 4
            },
            "Leaper's Elixir (Greater)": {
                "name": "Leaper's Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 7
            },
            "Leaper's Elixir (Lesser)": {
                "name": "Leaper's Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Lethargy Poison": {
                "name": "Lethargy Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation",
                    "injury",
                    "poison",
                    "sleep"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Liar's Demise": {
                "name": "Liar's Demise",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "divine",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 14
            },
            "Life Shot (Greater)": {
                "name": "Life Shot (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 14
            },
            "Life Shot (Lesser)": {
                "name": "Life Shot (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 6
            },
            "Life Shot (Major)": {
                "name": "Life Shot (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 16
            },
            "Life Shot (Minor)": {
                "name": "Life Shot (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 2
            },
            "Life Shot (Moderate)": {
                "name": "Life Shot (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 10
            },
            "Life Shot (True)": {
                "name": "Life Shot (True)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 20
            },
            "Living Leaf Weave": {
                "name": "Living Leaf Weave",
                "traits": [
                    "alchemical",
                    "healing",
                    "laminar",
                    "plant"
                ],
                "category": "light",
                "type": "armor",
                "level": 5
            },
            "Lodestone Bomb (Greater)": {
                "name": "Lodestone Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "force",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Lodestone Bomb": {
                "name": "Lodestone Bomb",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "force",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Looter's Lethargy": {
                "name": "Looter's Lethargy",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Mage Bane": {
                "name": "Mage Bane",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 12
            },
            "Magnetic Shield": {
                "name": "Magnetic Shield",
                "traits": [
                    "alchemical",
                    "aura"
                ],
                "category": null,
                "type": "shield",
                "level": 5
            },
            "Malleable Mixture (Greater)": {
                "name": "Malleable Mixture (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 14
            },
            "Malleable Mixture (Lesser)": {
                "name": "Malleable Mixture (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 8
            },
            "Mana-Rattler Liniment": {
                "name": "Mana-Rattler Liniment",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "morph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Matchstick": {
                "name": "Matchstick",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Matsuki's Medicinal Wine": {
                "name": "Matsuki's Medicinal Wine",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 3
            },
            "Mender's Soup": {
                "name": "Mender's Soup",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Metalmist Sphere (Greater)": {
                "name": "Metalmist Sphere (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 13
            },
            "Metalmist Sphere (Lesser)": {
                "name": "Metalmist Sphere (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Metalmist Sphere (Moderate)": {
                "name": "Metalmist Sphere (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Meteor Shot (Greater)": {
                "name": "Meteor Shot (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire",
                    "magical",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 12
            },
            "Meteor Shot": {
                "name": "Meteor Shot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire",
                    "magical",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 7
            },
            "Meteor Shot (Major)": {
                "name": "Meteor Shot (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire",
                    "magical",
                    "splash"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 17
            },
            "Midnight Milk (Experimental)": {
                "name": "Midnight Milk (Experimental)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 5
            },
            "Midnight Milk (Pure)": {
                "name": "Midnight Milk (Pure)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 20
            },
            "Midnight Milk (Refined)": {
                "name": "Midnight Milk (Refined)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 12
            },
            "Mindfog Mist": {
                "name": "Mindfog Mist",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 15
            },
            "Mindmurk Oil": {
                "name": "Mindmurk Oil",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 4
            },
            "Missive Mint": {
                "name": "Missive Mint",
                "traits": [
                    "alchemical",
                    "auditory",
                    "consumable",
                    "linguistic"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Mistform Elixir (Greater)": {
                "name": "Mistform Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "illusion",
                    "visual"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Mistform Elixir (Lesser)": {
                "name": "Mistform Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "illusion",
                    "visual"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Mistform Elixir (Moderate)": {
                "name": "Mistform Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "illusion",
                    "visual"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Mnemonic Acid": {
                "name": "Mnemonic Acid",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 8
            },
            "Moonlit Ink": {
                "name": "Moonlit Ink",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Moon Radish Soup": {
                "name": "Moon Radish Soup",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing",
                    "mental"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Mud Bomb (Greater)": {
                "name": "Mud Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Mud Bomb (Lesser)": {
                "name": "Mud Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Mud Bomb (Major)": {
                "name": "Mud Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Mud Bomb (Moderate)": {
                "name": "Mud Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "earth",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Mukradi Jar": {
                "name": "Mukradi Jar",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 15
            },
            "Mustard Powder": {
                "name": "Mustard Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 5
            },
            "Nail Bomb (Greater)": {
                "name": "Nail Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Nail Bomb (Lesser)": {
                "name": "Nail Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 2
            },
            "Nail Bomb (Major)": {
                "name": "Nail Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Nail Bomb (Moderate)": {
                "name": "Nail Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 4
            },
            "Necrotic Bomb (Greater)": {
                "name": "Necrotic Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Necrotic Bomb (Lesser)": {
                "name": "Necrotic Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Necrotic Bomb (Major)": {
                "name": "Necrotic Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Necrotic Bomb (Moderate)": {
                "name": "Necrotic Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "void"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Nethershade": {
                "name": "Nethershade",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison",
                    "void"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 10
            },
            "Nettleweed Residue": {
                "name": "Nettleweed Residue",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 8
            },
            "Nightmare Salt": {
                "name": "Nightmare Salt",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 20
            },
            "Nightmare Vapor": {
                "name": "Nightmare Vapor",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 16
            },
            "Numbing Tonic (Greater)": {
                "name": "Numbing Tonic (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 13
            },
            "Numbing Tonic (Lesser)": {
                "name": "Numbing Tonic (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Numbing Tonic (Major)": {
                "name": "Numbing Tonic (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 16
            },
            "Numbing Tonic (Minor)": {
                "name": "Numbing Tonic (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Numbing Tonic (Moderate)": {
                "name": "Numbing Tonic (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Numbing Tonic (True)": {
                "name": "Numbing Tonic (True)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 19
            },
            "Oblivion Essence": {
                "name": "Oblivion Essence",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 19
            },
            "Octopus Bottle": {
                "name": "Octopus Bottle",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Olfactory Obfuscator (Greater)": {
                "name": "Olfactory Obfuscator (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Olfactory Obfuscator (Lesser)": {
                "name": "Olfactory Obfuscator (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Ommatophoric Mutagen": {
                "name": "Ommatophoric Mutagen",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Ooze Ammunition (Greater)": {
                "name": "Ooze Ammunition (Greater)",
                "traits": [
                    "acid",
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 12
            },
            "Ooze Ammunition (Lesser)": {
                "name": "Ooze Ammunition (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 2
            },
            "Ooze Ammunition (Major)": {
                "name": "Ooze Ammunition (Major)",
                "traits": [
                    "acid",
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 18
            },
            "Ooze Ammunition (Moderate)": {
                "name": "Ooze Ammunition (Moderate)",
                "traits": [
                    "acid",
                    "alchemical",
                    "consumable"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 6
            },
            "Oozepick (Greater)": {
                "name": "Oozepick (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Oozepick": {
                "name": "Oozepick",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Ooze Skin": {
                "name": "Ooze Skin",
                "traits": [
                    "alchemical"
                ],
                "category": "light",
                "type": "armor",
                "level": 5
            },
            "Origin Unguent": {
                "name": "Origin Unguent",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 2
            },
            "Overloaded Brain Grenade": {
                "name": "Overloaded Brain Grenade",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire",
                    "mental",
                    "splash"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Owlbear Egg": {
                "name": "Owlbear Egg",
                "traits": [
                    "alchemical",
                    "auditory",
                    "consumable",
                    "emotion",
                    "fear",
                    "mental"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Oxygen Ooze": {
                "name": "Oxygen Ooze",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Pale Fade": {
                "name": "Pale Fade",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 19
            },
            "Pallesthetic Mutagen": {
                "name": "Pallesthetic Mutagen",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Pernicious Spore Bomb (Greater)": {
                "name": "Pernicious Spore Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Pernicious Spore Bomb (Lesser)": {
                "name": "Pernicious Spore Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Pernicious Spore Bomb (Major)": {
                "name": "Pernicious Spore Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Pernicious Spore Bomb (Moderate)": {
                "name": "Pernicious Spore Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Peshpine Grenade (Greater)": {
                "name": "Peshpine Grenade (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Peshpine Grenade (Lesser)": {
                "name": "Peshpine Grenade (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Peshpine Grenade (Major)": {
                "name": "Peshpine Grenade (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Peshpine Grenade (Moderate)": {
                "name": "Peshpine Grenade (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Phantom Roll": {
                "name": "Phantom Roll",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Pheromone Flare (Greater)": {
                "name": "Pheromone Flare (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 17
            },
            "Pheromone Flare (Lesser)": {
                "name": "Pheromone Flare (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Pheromone Flare (Moderate)": {
                "name": "Pheromone Flare (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "olfactory"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Philosopher's Stone": {
                "name": "Philosopher's Stone",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 20
            },
            "Plasma Hype": {
                "name": "Plasma Hype",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 12
            },
            "Poison Concentrator (Greater)": {
                "name": "Poison Concentrator (Greater)",
                "traits": [
                    "additive1",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 15
            },
            "Poison Concentrator (Lesser)": {
                "name": "Poison Concentrator (Lesser)",
                "traits": [
                    "additive1",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 5
            },
            "Poison Concentrator (Major)": {
                "name": "Poison Concentrator (Major)",
                "traits": [
                    "additive1",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 19
            },
            "Poison Concentrator (Moderate)": {
                "name": "Poison Concentrator (Moderate)",
                "traits": [
                    "additive1",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 10
            },
            "Poison Fizz (Greater)": {
                "name": "Poison Fizz (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 15
            },
            "Poison Fizz (Lesser)": {
                "name": "Poison Fizz (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Poison Fizz (Moderate)": {
                "name": "Poison Fizz (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Popdust": {
                "name": "Popdust",
                "traits": [
                    "alchemical",
                    "consumable",
                    "sonic"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Powered Full Plate": {
                "name": "Powered Full Plate",
                "traits": [
                    "alchemical",
                    "bulwark"
                ],
                "category": "heavy",
                "type": "armor",
                "level": 7
            },
            "Preserved Moonflower": {
                "name": "Preserved Moonflower",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Pressure Bomb (Greater)": {
                "name": "Pressure Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "force",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Pressure Bomb (Lesser)": {
                "name": "Pressure Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "force",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Pressure Bomb (Major)": {
                "name": "Pressure Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "force",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Pressure Bomb (Moderate)": {
                "name": "Pressure Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "force",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Prey Mutagen (Greater)": {
                "name": "Prey Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Prey Mutagen (Lesser)": {
                "name": "Prey Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Prey Mutagen (Major)": {
                "name": "Prey Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Prey Mutagen (Moderate)": {
                "name": "Prey Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Psychic Colors Elixir": {
                "name": "Psychic Colors Elixir",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 8
            },
            "Pucker Pickle": {
                "name": "Pucker Pickle",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Pummel-Growth Toxin": {
                "name": "Pummel-Growth Toxin",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "morph",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 13
            },
            "Purple Worm Repellent": {
                "name": "Purple Worm Repellent",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 13
            },
            "Pyronite": {
                "name": "Pyronite",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Qat": {
                "name": "Qat",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 0
            },
            "Quickmelt Slick (Greater)": {
                "name": "Quickmelt Slick (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Quickmelt Slick (Lesser)": {
                "name": "Quickmelt Slick (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Quickmelt Slick (Moderate)": {
                "name": "Quickmelt Slick (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Quicksilver Mutagen (Greater)": {
                "name": "Quicksilver Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Quicksilver Mutagen (Lesser)": {
                "name": "Quicksilver Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Quicksilver Mutagen (Major)": {
                "name": "Quicksilver Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Quicksilver Mutagen (Moderate)": {
                "name": "Quicksilver Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Rainbow Vinegar (Greater)": {
                "name": "Rainbow Vinegar (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Rainbow Vinegar (Moderate)": {
                "name": "Rainbow Vinegar (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Reaper's Shadow": {
                "name": "Reaper's Shadow",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison",
                    "virulent",
                    "void"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 13
            },
            "Redpitch Bomb (Greater)": {
                "name": "Redpitch Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Redpitch Bomb (Lesser)": {
                "name": "Redpitch Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Redpitch Bomb (Major)": {
                "name": "Redpitch Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Redpitch Bomb (Moderate)": {
                "name": "Redpitch Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Red-Rib Gill Mask (Greater)": {
                "name": "Red-Rib Gill Mask (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 14
            },
            "Red-Rib Gill Mask (Lesser)": {
                "name": "Red-Rib Gill Mask (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Red-Rib Gill Mask (Moderate)": {
                "name": "Red-Rib Gill Mask (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Refined Pesh": {
                "name": "Refined Pesh",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "inhaled",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 1
            },
            "Remote Trigger": {
                "name": "Remote Trigger",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 5
            },
            "Revealing Mist (Greater)": {
                "name": "Revealing Mist (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Revealing Mist (Lesser)": {
                "name": "Revealing Mist (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Rounds (Arquebus)": {
                "name": "Rounds (Arquebus)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Axe Musket)": {
                "name": "Rounds (Axe Musket)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Black Powder Knuckle Dusters)": {
                "name": "Rounds (Black Powder Knuckle Dusters)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Blunderbuss)": {
                "name": "Rounds (Blunderbuss)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Cane Pistol)": {
                "name": "Rounds (Cane Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Clan Pistol)": {
                "name": "Rounds (Clan Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Coat Pistol)": {
                "name": "Rounds (Coat Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Dagger Pistol)": {
                "name": "Rounds (Dagger Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Double-Barreled Musket)": {
                "name": "Rounds (Double-Barreled Musket)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Double-Barreled Pistol)": {
                "name": "Rounds (Double-Barreled Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Dragon Mouth Pistol)": {
                "name": "Rounds (Dragon Mouth Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Dueling Pistol)": {
                "name": "Rounds (Dueling Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Dwarven Scattergun)": {
                "name": "Rounds (Dwarven Scattergun)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Explosive Dogslicer)": {
                "name": "Rounds (Explosive Dogslicer)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Fire Lance)": {
                "name": "Rounds (Fire Lance)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Flingflenser)": {
                "name": "Rounds (Flingflenser)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Flintlock Musket)": {
                "name": "Rounds (Flintlock Musket)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Flintlock Pistol)": {
                "name": "Rounds (Flintlock Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Gnome Amalgam Musket)": {
                "name": "Rounds (Gnome Amalgam Musket)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Gun Sword)": {
                "name": "Rounds (Gun Sword)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Hammer Gun)": {
                "name": "Rounds (Hammer Gun)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Hand Cannon)": {
                "name": "Rounds (Hand Cannon)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Harmona Gun)": {
                "name": "Rounds (Harmona Gun)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Jezail)": {
                "name": "Rounds (Jezail)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Mace Multipistol)": {
                "name": "Rounds (Mace Multipistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Mithral Tree)": {
                "name": "Rounds (Mithral Tree)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Pepperbox)": {
                "name": "Rounds (Pepperbox)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Piercing Wind)": {
                "name": "Rounds (Piercing Wind)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Rapier Pistol)": {
                "name": "Rounds (Rapier Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Slide Pistol)": {
                "name": "Rounds (Slide Pistol)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rounds (Three Peaked Tree)": {
                "name": "Rounds (Three Peaked Tree)",
                "traits": [
                    "alchemical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 0
            },
            "Rusting Ammunition (Greater)": {
                "name": "Rusting Ammunition (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "force"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 18
            },
            "Rusting Ammunition (Moderate)": {
                "name": "Rusting Ammunition (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "force"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 13
            },
            "Rust Scrub": {
                "name": "Rust Scrub",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Saboteur's Friend": {
                "name": "Saboteur's Friend",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Sanguine Mutagen (Greater)": {
                "name": "Sanguine Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Sanguine Mutagen (Lesser)": {
                "name": "Sanguine Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Sanguine Mutagen (Major)": {
                "name": "Sanguine Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Sanguine Mutagen (Moderate)": {
                "name": "Sanguine Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Sargassum Phial": {
                "name": "Sargassum Phial",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable",
                    "incapacitation",
                    "mental",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Scarlet Mist": {
                "name": "Scarlet Mist",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 8
            },
            "Scholar's Drop": {
                "name": "Scholar's Drop",
                "traits": [
                    "alchemical",
                    "consumable",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Scour": {
                "name": "Scour",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "inhaled",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 8
            },
            "Searing Suture (Greater)": {
                "name": "Searing Suture (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 9
            },
            "Searing Suture (Lesser)": {
                "name": "Searing Suture (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Sea Touch Elixir (Greater)": {
                "name": "Sea Touch Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 15
            },
            "Sea Touch Elixir (Lesser)": {
                "name": "Sea Touch Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Sea Touch Elixir (Moderate)": {
                "name": "Sea Touch Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Self-Immolating Note": {
                "name": "Self-Immolating Note",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Sense-Dulling Hood (Greater)": {
                "name": "Sense-Dulling Hood (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Sense-Dulling Hood (Lesser)": {
                "name": "Sense-Dulling Hood (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Serene Mutagen (Greater)": {
                "name": "Serene Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Serene Mutagen (Lesser)": {
                "name": "Serene Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Serene Mutagen (Major)": {
                "name": "Serene Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Serene Mutagen (Moderate)": {
                "name": "Serene Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Shatterstone (Greater)": {
                "name": "Shatterstone (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "sonic",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Shatterstone": {
                "name": "Shatterstone",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "sonic",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Shiver": {
                "name": "Shiver",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 3
            },
            "Silencing Shot": {
                "name": "Silencing Shot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "illusion",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 11
            },
            "Silver Crescent (Greater)": {
                "name": "Silver Crescent (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 16
            },
            "Silver Crescent (Lesser)": {
                "name": "Silver Crescent (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Silver Crescent (Moderate)": {
                "name": "Silver Crescent (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light",
                    "lozenge"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Silver Orb (Greater)": {
                "name": "Silver Orb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Silver Orb (Lesser)": {
                "name": "Silver Orb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 5
            },
            "Silver Orb (Powder)": {
                "name": "Silver Orb (Powder)",
                "traits": [
                    "alchemical",
                    "bomb"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Silver Salve": {
                "name": "Silver Salve",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Silversoul Bomb (Greater)": {
                "name": "Silversoul Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "mental",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Silversoul Bomb": {
                "name": "Silversoul Bomb",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "mental",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Silversoul Bomb (Major)": {
                "name": "Silversoul Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "mental",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Silvertongue Mutagen (Greater)": {
                "name": "Silvertongue Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 11
            },
            "Silvertongue Mutagen (Lesser)": {
                "name": "Silvertongue Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 1
            },
            "Silvertongue Mutagen (Major)": {
                "name": "Silvertongue Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 17
            },
            "Silvertongue Mutagen (Moderate)": {
                "name": "Silvertongue Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 3
            },
            "Sixfingers Elixir (Greater)": {
                "name": "Sixfingers Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Sixfingers Elixir (Lesser)": {
                "name": "Sixfingers Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Sixfingers Elixir (Moderate)": {
                "name": "Sixfingers Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Skeptic's Elixir (Greater)": {
                "name": "Skeptic's Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Skeptic's Elixir (Lesser)": {
                "name": "Skeptic's Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Skeptic's Elixir (Moderate)": {
                "name": "Skeptic's Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Skinstitch Salve": {
                "name": "Skinstitch Salve",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 7
            },
            "Skunk Bomb (Greater)": {
                "name": "Skunk Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Skunk Bomb (Lesser)": {
                "name": "Skunk Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Skunk Bomb (Major)": {
                "name": "Skunk Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Skunk Bomb  (Moderate)": {
                "name": "Skunk Bomb  (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Sloughing Toxin": {
                "name": "Sloughing Toxin",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Slumber Wine": {
                "name": "Slumber Wine",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison",
                    "sleep"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 12
            },
            "Smoke Ball (Greater)": {
                "name": "Smoke Ball (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Smoke Ball (Lesser)": {
                "name": "Smoke Ball (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Smother Shroud": {
                "name": "Smother Shroud",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Snake Oil": {
                "name": "Snake Oil",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 1
            },
            "Sneezing Powder": {
                "name": "Sneezing Powder",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Soothing Powder (Greater)": {
                "name": "Soothing Powder (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Soothing Powder (Lesser)": {
                "name": "Soothing Powder (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "healing"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Soothing Toddy": {
                "name": "Soothing Toddy",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Soothing Tonic (Greater)": {
                "name": "Soothing Tonic (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Soothing Tonic (Lesser)": {
                "name": "Soothing Tonic (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Soothing Tonic (Major)": {
                "name": "Soothing Tonic (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Soothing Tonic (Moderate)": {
                "name": "Soothing Tonic (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 5
            },
            "Sparkler": {
                "name": "Sparkler",
                "traits": [
                    "alchemical",
                    "consumable",
                    "fire"
                ],
                "category": "other",
                "type": "consumable",
                "level": 1
            },
            "Spear Frog Poison": {
                "name": "Spear Frog Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 1
            },
            "Spellsap Grenade (Greater)": {
                "name": "Spellsap Grenade (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "simple",
                "type": "weapon",
                "level": 18
            },
            "Spellsap Grenade": {
                "name": "Spellsap Grenade",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "simple",
                "type": "weapon",
                "level": 12
            },
            "Spiderfoot Brew (Greater)": {
                "name": "Spiderfoot Brew (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Spiderfoot Brew (Lesser)": {
                "name": "Spiderfoot Brew (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Spiderfoot Brew (Moderate)": {
                "name": "Spiderfoot Brew (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 9
            },
            "Spider Mold": {
                "name": "Spider Mold",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 4
            },
            "Spider Root": {
                "name": "Spider Root",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 9
            },
            "Spider Satchel (Greater)": {
                "name": "Spider Satchel (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Spider Satchel (Lesser)": {
                "name": "Spider Satchel (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 2
            },
            "Spider Satchel (Major)": {
                "name": "Spider Satchel (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Spider Satchel (Moderate)": {
                "name": "Spider Satchel (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 4
            },
            "Spider Venom": {
                "name": "Spider Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 5
            },
            "Sportlebore Capsule": {
                "name": "Sportlebore Capsule",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 7
            },
            "Sprite Apple (Chartreuse)": {
                "name": "Sprite Apple (Chartreuse)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Sprite Apple (Golden)": {
                "name": "Sprite Apple (Golden)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Sprite Apple (Pink)": {
                "name": "Sprite Apple (Pink)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Sprite Apple (Teal)": {
                "name": "Sprite Apple (Teal)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "light"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Star Grenade (Greater)": {
                "name": "Star Grenade (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Star Grenade (Lesser)": {
                "name": "Star Grenade (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Star Grenade (Major)": {
                "name": "Star Grenade (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Star Grenade (Moderate)": {
                "name": "Star Grenade (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Steelscour (Greater)": {
                "name": "Steelscour (Greater)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Steelscour (Lesser)": {
                "name": "Steelscour (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Steelscour (Major)": {
                "name": "Steelscour (Major)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Steelscour (Moderate)": {
                "name": "Steelscour (Moderate)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Stepping Stone Shot (Greater)": {
                "name": "Stepping Stone Shot (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 10
            },
            "Stepping Stone Shot": {
                "name": "Stepping Stone Shot",
                "traits": [
                    "alchemical",
                    "consumable",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 7
            },
            "Sticky Algae Bomb (Greater)": {
                "name": "Sticky Algae Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Sticky Algae Bomb (Lesser)": {
                "name": "Sticky Algae Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Sticky Algae Bomb (Major)": {
                "name": "Sticky Algae Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Sticky Algae Bomb (Moderate)": {
                "name": "Sticky Algae Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Stone Body Mutagen (Greater)": {
                "name": "Stone Body Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 15
            },
            "Stone Body Mutagen (Lesser)": {
                "name": "Stone Body Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 5
            },
            "Stone Body Mutagen (Moderate)": {
                "name": "Stone Body Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "mutagen",
                "type": "consumable",
                "level": 12
            },
            "Stone Fist Elixir": {
                "name": "Stone Fist Elixir",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "morph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Stupor Poison": {
                "name": "Stupor Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "incapacitation",
                    "injury",
                    "poison",
                    "sleep"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Succubus Kiss": {
                "name": "Succubus Kiss",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "ingested",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 7
            },
            "Sulfur Bomb (Greater)": {
                "name": "Sulfur Bomb (Greater)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Sulfur Bomb (Lesser)": {
                "name": "Sulfur Bomb (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Sulfur Bomb (Major)": {
                "name": "Sulfur Bomb (Major)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Sulfur Bomb (Moderate)": {
                "name": "Sulfur Bomb (Moderate)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "olfactory",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Sun Dazzler": {
                "name": "Sun Dazzler",
                "traits": [
                    "alchemical",
                    "light",
                    "visual"
                ],
                "category": null,
                "type": "equipment",
                "level": 8
            },
            "Sun Orchid Elixir": {
                "name": "Sun Orchid Elixir",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 20
            },
            "Sun Orchid Poultice": {
                "name": "Sun Orchid Poultice",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 18
            },
            "Surging Serum (Greater)": {
                "name": "Surging Serum (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Surging Serum (Lesser)": {
                "name": "Surging Serum (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Surging Serum (Major)": {
                "name": "Surging Serum (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 18
            },
            "Surging Serum (Minor)": {
                "name": "Surging Serum (Minor)",
                "traits": [
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Surging Serum (Moderate)": {
                "name": "Surging Serum (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "healing"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 8
            },
            "Swamp Lily Quilt": {
                "name": "Swamp Lily Quilt",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Tallow Bomb (Greater)": {
                "name": "Tallow Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Tallow Bomb (Lesser)": {
                "name": "Tallow Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Tallow Bomb (Major)": {
                "name": "Tallow Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Tallow Bomb (Moderate)": {
                "name": "Tallow Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "fire",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Tanglefoot Extruder": {
                "name": "Tanglefoot Extruder",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 3
            },
            "Tangle Root Toxin": {
                "name": "Tangle Root Toxin",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Tarantula Ampoule": {
                "name": "Tarantula Ampoule",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 6
            },
            "Taster's Folly": {
                "name": "Taster's Folly",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 4
            },
            "Tatzlwyrm's Gasp": {
                "name": "Tatzlwyrm's Gasp",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 2
            },
            "Tears of Death": {
                "name": "Tears of Death",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 20
            },
            "Tenderizer Grenade (Greater)": {
                "name": "Tenderizer Grenade (Greater)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Tenderizer Grenade (Lesser)": {
                "name": "Tenderizer Grenade (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Tenderizer Grenade (Major)": {
                "name": "Tenderizer Grenade (Major)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Tenderizer Grenade (Moderate)": {
                "name": "Tenderizer Grenade (Moderate)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "plant",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Terror Spores": {
                "name": "Terror Spores",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 9
            },
            "Theatrical Mutagen (Greater)": {
                "name": "Theatrical Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "Theatrical Mutagen (Lesser)": {
                "name": "Theatrical Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Theatrical Mutagen (Major)": {
                "name": "Theatrical Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "Theatrical Mutagen (Moderate)": {
                "name": "Theatrical Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Timeless Salts": {
                "name": "Timeless Salts",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 4
            },
            "Toadskin Salve (Greater)": {
                "name": "Toadskin Salve (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 7
            },
            "Toadskin Salve": {
                "name": "Toadskin Salve",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 3
            },
            "Toadskin Salve (Major)": {
                "name": "Toadskin Salve (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 11
            },
            "Toad Tears": {
                "name": "Toad Tears",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Toothwort Extract": {
                "name": "Toothwort Extract",
                "traits": [
                    "additive1",
                    "alchemical",
                    "consumable"
                ],
                "category": "catalyst",
                "type": "consumable",
                "level": 3
            },
            "Toxic Effluence": {
                "name": "Toxic Effluence",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 10
            },
            "Tracker's Stew": {
                "name": "Tracker's Stew",
                "traits": [
                    "alchemical",
                    "consumable",
                    "processed"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Troll Hide": {
                "name": "Troll Hide",
                "traits": [
                    "alchemical",
                    "healing"
                ],
                "category": "medium",
                "type": "armor",
                "level": 15
            },
            "Trueshape Bomb (Greater)": {
                "name": "Trueshape Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 18
            },
            "Trueshape Bomb": {
                "name": "Trueshape Bomb",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 12
            },
            "Trustworthy Round": {
                "name": "Trustworthy Round",
                "traits": [
                    "alchemical",
                    "consumable",
                    "magical"
                ],
                "category": "ammo",
                "type": "consumable",
                "level": 3
            },
            "Twigjack Sack (Greater)": {
                "name": "Twigjack Sack (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Twigjack Sack (Lesser)": {
                "name": "Twigjack Sack (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Twigjack Sack (Major)": {
                "name": "Twigjack Sack (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Twigjack Sack (Moderate)": {
                "name": "Twigjack Sack (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Tyrant Ampoule": {
                "name": "Tyrant Ampoule",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Undead Detection Dye": {
                "name": "Undead Detection Dye",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "potion",
                "type": "consumable",
                "level": 4
            },
            "Unending Itch": {
                "name": "Unending Itch",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 14
            },
            "Vaccine (Greater)": {
                "name": "Vaccine (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Vaccine (Lesser)": {
                "name": "Vaccine (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Vaccine (Major)": {
                "name": "Vaccine (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 18
            },
            "Vaccine (Minor)": {
                "name": "Vaccine (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "Vaccine (Moderate)": {
                "name": "Vaccine (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Vat-Grown Brain": {
                "name": "Vat-Grown Brain",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 10
            },
            "Vermin Repellent Agent (Greater)": {
                "name": "Vermin Repellent Agent (Greater)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 12
            },
            "Vermin Repellent Agent (Lesser)": {
                "name": "Vermin Repellent Agent (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Vermin Repellent Agent (Major)": {
                "name": "Vermin Repellent Agent (Major)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 16
            },
            "Vermin Repellent Agent (Moderate)": {
                "name": "Vermin Repellent Agent (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Versatile Vial (Lesser)": {
                "name": "Versatile Vial (Lesser)",
                "traits": [
                    "acid",
                    "alchemical",
                    "bomb",
                    "consumable",
                    "infused",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Vestige Lenses": {
                "name": "Vestige Lenses",
                "traits": [
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 3
            },
            "Vexing Vapor (Greater)": {
                "name": "Vexing Vapor (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "inhaled",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Vexing Vapor (Lesser)": {
                "name": "Vexing Vapor (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "inhaled",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Vexing Vapor (Major)": {
                "name": "Vexing Vapor (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "inhaled",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Vexing Vapor (Moderate)": {
                "name": "Vexing Vapor (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "inhaled",
                    "mental",
                    "poison",
                    "splash"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Violet Venom": {
                "name": "Violet Venom",
                "traits": [
                    "alchemical",
                    "consumable",
                    "contact",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 3
            },
            "Viperous Elixir (Greater)": {
                "name": "Viperous Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "morph",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Viperous Elixir (Lesser)": {
                "name": "Viperous Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "morph",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 5
            },
            "Viperous Elixir (Moderate)": {
                "name": "Viperous Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "morph",
                    "poison"
                ],
                "category": "other",
                "type": "consumable",
                "level": 8
            },
            "Vyre's Bliss": {
                "name": "Vyre's Bliss",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison",
                    "virulent"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 20
            },
            "War Blood Mutagen (Greater)": {
                "name": "War Blood Mutagen (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 11
            },
            "War Blood Mutagen (Lesser)": {
                "name": "War Blood Mutagen (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 1
            },
            "War Blood Mutagen (Major)": {
                "name": "War Blood Mutagen (Major)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 17
            },
            "War Blood Mutagen (Moderate)": {
                "name": "War Blood Mutagen (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir",
                    "mutagen",
                    "polymorph"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 3
            },
            "Warding Punch": {
                "name": "Warding Punch",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 7
            },
            "Warpwobble Poison": {
                "name": "Warpwobble Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "mental",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 8
            },
            "Wasul Reed Mask": {
                "name": "Wasul Reed Mask",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "toolkit",
                "type": "consumable",
                "level": 2
            },
            "Water Bomb (Greater)": {
                "name": "Water Bomb (Greater)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "nonlethal",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 11
            },
            "Water Bomb (Lesser)": {
                "name": "Water Bomb (Lesser)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "nonlethal",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 1
            },
            "Water Bomb (Major)": {
                "name": "Water Bomb (Major)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "nonlethal",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 17
            },
            "Water Bomb (Moderate)": {
                "name": "Water Bomb (Moderate)",
                "traits": [
                    "alchemical",
                    "bomb",
                    "consumable",
                    "nonlethal",
                    "splash",
                    "water"
                ],
                "category": "martial",
                "type": "weapon",
                "level": 3
            },
            "Weapon Siphon": {
                "name": "Weapon Siphon",
                "traits": [
                    "adjustment",
                    "alchemical"
                ],
                "category": null,
                "type": "equipment",
                "level": 1
            },
            "Weeping Midnight": {
                "name": "Weeping Midnight",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 16
            },
            "Whirlwind Vial": {
                "name": "Whirlwind Vial",
                "traits": [
                    "air",
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 11
            },
            "Winterstep Elixir (Greater)": {
                "name": "Winterstep Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 14
            },
            "Winterstep Elixir (Lesser)": {
                "name": "Winterstep Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 6
            },
            "Winterstep Elixir (Minor)": {
                "name": "Winterstep Elixir (Minor)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 2
            },
            "Winterstep Elixir (Moderate)": {
                "name": "Winterstep Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 10
            },
            "Witch's Finger": {
                "name": "Witch's Finger",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 3
            },
            "Witchwarg Elixir (Greater)": {
                "name": "Witchwarg Elixir (Greater)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 16
            },
            "Witchwarg Elixir (Lesser)": {
                "name": "Witchwarg Elixir (Lesser)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 4
            },
            "Witchwarg Elixir (Moderate)": {
                "name": "Witchwarg Elixir (Moderate)",
                "traits": [
                    "alchemical",
                    "consumable",
                    "elixir"
                ],
                "category": "elixir",
                "type": "consumable",
                "level": 12
            },
            "Wolfsbane": {
                "name": "Wolfsbane",
                "traits": [
                    "alchemical",
                    "consumable",
                    "ingested",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 10
            },
            "Worm Vial": {
                "name": "Worm Vial",
                "traits": [
                    "alchemical",
                    "consumable",
                    "expandable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 13
            },
            "Wyvern Poison": {
                "name": "Wyvern Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "injury",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 8
            },
            "Yarrow-Root Bandage": {
                "name": "Yarrow-Root Bandage",
                "traits": [
                    "alchemical",
                    "consumable"
                ],
                "category": "other",
                "type": "consumable",
                "level": 4
            },
            "Yellow Musk Poison": {
                "name": "Yellow Musk Poison",
                "traits": [
                    "alchemical",
                    "consumable",
                    "inhaled",
                    "mental",
                    "poison"
                ],
                "category": "poison",
                "type": "consumable",
                "level": 2
            },
            "Zerk": {
                "name": "Zerk",
                "traits": [
                    "alchemical",
                    "consumable",
                    "drug",
                    "injury",
                    "poison"
                ],
                "category": "drug",
                "type": "consumable",
                "level": 4
            }
        }
    ];

console.log('Equipment Arrayed');

function groupByLevel(arr) {
    console.log('Grouped by Level');
    return arr.reduce((accumulator, item) => { // Cycle through items.
        const level = item.value.level; // Grab level from array within value key of object item.
        if (!accumulator[level]) {
            accumulator[level] = [];
        }
        accumulator[level].push(item); // Push entire item into accumulator object's key as defined by level.
        return accumulator;
    }, {});
}

function arrangeFormula() {
    console.log('Arranging Formulae');
    const gridContainer = document.querySelector('div.grid-container.layout-tabbed-line');
    const gridItems = Array.from(gridContainer.children[0].children);
    var levelGroup = null;
    let gridParent = gridContainer.parentNode;
    gridContainer.remove();

    const sortableFormulas = gridItems.map(item => {
        const titleElement = item.querySelector('.listview-title');
        const title = titleElement ? titleElement.textContent.trim() : '';
        const value = equipmentArray[0][title] !== undefined ? equipmentArray[0][title] : Infinity;
        return { item, title, value };
    });

    const formulasByLevel = groupByLevel(sortableFormulas);

    Object.keys(formulasByLevel).slice().reverse().forEach(function (level, l) {
        let divId = 'level-'+level+'-formulas';
        gridParent.appendChild(document.createElement('div')).id = divId;
        levelGroup = document.getElementById(divId);
        levelGroup.classList.add('grid-container', 'layout-tabbed-line');
        ['leftCol-','rightCol-'].forEach((e) => {levelGroup.appendChild(document.createElement('div')).id = e+divId});
        let leftCol = document.getElementById('leftCol-'+divId);
        let rightCol = document.getElementById('rightCol-'+divId);
        [leftCol,rightCol].forEach((e) => e.classList.add('grid-item'));
        formulasByLevel[level].forEach(function (formula, i) {
            if (i % 2 === 0) {
                leftCol.appendChild(formula.item);
            } else {
                rightCol.appendChild(formula.item);
            }
        });
    });
}

(function() {
    'use strict';
    const container = document.getElementById('main-container');
    const observer = new MutationObserver((mutations) => {
        console.log('Mutations: ', mutations);
        mutations.forEach((mutation) => {
            console.log('forEach mutation:', mutation);
            mutation.addedNodes.forEach((node) => {
                console.log('forEach node:', node);
                if (node.tagName === 'DIV' && node.innerText.startsWith('Alchemist Formula')) {
                    arrangeFormula();
                    console.log('Arranged Formulae');
                }
            });
        });
    });
    observer.observe(container, { childList: true, subtree: true });
})();

console.log('Script complete');