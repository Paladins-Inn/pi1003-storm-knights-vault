export function registerPI1003Settings() {

    game.settings.register("pi1003-storm-knights-vault", "welcomeMessage", {
        name: game.i18n.localize("PI1003.Settings.welcomeMessage.Name"),
        hint: game.i18n.localize("PI1003.Settings.welcomeMessage.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

}