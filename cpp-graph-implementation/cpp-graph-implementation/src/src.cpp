#include <iostream>
#include "Graph.h"

int main(int argc,char *argv[]) {
	int option = -1;

	int id;
	int id1, id2, weight;
	Graph g;
	std::string pname;
	Vertex v1;

	do {
		std::cout << "operform operation: " << std::endl;
		std::cout << "1. add vertex" << std::endl;
		std::cout << "2. update vertex" << std::endl;
		std::cout << "3. Delete vertex" << std::endl;
		std::cout << "4. Add Edge" << std::endl;
		std::cout << "5. update Edge" << std::endl;
		std::cout << "6. Delete Edge" << std::endl;
		std::cout << "7. check if 2 verteices are neigbors" << std::endl;
		std::cout << "8. Print all neigbors of a vertex" << std::endl;
		std::cout << "9. print graph" << std::endl;
		std::cout << "10. clear scrren" << std::endl;
		std::cout << "0. exit program" << std::endl;

		std::cin >> option;

		switch (option) {
		case 1:
			 // add vertex;
			std::cout << "Add Vertex operation" << std::endl;
			std::cout << "enter id: ";
			std::cin >> id;
			std::cout << "enter pname:";
			std::cin >> pname;

			v1.setPlaceId(id);
			v1.setPlaceName(pname);
			g.addVertex(v1);	

			break;
		case 2:
			std::cout << "Update vertex operation" << std::endl;
			break;
		case 3:
			std::cout << "Delete vertex operation" << std::endl;
			break;
		case 4:
			std::cout << "Add edge operation" << std::endl;

			std::cout << "enter ID of source Vertex:";
			std::cin >> id1;
			std::cout << "enter id of destination vertex: ";
			std::cin >> id2;
			std::cout << "enter weight of edge: ";
			std::cin >> weight;

			g.addEdgeById(id1, id2, weight);

			break;
		case 5:
			std::cout << "update Edge" << std::endl;
			break;
		case 6:
			std::cout << "Delete Edge" << std::endl;
			break;
		case 7:
			std::cout << "check if 2 verteices are neigbors" << std::endl;
			break;
		case 8:
			std::cout << "Print all neigbors of a vertex" << std::endl;
			break;
		case 9:
			std::cout << "print graph" << std::endl;
			g.printGraph();
			break;
		case 10:
			std::cout << "clear screen" << std::endl;
			break;
		case 0:
			std::cout << "exit program" << std::endl;
			break;
		default:std::cout << "unknow number" << std::endl;
			break;
		}


	} while (option != 0);





	return 0;
}