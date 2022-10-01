import { cogentXrosba } from "./module/config.js";
import CogentItemSheet from "./module/sheet/CogentItemSheet.js"
import CogentCharacterSheet from "./module/sheet/CogentCharacterSheet.js"

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/cogentXrosba/templates/partials/character-stat-block.html",
        "systems.cogentXrosba/templates/sheets/vocation-sheet.html"
    ];
    return loadTemplates(templatePaths);
}

Hooks.once("init", () => {
    console.log("cxr | Initialising cogentXrosba system");

    CONFIG.cogentXrosba = cogentXrosba;

    Items.unregisterSheet("core", ItemSheet); // so that user can select default item sheet
    Items.registerSheet("cogentXrosba", CogentItemSheet, {makeDefault: true});
    Actors.unregisterSheet("core", ActorSheet); // so that user can select default item sheet
    Actors.registerSheet("cogentXrosba", CogentCharacterSheet, {makeDefault: true});

    preloadHandlebarsTemplates();
});