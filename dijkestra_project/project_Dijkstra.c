

#include <stdio.h>
#include <limits.h>
#include <string.h>

int main() {
    int V = 10;  
    int seq = 1;
    char cities[][20] = {"Delhi", "Mumbai", "Jaipur", "Ahmedabad", 
                            "Chennai", "Bengaluru", "Hyderabad", 
                            "Kolkata", "Pune", "Lucknow"};
    int graph[10][10] = {
        {0, 1400, 280, 800, 2200, 2100, 1500, 1500, 1170, 2000},
        {1400, 0, 1150, 520, 1030, 980, 700, 2050, 150, 1180},
        {280, 1150, 0, 660, 1850, 1800, 1150, 1200, 750, 1200},
        {800, 520, 660, 0, 1720, 1490, 1000, 1600, 500, 1400},
        {2200, 1030, 1850, 1720, 0, 360, 1300, 1670, 950, 1500},
        {2100, 980, 1800, 1490, 360, 0, 570, 1540, 820, 1370},
        {1500, 700, 1150, 1000, 1300, 570, 0, 1200, 700, 1000},
        {1500, 2050, 1200, 1600, 1670, 1540, 1200, 0, 1600, 1500},
        {1170, 150, 750, 500, 950, 820, 700, 1600, 0, 1150},
        {2000, 1180, 1200, 1400, 1500, 1370, 1000, 1500, 1150, 0}
    };

    int dijcomp[10][10] = {0};
    int visited_ver[10] = {0}; // This will keep track of visited vertices

    char source_ver[20];
    char destination_ver[20];

    printf("----------------------------------------------------\n");
    printf("Welcome to the City Distance Finder Prototype\n");
    printf("----------------------------------------------------\n\n");
    printf("Available cities: NewDelhi | Mumbai | Jaipur | Ahmedabad | ");
    printf("Chennai | Bengaluru | Hyderabad | Kolkata | Pune | Lucknow\n");
    
    printf("Enter the source city: ");
    scanf("%s", source_ver);
    printf("Enter the destination city: ");
    scanf("%s", destination_ver);

    int previous[10] = {-1, -1, -1, -1, -1, -1, -1, -1, -1, -1};
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            dijcomp[i][j] = INT_MAX;
        }
    }
    // this will ind the index of the source city
    int vertex_row = 0;
    for (int i = 0; i < V; i++) {
        if (strcmp(cities[i], source_ver) == 0) {
            vertex_row = i;
            break;
        }
    }
    dijcomp[0][vertex_row] = 0; // for the source city

    for (int z = 0; z < V - 1; z++) {
        int min = INT_MAX, col = -1;

        for (int j = 0; j < V; j++) {
            if (visited_ver[j] == 0 && dijcomp[z][j] < min) {
                min = dijcomp[z][j];
                col = j;
            }
        }

        if (col == -1) {
            break; // all remaining vertices are unreachable
        }

        visited_ver[col] = seq;
        seq++;
        printf("To be visited: %s\n", cities[col]);
        
        for (int i = 0; i < V; i++) {
            if (graph[col][i] != 0 && visited_ver[i] == 0) {
                int relax = dijcomp[z][col] + graph[col][i];
                if (relax < dijcomp[z + 1][i]) {
                    dijcomp[z + 1][i] = relax;
                    previous[i] = col;
                } else {
                    dijcomp[z + 1][i] = dijcomp[z][i]; // Retain previous distance
                }
            } else {
                dijcomp[z + 1][i] = dijcomp[z][i]; 
            }
        }
    }

    // Print the dijcomp table
    printf("Distance Table:\n");
    printf("NewDelhi | Mumbai | Jaipur | Ahmedabad | Chennai | Bengaluru | Hyderabad | Kolkata | Pune | Lucknow\n");
    printf("---------------------------------------------------------------------------------\n");
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (dijcomp[i][j] == INT_MAX)
                printf("i     "); 
            else
                printf("%d  ", dijcomp[i][j]);
        }
        printf("\n");
    } 

    int dest_index = -1;
    for (int i = 0; i < V; i++) {
        if (strcmp(cities[i], destination_ver) == 0) {
            dest_index = i;
            break;
        }
    }

    if (dest_index != -1) {
        char path[V][20];
        int path_index = 0;
        for (int i = dest_index; i != -1; i = previous[i]) {
            strcpy(path[path_index++], cities[i]);
        }

        printf("Shortest path from %s to %s: ", source_ver, destination_ver);
        for (int i = path_index - 1; i >= 0; i--) {
            printf("%s", path[i]);
            if (i != 0) printf(" -> ");
        }
        printf("\n");
        printf("The distance from %s to %s is: %d km\n", source_ver, destination_ver, dijcomp[path_index-1][dest_index]);
    } else {
        printf("Destination city not found.\n");
    }

    return 0;
}
