let n = 5;
let pattern = "";

// ==========================
// 1. Right Triangle Star Pattern
// ==========================
pattern += "Right Triangle Star Pattern\n";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 2. Inverted Right Triangle
// ==========================
pattern += "Inverted Right Triangle\n";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 3. Number Triangle
// ==========================
pattern += "Number Triangle Pattern\n";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 4. Repeating Number Pattern
// ==========================
pattern += "Repeating Number Pattern\n";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += i + " ";
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 5. Pyramid Star Pattern
// ==========================
pattern += "Pyramid Star Pattern\n";
for (let i = 1; i <= n; i++) {
    for (let space = n - i; space > 0; space--) {
        pattern += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
        pattern += "*";
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 6. Reverse Pyramid
// ==========================
pattern += "Reverse Pyramid Pattern\n";
for (let i = n; i >= 1; i--) {
    for (let space = n - i; space > 0; space--) {
        pattern += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
        pattern += "*";
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 7. Floyd’s Triangle
// ==========================
pattern += "Floyd's Triangle\n";
let num = 1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += num + " ";
        num++;
    }
    pattern += "\n";
}
pattern += "\n";

// ==========================
// 8. Diamond Pattern
// ==========================
pattern += "Diamond Pattern\n";

// Upper part
for (let i = 1; i <= n; i++) {
    for (let space = n - i; space > 0; space--) {
        pattern += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
        pattern += "*";
    }
    pattern += "\n";
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
    for (let space = n - i; space > 0; space--) {
        pattern += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
        pattern += "*";
    }
    pattern += "\n";
}

// Print all patterns
console.log(pattern);
