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
        data.config = CONFIG.cogentXrosba;
        data.vocation = data.items.filter((item) => {
            return item.type == "vocation";
        })
        // console.log("cxr | vocations: " + JSON.stringify(data.vocation));
        // console.log("cxr | " + JSON.stringify(data));
        console.log("cxr | what you want to know: " + JSON.stringify(data))
        return data;
    }
}