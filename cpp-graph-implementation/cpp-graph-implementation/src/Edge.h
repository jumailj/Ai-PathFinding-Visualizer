#pragma once

class Edge {
public:
	int DestinationVertexID;
	int weight;

	Edge();
	Edge(int destVID, int w);

	// memeber funcitons:
	void setEdgeValues(int destVID, int w);
	int getDestinationVertexID();
	int getWeight();
};
