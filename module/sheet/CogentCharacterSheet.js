export default class CogentCharacterSheet extends ActorSheet {
    // static get defaultOptions() {
    //     console.log("cxr | get default options");
    //     return mergeObject(super.defaultOptions, {
    //         template: "systems/cogentXrosba/templates/sheet/hero-sheet.html",
    //         classes: ["cogentXrosba", "sheet", "Character"]
    //     });
    // }

    get template() {
        console.log("getting actor " + this.actor.type);
        console.log("cxr | actor.data: ", + this.actor.level);
        return `systems/cogentXrosba/templates/sheets/${this.actor.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        // data.config = CONFIG.cogentXrosba;
        // data.weapons = data.items.filter((item) => {
        //     return item.type == "weapon";
        // })
        // console.log("cxr | " + JSON.stringify(data));
        console.log("cxr | what you want to know: " + JSON.stringify(data))
        return data;
    }
}