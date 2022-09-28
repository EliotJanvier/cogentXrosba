export default class CogentItemSheet extends ItemSheet {
    get template() {
        console.log("cxr | got item sheet template");
        return `systems/cogentXrosba/templates/sheets/${this.item.type}-sheet.html`;
    }


    getData() {
        const data = super.getData();
        data.config = CONFIG.cogentXrosba
        // console.log(JSON.stringify(data));
        // console.log("cxr | what you want to know: " + JSON.stringify(data.document.system.pierce))
        return data;
    }
}