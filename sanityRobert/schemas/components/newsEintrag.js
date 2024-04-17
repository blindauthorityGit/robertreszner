export default {
    name: "newsEintrag",
    type: "document",
    title: "News Eintrag",
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Beschreibung",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
