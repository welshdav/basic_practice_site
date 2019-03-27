#include <iostream>
#include <cmath>

int main() {
  double a, b, c; 
  double root1, root2; 
  
  std:: cout << "Enter a: "; 
  std:: cin >> a; 
  std:: cout << "Enter b: "; 
  std:: cin >> b; 
  std:: cout << "Enter c: "; 
  std:: cin >> c; 
  
  std:: cout << "This is the value of a" << a << "This is the value of b" << b << "This is the value of c" << c << ".\n"; 
  
  root1 = (-b + sqrt(b*b - 4*a*c))/(2*a); 
  root2 = (-b + sqrt(b*b - 4*a*c))/(2*a); 
  
  std:: cout << "Value of root1: " << root1 << ".\n"; 
  std:: cout << "Value of root2: " << root2 << ".\n"; 
}
