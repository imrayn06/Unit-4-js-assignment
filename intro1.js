<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // Task: Write a function calculateArea that takes the length and width of a rectangle as parameters and returns its area.
        function calculateArea(length, width) {
            return length * width;
        }

        // Example Invocation:
        console.log(calculateArea(5, 4)); // Expected Output: 20


        // Task: Create a function checkValue that takes a parameter and checks if it's null, undefined, or a valid value. Return appropriate messages for each case.

        function checkValue(value) {
            if (value === null) {
                return "Value is null.";
            } else if (value === undefined) {
                return "Value is undefined.";
            } else {
                return "Value is valid.";
            }
        }

        // Example Invocation:
        console.log(checkValue(null)); // Expected Output: Value is null.
        console.log(checkValue(undefined)); // Expected Output: Value is undefined.
        console.log(checkValue(42)); // Expected Output: Value is valid.

        // Task: Write a function generateEmail that takes a name and domain as parameters and generates an email address using template literals.

        function generateEmail(name, domain) {
            // Convert name to lowercase and replace spaces with dots
            let emailName = name.toLowerCase().replace(/ /g, '.');
            return ${emailName}@${domain};
        }

        // Example Invocation:
        console.log(generateEmail("John Doe", "example.com")); // Expected Output: john.doe@example.com

        // Task: Write a function checkType that takes a parameter and checks its type, including array, object, null, and undefined. Print the type accordingly.

        function checkType(value) {
            if (value === null) {
                return "Type: Null";
            } else if (Array.isArray(value)) {
                return "Type: Array";
            } else if (typeof value === 'object') {
                return "Type: Object";
            } else if (typeof value === 'undefined') {
                return "Type: Undefined";
            } else {
                return Type: ${typeof value};
            }
        }

        // Example Invocation:
        console.log(checkType([1, 2, 3])); // Expected Output: Type: Array
        console.log(checkType(null)); // Expected Output: Type: Null
        console.log(checkType({})); // Expected Output: Type: Object
        console.log(checkType(undefined)); // Expected Output: Type: Undefined
        console.log(checkType(42)); // Expected Output: Type: number
        console.log(checkType("Hello")); // Expected Output: Type: string


        // Task: Implement a function composeMessage that takes multiple parameters and uses template literals to compose a message with different expressions.

        function composeMessage(name, age, city) {
            return Hello ${name}, you are ${age} years old and live in ${city}.;
        }

        // Example Invocation:
        console.log(composeMessage("John", 25, "New York")); // Expected Output: Hello John, you are 25 years old and live in New York.

    </script>
</body>

</html>
