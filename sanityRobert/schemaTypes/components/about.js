export default {
    name: "about",
    type: "document",
    title: "About",
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
