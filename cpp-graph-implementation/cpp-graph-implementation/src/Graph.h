#pragma once
#include <vector>
#include "Vertex.h"

class Graph {
public:
	std::vector <Vertex> vertices;

	void addVertex(Vertex newVertex);
	bool checkIfVertexExistById(int vid);

	void addEdgeById(int fromVertex, int toVertex, int weight);

	bool checkIfEdgeExistByID(int fromVertex, int toVertex);

	Vertex getVertexbyID(int vid);
	void printGraph();

};
