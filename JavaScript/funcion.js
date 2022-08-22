const qualifications = [4,8,5,10,11,8,4,5,9,12]

let pass = 0
let failed = 0
let exceedsExpectations = 0
let counter = 0

while(counter < qualifications.length){
    if(qualyExceedExpectations(counter)){
        exceedsExpectations++
    }
    else if(qualyIsEnough(counter)){
        pass++
    }
    else{
        failed++
    }
    counter++
}

console.log(exceedsExpectations)
console.log(pass)
console.log(failed)

function qualyIsEnough() {
    return qualifications[counter] >= 6
}

function qualyExceedExpectations() {
    return qualifications[counter] >= 10
}
