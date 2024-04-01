﻿
namespace BitPro.SchoolMate.Administration {

    @Serenity.Decorators.registerClass()
    export class SystemSettingsGrid extends Serenity.EntityGrid<SystemSettingsRow, any> {
        protected getColumnsKey() { return 'Administration.SystemSettings'; }
        protected getDialogType() { return SystemSettingsDialog; }
        protected getIdProperty() { return SystemSettingsRow.idProperty; }
        protected getInsertPermission() { return SystemSettingsRow.insertPermission; }
        protected getLocalTextPrefix() { return SystemSettingsRow.localTextPrefix; }
        protected getService() { return SystemSettingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            // here is several methods to remove add button
            // only one is enabled, others are commented

            // METHOD 1
            // we would be able to simply return an empty button list,
            // but this would also remove all other buttons
            // return [];

            // METHOD 2
            // remove by splicing (something like delete by index)
            // here we hard code add button index (not nice!)
            // buttons.splice(0, 1);

            // METHOD 3 - recommended
            // remove by splicing, but this time find button index
            // by its css class. it is the best and safer method
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}