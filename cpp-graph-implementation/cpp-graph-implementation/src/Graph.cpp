#include "Graph.h"
#include "Vertex.h"


Vertex Graph::getVertexbyID(int vid) {

	Vertex temp;
	for (int i = 0; i < vertices.size(); i++) {
		temp = vertices.at(i);

		if (temp.getPlaceId() == vid) {
			return temp;
		}
	}
	return temp;
}


void Graph::printGraph()
{
	for (int i = 0; i < vertices.size(); i++) {
		Vertex temp;
		temp = vertices.at(i);
		std::cout << temp.getPlaceName() << " (" << temp.getPlaceId() << ")==> ";
		 temp.printEdgeList();
	}
}

void Graph::addVertex(Vertex newVertex)
{
	bool check = checkIfVertexExistById(newVertex.getPlaceId()); 
	if (check == true) {
		std::cout << "vertex with this id alreay exist" << std::endl;
	}
	else {
		vertices.push_back(newVertex);
		std::cout << "new vertex added successfully" << std::endl;
	}

}

bool Graph::checkIfVertexExistById(int vid)
{
	for (int i = 0; i < vertices.size(); i++) {
		if (vertices.at(i).getPlaceId() == vid) {
			return true;
		} 
	}
	return false;
}

void Graph::addEdgeById(int fromVertex, int toVertex, int weight)
{
	bool check1 = checkIfVertexExistById(fromVertex);
	bool check2 = checkIfVertexExistById(toVertex);

	if ((check1 && check2) == true) {
		bool check3 = checkIfEdgeExistByID(fromVertex, toVertex);
		if (check3 == true) 
		{
			std::cout << "Edge between" << getVertexbyID(fromVertex).getPlaceName() <<
				"(" << fromVertex << ") and " << getVertexbyID(toVertex).getPlaceName() <<
				"(" << toVertex << ") Already exist!" << std::endl;
		}
		else {
			for (int i = 0; i < vertices.size(); i++) {
				if (vertices.at(i).getPlaceId() == fromVertex) {
					Edge e(toVertex, weight);
					vertices.at(i).edgeList.push_back(e);
				}
				else if (vertices.at(i).getPlaceId() == toVertex) {
					Edge e(fromVertex, weight);
					vertices.at(i).edgeList.push_back(e);
				}
			}
			std::cout << "Edge between" << fromVertex << " and " << toVertex << "added successfully" << std::endl;
		}
	}
	else {
		std::cout << "envalid vertex id entered" << std::endl;
	}
}


bool Graph::checkIfEdgeExistByID(int fromVertex, int toVertex)
{
	Vertex v = getVertexbyID(fromVertex);
	std::list <Edge> e;

	e = v.getEdgeList();

	for (auto it = e.begin(); it != e.end(); it++) {
		if (it->getDestinationVertexID() == toVertex) {
			return true;
			break;
		}
	}
	return false;
}
