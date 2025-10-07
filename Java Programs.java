//1. Hello World – Understanding main method and output
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}


//Concept: main method, System.out.println

//2. Variables and Data Types

public class VariablesExample {
    public static void main(String[] args) {
        int age = 20;
        double price = 99.99;
        char grade = 'A';
        String name = "Keerthi";
        boolean isJavaFun = true;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
        System.out.println("Grade: " + grade);
        System.out.println("Java is fun: " + isJavaFun);
    }
}


//Concept: Declaring and using variables.

//3. Taking User Input
import java.util.Scanner;

public class UserInputExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        System.out.println("Hello " + name + ", you are " + age + " years old.");
    }
}


//Concept: Scanner for input.

//4. Arithmetic Operators
public class ArithmeticExample {
    public static void main(String[] args) {
        int a = 10, b = 3;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
    }
}


//Concept: +, -, *, /, %

//5. Relational and Logical Operators
public class OperatorsExample {
    public static void main(String[] args) {
        int x = 5, y = 10;

        System.out.println(x > y);  // false
        System.out.println(x < y);  // true
        System.out.println(x == y); // false

        boolean a = true, b = false;
        System.out.println(a && b); // false
        System.out.println(a || b); // true
        System.out.println(!a);     // false
    }
}


//Concept: Comparison and logic.

//6. If Statement
import java.util.Scanner;

public class IfExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if (num > 0) {
            System.out.println("Positive number");
        }
    }
}


//Concept: Simple if.

//7. If-Else Statement
import java.util.Scanner;

public class IfElseExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if (num % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}


//Concept: if-else

//8. Else-If Ladder
import java.util.Scanner;

public class ElseIfExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();

        if (marks >= 90) {
            System.out.println("Grade A");
        } else if (marks >= 75) {
            System.out.println("Grade B");
        } else if (marks >= 50) {
            System.out.println("Grade C");
        } else {
            System.out.println("Fail");
        }
    }
}


//Concept: else-if chain.

//9. Nested If
import java.util.Scanner;

public class NestedIfExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter username: ");
        String user = sc.nextLine();
        System.out.print("Enter password: ");
        String pass = sc.nextLine();

        if (user.equals("admin")) {
            if (pass.equals("1234")) {
                System.out.println("Login successful");
            } else {
                System.out.println("Incorrect password");
            }
        } else {
            System.out.println("User not found");
        }
    }
}


//Concept: if inside if.

//10. For Loop
public class ForLoopExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}


//Concept: Looping.

//11. While Loop
public class WhileLoopExample {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println("Count: " + i);
            i++;
        }
    }
}


//Concept: Loop with condition checked first.


