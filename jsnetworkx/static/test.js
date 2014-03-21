/**
 * Created by pzc on 14-3-18.
 */
(function() {
    var G = new jsnx.Graph(); // or just jsnx.Graph();
    G.add_node(1);
    G.add_nodes_from([2,3]);
    G.add_edge(1,3);
}());