export default function calorienCalculation(data){
    let bmr;
    let bmrMan = 66.473 + (13.7516 * data.kilograms) + (5.0033 * data.hight) - (6.7550 * data.age);
    let bmrWomen = 655.095 + (9.5634 * data.kilograms) + (1.8496 * data.hight) - (4.330 * data.age);

    bmr = data.man ? bmrMan : bmrWomen;

    switch(data.activeness){
        case 'Basal Metabolic Rate': 
            return bmr;
        case 'Little or no physical activity':
            bmr*=1.2;
            break 
        case 'Light exercise (1-3 days a week)':
            bmr *= 1.375;
            break;
        case 'Moderate exercise (3-5 days a week)':
            bmr *= 1.55;
            break;
        case 'Heavy exercise (6-7 days a week)':
            bmr *= 1.725
            break;
        case 'Very heavy exercise (twice a day)':
            bmr *= 1.9
            break;
    }

    let proteins = Math.round((bmr * 0.35) / 4);
    let fat =  Math.round((bmr * 0.25) / 4);
    let carbs =  Math.round((bmr * 0.40) / 9);
    
    const result = {
        'totalCalorien': Math.round(bmr),
        'proteins': proteins,
        'fat': fat,
        'carbs': carbs
    }
    console.log(result)
    return result
}