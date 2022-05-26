#include "Vertex.h"


	Vertex::Vertex() {
		place_id = -1;
		place_name = "";
	}

	Vertex::Vertex(int id, std::string pname) {
		place_id = id;
		place_name = pname;
	}

	// member function;

	int Vertex::getPlaceId() {
		return this->place_id;
	}

	std::string Vertex::getPlaceName() {
		return this->place_name;
	}

	std::list<Edge> Vertex::getEdgeList() {
		return this->edgeList;
	}

	void Vertex::setPlaceId(int id_) {
		place_id = id_;
	}

	void Vertex::setPlaceName(std::string name_) {
		place_name = name_;
	}

	void Vertex::printEdgeList() {
		std::cout << "[";
		for (auto it = edgeList.begin(); it != edgeList.end(); it++) {
			std::cout << it->getDestinationVertexID() << "(" << it->getWeight() << ") --> ";
		}
		std::cout << "]";
		std::cout << std::endl;
	}

