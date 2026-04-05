//Task

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//Solution

function domainName(url){

    const arr = url.split('//')

    let domain = ''

    if (arr.length > 1) {
        if (arr[1].split('.')[0] === 'www') {
            domain = arr[1].split('.')[1]
        } else {
            domain = arr[1].split('.')[0]
        }
    } else if (arr[0].split('.')[0] !== 'www') {
        domain = arr[0].split('.')[0]
    } else {
        domain = arr[0].split('.')[1]
    }

    return domain
}