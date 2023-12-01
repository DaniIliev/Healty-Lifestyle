export function valueInput(e){
    let valueInputs = ''
    switch(e.target.type){
        case 'number':
            valueInputs = Number(e.target.value);
            break;
        case 'textarea':
            valueInputs = e.target.value;
            break;
        case 'checkbox':
            valueInputs = e.target.checked;
        break;
        default:
            valueInputs = e.target.value;
            break
    }

    return valueInputs
}