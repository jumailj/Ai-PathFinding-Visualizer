#pragma once

#include <iostream>
#include <list>
#include "Edge.h"

class Vertex {

public:
	int place_id;
	std::string place_name;
	std::list<Edge>edgeList;

	Vertex();
	Vertex(int id, std::string pname);

	// member function;
	int getPlaceId();
	std::string getPlaceName();
	std::list<Edge> getEdgeList();

	void setPlaceId(int id_);
	void setPlaceName(std::string name_);
	void printEdgeList();
};