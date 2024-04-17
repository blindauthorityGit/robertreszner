export default {
    name: "images",
    type: "object",
    title: "Images",
    initialValue: {
        big: true,
    },
    fields: [
        {
            name: "image",
            title: "Bild",
            type: "image",
            fields: [
                {
                    title: "Alt Text",
                    name: "alt",
                    type: "string",
                },
                {
                    title: "Caption",
                    name: "caption",
                    type: "string",
                },
                {
                    title: "Top Caption",
                    name: "topCaption",
                    type: "string",
                },
                {
                    name: "big",
                    title: "Big?",
                    type: "boolean",
                },
            ],
        },
    ],
};
