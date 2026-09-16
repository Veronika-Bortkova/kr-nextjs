import * as Joi from "joi";

const searchValidator = Joi.object({

    search: Joi.string().trim().min(2).max(100)
        .messages({

            "string.min": "Enter at least 2 characters to start searching",
            "string.max": "The title is too long",
            "string.empty": "Enter at least 2 characters to start searching",
            "any.required": "Enter at least 2 characters to start searching"
        })
})
export default searchValidator;