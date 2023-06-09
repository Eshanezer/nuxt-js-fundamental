export default defineEventHandler(async(event)=>{

    // //query params
    // const {name} = getQuery(event);

    // //post data
    // const {age} = await readBody(event);


    // with private key
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=k9VKS4u7LELPTeJmeABuQ23aYjK2GAcstWFLmY6t')

    return data;

});