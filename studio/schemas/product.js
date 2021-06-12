export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
        },
        {
            name: "factory",
            title: "Factory",
            type: "reference",
            to: {
                type: "factory",
            }
        },
        {
            name: "productImage",
            title: "ProductImage",
            type: "image",
            options: {
                hotspot: true
            }

        },
        {
            name:"price",
            title:"Price",
            type: "number"
        },
        {
            name: "ingredient",
            title: "Ingredient",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "ingredient",
                            title: "Ingredient",
                            type: "reference",
                            to: [{
                                type: "ingredient",
                            }]
                        },
                        {
                            name: "volume",
                            title: "Volume",
                            type: "number",
                        },
                        {
                            name: "alcoholPercentage",
                            title: "AlcoholPercentage",
                            type: "number",

                        },

                    ],
                    preview: {
                        select: {
                            title: "ingredient.name",
                            name: "ingredient.name",
                            media: "ingredient.image",
                            volume: "volume",
                            alcoholPercentage: "AlcoholPercentage",
                        },
                        prepare({
                            title,
                            media,
                            volume = "(no volume number)",
                            alcoholPercentage = "(no alochol included)",
                        }) {
                            return {
                                title,
                                media,

                            }
                        }
                    }
                }
            ]
        },
        {
            name: "instruction",
            title: "Instruction",
            type: "array",
            of: [{ type: "block" }]

        },
    ],
}