// export const CategorizeIngredients=(ingredientsItems)=>{
//     return ingredientsItems.reduce((acc,ingredient) =>{

//         const {ingredientsCategory} = ingredient;

//         if(!acc[ingredientsCategory.name]){
//             acc[ingredientsCategory.name] = [];
//         }
//         acc[ingredientsCategory.name].push(ingredient);
//         return acc;
//     },{})
// };

export const categorizeIngredients=(ingredientsItems)=>{
    console.log("Categorize Ingredient iTems",ingredientsItems);
    return ingredientsItems.reduce((acc,ingredientItem)=>{
        const {ingredientsCategory} = ingredientItem;
        if(!acc[ingredientsCategory.name]){
            acc[ingredientsCategory.name] = [];
        }
        acc[ingredientsCategory.name].push(ingredientItem);
        return acc;
    },{})
}