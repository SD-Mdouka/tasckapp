import { z } from "zod";

// create Article Schema
export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'title is required',
        invalid_type_error: 'title should be of type string'
    }).min(2, "title must be more then 2 characters").max(200, "title must be more then 200 characters"),
    description:z.string({
        required_error: 'description is required',
        invalid_type_error: 'description should be of type string'
    }).min(4, "description must be more then 4 characters"),
});