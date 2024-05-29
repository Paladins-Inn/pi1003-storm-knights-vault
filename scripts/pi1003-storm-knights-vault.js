import { registerPI1003Settings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing A Storm Knights Vault Module");

    //-----system settings
    registerPI1003Settings()

})
Hooks.on("ready", async function() {
    //----rendering welcome message

    let welcomeMessage = await renderTemplate("modules/pi1003-storm-knights-vault/templates/welcomeMessage.hbs");

    if (game.settings.get("pi1003-storm-knights-vault", "welcomeMessage")) {
        let d = new Dialog({
            title: game.i18n.localize("PI1003.Title"),
            content: welcomeMessage,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: game.i18n.localize("PI1003.Init.Button.OK"),
                },
                two: {
                    icon: '<i class="fas fa-ban"></i>',
                    label: game.i18n.localize("PI1003.Init.Button.DontShowAgain"),
                    callback: () =>
                        game.settings.set("pi1003-storm-knights-vault", "welcomeMessage", false),
                },
            },
        }, {
            left: 100,
            top: 100,
            height: 425,
            width: 450,
            resizable: false
        });
        d.render(true);
    }


})