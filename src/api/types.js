//For the future development TypeScript Interfaces could be used

const Image = `{
    default,
    vt,
    hz
}`
const Nutrition = `{
    default,
    vt,
    hz
}`

const Recipe = `{
    images ${Image},
    title,
    description,
    servings {
        default,
        allowed
    }
}`

export const MealPlan = `{
    id,
    title,
    description,
    slug,
    schedule{
        name,
        breakfast{
            recipesDetails ${Recipe},
        },
        lunch{
            recipesDetails ${Recipe},
        },
        dinner{
            recipesDetails ${Recipe},
        },
    }
}`