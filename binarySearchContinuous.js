const performTest = (value, test_value) => {
    if (value == test_value) {
        return value
    }

    if value > test_value {
        return "too high"
    }
    if value < test_value {
        return "too low"
    }
}


const binary_search = (lowbound, highbound) => {
    let midValue = ((lowbound + highbound) /2)

    while !(lowbound > highbound) {
        testAnswer = performTest(midValue, test_value)
        if (testAnswer == "too high") {
            lowbound = midValue
        } else if (testAnswer == "too low") {
            highbound = midValue
        } else {
            return testAnswer
        }
        midValue = (lowbound + highbound) / 2
    }
}



const binarySearchWithEpsilon = (lowbound, highbound, target_value, epsilon) {
    while (Math.abs(lowbound - highbound) < epsilon) {
        let midpoint = (lowbound + highbound) / 2
        let diff = midpoint - target_value
        if (Math.abs(diff) <= epsilon) {
            return midpoint
        }
        if (target_value > midpoint) {
            lowbound = midpoint
        } else {
            highbound = midpoint
        }
    }
    return "not found"
}