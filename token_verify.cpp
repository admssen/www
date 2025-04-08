#include <iostream>
#include <string>
#include <fstream>

int main(int argc, char **argv) {
    std::string prefix = "/var/www/filesystem/";
    std::string token = argv[1];
    std::string target = argv[2];
    std::string action = argv[3];
    std::string itype = argv[4];
    std::string targetpath
    std::string tokenpath = "/var/www/tokens/"+token;
    if (itype=="manuitem") {
        targetpath = prefix+"/.access/"+action+"/"+target;
    } else {
        targetpath = prefix+"/"+target+"/.access/directory";
    }
    std::cout<<targetpath;
    std::ifstream access_rules;
    access_rules.open(targetpath);
    std::ifstream auth_token;
    auth_token.open(tokenpath);
    std::string readrule;
    std::string compareto;
    char result='0';
    while (access_rules>>readrule){
        while (auth_token>>compareto){
            //std::cout<<readrule<<" "<<compareto<<"\n";
            if (compareto.find(readrule) != std::string::npos){
                result='1';
            }
        }
    }
    access_rules.close();
    auth_token.close();
    std::cout<<result<<"\n";
    return 0;
}
