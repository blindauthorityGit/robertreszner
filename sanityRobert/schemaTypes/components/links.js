export default {
    name: "links",
    type: "document",
    title: "Links",
    fields: [
        // {
        //     title: "Titel",
        //     name: "title",
        //     type: "string",
        // },
        {
            title: "Beschreibung",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
