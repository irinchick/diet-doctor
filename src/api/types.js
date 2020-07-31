//For the future development TypeScript Interfaces could be used

const Image = `{
    default,
    vt,
    hz
}`

const Nutrition = `{
    values {
        carbs,
        fat,
        protein,
        fiber,
        calories
    }
}`

const Recipe = `{
    images ${Image},
    title,
    description,
    servings {
        default,
        allowed
    }
    nutrition ${Nutrition}
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