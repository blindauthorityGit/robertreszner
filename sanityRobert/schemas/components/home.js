export default {
    name: "home",
    type: "document",
    title: "Start",
    fields: [
        {
            title: "SEO Settings",
            name: "seo",
            type: "document",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "text",
                },
                {
                    title: "Description",
                    name: "description",
                    type: "text",
                },
                {
                    name: "ogImg",
                    title: "Image for Social Media",
                    type: "image",
                },
            ],
        },
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            name: "mainImage",
            title: "HauptBild",
            type: "image",
            fields: [
                {
                    title: "Alt Text",
                    name: "alt",
                    type: "string",
                },
            ],
        },
        {
            title: "News",
            name: "news",
            type: "array",
            of: [
                {
                    title: "News Eintrag",
                    type: "newsEintrag",
                },
            ],
        },
    ],
};
