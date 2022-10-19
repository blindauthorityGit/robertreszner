// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title("Bereiche")
        .items([
            S.listItem().title("Startseite").child(S.document().schemaType("home").documentId("home")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),
            S.divider(),

            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter((listItem) => !["home"].includes(listItem.getId())),
        ]);
