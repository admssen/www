#include <iostream>
#include <string>
#include <sstream>
#include <fstream>

int main(int argc, char **argv){
  system
  std::ifstream file("subjects.txt");
  std::string foreach;
  char output = '0';
  while (std::getline(file, foreach)){
    if (argv[1]==foreach) { output = '1'; }
  }
  file.close();
  std::cout<<output<<"\n";
  return 0;
}
