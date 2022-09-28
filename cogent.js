import { cogentXrosba } from "./module/config.js";
import CogentItemSheet from "./module/sheet/CogentItemSheet.js"

Hooks.once("init", () => {
    console.log("cxr | Initialising cogentXrosba system")

    CONFIG.cogentXrosba = cogentXrosba;

    Items.unregisterSheet("core", ItemSheet); // so that user can select default item sheet
    Items.registerSheet("cogentXrosba", CogentItemSheet, {makeDefault: true});
});