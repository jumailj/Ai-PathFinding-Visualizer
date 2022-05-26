#include "Edge.h"

	Edge::Edge() {
		DestinationVertexID = -1;
		weight = -1;
	}

	Edge::Edge(int destVID, int w)
		:DestinationVertexID{ destVID }, weight{ w }
	{

	}

	// memeber funcitons:
	void Edge::setEdgeValues(int destVID, int w)
	{
		DestinationVertexID = destVID;
		weight = w;
	}

	int Edge::getDestinationVertexID()
	{
		return this->DestinationVertexID;
	}

	int Edge::getWeight() {
		return this->weight;
	}