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
            S.listItem().title("About").child(S.document().schemaType("about").documentId("about")),
            S.listItem().title("Kontakt").child(S.document().schemaType("kontakt").documentId("kontakt")),
            S.listItem().title("Links").child(S.document().schemaType("links").documentId("links")),

            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(
                (listItem) => !["home", "about", "kontakt", "links"].includes(listItem.getId())
            ),
        ]);
