sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("com.project1.project1.controller.View1", {
        onInit() {
        },
        oclick: function () {
            if (!this.pDialog) {
                this.pDialog = Fragment.load({
                    name: "com.project1.project1.fragment.Open",
                    controller: this
                }).then((pDialog) => {
                    this.getView().addDependent(pDialog)
                    this.pDialog = pDialog
                    this.pDialog.open();
                })
            } else {
                this.pDialog.open();
            }
        },
        onCloseDialog: function () {
            this.pDialog.close();
        }
    });
});