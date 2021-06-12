export default {
    name:"factory",
    title:"Factory",
    type: "document",
    fields: [
        {
            name: "name",
            title: "factory's name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "bio",
            title: "bio",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Nomral", value: "normal" }],
                }
            ]
        }
    ]
}